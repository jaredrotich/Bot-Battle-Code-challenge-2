import React from "react";

const BotSpecs = ({ bot, onEnlist, onBack }) => {
  return (
    <div className="bot-specs">
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      <p><strong>Class:</strong> {bot.bot_class}</p>
      <p><strong>Health:</strong> {bot.health}</p>
      <p><strong>Damage:</strong> {bot.damage}</p>
      <p><strong>Armor:</strong> {bot.armor}</p>
      <p><em>{bot.catchphrase}</em></p>

      <div className="specs-actions">
        <button onClick={() => onEnlist(bot)}>Enlist</button>
        <button onClick={onBack}>Go Back</button>
      </div>
    </div>
  );
};

export default BotSpecs;