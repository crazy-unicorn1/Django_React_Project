import { useEffect, useState } from "react";
import useAxios from "../utils/useAxios";
import Navbar from "../components/Navbar";
import Modal from "react-modal";

function BooksPage() {
  const [books, setBooks] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState({ id: null, title: "", author: "" });
  const [newBook, setNewBook] = useState({ title: "", author: "" });
  const api = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/books/");
        setBooks(response.data.response);
      } catch {
        setBooks({});
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddBook = async () => {
    try {
      const response = await api.post("/books/", newBook);
      setBooks([...books, response.data.response]);
      setNewBook({ title: "", author: "" });
      setIsAddModalOpen(false);
    } catch {
      alert("Error adding book");
    }
  };

  const handleEditBook = async () => {
    try {
      const response = await api.put(`/books/${currentBook.id}/`, currentBook);
      console.log(response)
      setBooks(books.map(book => (book.id === currentBook.id ? currentBook : book)));
      setCurrentBook({ id: null, title: "", author: "" });
      setIsEditModalOpen(false);
    } catch {
      alert("Error editing book");
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await api.delete(`/books/${id}/`);
      setBooks(books.filter(book => book.id !== id));
    } catch {
      alert("Error deleting book");
    }
  };

  return (
    <>
    <Navbar/>
    <div>
      <h1>Book List</h1>
      <button onClick={() => setIsAddModalOpen(true)}>Add Book</button>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <b>{book.title}</b> by {book.author}
            <button onClick={() => { setCurrentBook(book); setIsEditModalOpen(true); }}>Edit</button>
            <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <Modal isOpen={isAddModalOpen} onRequestClose={() => setIsAddModalOpen(false)}>
        <h2>Add Book</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleAddBook(); }}>
          <input
            type="text"
            placeholder="Title"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Author"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
            required
          />
          <button type="submit">Save</button>
        </form>
      </Modal>

      <Modal isOpen={isEditModalOpen} onRequestClose={() => setIsEditModalOpen(false)}>
        <h2>Edit Book</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleEditBook(); }}>
          <input
            type="text"
            placeholder="Title"
            value={currentBook.title}
            onChange={(e) => setCurrentBook({ ...currentBook, title: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Author"
            value={currentBook.author}
            onChange={(e) => setCurrentBook({ ...currentBook, author: e.target.value })}
            required
          />
          <button type="submit">Save</button>
        </form>
      </Modal>

    </div>
    </>
  );
}

export default BooksPage;
