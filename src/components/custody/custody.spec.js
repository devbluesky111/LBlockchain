const { toBN } = require('web3-utils');
const { expectRevert } = require("@openzeppelin/test-helpers");
let custody;

const Custody = artifacts.require('Custody');

require("chai")
    .use(require("chai-as-promised"))
    .should();

contract('Custody', accounts => {
    const [user] = accounts;

    before(async() => {
        custody = await Custody.new();
    });
    describe('deposit and withdraw', async() => {
        it('deposit 100 BNB', async() => {
            const depositAmount = toBN('100');
            const beforeCustodyBalance = await custody.balanceOf.call();
            await custody.deposit(depositAmount, { from: user, value: depositAmount });
            const afterCustodyBalance = await custody.balanceOf.call();
            assert.equal(afterCustodyBalance.toNumber(), beforeCustodyBalance.add(depositAmount).toNumber());
        });
        it('withdraw 100 BNB', async() => {
            const withdrawAmount = toBN('100');
            const beforeCustodyBalance = await custody.balanceOf.call();
            console.log('before: ', beforeCustodyBalance);
            await custody.withdraw(withdrawAmount, { from: user });
            const afterCustodyBalance = await custody.balanceOf.call();
            assert.equal(afterCustodyBalance.add(withdrawAmount).toNumber(), beforeCustodyBalance.toNumber());
        });
        it('withdraw failed when withdraw insufficient amount.', async () => {
            const withdrawAmount = toBN('10');
            const beforeCustodyBalance = await custody.balanceOf.call();
            console.log('before: ', beforeCustodyBalance);
            await expectRevert(custody.withdraw(withdrawAmount, { from: user }), "Insufficient amount!");
        })
    });
});