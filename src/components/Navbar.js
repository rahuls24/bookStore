import React from 'react'
import '../App.css'

class Navbar extends React.Component {
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
    
    render() {
    return (
        <nav className="navbar navbar-dark bg-primary col-sm-12 row no-gutter font-size-large">
            <div className="col-sm-6 white-color ">
                {this.props.navData.title}
            </div>
            <div className="col-sm-6 row">
                {
                    this.props.navData.buttons.map((button) => {
                        // We are dividing 12 col of bootstrap according to the number of item in navbar
                        let btnClass = "col-sm-" + parseInt(12 / this.props.navData.buttons.length)
                        return (
                                <div className={btnClass} key={button}>
                                    <a href={this.generateId(button)} className = "white-color link">
                                        {button}
                                        </a>
                                </div>
                                )
                    })
                }
            </div>
        </nav>
    )
  }
}

export default Navbar