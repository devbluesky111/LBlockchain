import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

export default function TradingChart() {
  return (
    <>
      <div className="main-chart mb15">
        <TradingViewWidget
          symbol="BITSTAMP:BTCUSD"
          theme={Themes.DARK}
          locale="fr"
          width="100%"
          height="800px"
        />
      </div>
    </>
  );
}
