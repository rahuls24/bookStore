import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Navbar from './components/Navbar'
import BookView from './components/BookView'

var navBarData = {
  title: "Book Store",
  buttons: ["Currently Reading", "Want to Read","Read"]
}

var bookType = ["Currently Reading", "Want to Read","Read"]
class BooksApp extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      books : []
    }
  }

  componentDidMount() {
    this.getAllBooks()
  }

  getAllBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
      this.setState({books})
      })
      .catch(err => console.log("error from getAllBooks function in App.js file",err))
  }

  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then((res) => {
        if (res) {
        this.getAllBooks()
      }
      })
    .catch(err => console.log("error from updateBookShelf function in App.js file",err))
  }

  render() {
    return (
      <div>
        <Navbar navData={navBarData} />
        <BookView books={this.state.books} bookType = {bookType} updateBookShelf= {this.updateBookShelf} />
      </div>
    )
  }
}

export default BooksApp
