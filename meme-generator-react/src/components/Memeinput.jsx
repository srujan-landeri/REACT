import React from 'react';

export default function Memeinput() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomimage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemes, setAllMemes] = React.useState('');

  // fetching the data from API
  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMeme() {
    let index = Math.floor(Math.random() * allMemes.length);
    let url = allMemes[index].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomimage: url,
    }));
  }

  function handleOnChange(event) {
    setMeme((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className="form">
      <div className="input-container">
        <input
          type="text"
          placeholder="upper text"
          name="topText"
          onChange={handleOnChange}
          value={meme.topText}
          className="meme-input"
        />
        <input
          type="text"
          placeholder="lower text"
          name="bottomText"
          onChange={handleOnChange}
          value={meme.bottomText}
          className="meme-input"
        />
      </div>
      <button className="generate-btn" onClick={getMeme}>
        Get a new meme image 🖼️
      </button>
      <div className="meme-container">
        <h1 className="top-text text">{meme.topText}</h1>
        <img className="meme-img" src={meme.randomimage} alt="" />
        <h1 className="bottom-text text">{meme.bottomText}</h1>
      </div>
    </div>
  );
}

// Fetching API taking alot of time
