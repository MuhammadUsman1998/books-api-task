import React from "react";
import "./booksapi.css";
import Input from "./Input";
function Header() {
  return (
    <div>
      <div className='header '>
        <i className='fa-solid fa-book fa-2x'></i>
        <h1>Books Api</h1>
      </div>
      <Input />
    </div>
  );
}

export default Header;
