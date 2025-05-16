// // import React, { useEffect, useState } from "react";
// // import { useNavigate, useParams } from "react-router-dom";
// // import axios from "axios";
// // import "./styles.css";

// // // Category mapping (same as in your homepage)
// // const categories = [
// //   { id: 10, title: "Fiction" },
// //   { id: 9, title: "history" },
// //   { id: 11, title: "Mystry" },
// //   { id: 12, title: "Biography" },
// // //   { id: 5, title: "Special Interest" },
// // //   { id: 6, title: "Regional & Cultural" },
// //  ];

// // export default function BooksList() {
// //   const navigate = useNavigate();
// //   const { categoryId } = useParams();
// //   const [books, setBooks] = useState([]);
  
// //   // Find category name based on the categoryId from params
// //   const categoryName = categories.find((cat) => cat.id === Number(categoryId))?.title || "Unknown Category";

// //   // Fetch books from the backend
// //   const fetchBooks = async () => {
// //     try {
// //       const response = await axios.get(`http://localhost:5000/category/${categoryId}`);
// //       setBooks(response.data);
// //     } catch (error) {
// //       console.error("Error fetching books:", error.message);
// //     }
// //   };

// //   // Fetch books when the component is mounted or categoryId changes
// //   useEffect(() => {
// //     fetchBooks();
// //   }, [categoryId]);
// // const handleDelete = async (bookId) => {
// //   console.log("Attempting to delete book with ID:", bookId); // Log the bookId before request
// //   if (window.confirm("Are you sure you want to delete this book?")) {
// //     try {
// //       await axios.delete(`http://localhost:5000/books/${bookId}`);
// //       alert("Book deleted successfully!");
// //       fetchBooks(); // Refresh the list
// //     } catch (error) {
// //       console.error("Error deleting book:", error.message);
// //     }
// //   }
// // };

// //   return (
// //     <div className="container">
// //       <nav className="navbar">
// //         <div className="btn" onClick={() => navigate("/")}>
// //           Back to Library
// //         </div>
// //         <h1>Books in Category: {categoryName}</h1>
// //         <div className="btn" onClick={() => navigate(`/category/${categoryId}/add`)}>
// //           Add Books here
// //         </div>
// //       </nav>

// //       <div className="categories">
// //         {books.length > 0 ? (
// //           books.map((book) => (
// //             <div key={book.id} className="card">
// //               <h3>{book.title}</h3>
// //               <p>Author: {book.author}</p>
// //               <p>Genre: {book.genre}</p>
// //                <p> publication-year: {book. publication_year}</p>
             
// //               <div style={{ display: "flex", paddingLeft: "10px", gap: "100px" }}>
// //              <button className="btn1" onClick={() => {handleDelete(book.id)}}>Delete</button>

// //               <button className="btn1" onClick={() => navigate(`/books/${book.id}`)}>View</button>

// //               </div>
// //             </div>
// //           ))
// //         ) : (
// //           <p>No books found in this category.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }











// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import "./styles.css";

// // Local mapping for display purposes
// const categories = [
//   { id: 10, title: "Fiction" },
//   { id: 9, title: "History" },
//   { id: 11, title: "Mystery" },
//   { id: 12, title: "Biography" },
// ];

// export default function BooksList() {
//   const navigate = useNavigate();
//   const { categoryId } = useParams();
//   const [books, setBooks] = useState([]);

//   const categoryName =
//     categories.find((cat) => cat.id === Number(categoryId))?.title || "Unknown Category";

//   const fetchBooks = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/books/category/${categoryId}`);
//       setBooks(response.data);
//     } catch (error) {
//       console.error("Error fetching books:", error.message);
//     }
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, [categoryId]);

//   const handleDelete = async (bookId) => {
//     if (window.confirm("Are you sure you want to delete this book?")) {
//       try {
//         await axios.delete(`http://localhost:5000/books/${bookId}`);
//         alert("Book deleted successfully!");
//         fetchBooks(); // Refresh list
//       } catch (error) {
//         console.error("Error deleting book:", error.message);
//       }
//     }
//   };

//   return (
//     <div className="container">
//       <nav className="navbar">
//         <div className="btn" onClick={() => navigate("/")}>
//           Back to Library
//         </div>
//         <h1>Books in Category: {categoryName}</h1>
//         <div className="btn" onClick={() => navigate(`/category/${categoryId}/add`)}>
//           Add Books here
//         </div>
//       </nav>

//       <div className="categories">
//         {books.length > 0 ? (
//           books.map((book) => (
//             <div key={book.id} className="card">
//               <h3>{book.title}</h3>
//               <p>Author: {book.author}</p>
//               <p>Genre: {book.genre}</p>
//               <p>Publication Year: {book.publication_year}</p>
//               <div style={{ display: "flex", paddingLeft: "10px", gap: "100px" }}>
//                 <button className="btn1" onClick={() => handleDelete(book.id)}>
//                   Delete
//                 </button>
//                 <button className="btn1" onClick={() => navigate(`/books/${book.id}`)}>
//                   View
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No books found in this category.</p>
//         )}
//       </div>
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const categories = [
  { id: 10, title: "Fiction" },
  { id: 9, title: "History" },
  { id: 11, title: "Mystery" },
  { id: 12, title: "Biography" },
];

export default function BooksList() {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [books, setBooks] = useState([]);

  const categoryName = categories.find((cat) => cat.id === Number(categoryId))?.title || "Unknown";

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/books/category/${categoryId}`);
        setBooks(res.data);
      } catch (err) {
        console.error("Error fetching books:", err.message);
      }
    };

    fetchBooks();
  }, [categoryId]);

  const handleDelete = async (bookId) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        await axios.delete(`http://localhost:5000/books/${bookId}`);
        alert("Book deleted");
        setBooks((prev) => prev.filter((b) => b.id !== bookId));
      } catch (err) {
        console.error("Delete failed:", err.message);
      }
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <button onClick={() => navigate("/")} style={{ padding: "10px 20px" }}>Back to Library</button>
        <h2>Books in {categoryName}</h2>
        <button onClick={() => navigate(`/category/${categoryId}/add`)} style={{ padding: "10px 20px" }}>Add Book</button>
      </nav>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.id} style={{ width: "250px", border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Genre:</strong> {book.genre}</p>
              <p><strong>Year:</strong> {book.publication_year}</p>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <button onClick={() => navigate(`/books/${book.id}`)} style={{ padding: "5px 10px" }}>Edit</button>
                <button onClick={() => handleDelete(book.id)} style={{ padding: "5px 10px" }}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p>No books available in this category.</p>
        )}
      </div>
    </div>
  );
}
