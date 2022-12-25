import { useContext } from "react";
import { SecretContext } from "../App";
export const Alert = ({ setCurrentRowAnimate }) => {
  const { error, setError } = useContext(SecretContext);

  const handleClick = () => {
    setCurrentRowAnimate("");
    setError({
      isVisible: false,
    });
  };
  //Work on the alert - beautify it
  return (
    <>
      {error.isVisible ? (
        <>
          {error.message}
          <div onClick={handleClick}>X</div>
        </>
      ) : (
        ""
      )}
    </>
  );
};
