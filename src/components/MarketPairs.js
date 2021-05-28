import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

export default function MarketPairs() {

  const changeContract = (e) => {
    console.log(e.target.value);
  }
  return (
    <>
      <div className="market-pairs">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              <i className="icon ion-md-search"></i>
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <Tabs defaultActiveKey="btc">
          <Tab eventKey="btc" title="BNB Contract">
            <table className="table">
              <tbody>
                <tr className="mt15" value="USDT/BNB" onClick={changeContract}>
                  <td>
                    <i className="icon ion-md-star"></i> USDT/BNB
                  </td>
                  <td>0.020255</td>
                  <td className="red">-2.58%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BTC/BNB
                  </td>
                  <td>0.00013192</td>
                  <td className="green">+5.6%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ETH/BNB
                  </td>
                  <td>0.00002996</td>
                  <td className="red">-1.55%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XRP/BNB
                  </td>
                  <td>0.00000103</td>
                  <td className="green">+1.8%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> LTC/BNB
                  </td>
                  <td>0.00000103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> DOGE/BNB
                  </td>
                  <td>0.002303</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ADA/BNB
                  </td>
                  <td>0.03520103</td>
                  <td className="green">+1.5%</td>
                </tr>
              </tbody>
            </table>
          </Tab>
          {/* <Tab eventKey="eth" title="ETH">
            <table className="table">
              <thead>
                <tr>
                  <th>Pairs</th>
                  <th>Last Price</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BTC/ETH
                  </td>
                  <td>0.00020255</td>
                  <td className="green">+1.58%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> KCS/ETH
                  </td>
                  <td>0.00013192</td>
                  <td className="red">-0.6%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XRP/ETH
                  </td>
                  <td>0.00002996</td>
                  <td className="red">-0.55%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> VET/ETH
                  </td>
                  <td>0.00000103</td>
                  <td className="green">+1.8%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> EOS/ETH
                  </td>
                  <td>0.00000103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BTT/ETH
                  </td>
                  <td>0.00002303</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> LTC/ETH
                  </td>
                  <td>0.03520103</td>
                  <td className="green">+1.5%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> TRX/ETH
                  </td>
                  <td>0.00330103</td>
                  <td className="red">-3.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BSV/ETH
                  </td>
                  <td>0.00300103</td>
                  <td className="green">+2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> COTI/ETH
                  </td>
                  <td>0.003500103</td>
                  <td className="green">+2.85%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XYT/ETH
                  </td>
                  <td>0.00003103</td>
                  <td className="green">+3.55%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BNB/ETH
                  </td>
                  <td>0.003500103</td>
                  <td className="red">-2.05%</td>
                </tr>
              </tbody>
            </table>
          </Tab> */}
        </Tabs>
      </div>
    </>
  );
}
