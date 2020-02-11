import React from "react"

export default function NavBar(props) {

    return (
        <div class="navbar">
            <div class="dropdown">
                <button class="dropbtn">User
                     <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="#signup">Sign Up</a>
                    <a href="#login">Login</a>
                    {/* click user profile to see only user's saved memes and gifs */}
                    <a href="#profile">Profile</a>
                </div>
            </div>
            {/* click savedmemes to see all users best saved memes */}
            <a href="#savedmemes">Saved Memes</a>
            {/* clicked savedgifs to see all users best saved gifs */}
            <a href="#savedgifs">Saved Gifs</a>
        </div>
    )
}