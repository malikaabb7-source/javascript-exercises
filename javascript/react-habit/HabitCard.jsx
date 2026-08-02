// Component representing a single habit item with toggle and remove actions
export default function HabitCard({ habit, onToggleDone, onRemove }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px',
        marginBottom: '8px',
        border: '1px solid #ddd',
        borderRadius: '6px',
        backgroundColor: habit.doneToday ? '#e8f5e9' : '#fff',
      }}
    >
      <div>
        <strong style={{ textDecoration: habit.doneToday ? 'line-through' : 'none' }}>
          {habit.title}
        </strong>
        <span style={{ marginLeft: '12px', color: '#666', fontSize: '0.9em' }}>
          streak: {habit.streak}
        </span>
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          onClick={() => onToggleDone(habit.id)}
          style={{
            padding: '6px 12px',
            backgroundColor: habit.doneToday ? '#4caf50' : '#2196f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {habit.doneToday ? 'Done' : 'Todo'}
        </button>
        <button
          onClick={() => onRemove(habit.id)}
          style={{
            padding: '6px 12px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Del
        </button>
      </div>
    </div>
  );
}
