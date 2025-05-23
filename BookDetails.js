// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import "./styles.css";

// export default function BookDetails() {
//   const { bookId } = useParams();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     title: "",
//     author: "",
//     genre: "",
//     publication_year: "",
//   });

//  useEffect(() => {
//   const fetchBookDetails = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/books/${bookId}`);
//       console.log("Fetched Book Details: ", response.data); // Debugging line
//       setFormData(response.data);
//     } catch (error) {
//       console.error("Error fetching book details:", error.message);
//     }
//   };

//   fetchBookDetails(); // <-- Ensure this function gets called

// }, [bookId]); // Include bookId in the dependency array to refetch when it changes


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:5000/books/${bookId}`, formData);
//       alert("Book details updated successfully!");
//       navigate(-1); // Navigate back to the previous page
//     } catch (error) {
//       console.error("Error updating book details:", error.message);
//     }
//   };

//   return (
//     <div className="container">
//       <nav className="navbar">
//         <div className="btn" onClick={() => navigate(-1)}>
//           Back to Book List
//         </div>
//         <h2>Edit Book Details</h2>
//         <div></div>
//       </nav>

//       <form onSubmit={handleUpdate}>
//         <table>
//           <tbody>
//             <tr>
//               <td>Title:</td>
//               <td>
//                 <input
//                   type="text"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   placeholder="Enter title here"
//                   required
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td>Author:</td>
//               <td>
//                 <input
//                   type="text"
//                   name="author"
//                   value={formData.author}
//                   onChange={handleChange}
//                   placeholder="Enter Author here"
//                   required
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td>Genre:</td>
//               <td>
//                 <input
//                   type="text"
//                   name="genre"
//                   value={formData.genre}
//                   onChange={handleChange}
//                   placeholder="Enter genre here"
//                   required
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td>Publication Year:</td>
//               <td>
//                 <input
//                   type="number"
//                   name="publication_year"
//                   value={formData.publication_year}
//                   onChange={handleChange}
//                   placeholder="publication year"
//                   required
//                 />
//               </td>
//             </tr>
//             <tr><td colSpan={2} align="center"><button type="submit" className="btn1">Update Book</button></td></tr>
//           </tbody>
//         </table>
        
//       </form>
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
 import "./styles.css";

export default function BookDetails() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    publication_year: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/books/${bookId}`);
        setFormData(res.data);
      } catch (err) {
        console.error("Error loading book:", err.message);
      }
    };
    fetchData();
  }, [bookId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/books/${bookId}`, formData);
      alert("Book updated successfully!");
      navigate(-1);
    } catch (err) {
      console.error("Update error:", err.message);
      alert("Failed to update.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <button onClick={() => navigate(-1)} style={{ padding: "10px 20px" }}>Back</button>
        <h2>Edit Book</h2>
        <div></div>
      </nav>

      <form onSubmit={handleUpdate} style={{ maxWidth: "500px", margin: "auto" }}>
        {["title", "author", "genre", "publication_year"].map((field) => (
          <div key={field} style={{ marginBottom: "15px" }}>
            <label>{field.replace("_", " ").toUpperCase()}:</label>
            <input
              type={field === "publication_year" ? "number" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              required
            />
          </div>
        ))}
        <button type="submit" style={{ padding: "10px 20px", width: "100%" }}>Update Book</button>
      </form>
    </div>
  );
}
