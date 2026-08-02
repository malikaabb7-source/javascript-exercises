// Component that renders a single team's control panel and score display
export default function TeamPanel({ teamName, score, onAdd, onSubtract }) {
  return (
    <div
      style={{
        border: '2px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        width: '200px',
        textAlign: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <h2>{teamName}</h2>
      <h1 style={{ fontSize: '3rem', margin: '10px 0' }}>{score}</h1>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button
          onClick={onAdd}
          style={{
            padding: '8px 16px',
            fontSize: '1rem',
            cursor: 'pointer',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          +1
        </button>

        {/* Disabled when score is 0 to prevent negative scores */}
        <button
          onClick={onSubtract}
          disabled={score === 0}
          style={{
            padding: '8px 16px',
            fontSize: '1rem',
            cursor: score === 0 ? 'not-allowed' : 'pointer',
            backgroundColor: score === 0 ? '#ccc' : '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          -1
        </button>
      </div>
    </div>
  );
}
