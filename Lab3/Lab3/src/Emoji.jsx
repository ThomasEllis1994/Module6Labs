import { useState } from "react";

// save in MoodChanger.jsx
function Emoji(props) {
    // two variables :
    // mood stores current mood, default happy
    // setMood is a function for updating mood
    const [mood, setMood] = useState(props.symbol);
    const changeMood = () => {
        if (mood !== "😒") {
            setMood("😒");
        } else {
            setMood(props.symbol);
        }
    };

    return (
        <>
            <div className="MoodChanger componentBox">Current Mood: {mood}</div>
            <button onClick={() => changeMood()}>I feel different</button>
        </>
    );
}
Emoji.defaultProps = {
    symbol: "😊",
};

export default Emoji;
