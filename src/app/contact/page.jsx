"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import ContactMethod from "@/components/ContactMethod";
import ContactList from "@/components/ContactList";
import { TbFidgetSpinner } from "react-icons/tb";

const ContactPage = () => {
  const form = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setLoading(true);

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
            "Something went wrong! Please try again or email me directly by clicking the email icon below."
          );
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="lg:h-[calc(100vh-6rem)] flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl lg:gap-10">
        {/* TEXT CONTAINER */}
        <div className="h-1/5 lg:h-auto lg:w-1/2 flex flex-col items-center justify-center max-[400px]:text-2xl text-4xl lg:text-6xl font-bold mt-6 gap-4">
          <h1 className="text-white font-Mont uppercase lg:mb-5">Contact me</h1>
          <div className="flex-col lg:hidden">
            <ContactList />
          </div>
          <div className="lg:flex-col gap-4 lg:flex hidden">
            <ContactMethod method="email" value="jaswoo73@gmail.com" />
            <ContactMethod method="whatsapp" value="017-3738673" />
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          className="lg:w-1/2 lg:h-auto mb-2 lg:m-4 bg-gradient-to-tr from-rose-300 to-rose-100 rounded lg:text-lg flex flex-col gap-5 lg:gap-8 justify-center lg:p-6 p-4 px-10 text-sm max-[400px]:mt-0 mt-4 relative"
          ref={form}
        >
          <header className="max-[400px]:text-xl text-2xl md:text-3xl 2xl:text-4xl font-light text-white">
            Leave a message
          </header>
          <input
            name="user_name"
            type="text"
            className="bg-gray-200 rounded outline-none shadow-xl max-[400px]:p-2 p-3 text-slate-700 font-semibold placeholder:text-gray-400/70 placeholder:font-medium placeholder:text-sm focus:ring-sky-500 focus:ring-2 caret-indigo-400 z-10"
            placeholder="YOUR NAME"
            required
          />
          <input
            name="user_email"
            type="email"
            className="bg-gray-200 rounded outline-none shadow-xl max-[400px]:p-2 p-3 text-slate-700 placeholder:text-gray-400/70 placeholder:text-sm placeholder:font-medium focus:ring-sky-500 focus:ring-2 caret-indigo-400 relative z-10"
            placeholder="YOUR EMAIL ADDRESS"
            required
          />
          <textarea
            className="bg-gray-200 rounded  outline-none shadow-xl max-[400px]:p-2 p-3 text-slate-700 max-[400px]:h-32 h-48 resize-none placeholder:text-gray-400/70 placeholder:text-sm placeholder:font-medium focus:ring-sky-500 focus:ring-2 caret-indigo-400 z-10"
            placeholder="YOUR MESSAGE"
            name="user_message"
          />

          <button
            type="submit"
            className="bg-purple-300 rounded font-semibold text-white p-2 hover:bg-purple-400 grid place-items-center h-10"
          >
            {loading ? (
              <TbFidgetSpinner size={20} className="animate-spin" />
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
