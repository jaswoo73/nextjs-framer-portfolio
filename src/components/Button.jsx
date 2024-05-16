const Button = ({ className, url, icon, text }) => {
  return (
    <button
      className={`p-4 rounded-lg font-bold shadow-md bg-slate-800 text-white hover:text-black text-sm md:text-base transition-all ${
        className || ""
      }`}
    >
      <a href={url} className="flex items-center gap-2 justify-center">
        <span className="w-2/10">{icon}</span>
        <span className="w-8/10">{text}</span>
      </a>
    </button>
  );
};
export default Button;
