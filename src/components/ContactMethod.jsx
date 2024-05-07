import { IoMdSend } from "react-icons/io";
import { RiMailSendLine } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

const ContactMethod = ({ method, value }) => {
  return (
    <div
      className={`w-[280px] ring-1 rounded-md p-4 flex flex-col items-center gap-1 ${
        method === "email" ? "ring-indigo-500" : "ring-green-500"
      }`}
    >
      {method === "email" ? (
        <BiLogoGmail size={24} className="text-white" />
      ) : (
        <FaWhatsapp size={24} className="text-white" />
      )}
      <h3 className="text-lg text-white capitalize">{method}</h3>
      <p className="text-gray-500 text-base font-light">{value}</p>
      <Link
        href={
          method === "email"
            ? `mailto:${value}`
            : `https://api.whatsapp.com/send?phone=60173738673`
        }
        target="_blank"
        className="group"
      >
        <span className="flex items-center gap-2 hover:scale-[1.05] transition-all">
          <p className="text-gray-500 text-base font-normal">Contact me </p>
          {method === "email" ? (
            <RiMailSendLine size={20} className="text-neutral-500" />
          ) : (
            <IoMdSend size={20} className="text-neutral-500" />
          )}
        </span>
      </Link>
    </div>
  );
};
export default ContactMethod;
