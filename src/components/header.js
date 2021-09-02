import React, {Component} from "react"
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return <header className={"p-header"}>
            <div className="header-content flex flex-center">
                <Link className={"logo"} to="/"><h1>Love Triangles</h1></Link>
            </div>
        </header>
    }
}

export default Header


