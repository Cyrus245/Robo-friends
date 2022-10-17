import React from "react";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div>
      <p style={{ color: "white" }}>Copyright &copy;{date} Syrus Sakib.</p>
    </div>
  );
}

export default Footer;
