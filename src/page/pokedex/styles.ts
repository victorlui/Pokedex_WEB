import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  background-image: url("src/images/back.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 0;
`;

export const Pokedex = styled.div`
  width: 750px;
  margin: 50px auto 0 auto;

  #left {
    width: 400px;
    height: 500px;
    float: left;
    position: relative;
    z-index: 1;
  }

  #right {
    width: 350px;
    height: 500px;
    float: left;
    position: relative;
  }

  #bg_curve1_left {
    width: 400px;
    height: 80px;
    background-color: #8b0000;

    border-top-left-radius: 30px;
    -webkit-border-top-left-radius: 30px;
    -moz-border-top-left-radius: 30px;
    -o-border-top-left-radius: 30px;
  }

  #bg_curve2_left {
    width: 400px;
    height: 420px;
    background-color: #c00d0d;

    box-shadow: -10px 9px #5e0000;
    -webkit-box-shadow: -10px 9px #5e0000;
    -moz-box-shadow: -10px 9px #5e0000;
    -o-box-shadow: -10px 9px #5e0000;

    border-bottom-left-radius: 30px;
    -webkit-border-bottom-left-radius: 30px;
    -moz-border-bottom-left-radius: 30px;
    -o-border-bottom-left-radius: 30px;
  }

  #curve1_left {
    width: 201px;
    height: 85px;
    background-color: #8b0000;
    float: left;
    padding: 15px 0 0 15px;

    position: absolute;
    top: 0;
    left: 0;

    box-shadow: -10px 9px #5e0000;
    -webkit-box-shadow: -10px 9px #5e0000;
    -moz-box-shadow: -10px 9px #5e0000;
    -o-box-shadow: -10px 9px #5e0000;

    border-bottom-right-radius: 85px 60px;
    -webkit-border-bottom-right-radius: 85px 60px;
    -moz-border-bottom-right-radius: 85px 60px;
    -o-border-bottom-right-radius: 85px 60px;

    border-top-left-radius: 30px;
    -webkit-border-top-left-radius: 30px;
    -moz-border-top-left-radius: 30px;
    -o-border-top-left-radius: 30px;
  }

  #buttonGlass {
    width: 60px;
    height: 60px;
    margin-right: 15px;
    border: 5px solid #fff;
    float: left;

    box-shadow: 0 0 10px #490000;
    -webkit-box-shadow: 0 0 10px #490000;
    -moz-box-shadow: 0 0 10px #490000;
    -o-box-shadow: 0 0 10px #490000;

    background: radial-gradient(#05fbfb, #29abe3);
    background: -webkit-radial-gradient(#05fbfb, #29abe3);
    background: -moz-radial-gradient(#05fbfb, #29abe3);
    background: -o-radial-gradient(#05fbfb, #29abe3);

    border-radius: 35px;
    -webkit-border-radius: 35px;
    -moz-border-radius: 35px;
    -o-border-radius: 35px;
  }

  #reflect {
    width: 30px;
    height: 18px;
    margin: 3px 0 0 15px;
    background: #fff;
    opacity: 0.6;

    border-radius: 15px 9px;
    -webkit-border-radius: 15px 9px;
    -moz-border-radius: 15px 9px;
    -o-border-radius: 15px 9px;
  }

  #curve2_left {
    width: 216px;
    height: 451px;
    background-color: #c00d0d;
    float: right;

    position: absolute;
    bottom: 0;
    right: 0;

    border-top-left-radius: 85px 60px;
    -webkit-border-top-left-radius: 85px 60px;
    -moz-border-top-left-radius: 85px 60px;
    -o-border-top-left-radius: 85px 60px;
  }

  #junction {
    width: 60px;
    height: 451px;
    float: right;

    background: linear-gradient(left, #8b0000 0%, #c00d0d 50%, #8b0000 100%);
    background: -webkit-linear-gradient(
      left,
      #8b0000 0%,
      #c00d0d 50%,
      #8b0000 100%
    );
    background: -moz-linear-gradient(
      left,
      #8b0000 0%,
      #c00d0d 50%,
      #8b0000 100%
    );
    background: -o-linear-gradient(left, #8b0000 0%, #c00d0d 50%, #8b0000 100%);
  }

  #junction1 {
    height: 40px;
    background-color: #5e0000;
    opacity: 0.3;
    margin-top: 50px;
    margin-bottom: 262px;

    border-top: 2px solid #330000;
    border-bottom: 2px solid #330000;
  }

  #junction2 {
    height: 40px;
    background-color: #5e0000;
    opacity: 0.3;

    border-top: 2px solid #330000;
    border-bottom: 2px solid #330000;
  }

  #screen {
    height: 245px;
    width: 260px;
    padding: 0 20px;
    background-color: #b0b0b0;
    float: left;

    position: absolute;
    top: 80px;
    left: -165px;

    border-radius: 15px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -o-border-radius: 15px;
  }

  #screen:after {
    content: "";
    border-top: 40px solid #b0b0b0;
    border-left: 40px solid #c00d0d;
    height: 0;

    position: absolute;
    bottom: 0;
    left: 0;
  }

  #picture {
    height: 175px;
    width: 254px;
    margin-top: 20px;
    margin-bottom: 9px;
    background-color: #fff;
    border: 3px solid #494949;
    clear: both;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 15px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -o-border-radius: 15px;
  }

  #picture img {
    display: block;
    margin: 0 auto;
    object-fit: contain;
    width: 100%;
    background-color: transparent;
  }

  #topPicture {
    margin: 6px auto;
    width: 40px;
  }

  #buttonbottomPicture {
    height: 26px;
    width: 26px;
    background-color: #c00d0d;
    margin-left: 35px;
    float: left;

    border-radius: 30px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -o-border-radius: 30px;

    box-shadow: -2px 1px #5e0000;
    -webkit-box-shadow: -2px 1px #5e0000;
    -moz-box-shadow: -2px 1px #5e0000;
    -o-box-shadow: -2px 1px #5e0000;

    background: linear-gradient(top, #c00d0d 0%, #8b0000 80%);
    background: -webkit-linear-gradient(top, #c00d0d 0%, #8b0000 80%);
    background: -moz-linear-gradient(top, #c00d0d 0%, #8b0000 80%);
    background: -o-linear-gradient(top, #c00d0d 0%, #8b0000 80%);
  }

  #speakers {
    float: right;
    width: 75px;
    height: 25px;
    margin-right: 20px;
  }

  div.sp {
    height: 3px;
    margin-bottom: 5px;
    background-color: #494949;

    border-radius: 30px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -o-border-radius: 30px;
  }

  /* //// RIGHT PART //// */

  #curve1_right {
    width: 166px;
    height: 451px;
    background-color: #c00d0d;
    float: right;

    position: absolute;
    bottom: 0;
    left: 0;

    border-top-right-radius: 85px 60px;
    -webkit-border-right-left-radius: 85px 60px;
    -moz-border-right-left-radius: 85px 60px;
    -o-border-right-left-radius: 85px 60px;
  }

  #bg_curve1_right {
    width: 350px;
    height: 80px;
    background-color: transparent;

    border-top-right-radius: 30px;
    -webkit-border-top-right-radius: 30px;
    -moz-border-top-right-radius: 30px;
    -o-border-top-right-radius: 30px;
  }

  #curve2_right {
    width: 216px;
    height: 100px;
    background-color: transparent;
    float: left;

    position: absolute;
    top: 0;
    right: 0;

    border-bottom-left-radius: 85px 60px;
    -webkit-border-bottom-left-radius: 85px 60px;
    -moz-border-bottom-left-radius: 85px 60px;
    -o-border-bottom-left-radius: 85px 60px;
  }

  #bg_curve2_right {
    width: 350px;
    height: 420px;
    background-color: #c00d0d;

    border-bottom-right-radius: 30px;
    -webkit-border-bottom-right-radius: 30px;
    -moz-border-bottom-right-radius: 30px;
    -o-border-bottom-right-radius: 30px;

    box-shadow: -10px 9px #5e0000;
    -webkit-box-shadow: -10px 9px #5e0000;
    -moz-box-shadow: -10px 9px #5e0000;
    -o-box-shadow: -10px 9px #5e0000;
  }

  #stats {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 130px;
    width: 280px;
    padding-left: 15px;
    padding-top: 15px;
    background-color: #30da0c;
    z-index: 1;
    font-size: 13px;
    font-family: arial, sans-serif;

    position: absolute;
    top: 130px;
    left: 25px;

    border-radius: 15px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -o-border-radius: 15px;

    box-shadow: 0 0 20px #003300 inset;
    -webkit-box-shadow: 0 0 20px #003300 inset;
    -moz-box-shadow: 0 0 20px #003300 inset;
    -o-box-shadow: 0 0 20px #003300 inset;
  }

  #row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }

  #blueButtons1 {
    z-index: 1;

    position: absolute;
    top: 295px;
    left: 49px;
  }

  #blueButtons2 {
    z-index: 1;

    position: absolute;
    top: 335px;
    left: 49px;
  }

  div.blueButton {
    height: 35px;
    width: 45px;
    background-color: #003300;
    float: left;
    margin-right: 7px;

    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;

    background: linear-gradient(top, #307bfb 0%, #0530e5 80%);
    background: -webkit-linear-gradient(top, #307bfb 0%, #0530e5 80%);
    background: -moz-linear-gradient(top, #307bfb 0%, #0530e5 80%);
    background: -o-linear-gradient(top, #307bfb 0%, #0530e5 80%);

    box-shadow: -1px 2px #001c91;
    -webkit-box-shadow: -1px 2px #001c91;
    -moz-box-shadow: -1px 2px #001c91;
    -o-box-shadow: -1px 2px #001c91;
  }

  #barbutton3 {
    height: 13px;
    width: 50px;
    z-index: 1;

    position: absolute;
    top: 385px;
    left: 210px;

    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    -o-border-radius: 100px;

    background: linear-gradient(top, #50fb05 0%, #057b05 100%);
    background: -webkit-linear-gradient(top, #50fb05 0%, #057b05 100%);
    background: -moz-linear-gradient(top, #50fb05 0%, #057b05 100%);
    background: -o-linear-gradient(top, #50fb05 0%, #057b05 100%);

    box-shadow: -1px 2px #004200;
    -webkit-box-shadow: -1px 2px #004200;
    -moz-box-shadow: -1px 2px #004200;
    -o-box-shadow: -1px 2px #004200;
  }

  #barbutton4 {
    height: 13px;
    width: 50px;
    z-index: 1;

    position: absolute;
    top: 385px;
    left: 270px;

    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    -o-border-radius: 100px;

    background: linear-gradient(top, #fb6505 0%, #bb0505 100%);
    background: -webkit-linear-gradient(top, #fb6505 0%, #bb0505 100%);
    background: -moz-linear-gradient(top, #fb6505 0%, #bb0505 100%);
    background: -o-linear-gradient(top, #fb6505 0%, #bb0505 100%);

    box-shadow: -1px 2px #7b0000;
    -webkit-box-shadow: -1px 2px #7b0000;
    -moz-box-shadow: -1px 2px #7b0000;
    -o-box-shadow: -1px 2px #7b0000;
  }

  #miniButtonGlass4 {
    width: 15px;
    height: 15px;
    float: left;
    z-index: 1;

    position: absolute;
    top: 383px;
    left: 25px;

    box-shadow: 0 0 10px #490000;
    -webkit-box-shadow: 0 0 10px #490000;
    -moz-box-shadow: 0 0 10px #490000;
    -o-box-shadow: 0 0 10px #490000;

    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -o-border-radius: 20px;

    background: radial-gradient(#ff9b5b, #fb6505);
    background: -webkit-radial-gradient(#ff9b5b, #fb6505);
    background: -moz-radial-gradient(#ff9b5b, #fb6505);
    background: -o-radial-gradient(#ff9b5b, #fb6505);
  }

  #miniButtonGlass5 {
    width: 15px;
    height: 15px;
    float: left;
    z-index: 1;

    position: absolute;
    top: 383px;
    left: 51px;

    box-shadow: 0 0 10px #490000;
    -webkit-box-shadow: 0 0 10px #490000;
    -moz-box-shadow: 0 0 10px #490000;
    -o-box-shadow: 0 0 10px #490000;

    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -o-border-radius: 20px;

    background: radial-gradient(#0abd0a, #057b05);
    background: -webkit-radial-gradient(#0abd0a, #057b05);
    background: -moz-radial-gradient(#0abd0a, #057b05);
    background: -o-radial-gradient(#0abd0a, #057b05);
  }

  #yellowBox1 {
    width: 140px;
    height: 70px;
    z-index: 1;
    background-color: #ffff00;

    position: absolute;
    top: 415px;
    left: 25px;

    border-radius: 15px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -o-border-radius: 15px;

    box-shadow: 0 0 20px #ff6600 inset;
    -webkit-box-shadow: 0 0 20px #ff6600 inset;
    -moz-box-shadow: 0 0 20px #ff6600 inset;
    -o-box-shadow: 0 0 20px #ff6600 inset;
  }

  #yellowBox2 {
    width: 140px;
    height: 70px;
    z-index: 1;
    background-color: #ffff00;

    position: absolute;
    top: 415px;
    left: 185px;

    border-radius: 15px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -o-border-radius: 15px;

    box-shadow: 0 0 20px #ff6600 inset;
    -webkit-box-shadow: 0 0 20px #ff6600 inset;
    -moz-box-shadow: 0 0 20px #ff6600 inset;
    -o-box-shadow: 0 0 20px #ff6600 inset;
  }

  @media handheld and (orientation: portrait), (max-width: 768px) {
    #pokedex {
      width: 400px;
    }

    #logo {
      width: 281px;
      height: 99px;
      background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/200653/logo.png")
        no-repeat left top;
      z-index: 1;

      position: absolute;
      top: 220px;
      left: 30px;
    }

    #left {
      width: 400px;
      height: 500px;
      float: left;
      position: relative;
      z-index: 1;
      margin: 0 auto;
    }

    #curve1_t {
      width: 201px;
      height: 85px;
      background-color: #8b0000;
      float: left;
      padding: 15px 0 0 15px;

      position: absolute;
      top: 0;
      left: 0;

      box-shadow: 0 0 #5e0000;
      -webkit-box-shadow: 0 0 #5e0000;
      -moz-box-shadow: 0 0 #5e0000;
      -o-box-shadow: 0 0 #5e0000;

      border-bottom-right-radius: 85px 60px;
      -webkit-border-bottom-right-radius: 85px 60px;
      -moz-border-bottom-right-radius: 85px 60px;
      -o-border-bottom-right-radius: 85px 60px;

      border-top-left-radius: 30px;
      -webkit-border-top-left-radius: 30px;
      -moz-border-top-left-radius: 30px;
      -o-border-top-left-radius: 30px;
    }

    #bg_curvleft {
      width: 400px;
      height: 80px;
      background-color: #8b0000;

      box-shadow: -10px 9px #5e0000;
      -webkit-box-shadow: -10px 9px #5e0000;
      -moz-box-shadow: -10px 9px #5e0000;
      -o-box-shadow: -10px 9px #5e0000;

      border-top-left-radius: 30px;
      -webkit-border-top-left-radius: 30px;
      -moz-border-top-left-radius: 30px;
      -o-border-top-left-radius: 30px;
    }

    #right,
    #screen,
    #bigbluebutton,
    #barbutton1,
    #barbutton2,
    #cross {
      display: none;
    }
  }
`;

type ButtonGlassPros = {
  color1: string;
  color2: string;
  color3: string;
};

export const ButtonGlass = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  float: left;

  box-shadow: 0 0 10px ${(props: ButtonGlassPros) => props.color1};
  -webkit-box-shadow: 0 0 10px ${(props: ButtonGlassPros) => props.color1};
  -moz-box-shadow: 0 0 10px ${(props: ButtonGlassPros) => props.color1};
  -o-box-shadow: 0 0 10px ${(props: ButtonGlassPros) => props.color1};

  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -o-border-radius: 20px;

  background: radial-gradient(
    ${(props: ButtonGlassPros) => props.color2},
    ${(props: ButtonGlassPros) => props.color3}
  );
  background: -webkit-radial-gradient(
    ${(props: ButtonGlassPros) => props.color2},
    ${(props: ButtonGlassPros) => props.color3}
  );
  background: -moz-radial-gradient(
    ${(props: ButtonGlassPros) => props.color2},
    ${(props: ButtonGlassPros) => props.color3}
  );
  background: -o-radial-gradient(
    ${(props: ButtonGlassPros) => props.color2},
    ${(props: ButtonGlassPros) => props.color3}
  );
`;

export const Cross = styled.div`
  width: 90px;
  height: 90px;
  position: absolute;
  top: 340px;
  left: -50px;

  #topcross {
    width: 30px;
    height: 30px;
    background-color: #222;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 30px;

    box-shadow: -3px 2px #010101;
    -webkit-box-shadow: -3px 2px #010101;
    -moz-box-shadow: -3px 2px #010101;
    -o-box-shadow: -3px 2px #010101;

    border-top-left-radius: 5px;
    -webkit-border-top-left-radius: 5px;
    -moz-border-top-left-radius: 5px;
    -o-border-top-left-radius: 5px;

    border-top-right-radius: 5px;
    -webkit-border-top-right-radius: 5px;
    -moz-border-top-right-radius: 5px;
    -o-border-top-right-radius: 5px;
  }

  #leftcross {
    width: 30px;
    height: 30px;
    background-color: #222;
    z-index: 1;
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 30px;

    box-shadow: -3px 2px #010101;
    -webkit-box-shadow: -3px 2px #010101;
    -moz-box-shadow: -3px 2px #010101;
    -o-box-shadow: -3px 2px #010101;

    border-top-left-radius: 5px;
    -webkit-border-top-left-radius: 5px;
    -moz-border-top-left-radius: 5px;
    -o-border-top-left-radius: 5px;

    border-bottom-left-radius: 5px;
    -webkit-border-bottom-left-radius: 5px;
    -moz-border-bottom-left-radius: 5px;
    -o-border-bottom-left-radius: 5px;
  }

  #midcross {
    width: 30px;
    height: 30px;
    background-color: #222;

    position: absolute;
    top: 30px;
    left: 30px;

    box-shadow: -3px 2px #010101;
    -webkit-box-shadow: -3px 2px #010101;
    -moz-box-shadow: -3px 2px #010101;
    -o-box-shadow: -3px 2px #010101;
  }

  #rightcross {
    width: 30px;
    height: 30px;
    background-color: #222;
    cursor: pointer;
    position: absolute;
    top: 30px;
    right: 0;

    box-shadow: -3px 2px #010101;
    -webkit-box-shadow: -3px 2px #010101;
    -moz-box-shadow: -3px 2px #010101;
    -o-box-shadow: -3px 2px #010101;

    border-top-right-radius: 5px;
    -webkit-border-top-right-radius: 5px;
    -moz-border-top-right-radius: 5px;
    -o-border-top-right-radius: 5px;

    border-bottom-right-radius: 5px;
    -webkit-border-bottom-right-radius: 5px;
    -moz-border-bottom-right-radius: 5px;
    -o-border-bottom-right-radius: 5px;
  }

  #botcross {
    width: 30px;
    height: 30px;
    background-color: #222;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    left: 30px;

    box-shadow: -3px 2px #010101;
    -webkit-box-shadow: -3px 2px #010101;
    -moz-box-shadow: -3px 2px #010101;
    -o-box-shadow: -3px 2px #010101;

    border-bottom-left-radius: 5px;
    -webkit-border-bottom-left-radius: 5px;
    -moz-border-bottom-left-radius: 5px;
    -o-border-bottom-left-radius: 5px;

    border-bottom-right-radius: 5px;
    -webkit-border-bottom-right-radius: 5px;
    -moz-border-bottom-right-radius: 5px;
    -o-border-bottom-right-radius: 5px;
  }

  #upT {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #111;

    position: absolute;
    top: 5px;
    left: 4px;
  }

  #downT {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #111;

    position: absolute;
    bottom: 5px;
    left: 4px;
  }

  #leftT {
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-right: 10px solid #111;
    border-bottom: 10px solid transparent;

    position: absolute;
    top: 5px;
    left: 4px;
  }

  #rightT {
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-left: 10px solid #111;
    border-bottom: 10px solid transparent;

    position: absolute;
    top: 5px;
    right: 5px;
  }

  #midCircle {
    width: 20px;
    height: 20px;

    position: absolute;
    top: 5px;
    left: 4px;

    border-radius: 30px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -o-border-radius: 30px;

    background: radial-gradient(#111, #222);
    background: -webkit-radial-gradient(#111, #222);
    background: -moz-radial-gradient(#111, #222);
    background: -o-radial-gradient(#111, #222);
  }
`;
