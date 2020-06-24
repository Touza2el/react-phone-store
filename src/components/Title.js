import React from "react";

function Title(props) {
  const { title } = props;
  return (
    <div className="section-title">
      <h2>
        {title} <span></span>
      </h2>
    </div>
  );
}

export default Title;
