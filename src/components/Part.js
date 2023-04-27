import React from "react";

//Part
function Part({ title, index, zIndex }) {
  return (
    <div className="avatar">
      <img
        src={`./character/${title}/${index + 1}.png`}
        alt=""
        style={{ zIndex, position: "absolute", top: 0, left: 0 }}
        width="370px"
      />
    </div>
  );
}

export default Part;
