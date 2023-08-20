import React from "react";
import "./Template.css";

const Template = ({ children, todoLength }) => {
  //template 사이의 내용을 받아올 수 있도록 인자를 넣어줌
  return (
    <div className="Template">
      <div className="title"> 오늘의 할일 ( {todoLength} ) </div>
      <div>{children}</div>
    </div>
  );
};

export default Template;
