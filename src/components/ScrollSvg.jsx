import { motion } from "framer-motion";

const ScrollSvg = () => {
  return (
    <>
      <motion.svg
        width="32px"
        height="32px"
        class="home__scroll-mouse"
        viewBox="0 0 247 390"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "1.5",
        }}
      >
        <motion.path
          class="wheel"
          d="M123.359,79.775l0,72.843"
          style={{
            fill: "none",
            stroke: "#4c4747",
            strokeWidth: "20px",
          }}
          animate={{ y: [0, 50] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        ></motion.path>
        <path
          id="mouse"
          d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
          style={{
            fill: "none",
            stroke: "#4c4747",
            strokeWidth: "20px",
          }}
        ></path>
      </motion.svg>
    </>
  );
};

// const ScrollSvg = () => {
//   return (
//     <motion.svg
//       initial={{ opacity: 0.2, y: 0 }}
//       animate={{ opacity: 1, y: "10px" }}
//       transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       width={50}
//       height={50}
//     >
//       <path
//         d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
//         stroke="#000000"
//         strokeWidth="1"
//       ></path>
//       <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
//       <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
//     </motion.svg>
//   );
// };
export default ScrollSvg;
