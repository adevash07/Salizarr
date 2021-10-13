import React from "react";
import ContactSection from "../../components/contactSection/ContactSection";
import "./contactus.scss";

export default function Contactus() {
  return (
    <div className='contactus' contactPage={true}>
      <ContactSection />
    </div>
  );
}
