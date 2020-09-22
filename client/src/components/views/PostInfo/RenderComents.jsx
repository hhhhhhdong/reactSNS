import React from "react";
import { ComentContainer } from "../../FormStyle";

const RenderComents = ({ coments }) => {
  const render =
    coments &&
    coments.map((coment, index) => {
      return (
        <ComentContainer key={index}>
          <div>{coment.writerName}</div>
          <div>{coment.coment}</div>
        </ComentContainer>
      );
    });

  return <div>{render}</div>;
};

export default RenderComents;
