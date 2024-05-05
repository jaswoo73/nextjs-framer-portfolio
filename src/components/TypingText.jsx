import { TypeAnimation } from "react-type-animation";

const TypingText = ({ text }) => {
  return (
    <TypeAnimation
      sequence={["", 500, text[0], 1000, text[1], 1000]}
      speed={10}
      style={{
        fontSize: "1.9em",
        fontFamily: "Platypi",
        fontWeight: "300",
        color: "#544f4f",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingText;
