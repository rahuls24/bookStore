import React from 'react'
import '../App.css'

class Navbar extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-dark bg-primary col-sm-12 row no-gutter font-size-large">
            <div className="col-sm-6 white-color">
                Book Store
            </div>
            <div className="col-sm-6 row">
                <div className="col-sm-4">
                    <a href="#currentlyReading" className = "white-color link">
                       Currently Reading 
                    </a>
                </div>
                
                <div className="col-sm-4">
                    <a href="#wantToRead" className = "white-color link">
                        Want to Read
                    </a>
                </div>
                <div className="col-sm-4">
                    <a href="#read" className = "white-color link">
                        Read
                    </a>
                </div>
            </div>
        </nav>
    )
  }
}

export default Navbar