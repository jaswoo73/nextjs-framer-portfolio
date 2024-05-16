import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa6";

const ContactList = () => {
  return (
    <>
      <Link
        href={"mailto:jaswoo73@gmail.com"}
        target="_blank"
        className="w-auto ring-1 rounded-md p-2 flex items-center gap-4 hover:bg-indigo-400 hover:text-white group mb-4 group"
      >
        <BiLogoGmail
          size={24}
          className="text-white group-hover:animate-pulse"
        />
        <p className="text-gray-500 text-base font-light group-hover:text-white">
          jaswoo73@gmail.com
        </p>
      </Link>
      <Link
        href={`https://api.whatsapp.com/send?phone=60173738673`}
        target="_blank"
        className="w-auto ring-1 ring-green-500 rounded-md p-2 flex items-center gap-4 hover:bg-green-500 hover:text-white group mb-4"
      >
        <FaWhatsapp
          size={24}
          className="text-white  group-hover:animate-pulse"
        />
        <p className="text-gray-500 text-base font-light group-hover:text-white">
          017-3738673
        </p>
      </Link>
    </>
  );
};
export default ContactList;
