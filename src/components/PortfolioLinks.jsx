import Link from "next/link";
import { toast } from "react-toastify";

const PortfolioLinks = ({ link, icon, text, id }) => {
  return (
    <Link
      href={link}
      target="_blank"
      onClick={() => {
        if (id === 1 || id === 4) {
          toast.info(
            "Please wait a moment while the app spins back up from a cold start as it is deployed with the Free Tier of Render."
          );
        }
      }}
    >
      <button
        className={`min-w-full p-2 text-sm xl:p-3 md:text-base bg-white text-gray-600 font-semibold rounded shadow-sm  hover:text-white hover:shadow-slate-200 transition-all relative group flex flex-wrap ${
          text === "See Demo"
            ? "shadow-indigo-400 hover:bg-indigo-400"
            : "shadow-gray-500 hover:bg-gray-800"
        }`}
        title={
          id === 1 || id === 4
            ? "Please wait as the app spins up from cold start on first load"
            : undefined
        }
      >
        <span className="flex items-center gap-3">
          {icon}
          {text && <p>{text}</p>}
        </span>
      </button>
    </Link>
  );
};
export default PortfolioLinks;
