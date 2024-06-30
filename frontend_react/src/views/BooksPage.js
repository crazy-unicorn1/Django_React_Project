import { useEffect, useState } from "react";
import useAxios from "../utils/useAxios";
import Modal from "react-modal";

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import BookIcon from "@mui/icons-material/Book";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "../components/AppAppBar";

function BooksPage() {
  const defaultTheme = createTheme();

  const [books, setBooks] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState({
    id: null,
    title: "",
    author: "",
  });
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
      console.log(response);
      setBooks(
        books.map((book) => (book.id === currentBook.id ? currentBook : book))
      );
      setCurrentBook({ id: null, title: "", author: "" });
      setIsEditModalOpen(false);
    } catch {
      alert("Error editing book");
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await api.delete(`/books/${id}/`);
      setBooks(books.filter((book) => book.id !== id));
    } catch {
      alert("Error deleting book");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppAppBar />
      <div style={{ marginTop: "130px" }}>
        <h1 style={{ textAlign: "center" }}>Book List</h1>

        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "16px",
            }}
          >
            <Button variant="outlined" onClick={() => setIsAddModalOpen(true)}>
              Add Book
            </Button>
          </Box>
          {books.map((book) => (
            <ListItem key={book.id}>
              <ListItemAvatar>
                <Avatar>
                  <BookIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={book.title} secondary={book.author} />
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => {
                  setCurrentBook(book);
                  setIsEditModalOpen(true);
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteBook(book.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
        {/* <ul>
        {books.map((book) => (
          <li key={book.id}>
            <b>{book.title}</b> by {book.author}
            <button onClick={() => { setCurrentBook(book); setIsEditModalOpen(true); }}>Edit</button>
            <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul> */}

        <Modal
          isOpen={isAddModalOpen}
          onRequestClose={() => setIsAddModalOpen(false)}
          style={{
            content: {
              marginTop: '90px',
            },
          }}
        >
          <h2>Add Book</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddBook();
            }}
          >
            <input
              type="text"
              placeholder="Title"
              value={newBook.title}
              onChange={(e) =>
                setNewBook({ ...newBook, title: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Author"
              value={newBook.author}
              onChange={(e) =>
                setNewBook({ ...newBook, author: e.target.value })
              }
              required
            />
            <button type="submit">Save</button>
          </form>
        </Modal>

        <Modal
          isOpen={isEditModalOpen}
          onRequestClose={() => setIsEditModalOpen(false)}
          style={{
            content: {
              marginTop: '90px',
            },
          }}
        >
          <h2>Edit Book</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEditBook();
            }}
          >
            <input
              type="text"
              placeholder="Title"
              value={currentBook.title}
              onChange={(e) =>
                setCurrentBook({ ...currentBook, title: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Author"
              value={currentBook.author}
              onChange={(e) =>
                setCurrentBook({ ...currentBook, author: e.target.value })
              }
              required
            />
            <button type="submit">Save</button>
          </form>
        </Modal>
      </div>
    </ThemeProvider>
  );
}

export default BooksPage;
