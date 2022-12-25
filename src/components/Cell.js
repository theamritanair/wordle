export const Cell = ({ letter, color, solved, className }) => {
  return (
    <div
      className={`cell ${className}`}
      style={{
        backgroundColor: solved ? color : "#111",
      }}
    >
      {letter}
    </div>
  );
};
