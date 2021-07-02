import React from 'react'
import '../App.css'

var dropdownMenu = [
  {
    name: "Move to..",
    value: "move",
    isDisable : false
  },
  {
    name: "Currently Reading",
    value: "currentlyReading",
    isDisable : false
  },
  {
    name: "Want to Read",
    value: "wantToRead",
    isDisable : false
  },
  {
    name: "Read",
    value: "read",
    isDisable : false
  },
  {
    name: "None",
    value: "none",
    isDisable : false
  }
]
class BookView extends React.Component {
  // This method is for making id of by giving name 
  generateId = (rawId) => {
        let tmpId = rawId.split(' ')
        tmpId = tmpId.map((item, index) => {
            if (index !== 0) {
                return item[0].toUpperCase() + item.slice(1)
            }
            return item.toLowerCase()
        })
        return "#"+tmpId.join('')
  }

  filterBooks = (bookType) => {
    bookType = this.generateId(bookType).slice(1)
    return this.props.books.filter((book) => book.shelf === bookType)
  }
  render() {
    return (
    <div>
      {
          this.props.bookType.map((books) => {
            return (
              <div className="list-books" key={books} id={this.generateId(books).slice(1)}>
                <div className="list-books-content">
                  <div>
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">{books}</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                          {
                            this.filterBooks(books).map((book) => {
                              return (
                                <li key = {book.id}>
                                  <div className="book">
                                    <div className="book-top">
                                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}>
                                      </div>
                                      <div className="book-shelf-changer">
                                        <select>
                                          {dropdownMenu.map((item) => {
                                            if (item.isDisable) {
                                              return <option value={item.value} key={item.value} disabled>{ item.name}</option>
                                            }
                                            return <option value={item.value} key={item.value}>{ item.name}</option>
                                          })}
                                        </select>
                                      </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors.map((author, index) => {
                                      if (index !== 0) {
                                        return ", "+author
                                      }
                                      return author
                                    })}</div>
                                  </div>
                               </li>
                             )
                           })
                          }
                         </ol>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>  
          )
        })
      }

    </div>
    )
  }
}

export default BookView
