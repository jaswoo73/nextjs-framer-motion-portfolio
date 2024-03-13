"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const text = "Say Hello";
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
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
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
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
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <motion.div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}{" "}
            😎
          </motion.div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded text-xl flex flex-col gap-6 justify-center p-24"
          ref={form}
        >
          <span>Dear Jason,</span>
          <textarea
            rows={10}
            className="bg-red-100 border-b-2 border-b-black outline-none resize-none shadow-xl p-2"
            placeholder="Please feel free to provide details, questions, or comments about the job opportunity. Much appreciated."
            name="user_message"
          />
          <span>My email address is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-red-100 border-b-2 border-b-black outline-none shadow-xl p-2"
            placeholder="Your email address"
          />
          <span>Regards,</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Success! Thank you for reaching out! 😁
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong...😔
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
