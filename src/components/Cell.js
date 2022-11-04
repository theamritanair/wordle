export const Cell = ({ letter, color, solved }) => {
  return (
    <div
      className="cell"
      style={{
        backgroundColor: solved ? color : "#111",
      }}
    >
      {letter}
    </div>
  );
};
