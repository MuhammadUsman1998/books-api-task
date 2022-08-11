// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import AutoComplete from "../src/autoComplete";
// import axios from "axios";
// import "./booksapi.css";
// function BooksApi() {
//   const [searchField, setSearchField] = useState("");
//   const [booksData, setBooksData] = useState([]);

//   const handleInput = (e) => {
//     console.log(e.target.value);
//     setSearchField(e.target.value);
//   };
//   let params = useParams();

//   const searchBook = async (e) => {
//     e.preventDefault();
//     setSearchField("");
//     const res = await fetch(
//       "https://www.googleapis.com/books/v1/volumes?q=javascript",
//       {
//         method: "GET",
//         headers: {
//           "content-Type": "application/json",
//         },
//       }
//     );
//     var data = await res.json();
//     console.log(data);
//   };

//   return (
//     <div className=''>
//       <form className='forms' onSubmit={searchBook}>
//         <input type='text' onChange={handleInput} value={searchField} />
//         <button className='btn' type='submit'>
//           Search
//         </button>
//       </form>
//     </div>
//   );
// }

// export default BooksApi;
