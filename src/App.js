import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Navbar from './components/Navbar'
var navBarData = {
  title: "Book Store",
  buttons: ["Currently Reading", "Want to Read","Read"]
}
class BooksApp extends React.Component {
  render() {
    return (
      <div>
        <Navbar navData = {navBarData} />
      </div>
    )
  }
}

export default BooksApp
