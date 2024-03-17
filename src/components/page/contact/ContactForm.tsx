import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [helperMessage, setHelperMessage] = useState<string>("");

  const errorMsg = "Please fill in all required fields";
  const successMsg = "Email Sent";
  const failEmail = "Failed to send email";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (helperMessage !== "") {
        setHelperMessage("");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [helperMessage]);

  const handleNameChange = useCallback((name: string) => {
    setName(name);
  }, []);

  const handleEmailChange = useCallback((email: string) => {
    setEmail(email);
  }, []);

  const handleMessageChange = useCallback((message: string) => {
    setMessage(message);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      setHelperMessage(errorMsg);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/send-email", {
        name,
        email,
        message,
      });
      if (response.status === 200) {
        console.log("Email sent successfully");
        setName("");
        setEmail("");
        setMessage("");
        setHelperMessage(successMsg);
      } else {
        console.error(failEmail);
        setHelperMessage(failEmail);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setHelperMessage(failEmail);
    }
  };
  return (
    <div className="mx-auto tablet:w-2/3 w-screen p-5 flex justify-center align-center">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="text-white px-8 pt-5 pb-8 mb-4 w-[50vw] desktop:w-full font-fira"
      >
        <div className="pb-4 constClass">Or send me a Message!</div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border bg-[#2d2d30] hover:border-[#38bdf8] cursor-pointer rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border bg-[#2d2d30] hover:border-[#38bdf8] cursor-pointer rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border hover:border-[#38bdf8] cursor-pointer bg-[#2d2d30] rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your message"
            value={message}
            onChange={(e) => handleMessageChange(e.target.value)}
          />
        </div>
        {helperMessage && (
          <div
            className={`font-fira pb-4 text-xs ${
              helperMessage === successMsg
                ? "stringConsoleClass"
                : "exportTextClass"
            }`}
          >
            {helperMessage}
          </div>
        )}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
