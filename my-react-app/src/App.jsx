import { useState } from 'react'
import './App.css'

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  
// Fetch bots from JSON Server
useEffect(() => {
  fetch("http://localhost:3001/bots")
    .then((res) => res.json())
    .then(setBots)
    .catch((err) => console.error("Failed to fetch bots:", err));
}, []);

// Add to army
const handleEnlist = (bot) => {
  if (!army.find((b) => b.id === bot.id)) {
    setArmy([...army, bot]);
  }
};

// Remove from army
const handleRelease = (bot) => {
  setArmy(army.filter((b) => b.id !== bot.id));
};

// Delete bot forever
const handleDischarge = (bot) => {
  fetch(`http://localhost:3001/bots/${bot.id}`, {
    method: "DELETE",
  })
    .then(() => {
      setBots(bots.filter((b) => b.id !== bot.id));
      setArmy(army.filter((b) => b.id !== bot.id));
      setSelectedBot(null); 
    })
    .catch((err) => console.error("Failed to delete bot:", err));
};

// View specs
const handleSelect = (bot) => {
  setSelectedBot(bot);
};

// Back to list
const handleBack = () => {
  setSelectedBot(null);
};

return (
  <div className="App">
    <h1> Bot Battlr</h1>
    <YourBotArmy
      army={army}
      onRelease={handleRelease}
      onDischarge={handleDischarge}
    />
    {selectedBot ? (
      <BotSpecs
        bot={selectedBot}
        onEnlist={handleEnlist}
        onBack={handleBack}
      />
    ) : (
      <BotCollection bots={bots} onSelect={handleSelect} />
    )}
  </div>
);
  
}

export default App
