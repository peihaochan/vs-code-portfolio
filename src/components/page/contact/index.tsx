import React from "react";
import Social from "./Social";
import ContactForm from "./ContactForm";

const ContactPage: React.FC = () => {
  return (
    <div className={`flex tablet:flex-row flex-col`}>
      <Social />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
