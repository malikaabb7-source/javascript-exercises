import { useState } from 'react';

// Component responsible for creating new habits via a controlled input
export default function HabitForm({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd(title.trim());
    setTitle(''); // Clear input after adding
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex', gap: '8px' }}>
      <input
        type="text"
        placeholder="e.g. Study React 30 min"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: '8px', flex: '1', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Add
      </button>
    </form>
  );
}
