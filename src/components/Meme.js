import React, { useState } from "react";
import Memedata from "./Memedata";

const Meme = () => {
  const [memeData, setMemeData] = useState(Memedata);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    url: "http://i.imgflip.com/1bij.jpg",
  });
  const memeAction = (e) => {
    e.preventDefault();
    const data = memeData.arr;
    const random = Math.floor(Math.random() * data.length);
    const Nurl = data[random].url;
    setMeme((pre) => ({ ...pre, url: Nurl }));
    console.log(meme);
  };

  const onChange = (e) => {
    setMeme((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  return (
    <div className="container">
      <form className="form">
        <input
          placeholder="Top text"
          className="input"
          name="topText"
          id="topText"
          type="text"
          onChange={onChange}
          value={meme.topText}
        />

        <input
          placeholder="Bottom text"
          className="input"
          name="bottomText"
          id="bottomText"
          type="text"
          onChange={onChange}
          value={meme.bottomText}
        />
        <button onClick={memeAction} className="submitBtn">
          Get a new meme
        </button>
      </form>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          className="meme"
          style={{
            width: "50rem",
          }}
        >
          <img className="memeImg" src={meme.url} alt="meme" />
          <h2 className="text-type top">{meme.topText}</h2>
          <h2 className="text-type bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </div>
  );
};

export default Meme;
