import React from "react"

export default function NavBar(props) {


    return (
        <div class="navbar">
            <div class="dropdown">
                <button class="dropbtn">User
        <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="#">Sign Up</a>
                    <a href="#">Login</a>
                    <a href="#">Profile</a>
                </div>
            </div>
            <a href="#meme">What Do You Meme?</a>
            <a href="#gif">That's What You Gif!</a>
        </div>
    )
}