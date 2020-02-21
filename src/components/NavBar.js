import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    Link,
    useHistory
} from 'react-router-dom';

class NavBar extends Component {

    render() {
        return (
            <div class="navbar" >
                <div class="dropdown">
                    <button class="dropbtn">User
                     <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <Link to="/signup">Sign Up</Link>
                        <Link to="/login">Login</Link>
                        {/* click user profile to see only user's saved memes and gifs */}
                        <Link to="/profile">Profile</Link>
                    </div>
                </div>
                <Link to="/">Home</Link>
                {/* click savedmemes to see all users best saved memes */}
                <Link to="/saved-memes">Saved Memes</Link>
                {/* clicked savedgifs to see all users best saved gifs */}
                <Link to="/saved-gifs">Saved Gifs</Link>

                {/* <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/saved-memes">
                    <SavedMemes />
                </Route>
                <Route path="/saved-gifs">
                    <SavedGifs />
                </Route>
            </Switch> */}

            </div >
        )
    }
}

export default NavBar