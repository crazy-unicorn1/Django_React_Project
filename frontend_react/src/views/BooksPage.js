import { useEffect, useState } from "react";
import useAxios from "../utils/useAxios";
import Navbar from "../components/Navbar";

function BooksPage() {
  const [books, setBooks] = useState([]);
  const api = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/books/");
        console.log(response.data.response)
        setBooks(response.data.response);
      } catch {
        setBooks({});
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    <Navbar/>
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>Title:</strong> {book.title} <br />
            <strong>Author:</strong> {book.author}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default BooksPage;
