import React from "react";

function PartList({ total, title, handleClick }) {
  const parts = [];
  for (let i = 0; i < total; i++) {
    parts.push(
      <div key={title + i} onClick={() => handleClick(i)}>
        <img
          src={`./character/${title}/${i + 1}.png`}
          alt=""
          width="60px"
          height="60px"
          className="img-parts"
        />
      </div>
    );
  }
  return <div className="img-lists">{parts}</div>;
}

export default PartList;
