import Scoreboard from './Scoreboard';

// Main App container passing team names down via props
export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '40px', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '30px' }}>Live Scoreboard</h1>
      <Scoreboard redTeamName="Team Red" blueTeamName="Team Blue" />
    </div>
  );
}
