import React from "react";
import { Image } from "react-bootstrap";
import construction from "../webImg/construction-17.png";
import styled from "styled-components";

const Styles = styled.div`
  #divcontainer {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  img {
    width: 100px;
  }
  h3 {
    color: #666666;
    padding: 15px;
  }
`;

const AboutScreen = () => {
  return (
    <Styles>
      <div id="divcontainer">
        <div>
          <Image md={2} src={construction} alt="delivery"></Image>
        </div>
        <div>
          <h3>OOPs!</h3>
          <h5>Looks like this page is still under construction!</h5>
        </div>
      </div>
    </Styles>
  );
};

export default AboutScreen;
