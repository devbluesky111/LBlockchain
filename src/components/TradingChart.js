import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

export default function TradingChart({symbol}) {
  return (
    <>
      <div className="main-chart mb15">
        <TradingViewWidget
          symbol={symbol}
          theme={Themes.DARK}
          width="100%"
          height="800"
          locale="en"
        />
      </div>
    </>
  );
}


// import React, {Component} from 'react';
// class TradingChart extends Component {
//   constructor(props) {
//     super(props);
//     this.myRef = React.createRef();
//   }

//   componentDidMount() {
//     const script = document.createElement('script');
//     script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js'
//     script.async = false;
//     script.innerHTML = JSON.stringify({
//         "container_id": "tv-medium-widget",
//         "symbols": [
//             [
//             "Bitcoin",
//             "BITMEX:XBTUSD|1m"
//             ],
//             [
//             "Ethereum",
//             "BITMEX:ETHUSD|1m"
//             ]
//         ],
//         "greyText": "Quotes by",
//         "gridLineColor": "rgba(182, 182, 182, 0.65)",
//         "fontColor": "rgba(0, 0, 0, 1)",
//         "underLineColor": "rgba(60, 120, 216, 1)",
//         "trendLineColor": "rgba(60, 120, 216, 1)",
//         "width": "100%",
//         "height": "100%",
//         "locale": "en"
//     })
//     this.myRef.current.appendChild(script);
//   }

//   render() {
//     return(
//     <div className="tradingview-widget-container" ref={this.myRef}>
//         <div className="tradingview-widget-container__widget"></div>    
//     </div>
//     );
//   }
// }

// TradingChart.defaultProps = {
//   TradingChart: []
// }

// export default TradingChart;