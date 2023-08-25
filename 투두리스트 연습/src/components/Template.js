import React from "react";
import "./Template.css";

const Template = ({ children, todoLength, todayContent }) => {
  //template 사이의 내용을 받아올 수 있도록 인자를 넣어줌
  return (
    <div className="Template">
      <div className="todayContent">{todayContent} </div>
      <div className="title"> 🗓 오늘의 할 일 {todoLength}개 남음 </div>
      <div>{children}</div>
    </div>
  );
};

export default Template;
