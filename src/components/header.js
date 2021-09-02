import React, {Component} from "react"
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return <header className={"p-header align-center"}>
                <Link className={"logo"} to="/"><h1>Love triangles</h1></Link>
        </header>
    }
}

export default Header


