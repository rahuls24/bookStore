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
  componentDidMount() {
    var tmp = BooksAPI.getAll()
    tmp.then((res) => {
      this.setState({books:res})
    })
  }
  state = {
    books : []
  }
  render() {
    return (
      <div>
        <Navbar navData={navBarData} />
        <BookView books={this.state.books} bookType = {bookType} />
      </div>
    )
  }
}

export default BooksApp
