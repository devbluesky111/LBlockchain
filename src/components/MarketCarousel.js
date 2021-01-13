import React from 'react';
import Slider from 'react-slick';

export default function MarketCarousel() {
  const settings = {
    infinite: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="market-carousel">
      <Slider {...settings}>
        <div className="market-carousel-item">
          <div className="market-carousel-item-name">
            <img src={'img/icon/1.png'} alt="" />
            <strong>Ethereum</strong>
          </div>
        </div>
        <div className="market-carousel-item">
          <div className="market-carousel-item-name">
            <img src={'img/icon/16.png'} alt="" />
            <strong>MultiVAC</strong>
          </div>
        </div>
        <div className="market-carousel-item">
          <div className="market-carousel-item-name">
            <img src={'img/icon/3.png'} alt="" />
            <strong>Litecoin</strong>
          </div>
        </div>
        <div className="market-carousel-item">
          <div className="market-carousel-item-name">
            <img src={'img/icon/4.png'} alt="" />
            <strong>KuCoin Token</strong>
          </div>
        </div>
        <div className="market-carousel-item">
          <div className="market-carousel-item-name">
            <img src={'img/icon/5.png'} alt="" />
            <strong>Coti</strong>
          </div>
        </div>
        <div className="market-carousel-item">
          <div className="market-carousel-item-name">
            <img src={'img/icon/6.png'} alt="" />
            <strong>Tron</strong>
          </div>
        </div>
        <div className="market-carousel-item">
          <div className="market-carousel-item-name">
            <img src={'img/icon/7.png'} alt="" />
            <strong>Monero</strong>
          </div>
        </div>
        <div className="market-carousel-item">
          <div className="market-carousel-item-name">
            <img src={'img/icon/8.png'} alt="" />
            <strong>Cardano</strong>
          </div>
        </div>
        <div className="market-carousel-item">
          <div className="market-carousel-item-name">
            <img src={'img/icon/9.png'} alt="" />
            <strong>Binance Coin</strong>
          </div>
        </div>
        <div className="market-carousel-item">
          <div className="market-carousel-item-name">
            <img src={'img/icon/10.png'} alt="" />
            <strong>Neo</strong>
          </div>
        </div>
      </Slider>
    </div>
  );
}
