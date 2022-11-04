export const Button = ({ handleKeyClick, content }) => {
  return (
    <div onClick={handleKeyClick} className="button" style={{ height: 20 }}>
      {content}
    </div>
  );
};
