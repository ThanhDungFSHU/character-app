import React from "react";
import Part from "./Part";

function Avatar({
  body,
  eyes,
  hair,
  mouth,
  eyebrows,
  hat,
  glasses,
  clothing1,
  clothing2,
  clothing3,
  handleRandomize,
}) {
  return (
    <div className="avatar-wrapper">
      <div>
        <button className="button" onClick={handleRandomize}>
          Click Me!
        </button>
      </div>
      <Part title="body" index={body} zIndex={1} />
      <Part title="eyes" index={eyes} zIndex={2} />
      <Part title="hair" index={hair} zIndex={3} />
      <Part title="mouths" index={mouth} zIndex={5} />
      <Part title="eyebrows" index={eyebrows} zIndex={5} />
      <Part title="accessories/hats" index={hat} zIndex={6} />
      <Part title="accessories/glasses" index={glasses} zIndex={5} />
      <Part title="clothes/layer_1" index={clothing1} zIndex={3} />
      <Part title="clothes/layer_2" index={clothing2} zIndex={7} />
      <Part title="clothes/layer_3" index={clothing3} zIndex={8} />
    </div>
  );
}

export default Avatar;
