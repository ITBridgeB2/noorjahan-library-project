// import { Route, Routes } from "react-router-dom";
// import LibraryHomepage from "./LibraryHomepage";
// import NewBookForm from "./newBookForm";
// import BookDetails from "./Bookdetails";
// import BooksList from "./BookList";

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<LibraryHomepage />} />
//       <Route path="/book" element={<BooksList />} />
//       <Route path="/category/:categoryId/add" element={<NewBookForm />} />
//       <Route path="/category/:categoryId" element={<BooksList />} />
//       <Route path="/books/:id" element={<BookDetails />} />
//     </Routes>
//   );
// };

// export default App;




import { Route, Routes } from "react-router-dom";
import LibraryHomepage from "./LibraryHomepage";
import NewBookForm from "./NewBookForm";
import BookDetails from "./BookDetails";
import BooksList from "./BooksList";

const App = () => {
  return (
    <Routes>
      {/* Home page route */}
      <Route path="/" element={<LibraryHomepage />} />

      {/* Category-based books list */}
      <Route path="/category/:categoryId" element={<BooksList />} />

      {/* Add book form route for specific category */}
      <Route path="/category/:categoryId/add" element={<NewBookForm />} />

      {/* View/edit a specific book */}
      <Route path="/books/:bookId" element={<BookDetails />} />
    </Routes>
  );
};

export default App;
