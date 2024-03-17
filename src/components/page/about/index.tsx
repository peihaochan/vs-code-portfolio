import React, { useState, useEffect } from "react";
import { fullAboutMeString } from "../../../constants/strings";

const AboutPage: React.FC = () => {
  const [aboutMeString, setAboutMeString] = useState<string>("");
  const [typingIndex, setTypingIndex] = useState<number>(0);
  const [showFullString, setShowFullString] = useState<boolean>(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (!showFullString) {
        setAboutMeString(fullAboutMeString.substring(0, typingIndex));
        setTypingIndex((prevIndex) => prevIndex + 1);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [typingIndex, showFullString]);

  const handleShowFullString = () => {
    setShowFullString(true);
    setAboutMeString(fullAboutMeString);
  };

  return (
    <div className={`flex font-fira justify-center items-center flex-col`}>
      <div className="w-[75vw] mt-10">
        {aboutMeString}
        {!showFullString && (
          <span
            style={{
              visibility:
                typingIndex < fullAboutMeString.length ? "visible" : "hidden",
            }}
          >
            {" "}
            |
          </span>
        )}
      </div>
      {!showFullString && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[150px] focus:outline-none focus:shadow-outline mt-10"
          type="submit"
          onClick={() => handleShowFullString()}
        >
          Show All
        </button>
      )}
    </div>
  );
};

export default AboutPage;
