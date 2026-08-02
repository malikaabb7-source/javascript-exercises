import { useState } from 'react';
import TeamPanel from './TeamPanel';

// Component maintaining state for both teams and layout logic
export default function Scoreboard({ redTeamName, blueTeamName }) {
  // Independent pieces of state for both team scores
  const [redScore, setRedScore] = useState(0);
  const [blueScore, setBlueScore] = useState(0);

  // Handlers for Red Team
  const handleRedAdd = () => setRedScore((prev) => prev + 1);
  const handleRedSubtract = () => setRedScore((prev) => Math.max(0, prev - 1));

  // Handlers for Blue Team
  const handleBlueAdd = () => setBlueScore((prev) => prev + 1);
  const handleBlueSubtract = () => setBlueScore((prev) => Math.max(0, prev - 1));

  // Single function to reset both scores using functional state updaters
  const handleReset = () => {
    setRedScore(0);
    setBlueScore(0);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {/* Side-by-side view with visual separation */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          marginBottom: '20px',
        }}
      >
        <TeamPanel
          teamName={redTeamName}
          score={redScore}
          onAdd={handleRedAdd}
          onSubtract={handleRedSubtract}
        />
        <TeamPanel
          teamName={blueTeamName}
          score={blueScore}
          onAdd={handleBlueAdd}
          onSubtract={handleBlueSubtract}
        />
      </div>

      <button
        onClick={handleReset}
        style={{
          padding: '10px 20px',
          fontSize: '1rem',
          cursor: 'pointer',
          backgroundColor: '#ff9800',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        Reset Scores
      </button>
    </div>
  );
}
