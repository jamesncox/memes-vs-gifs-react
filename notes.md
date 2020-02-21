# Notes

Initial commmit.

# Structure (in src folder)
    Components
        GifGameCard // links to That's What You Gif! page
        MemeGameCard // links to What Do You Meme? page
        NavBar // Links to user signup/login/profile and saved memes/gifs
        Styles // styled components pertaining to game cards/navbar

    Reducers
        Multiple files for reducers

    Gif
        Actions
            Some Actions
        Components
            All the gif components

            GifStyles.js // styled components pertaining to Gif game

    Meme
        Actions
            Meme actions
        Components
            All the meme components

            MemeStyles.js // styled components pertaining to Meme game

    Stylesheets
        gif.css // styling for the gif game localhost:3000/thatswhatyougif
        home.css // styling for the "homepage" localhost:3000/
        meme.ss // styling for meme game localhost:3000/whatdoyoumeme

    App.css // not sure I need this

    App.js // this is where I will call my main components, navbar, gifgamecard and memegamecard

    Home.js // not sure I need this unless for namespacing / linking reasons

    index.css // don't think I need this either

    index.js // I have a lot to do here, all the router stuff for the links, Redux stuff I think and calling App.js. 
            // Remember that index.js holds the store(s) which takes in all my reducers. What reducers do I need?

    serviceWorker.js // No idea what this does

# Still to do:

    What do I need for user auth / session handling syncning up with my rails api?

    Break down my Meme and Gif game into Redux actions/reducer and bring those over here.

    Create a user sign up and login form / component

    Create show pages for Saved Memes and Saved Gifs
        These show pages will show all the saved memes and gifs that any user sends to the database

    Create a User Profile component that renders only the user's saved memes and gifs

# Loading Gif Options
    my "is loading" animation, not a spinning wheel

    cat spinning around
    https://media0.giphy.com/media/w9yg6QsZJ3JC/giphy.gif?cid=790b76116d57b53c71d60bfdf80940f79ba854d474688f02&rid=giphy.gif

    fingers tapping
    https://media1.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif?cid=790b7611b68668f161ca4d7a631e88d6854f994a2da390f8&rid=giphy.gif

    cat playing while lying down
    https://media1.giphy.com/media/LyuWqvhAU93XO/giphy.gif?cid=790b76110beff867408baa87f7c7b3676f75c46d0579f36c&rid=giphy.gif

    animated computer blue and pink
    https://media3.giphy.com/media/l0HUpt2s9Pclgt9Vm/giphy.gif?cid=790b76119589c896c27a29eacca0ba8057253831b1d837f5&rid=giphy.gif

    simple loading text
    https://media1.giphy.com/media/3ov9k0BZQL358k458s/giphy.gif?cid=790b761140ff2d7d0dfd7f55330e302d3a45b11fccd32623&rid=giphy.gif

    loading gif
    https://media3.giphy.com/media/p0DJuJj18Gcz6/giphy.gif?cid=790b7611b172a6d947fa45c99b63ff5e6089bad101deb52d&rid=giphy.gif

    handls twiddling thumbs
    https://media3.giphy.com/media/3o85xscgnCWS8Xxqik/giphy.gif?cid=790b76116b48478ceccac3c9302eb9f12894ed09d180ad20&rid=giphy.gif

    robot computer waiting
    https://media1.giphy.com/media/j37uIbtLm9atRzOtpR/giphy.gif?cid=790b7611e0ed9b8f318f9c048e70e0623a6b2cd833b83953&rid=giphy.gif

    