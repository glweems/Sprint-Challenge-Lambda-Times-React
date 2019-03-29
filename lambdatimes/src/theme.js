import styled from 'styled-components';

const ThemeProvider = styled.div`
  .width-100 {
    width: 100%;
  }
  .border-bottom-grey {
    border-bottom: 1px solid lightgrey;
  }
  @font-face {
    font-family: 'PT Sans';
    font-style: italic;
    font-weight: 400;
    src: local('PT Sans Italic'), local('PTSans-Italic'),
      url(https://fonts.gstatic.com/s/ptsans/v9/jizYRExUiTo99u79D0e0x8mN.ttf)
        format('truetype');
  }
  @font-face {
    font-family: 'PT Sans';
    font-style: italic;
    font-weight: 700;
    src: local('PT Sans Bold Italic'), local('PTSans-BoldItalic'),
      url(https://fonts.gstatic.com/s/ptsans/v9/jizdRExUiTo99u79D0e8fOydLxUY.ttf)
        format('truetype');
  }
  @font-face {
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    src: local('PT Sans'), local('PTSans-Regular'),
      url(https://fonts.gstatic.com/s/ptsans/v9/jizaRExUiTo99u79D0KEwA.ttf)
        format('truetype');
  }
  @font-face {
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    src: local('PT Sans Bold'), local('PTSans-Bold'),
      url(https://fonts.gstatic.com/s/ptsans/v9/jizfRExUiTo99u79B_mh0O6tKA.ttf)
        format('truetype');
  }
  * {
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #f1f1f1;
    color: #333;
    font-family: 'PT Sans', sans-serif;
  }
  #root {
    width: 100%;
  }

  .top-bar {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    position: fixed;
    height: 44px;
    background-color: #333;
  }
  .top-bar .container {
    width: 100%;
    display: flex;
    justify-content: none;
    align-items: none;
    flex-direction: row;
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;
  }
  @media (min-width: 1280px) {
    .top-bar .container {
      width: 1280px;
    }
  }
  .top-bar .container .container-left {
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
  }
  .top-bar .container .container-left span {
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
  }
  .top-bar .container .container-center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 9px;
  }
  .top-bar .container .container-center span {
    cursor: pointer;
    margin-right: 5%;
  }
  .top-bar .container .container-center span:last-child {
    margin-right: 0;
  }
  .top-bar .container .container-center span:hover {
    text-decoration: underline;
  }
  .top-bar .container .container-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    font-weight: bold;
  }
  .top-bar .container .container-right span {
    cursor: pointer;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: #fff;
    border-bottom: 1px solid lightgrey;
    width: 100%;
    height: 120px;
    margin-top: 44px;
    padding-bottom: 15px;
  }
  @media (min-width: 1280px) {
    .header {
      width: 1280px;
    }
  }
  .header h1 {
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
  }
  .header span {
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
  }
  .header .date {
    margin-left: 25px;
    flex: 1;
  }
  .header .temp {
    text-align: right;
    margin-right: 25px;
    flex: 1;
  }
  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tabs {
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 47px;
    background-color: #fff;
  }
  @media (min-width: 1280px) {
    .tabs {
      width: 1280px;
    }
  }
  .tabs .topics {
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
  }
  .tabs .topics .title {
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  }
  .tabs .topics .tab {
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    color: #fff;
    background-color: #333;
    margin: 0 5px;
    padding: 2px 10px;
    font-size: 12px;
    letter-spacing: 2px;
    cursor: pointer;
    font-weight: bold;
  }
  .tabs .topics .tab:hover {
    text-decoration: underline;
  }
  .tabs .topics .active-tab {
    background-color: #fff;
    color: #333;
    border: 2px solid #333;
  }
  .cards-container {
    display: flex;
    justify-content: space-evenly;
    align-items: none;
    flex-direction: row;
    width: 100%;
    margin-top: 16px;
    flex-wrap: wrap;
  }
  @media (min-width: 1200px) {
    .cards-container {
      width: 1200px;
    }
  }
  .cards-container .card {
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: space-between;
    align-items: none;
    flex-direction: column;
    background-color: #fff;
    width: 380px;
    margin-bottom: 16px;
    padding: 24px;
  }
  .cards-container .card .headline {
    font-size: 25px;
    font-family: Didot, serif;
  }
  .cards-container .card .author {
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    margin-top: 15px;
  }
  .cards-container .card .author .img-container {
    padding-right: 10px;
    border-right: 1px solid lightgrey;
    height: 40px;
  }
  .cards-container .card .author .img-container img {
    width: 40px;
  }
  .cards-container .card .author span {
    padding-left: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  }
  .carousel {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 500px;
    position: relative;
    overflow: hidden;
    margin-top: 16px;
  }
  @media (min-width: 1200px) {
    .carousel {
      width: 1200px;
    }
  }
  .carousel .left-button,
  .carousel .right-button {
    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    color: #fff;
    background-color: #333;
    font-size: 40px;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
  .carousel .left-button:hover,
  .carousel .right-button:hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
  .carousel .left-button {
    top: 50%;
    left: 25px;
    transform: translate(0, -50%);
  }
  .carousel .right-button {
    top: 50%;
    right: 25px;
    transform: translate(0, -50%);
  }
  .carousel img {
    width: 100%;
    display: none;
  }
`;

export default ThemeProvider;
