import React, { useState } from "react";
import "./ConnectSection.css";

const ConnectSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Email: ${email}`);
    setEmail("");
  };

  return (
    <div className="connect-section">
      {/* Left Aligned Title */}
      <h2 className="connect-title">Build skills, connect.</h2>

      {/* Right Aligned Form */}
      <div className="connect-wrapper">
        <form className="connect-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="connect-button" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConnectSection;
