# Notes

Initial commmit.

# Structure (in src folder)
    Components
        GifGameCard // links to That's What You Gif! page
        MemeGameCard // links to What Do You Meme? page
        NavBar // Links to user signup/login/profile and saved memes/gifs
        Styles // styled components pertaining to game cards/navbar

    Gif
        Actions
            Some Actions
        Components
            All the gif components
        Reducer
            Gif reducers

            GifStyles.js // styled components pertaining to Gif game

    Meme
        Actions
            Meme actions
        Components
            All the meme components
        Reducer
            Meme reducers

            MemeStyles.js // styled components pertaining to Meme game

    Stylesheets
        gif.css // styling for the gif game localhost:3000/thatswhatyougif
        home.css // styling for the "homepage" localhost:3000/
        meme.ss // styling for meme game localhost:3000/whatdoyoumeme

    App.css // not sure I need this

    App.js // this is where I will call my main components, navbar, gifgamecard and memegamecard

    Home.js // not sure I need this unless for namespacing / linking reasons

    index.css // don't think I need this either

    index.js // I have a lot to do here, all the router stuff for the links, Redux stuff I think and calling App.js

    serviceWorker.js // No idea what this does

# Still to do:

    What do I need for user auth / session handling syncning up with my rails api?

    Break down my Meme and Gif game into Redux actions/reducer and bring those over here.

    Create a user sign up and login form / component

    Create show pages for Saved Memes and Saved Gifs
        These show pages will show all the saved memes and gifs that any user sends to the database

    Create a User Profile component that renders only the user's saved memes and gifs