import Link from "next/link";
import notFoundSvg from "../assets/notFound.svg";
import Image from "next/image";

const notFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5 mt-[-10px]">
      <Image src={notFoundSvg} alt="Not Found" width={400} height={400} />
      <p className="text-base md:text-lg lg:text-xl">
        404 - The page you're looking for does not exist.
      </p>
      <Link href="/" className="text-blue-500 hover:underline">
        <button className="bg-indigo-500 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded">
          Go back to homepage
        </button>
      </Link>
    </div>
  );
};

export default notFound;
