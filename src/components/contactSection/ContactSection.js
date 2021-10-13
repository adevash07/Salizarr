import { useState } from "react";
import Form from "../form/Form";
import { formData } from "./formData";
import "./contactSection.scss";
import Dropdown from "../dropdown/Dropdown";

const ContactSection = ({ contactPage }) => {
  const [contactForm, setContactForm] = useState({
    name: "",
    company: "",
    email: "",
    phoneNo: "",
    message: "",
  });

  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);

  return (
    <div className={`contactSection ${contactPage && "contact"}`}>
      <div className="contactSection__container container">
        <h2 className="contactSection__header header2">Contact Form</h2>
        <div className="contactSection__info">
          <h2 className="contactSection__header header2">Contact Form</h2>
          <p className="contactSection__paragraph">
            Drop us a line and we’ll get back to you shortly.
          </p>
          <div className="contactSection__inquires">
            <h3 className="contactSection__secondaryHeader header3">
              For Quick Inquiries
            </h3>
            <a href="tel:+2345678933" className="linkTag">
              +2345678933
            </a>
            <a href="tel:+2345678933" className="linkTag">
              +2345678933
            </a>
          </div>
          <div className="contactSection__offices">
            <h3 className="contactSection__secondaryHeader header3">Offices</h3>
            <Dropdown
              header="United States"
              state={dropdown1}
              stateFunc={setDropdown1}
              content="954 Harvest Circle Buffalo Glove, IL 60089"
            />
            <Dropdown
              header="Australia"
              state={dropdown2}
              stateFunc={setDropdown2}
              content="954 Harvest Circle Buffalo Glove, IL 60089"
            />
            <Dropdown
              header="Belarus"
              state={dropdown3}
              stateFunc={setDropdown3}
              content="954 Harvest Circle Buffalo Glove, IL 60089"
            />
          </div>
        </div>
        <Form state={contactForm} stateFunc={setContactForm} data={formData} />
      </div>
    </div>
  );
};

export default ContactSection;
