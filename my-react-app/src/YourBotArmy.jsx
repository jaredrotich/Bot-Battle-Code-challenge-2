import React from "react";
import BotCard from "./BotCard";

const YourBotArmy = ({ army, onRelease, onDischarge }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-grid">
        {army.map((bot) => (
          <div key={bot.id} className="bot-army-card">
            <BotCard bot={bot} onClick={() => onRelease(bot)} />
            <button
              className="discharge-btn"
              onClick={() => onDischarge(bot)}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;