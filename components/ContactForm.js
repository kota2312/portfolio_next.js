"use client";

import { useState } from "react";

function ContactForm() {
    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [company, setCompany] = useState("");
    const [department, setDepartment] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lastname, firstname, company, department, tel, email, message }),
      });

      if (response.ok) {
        setStatus("success");
        setLastname("");
        setFirstname("");
        setCompany("");
        setDepartment("");
        setTel("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <div className="ly_contact_cont">
      <form onSubmit={handleSubmit} className="bl_contact_form">
      <fieldset className="bl_contact_columns_2">
            <div className="bl_contact_lastname">
                <label className="bl_contact_label"><span>お名前（姓）</span><span className="hp_contact_require"></span></label>
                <input
                    type="text"
                    className="bl_contact_input"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                />
            </div>
            <div className="bl_contact_firstname">
                <label className="bl_contact_label"><span>お名前（名）</span><span className="hp_contact_require"></span></label>
                <input
                    type="text"
                    className="bl_contact_input"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                />
            </div>
        </fieldset>
        <fieldset className="bl_contact_columns_1">
            <div className="bl_contact_company">
                <label className="bl_contact_label"><span>会社名</span><span className="hp_contact_require"></span></label>
                <input
                    type="text"
                    className="bl_contact_input"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                />
            </div>
        </fieldset>
        <fieldset className="bl_contact_columns_1">
            <div className="bl_contact_department">
                <label className="bl_contact_label"><span>事業部</span></label>
                <input
                    type="text"
                    className="bl_contact_input"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                />
            </div>
        </fieldset>
        <fieldset className="bl_contact_columns_1">
            <div className="bl_contact_email">
                <label className="bl_contact_label"><span>メールアドレス</span><span className="hp_contact_require"></span></label>
                <input
                    type="email"
                    className="bl_contact_input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
        </fieldset>
        <fieldset className="bl_contact_columns_1">
            <div className="bl_contact_tel">
                <label className="bl_contact_label">電話番号</label>
                <input
                    type="tel"
                    className="bl_contact_input"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                />
            </div>
        </fieldset>
        <fieldset  className="bl_contact_columns_1">
            <div className="bl_contact_message">
                <label className="bl_contact_label"><span>本文</span><span className="hp_contact_require"></span></label>
                <textarea
                    value={message}
                    className="bl_contact_input"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
            </div>
        </fieldset>
        <button type="submit" className="el_btn el_btn__contact">送信する</button>
      </form>
      {status === "success" && <p>Thank you! Your message has been sent.</p>}
      {status === "error" && <p>Sorry, there was an error sending your message.</p>}
    </div>
  );
}

export default ContactForm;
