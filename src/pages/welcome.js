import React from 'react';
import MarketCarousel from '../components/MarketCarousel';
import MetaMaskLoginButton from 'react-metamask-login-button';

const Welcome = () => {
    
    return (
      <>
        <div className="welcome" id="welcome">
          <div className="container-fluid">
            <div className="row banner" style={{backgroundImage:`url('img/banner.png')`}}>
              <div className="title">
                <div>
                  <div className="main">Welcome to the Hyper Trading</div>
                  <div className="sub">High frequency, low risk trading simplified</div>
                </div>
              </div>
              <div className="register_guide">
                <MetaMaskLoginButton />
              </div>
            </div>
            <MarketCarousel />
          </div>
          <div className="container">
            <div className="row about">
              <div className="title">
                ABOUT US
              </div>
              <div className="content">
                Hyper.ai is a Crytocurrency online trading platform that allows traders to trade in a high frequency with low risk in the markets.<br/>
                By utilizing cutting-edge, crowd-sourced technology, Hyper.ai matches traders against an embedded liquidity pool or other traders on the Hyper trading platform.<br/>
                24 hour liquidity and no-fee, no-KYC(Users only need their Metamask wallet) ensures Hyper give users comfortability!
              </div>
            </div>
            <div className="row faq">
              <div className="title">
                FAQ
              </div>
              <div className="content">
                <div className="sub_content">
                  <div className="question">
                    WHAT IS HYPER?
                  </div>
                  <div className="answer">
                    HYPER is a website that allows you to trade on the direction of cryptocurrencies for financial gain. Uniquely, it offers the ability for traders to earn up to 100% of returns (average 73%) ROI on just 1 trade within minutes (and even seconds). Unlike traditional brokerages, it sits on top of our global auditing technology meaning that it provides unparalleled transparency * . Traders may choose the off-site trading account option and deposit at HYPER to trade from users' Metamask wallets to see how things work. HYPER's liquidity pool is owned by our platform users who receive rewards based on the traded volume in HYPER, and not by a centralised management.
                  </div>
                </div>
                <div className="sub_content">
                  <div className="question">
                    WHAT IS THE BLOCKCHAIN AND HOW DOES HYPER INTERACT WITH IT?
                  </div>
                  <div className="answer">
                    The blockchain is a globally distributed ledger that uses thousands of decentralized servers around the world to audit and confirm transactions. These can be simple transfers of money or complex smart contract outcomes such as the processing of trades. It is free of human intervention and by far, the most secure way of confirming transactions today.
                    In HYPER a trader may use the blockchain either as a way to fund their centralized trading account or as a way to trade without KYC by making use of the publicly available smart contracts.
                  </div>
                </div>
                <div className="sub_content">
                  <div className="question">
                    WHAT ASSETS CAN I TRADE ON HYPER?
                  </div>
                  <div className="answer">
                    You can trade all major cryptocurrencies like BTC, ETH, BNB, ADA, DOGE and so on.
                  </div>
                </div>
                <div className="sub_content">
                  <div className="question">
                    WHAT KIND OF CRYPTO-WALLETS DO I NEED FOR HYPER TRADING?
                  </div>
                  <div className="answer">
                    You only need metamask wallet for depositing and withdrawing on Hyper.
                  </div>
                </div>
                <div className="sub_content">
                  <div className="question">
                    WHAT IS YOUR WITHDRAWAL POLICY?
                  </div>
                  <div className="answer">
                    You only need to withdraw funds from Hyper directly to the address you register. You can not change the address to withdraw your funds. It is good for your funds' security.
                  </div>
                </div>
                <div className="sub_content">
                  <div className="question">
                    HOW MUCH MONEY DO I NEED TO HAVE IN ORDER TO TRADE ON HYPER?
                  </div>
                  <div className="answer">
                    The minimum trading size is $1 and Maximum is $500. We strongly advise starting off with small amounts as financial trading is risky, despite being rewarding.
                  </div>
                </div>
                <div className="sub_content">
                  <div className="question">
                    WHAT CRYPTOCURRENCY CAN I DEPOSIT ON HYPER?
                  </div>
                  <div className="answer">
                    You can only deposit via BNB for first version of Hyper. We will later update it to deposit using other crypto currencies.
                  </div>
                </div>
                <div className="sub_content">
                  <div className="question">
                    WHAT IS THE MINIMUM WITHDRAW SIZE FROM HYPER?
                  </div>
                  <div className="answer">
                    The minimum withdraw fund is $10.
                  </div>
                </div>
              </div>
            </div>
            <div className="row contact">
              <div className="title">
                CONTACT
              </div>
              <div className="content">
                Contact us here for more information on how to get started, whether as a trader or affiliate. Please allow 24 hours for responses.<br/>
              </div>
            </div>
          </div>
        </div>
        
      </>
    );
}

export default Welcome;
