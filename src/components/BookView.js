import React from "react";
import "../App.css";
import BookList from "./BookList";

class BookView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  // Functionality => For making id of by giving raw string
  generateId = (rawId) => {
    let tmpId = rawId.split(" ");
    tmpId = tmpId.map((item, index) => {
      if (index !== 0) {
        return item[0].toUpperCase() + item.slice(1);
      }
      return item.toLowerCase();
    });
    return "#" + tmpId.join("");
  };

  // Functionality => Filter book as per as shelf
  filterBooks = (bookType) => {
    bookType = this.generateId(bookType).slice(1);
    return this.props.books.filter((book) => book.shelf === bookType);
  };

  // Functionality => Helper function that trigger when something change in dropdown
  updateBookShelfHelper = async (book, id) => {
    this.setState({ isLoading: true });
    await this.props.updateBookShelf(book, id);
    this.setState({ isLoading: false });
  };
  render() {
    return (
      <div>
        {this.props.bookType.map((books) => {
          return (
            <div
              className="list-books"
              key={books}
              id={this.generateId(books).slice(1)}
            >
              <div className="list-books-content">
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">{books}</h2>
                    <div className="bookshelf-books">
                      {!this.state.isLoading ? (
                        <BookList
                          books={this.filterBooks(books)}
                          dropdownMenu={this.props.dropdownMenu}
                          onChangeHandler={this.updateBookShelfHelper}
                        />
                      ) : (
                        <div class="spinner-grow text-warning"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BookView;
