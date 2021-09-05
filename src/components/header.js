import React, {Component} from "react"
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return <header className={"p-header header-content flex align-items-center"}>
            <Link to="/"><img alt="Pentacle icon" className={"pentacle-icon"} src={"pentacle-icon.svg"}/></Link>
            <Link to="/"><img alt="Love Triangles logo" className={"logo"} src={"love-triangles-logo.svg"}/></Link>
        </header>
    }
}

export default Header
