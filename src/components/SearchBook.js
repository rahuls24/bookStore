import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookList from "./BookList";
import * as BooksAPI from "../BooksAPI";
import { Redirect } from "react-router-dom";

var searchKeywordsList = [
  "Android",
  "Art",
  "Artificial Intelligence",
  "Astronomy",
  "Austen",
  "Baseball",
  "Basketball",
  "Bhagat",
  "Biography",
  "Brief",
  "Business",
  "Camus",
  "Cervantes",
  "Christie",
  "Classics",
  "Comics",
  "Cook",
  "Cricket",
  "Cycling",
  "Desai",
  "Design",
  "Development",
  "Digital Marketing",
  "Drama",
  "Drawing",
  "Dumas",
  "Education",
  "Everything",
  "Fantasy",
  "Film",
  "Finance",
  "First",
  "Fitness",
  "Football",
  "Future",
  "Games",
  "Gandhi",
  "Homer",
  "Horror",
  "Hugo",
  "Ibsen",
  "Journey",
  "Kafka",
  "King",
  "Lahiri",
  "Larsson",
  "Learn",
  "Literary Fiction",
  "Make",
  "Manage",
  "Marquez",
  "Money",
  "Mystery",
  "Negotiate",
  "Painting",
  "Philosophy",
  "Photography",
  "Poetry",
  "Production",
  "Programming",
  "React",
  "Redux",
  "River",
  "Robotics",
  "Rowling",
  "Satire",
  "Science Fiction",
  "Shakespeare",
  "Singh",
  "Swimming",
  "Tale",
  "Thrun",
  "Time",
  "Tolstoy",
  "Travel",
  "Ultimate",
  "Virtual Reality",
  "Web Development",
  "iOS",
];

class SearchBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resBooks: [],
      rawInput: "",
      isAdded: false,
    };
  }

  isPresentInList = (keyword) => {
    return (
      searchKeywordsList.filter(
        (item) => item.toLowerCase() === keyword.toLowerCase()
      ).length > 0
    );
  };

  inputOnChangeHandler = async (e) => {
    if (this.isPresentInList(e.target.value)) {
      try {
        let books = await BooksAPI.search(e.target.value);
        this.setState({ resBooks: books });
      } catch (error) {
        console.log(
          "Error from SearchBook at function inputOnChangeHandler",
          error
        );
      }
    } else {
      this.setState({ resBooks: [] });
    }
  };
  updateBookShelfHelper = async (book, shelf) => {
    let res = await this.props.updateBookShelf(book, shelf);
    if (res) {
      this.setState({ isAdded: true });
    }
  };
  render() {
    if (this.state.isAdded) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/">
              <button className="close-search">Close</button>
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={this.inputOnChangeHandler}
              />
            </div>
          </div>
          <div className="search-books-results">
            <BookList
              books={this.state.resBooks}
              dropdownMenu={this.props.dropdownMenu}
              onChangeHandler={this.updateBookShelfHelper}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBook;
