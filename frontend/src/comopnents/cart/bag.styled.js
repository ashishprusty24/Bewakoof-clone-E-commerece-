import styled from "styled-components";

export const Bagwrapper = styled.div`
  margin: 20px 0px;

  .productDiv {
    border: 1px solid gray;
    /* padding: 10px; */
    margin: 5px;
    width: 548.33px;
    border-radius: 5px;
  }

  .productDiv > div:nth-child(1) {
    font-family: "Montserrat";
    font-size: 14px;
    /* margin: 5px; */
    padding: 10px;
    /* border: 1px solid green; */
    display: flex;
    justify-content: space-between;
    color: gray;
  }

  .productDiv > div:nth-child(2) {
    font-family: "Montserrat";
    font-size: 14px;
    display: flex;
    justify-content: center;
    color: gray;
  }
  .productDiv > div > div > div {
    margin: 5px;
    /* border:1px solid red; */
  }
  .buttonSection > div:nth-child(1) {
    width: 40%;
    border-top: 0.5px solid gray;
    border-right: 1px solid gray;
    height: 50px;
    text-align: center;
    font-size: 16px;
  }

  .buttonSection > div:nth-child(2) {
    width: 60%;
    border-top: 0.5px solid gray;

    height: 50px;
    text-align: center;
    font-size: 16px;
  }

  #spfirst {
    color: black;
    font-size: 18px;
    font-weight: bold;
    padding-right: 8px;
  }
  #savedprice {
    color: green;
    font-weight: 400;
  }
  .formcont {
    width: 100px;
    margin: 20px;
  }
  .selectDiv {
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  #demo-simple-select {
    height: 10px;
    font-size: 16px;
  }

  .imgtag {
    width: 88px;
    height: 109.5px;
  }
`;