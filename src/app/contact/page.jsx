"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import TypingText from "@/components/TypingText";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success("Success! Thank you for reaching out.");
          form.current.reset();
        },
        (error) => {
          toast.error(
            "Something went wrong! Please try again or use the email icon below."
          );
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[calc(100vh-6rem)] flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/* TEXT CONTAINER */}
        <div className="h-1/5 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl font-Titi underline decoration-amber-500 font-bold text-white underline-offset-4 decoration-4">
          CONTACT ME
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          className="h-4/5 lg:h-full lg:w-1/2 bg-gradient-to-tl from-rose-300 to-rose-100 rounded lg:text-lg flex flex-col gap-5 lg:gap-6 justify-center p-16 lg:p-24 text-sm mb-3"
          ref={form}
        >
          <input
            name="user_name"
            type="text"
            className="bg-gray-200 rounded  outline-none shadow-xl p-3 text-slate-700 font-semibold placeholder:text-orange-400/70 placeholder:font-medium placeholder:text-sm focus:ring-sky-500 focus:ring-2 caret-indigo-400"
            placeholder="YOUR NAME"
            required
          />
          <input
            name="user_email"
            type="text"
            className="bg-gray-200 rounded  outline-none shadow-xl p-3 text-slate-700 placeholder:text-orange-400/70 italic placeholder:not-italic placeholder:text-sm placeholder:font-medium focus:ring-sky-500 focus:ring-2 caret-indigo-400"
            placeholder="YOUR EMAIL ADDRESS"
            required
          />
          <textarea
            className="bg-gray-200 rounded  outline-none shadow-xl p-3 text-slate-700 h-48 resize-none placeholder:text-orange-400/70 placeholder:text-sm placeholder:font-medium focus:ring-sky-500 focus:ring-2 caret-indigo-400"
            placeholder="YOUR MESSAGE"
            name="user_message"
          />

          <button
            type="submit"
            className="bg-purple-200 rounded font-semibold text-gray-600 p-4"
          >
            Send
          </button>
          <span className="flex gap-2 italic items-center">
            Or shoot me an email directly{" "}
            <Link
              href="mailto:jaswoo73@gmail.com"
              target="_blank"
              className="hover:scale-[1.1] transition-all bg-white p-1 rounded-full shadow-md hover:shadow-none"
            >
              <Image
                src="/gmail.png"
                alt="Gmail"
                width={24}
                height={24}
                className="transition-transform hover:rotate-[360deg]"
              />
            </Link>
          </span>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
