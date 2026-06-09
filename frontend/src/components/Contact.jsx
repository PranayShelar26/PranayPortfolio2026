import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ThankYouPopup = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    {/* Backdrop */}
    <div
      className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    />
    {/* Modal */}
    <div className="relative z-10 bg-[#2C2C2C] border border-[#6E6C6C] rounded-2xl px-10 py-12 flex flex-col items-center gap-4 max-w-sm w-[90%] shadow-[0_0_40px_#8D29B2]">
      {/* Icon */}
      <div className="w-16 h-16 rounded-full bg-[#9431DC]/20 border border-[#9431DC] flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 13L9 17L19 7" stroke="#9431DC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h2 className="font-BarlowCondensed text-white text-3xl font-bold uppercase tracking-wide text-center">
        Message Sent!
      </h2>
      <p className="font-HankenGrotesk text-[#D1CFCF] text-center text-base">
        Thanks for reaching out. I'll get back to you as soon as possible.
      </p>
      <button
        onClick={onClose}
        className="mt-2 w-full py-2 rounded-md bg-[#9431DC] hover:bg-[#b758fa] transition ease-in-out font-BarlowCondensed font-bold text-white text-xl uppercase shadow-[0_0_20px_#8D29B2]"
      >
        Close
      </button>
    </div>
  </div>
);

export const Contact = () => {
  const [submitting, setisSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data) => {
    setisSubmitting(true);
    try {
      await axios.post("http://localhost:3000/contact", {
        username: data.username,
        email: data.email,
        message: data.message,
      });
    } catch (e) {
      console.log(e);
      alert("Error submitting form!");
    }
    setisSubmitting(false);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: "", email: "", message: "" });
      setShowPopup(true);
    }
  }, [formState, reset, formState.isSubmitSuccessful]);

  return (
    <>
      {showPopup && <ThankYouPopup onClose={() => setShowPopup(false)} />}

      <div id="contact" className="bg-[#202020] lg:px-[160px] py-5 lg:py-[60px] overflow-hidden h-auto w-auto gap-5 flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="flex flex-col flex-1 gap-2 py-5 px-4 md:py-0 md:px-0">
          <div className="font-BarlowCondensed leading-tight md:leading-[100px] text-[80px] md:text-[100px] font-extrabold text-white">
            READY TO TALK NEW PROJECT
          </div>
          <div className="flex justify-center">
            <div className="h-[160px] bg-white w-[5px]"></div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center">
              <div className="font-HankenGrotesk text-[20px] font-medium text-[#D1CFCF]">Phone</div>
              <div className="font-BarlowCondensed text-[24px] font-bold text-white">+44 07874040134</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-HankenGrotesk text-[20px] font-medium text-[#D1CFCF]">Email</div>
              <div className="font-BarlowCondensed text-[24px] font-bold text-white">shelarpranay2611@gmail.com</div>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="flex flex-col flex-1 gap-[30px] mx-2 my-2 md:mx-0 md:my-0 px-4 md:px-[50px] py-5 md:py-[40px] bg-[#2C2C2C] border border-[#6E6C6C]">
          <div className="font-BarlowCondensed text-[32px] font-bold text-white">LET'S WORK TOGETHER</div>
          <div>
            <form method="POST" onSubmit={handleSubmit(onSubmit)} className="text-white flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="font-BarlowCondensed text-[28px] font-semibold">Full name</label>
                <input
                  className="w-full font-HankenGrotesk bg-[#424040] p-2 rounded-md"
                  {...register("username", {
                    required: { value: true, message: "This field is required" },
                    pattern: { value: /^[A-Za-z\s]+$/, message: "Username should not include numbers or special characters" },
                  })}
                  type="text"
                  name="username"
                />
                {errors.username && <p className="text-red-500">{errors.username.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="font-BarlowCondensed text-[28px] font-semibold">Email</label>
                <input
                  className="w-full font-HankenGrotesk bg-[#424040] p-2 rounded-md"
                  {...register("email", {
                    required: { value: true, message: "This field is required" },
                    pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email address" },
                  })}
                  type="email"
                  name="email"
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="message" className="font-BarlowCondensed text-[28px] font-semibold">Message</label>
                <textarea
                  className="w-full font-HankenGrotesk bg-[#424040] p-2 rounded-md"
                  name="message"
                  rows={5}
                  {...register("message", {
                    required: { value: true, message: "This field is empty" },
                  })}
                />
                {errors.message && <p className="text-red-500">{errors.message.message}</p>}
              </div>
              <div className="pt-2">
                <button
                  disabled={submitting}
                  className="bg-[#9431DC] group w-full py-3 rounded-md shadow-[0_0_20px_#8D29B2] text-[28px] hover:bg-[#b758fa] transition ease-in-out hover:shadow-[#b758fa]"
                >
                  <span className="inline-block font-BarlowCondensed font-bold text-[28px] tracking-wide uppercase">
                    {submitting ? "Submitting..." : "Submit"}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};