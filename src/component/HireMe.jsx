import { useContext, useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { CommonContext, emailConfig } from "../contens";
import { EmailServices, EmailDetails } from "../util/EmailServices";
import CLOSE from "./Close";
import Button from "./Button";
import INPUT from "./Input";
import Toaster from "./Toaster";

const HIREME = () => {
  const { hrDetail, setHrDetails, isHireMe, setIsHireMe, setToster } =
    useContext(CommonContext);

  const [inputError, setInputError] = useState({ email: false, mobile: false });

  const transition = {
    type: "spring",
    bounce: 0.2,
    duration: 0.3,
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setHrDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const errors = {
      email: !hrDetail.email || !hrDetail.email.includes("@"),
      mobile: !hrDetail.mobile || hrDetail.mobile.length < 10,
    };
    setInputError(errors);
    return !errors.email && !errors.mobile;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const emailService = new EmailServices(
      emailConfig.SERVICE_ID,
      emailConfig.TEMPLATE_ID
    );

    const emailDetailsHr = new EmailDetails(
      "Thanks for showing your interest!",
      hrDetail.email,
      "akashbharati2335@gmail.com",
      "Akash",
      `Hi ${hrDetail.email}, thank you! I will contact you at ${hrDetail.mobile}.`
    );

    const emailDetailsMe = new EmailDetails(
      "New HR Interest 🚀",
      "akashbharati2335@gmail.com",
      "akashbharati2335@gmail.com",
      "Akash Bharati",
      `HR Email: ${hrDetail.email}\nMobile: ${hrDetail.mobile}`
    );

    try {
      setIsHireMe(false);
      await emailService.sendMail(emailDetailsHr);
      await emailService.sendMail(emailDetailsMe);
      setHrDetails({ email: "", mobile: "" });
      setToster( {
        Message: `✅ Mail sent successfully!\nPlease check your inbox.`,
        close: true,
        variant: "success",
      } );
    } catch (error) {
      setToster({
        Message: `😮 Opps... maile faild to send`,
        close: true,
        variant: "false",
      });
    }
  };

  return (
    // 👇 Backdrop wrapper (closes modal on outside click)
    <div
      className={`fixed inset-0 z-50 bg-black/50 flex justify-center items-center `}
      onClick={() => setIsHireMe(false)}
    >
      {/* 👇 Modal box (stops inner click from bubbling) */}
      <motion.div
        layout
        transition={transition}
        initial="hidden"
        animate="visible"
        onClick={(e) => e.stopPropagation()} // 🔒 prevent auto-close
        className="relative w-[90%] max-w-3xl p-6 mx-auto mt-10 rounded shadow-lg bg-gradient-to-br from-cyan-700 to-emerald-200 dark:bg-slate-800 text-black dark:text-white"
      >
        {/* ❌ Close Button */}
        <button
          className="absolute top-4 right-4 text-xl text-gray-700 dark:text-white"
          onClick={() => setIsHireMe(false)}
        >
          <CLOSE size={32} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">
          📬 Contact Me (HR Form)
        </h2>

        {/* ✅ Form Starts */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center"
        >
          {/* Email Field */}
          <label className="w-full max-w-md flex items-center gap-2">
            <MdAlternateEmail className="text-xl" />
            <INPUT
              type="email"
              name="email"
              value={hrDetail.email}
              onChange={handleInput}
              placeholder="Enter your email"
              className="w-full p-2 rounded bg-slate-100 dark:bg-slate-700"
            />
          </label>
          {inputError.email && (
            <p className="text-red-500 text-sm">Please enter a valid email.</p>
          )}

          {/* Mobile Field */}
          <label className="w-full max-w-md flex items-center gap-2">
            <FaPhoneAlt className="text-xl" />
            <INPUT
              type="tel"
              name="mobile"
              value={hrDetail.mobile}
              onChange={handleInput}
              placeholder="Enter your phone number"
              className="w-full p-2 rounded bg-slate-100 dark:bg-slate-700"
            />
          </label>
          {inputError.mobile && (
            <p className="text-red-500 text-sm">
              Please enter a valid 10-digit mobile number.
            </p>
          )}

          <Button
            children="Submit"
            className="mt-4 px-6 py-2 bg-primary text-white rounded hover:scale-105 transition-transform"
            event={handleSubmit}
          />
        </form>
      </motion.div>
    </div>
  );
};

export default HIREME;
