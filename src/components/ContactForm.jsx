import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("모든 항목을 입력해 주세요.");
      return;
    }
    alert("메시지가 성공적으로 전송되었습니다.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div>
        <label>이름: </label><br />
        <input type="text" placeholder="김동국" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label>이메일: </label><br />
        <input type="email" placeholder="example@dgu.ac.kr" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <label>메시지:</label>
        <textarea value={message} onChange={e => setMessage(e.target.value)} />
      </div>
      <button type="submit">보내기</button>
    </form>
  );
};

export default ContactForm; 