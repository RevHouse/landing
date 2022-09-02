import "./contact.scss";
import byot from "../../assets/byot.svg";
import React from "react";
import { useState } from "react";

import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const [data, setData] = useState({
    user_name: "",
    user_email: "",
    user_cellphone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("AADAD", e.target);
    emailjs.sendForm(
      "service_dhho2l3",
      "template_xewzdum",
      e.target,
      "UEkeVlV2sdq7biKD8"
    );
    Swal.fire({
      title: "success!",
      text: "Email sent successfully",
      icon: "success",
      confirmButtonText: "Ok",
    });
    setData({
      user_name: "",
      user_email: "",
      user_cellphone: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section className="form-box-container" id="form-box-container">
      <div className="form-box">
        <h1>Lift Off Now</h1>
        <div className="content">
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-item">
              <label> Name and Surname </label>
              <input
                type="text"
                placeholder="Bill Gates"
                value={data.user_name}
                id="user_name"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-item">
              <label> Email </label>
              <input
                type="email"
                placeholder="bill@gates.com"
                value={data.user_email}
                id="user_email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-item">
              <label> Phone Number </label>
              <input
                type="tel"
                placeholder="555-555-5555"
                value={data.user_cellphone}
                id="user_cellphone"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-item-area">
              <label> Message </label>
              <textarea
                placeholder="Your message here..."
                value={data.message}
                id="message"
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit"> Send </button>
          </form>
          <img src={byot} className="byot-img" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
