import React, { Component } from 'react'

class BookList extends Component {
    render() {
        return (
            <ol className="books-grid">
            {
                this.props.books.map((book) => {
                    return (
                    <li key = {book.id}>
                        <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}>
                            </div>
                            <div className="book-shelf-changer">
                            <select onChange={e => this.props.onChangeHandler(book,e.target.value)} id="bookDropdown" defaultValue={book.shelf} >
                                {this.props.dropdownMenu.map((item) => {
                                if (item.isDisable) {
                                    return <option value={item.value} key={item.value} disabled>{ item.name}</option>
                                }
                                return <option value={item.value} key={item.value}>{item.name}</option>
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
        )
    }
}

export default BookList