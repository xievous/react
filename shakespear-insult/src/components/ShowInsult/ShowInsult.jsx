import React, { useState } from "react";
import "./showinsult.css";

const ShowInsult = () => {
  const [addInsult, setInsult] = useState("");
  const [addPlay, setPlay] = useState("");
  const [insults, setInsults] = useState([
    {
      quote:
        "Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner?",
      play: "Macbeth",
    },
    {
      quote: "Never hung poison on a fouler toad",
      play: "Richard III",
    },
    {
      quote: "He thinks too much: such men are dangerous.",
      play: "Julius Ceasar",
    },
    {
      quote:
        "Thou calledst me a dog before thou hadst a cause. But since I am a dog, beware my fangs.",
      play: "The Merchant of Venice",
    },
    {
      quote: "Give me your hand...I can tell your fortune. You are a fool",
      play: "The Two Noble Kinsmen",
    },
    {
      quote:
        "He smells like a fish, a very ancient and fish-like smell, a kind of not-of-the-newest poor-John. A strange fish!",
      play: "The Tempest",
    },
    {
      quote:
        "It is a tale Told by an idiot, full of sound and fury, Signifying nothing.",
      play: "Macbeth",
    },
    {
      quote:
        "Alas, poor heart, that kiss is comfortless As frozen water to a starved snake.",
      play: "Titus Andronicus",
    },
    {
      quote:
        "He hath eaten me out of house and home; he hath put all substance into that fat belly of his.",
      play: "Henry IV, Part 2",
    },
    {
      quote:
        "Out, you green-sickness carrion! Out, you baggage! You tallow-face!",
      play: "Romeo and Juliet",
    },
  ]);

  const insultsQuote = insults.map((insult, index) => {
    return (
      <li key={index}>
        {insult.quote} - {insult.play}
      </li>
    );
  });

  return (
    <div>
      <input
        type="text"
        name="insult"
        value={addInsult}
        onChange={(e) => setInsult(e.target.value)}
      />
      <input
        type="text"
        name="play"
        value={addPlay}
        onChange={(e) => setPlay(e.target.value)}
      />
      <button
        onClick={() => {
          setInsults([...insults, { quote: addInsult, play: addPlay }]);
        }}
      >
        Add insult
      </button>
      <ul>{insultsQuote}</ul>
    </div>
  );
};

export default ShowInsult;
