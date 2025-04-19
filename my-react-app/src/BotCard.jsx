// src/components/BotCard.jsx
import React from "react";

const BotCard = ({ bot, onClick }) => {
  return (
    <div className="bot-card" onClick={onClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.bot_class}</p>
    </div>
  );
};

export default BotCard;
