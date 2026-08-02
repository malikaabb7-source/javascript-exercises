import { useState } from 'react';
import HabitForm from './HabitForm';
import SummaryBanner from './SummaryBanner';
import HabitCard from './HabitCard';

// Main App component holding the central state for all habits
export default function App() {
  const [habits, setHabits] = useState([]);

  // Add a new habit with initial values
  const handleAddHabit = (title) => {
    const newHabit = {
      id: crypto.randomUUID(),
      title,
      doneToday: false,
      streak: 0,
    };
    setHabits((prev) => [...prev, newHabit]);
  };

  // Toggle habit done status and calculate streak immutably
  const handleToggleDone = (id) => {
    setHabits((prev) =>
      prev.map((habit) => {
        if (habit.id !== id) return habit;

        const nextDoneToday = !habit.doneToday;
        // Increment streak if done, decrement if undone (clamped at 0)
        const nextStreak = nextDoneToday
          ? habit.streak + 1
          : Math.max(0, habit.streak - 1);

        return {
          ...habit,
          doneToday: nextDoneToday,
          streak: nextStreak,
        };
      })
    );
  };

  // Remove habit by ID immutably
  const handleRemoveHabit = (id) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  };

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2>Habit Tracker</h2>
      <HabitForm onAdd={handleAddHabit} />
      <SummaryBanner habits={habits} />
      <div>
        {habits.map((habit) => (
          <HabitCard
            key={habit.id}
            habit={habit}
            onToggleDone={handleToggleDone}
            onRemove={handleRemoveHabit}
          />
        ))}
      </div>
    </div>
  );
}
