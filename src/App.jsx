import { useState } from 'react'
import './App.css'

const ARTIST_INFO = {
  "minksy bootsy": "miles buchanan: \n\n give me a voice and i will make cool cray cray tunes. \n\n and also i need some sort of voice processor. \n\n also hi karl.",
  "chef jef": "jeffrey sawyer: \n\n show these tracks to a small rodent or invertebrate. \n\n but please don't let the ferret hear track 7.",
  "all the big bangs": "eshakana lane: \n\n i listened to emily a. sprague and wanted to make awesome stuff like her.",
  "xander mae": "xander mae: \n\n i entice nymphs to help me craft folk stories and melodies. 20 years in, i don’t know how much longer i’ll be here \n\n otherwise i'll be headed for the next star system or another inner dimension.",
  "waxy jack symmons": "jack symmons: \n\n i'm getting a little better at the guitar with these guitar songs"
};

const DEFAULT_ABOUT =
  "this is a magical music label.\n\n the music's got like some squiggly-bops and maybe some sincere folk songs\n\nand definitely some ambient tracks.";


function App() {
  const [aboutText, setAboutText] = useState(DEFAULT_ABOUT);

  return (
    <div>
      <div className="heading-img-container">
        <img src="./public/ninni_nanni1.gif" alt="ninni nanni" />
      </div>

      <div className="zing-box">
        <p className="about">
          {aboutText.split("\n\n").map((line, i) => (
            <span key={i}>
              {line}
              <br /><br />
            </span>
          ))}
        </p>
      </div>

      <div className="artist-container">
        <div className="heading">
          {Object.keys(ARTIST_INFO).map((name) => (
            <div
            key={name}
            className="linky"
            style={{ '--rand': Math.random() }}
            onMouseEnter={() => setAboutText(ARTIST_INFO[name])}
            onMouseLeave={() => setAboutText(DEFAULT_ABOUT)}
            onTouchStart={(e) => {
              e.stopPropagation();
              setAboutText(ARTIST_INFO[name]);
            }}
            onClick={(e) => e.stopPropagation()}
          >
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



export default App
