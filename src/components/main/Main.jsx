import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

function Main() {
  const { onSent, recent, showResult, loading, resultData, setInput, input } =
    useContext(Context);

    const handleCardClick = (text) => {
      setInput(text); // Set the input state with the card's text
      onSent(text); // Trigger the onSent function to show the result
    };

  return (
    <div className="main">
      <div className="nav">
        <p>
          inquireIT.
        </p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Champ!</span>
              </p>
              <p>How can I help you today?</p>
            </div>

            <div className="cards">
              <div className="card" onClick={() => handleCardClick("How to become a developer?")}>
                <p>How to become a developer?</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card" onClick={() => handleCardClick("Briefly summarrize the concept : Urban Planning")}>
                <p>Briefly summarrize the concept : Urban Planning</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card" onClick={() => handleCardClick("Suggest me a good languge to start my programming journey")} >
                <p>Suggest me a good languge to start my programming journey</p>
                <img src={assets.code_icon} alt="" />
              </div>
              <div className="card" onClick={() => handleCardClick("Brainstorming team bonding activities for our work retreat")}>
                <p>
                  Brainstorming team bonding activities for our work retreat
                </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recent}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here..."
            />
            <div>
              {/* <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" /> */}
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
          Copyright &#169; 2024 Rohit Joshi. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
