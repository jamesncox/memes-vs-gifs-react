import React from 'react'

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

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// export default function NavBar(props) {


//   return (
//     <Router>
//       <div class="navbar">
//         <div class="dropdown">
//           <button class="dropbtn">User
//             <i class="fa fa-caret-down"></i>
//           </button>
//           <div class="dropdown-content">
//             <Link to="/">Sign Up</Link>
//             <Link to="/">Log In</Link>
//             <Link to="/">Profile</Link>
//           </div>
//         </div>
//       <a href="#meme">Saved Memes</a>
//       <a href="#gif">Saved Gifs</a>
//       <Link to="/">Home</Link>

//       <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/signup">
//             <Signup />
//           </Route>
//           <Route path="/login">
//             <Login />
//           </Route>
//           <Route path="/memes">
//             <SavedMemes />
//           </Route>
//           <Route path="/gifs">
//             <SavedGifs />
//           </Route>
//         </Switch>

//     </div>
//   </Router>
//   )
// }