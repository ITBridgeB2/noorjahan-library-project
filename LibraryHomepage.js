// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./styles.css";

// const categories = [
//   { id: 10, title: "Fiction", image: require("./images/fiction.jpg") },
//   { id: 9, title: "history", image: require("./images/history.jpg") },
//   { id: 12, title: "Biography", image: require("./images/biography.jpg") },
//   { id: 11, title: "Mystry", image: require("./images/mystry.jpg") },
//   //{ id: 5, title: "Special Interest", image: require("./images/special.png") },
// //   { id: 6, title: "Regional & Cultural", image: require("./images/regional.png") }
// ];

// export default function LibraryHomepage() {
//   const navigate = useNavigate();

//   const handleCategoryClick = (categoryId) => {
//     navigate(`/category/${categoryId}`);
//   };

//   return (
//     <div className="container">
//       <nav className="navbar">
//         <img src="./../library_logo.png" height={50} width={50} alt="logo" />
//         <h1>Welcome to the Library!</h1>
//         <img src="./../library_logo.png" height={50} width={50} alt="logo" />
//       </nav>

//       <div className="categories">
//         {categories.map((category) => (
//           <button
//             key={category.id}
//             className="card"
//             onClick={() => handleCategoryClick(category.id)}
//           >
//             <img src={category.image} className="category-image" alt={category.title} />
//             <h2>{category.title}</h2>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }







import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: 10, title: "Fiction", image: require("./images/fiction.jpg") },
  { id: 9, title: "History", image: require("./images/history.jpg") },
  { id: 12, title: "Biography", image: require("./images/biography.jpg") },
  { id: 11, title: "Mystery", image: require("./images/mystry.jpg") },
];

export default function LibraryHomepage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
        <img src="./../library_logo.png" height={50} width={50} alt="logo" />
        <h1>Welcome to the Library!</h1>
        <img src="./../library_logo.png" height={50} width={50} alt="logo" />
      </nav>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => navigate(`/category/${category.id}`)}
            style={{
              width: "200px",
              height: "250px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              cursor: "pointer",
              textAlign: "center",
              backgroundColor: "#f5f5f5",
            }}
          >
            <img src={category.image} alt={category.title} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "6px" }} />
            <h2>{category.title}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}
