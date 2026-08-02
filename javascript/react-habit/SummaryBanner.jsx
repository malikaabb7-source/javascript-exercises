// Component that derives completed count and progress percentage from habits state
export default function SummaryBanner({ habits }) {
  const total = habits.length;
  const completed = habits.filter((h) => h.doneToday).length;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div
      style={{
        padding: '16px',
        backgroundColor: '#f0f4f8',
        borderRadius: '8px',
        marginBottom: '20px',
      }}
    >
      <h3>
        {completed} of {total} done ({percentage}%)
      </h3>
      <div
        style={{
          width: '100%',
          backgroundColor: '#e0e0e0',
          height: '12px',
          borderRadius: '6px',
          overflow: 'hidden',
          marginTop: '8px',
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            backgroundColor: '#4caf50',
            height: '100%',
            transition: 'width 0.3s ease',
          }}
        />
      </div>
    </div>
  );
}
