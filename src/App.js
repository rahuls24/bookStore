import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Navbar from "./components/Navbar";
import BookView from "./components/BookView";
import { Link, Route } from "react-router-dom";
import SearchBook from "./components/SearchBook";

var navBarData = {
  title: "Book Store",
  buttons: ["Currently Reading", "Want to Read", "Read"],
};

var bookType = ["Currently Reading", "Want to Read", "Read"];

var dropdownMenu = [
  {
    name: "Move to..",
    value: "move",
    isDisable: false,
  },
  {
    name: "Currently Reading",
    value: "currentlyReading",
    isDisable: false,
  },
  {
    name: "Want to Read",
    value: "wantToRead",
    isDisable: false,
  },
  {
    name: "Read",
    value: "read",
    isDisable: false,
  },
  {
    name: "None",
    value: "none",
    isDisable: false,
  },
];

class BooksApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = async () => {
    try {
      let books = await BooksAPI.getAll();
      this.setState({ books });
      return new Promise((resolve, reject) => {
        return resolve(true);
      });
    } catch (error) {
      console.log("error from getAllBooks function in App.js file", error);
      return new Promise((resolve, reject) => {
        return reject(false);
      });
    }
  };

  updateBookShelf = async (book, shelf) => {
    try {
      await BooksAPI.update(book, shelf);
      await this.getAllBooks();
      return new Promise((resolve, reject) => {
        return resolve(true);
      });
    } catch (error) {
      console.log("error from updateBookShelf function in App.js file", error);
      return new Promise((resolve, reject) => {
        return reject(false);
      });
    }
  };

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Navbar navData={navBarData} />
              <BookView
                books={this.state.books}
                bookType={bookType}
                dropdownMenu={dropdownMenu}
                updateBookShelf={this.updateBookShelf}
              />
              <div className="open-search">
                <Link to="/search">
                  <button>Add a book</button>
                </Link>
              </div>
            </div>
          )}
        ></Route>
        <Route
          exact
          path="/search"
          render={() => (
            <SearchBook
              dropdownMenu={dropdownMenu}
              updateBookShelf={this.updateBookShelf}
            />
          )}
        ></Route>
      </div>
    );
  }
}

export default BooksApp;
