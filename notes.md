# Notes 

# Still to do:

[x]  Refactor the saved memes and gifs actions/reducers to load on initial app load (componentDidMount) and then update store with every new save.

[x]  What do I need for user auth / session handling syncning up with my rails api?

[x] Break down my Meme and Gif game into Redux actions/reducer and bring those over here.

[x]  Create a user sign up and login form / component

[x] Create show pages for Saved Memes and Saved Gifs
        These show pages will show all the saved memes and gifs that any user sends to the database

[x]  Create a User Profile component that renders only the user's saved memes and gifs

[x]  After User can signup/login/logout, will need to have logic for things like:
    [x]  Checking to see if a meme/gif and caption combo has alreawdy been created
    [x]  Showing the specific User's creations will have to be checked
    [x]  Potentially having the saved meme/gifs page organized by user

[x] Display saved memes and gifs with a modal.

[] Create Meme with external URL
    []  "previewMeme" state, to hold a potential meme before saving to database
    []  Once a caption is selected, can then save to database like normal.

[] Should have an "About" page with info about the app, maybe myself and maybe contact info.

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

# Tumbleweed Gif
    https://media.giphy.com/media/Az1CJ2MEjmsp2/giphy.gif

# Textarea
    <textarea> This tag for draggable text </textarea>

# Sign Up Gif options
    Connor McGregor
    https://i.giphy.com/media/xUOrw5LIxb8S9X1LGg/giphy.webp

# Practice URL for Create Meme (Smiling Batman)
  https://i.pinimg.com/564x/9a/81/1f/9a811f06c2397cdfd96ea671d44d4fda.jpg

    
# css for old version of toggled pop up / might need at some point
  /* CSS for saved message popup on gif/meme card */
  /* .popup {
    position: relative;
    display: inline-block;
    cursor: pointer; */
    /* -webkit-user-select: none; */
    /* -moz-user-select: none; */
    /* -ms-user-select: none; */
    /* user-select: none; */
  /* } */
  
  /* The actual popup */
  /* .popup .popuptext {
    visibility: hidden;
    width: 160px;
    background-color: whitesmoke ;
    color: buttontext;
    text-align: center;
    border-radius: 10px;
    padding: 15px 0;
    position: absolute;
    z-index: 1;
    bottom: 200%;
    left: 50%;
    margin-left: -80px;
  } */
  
  /* Popup arrow */
  /* .popup .popuptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: whitesmoke transparent transparent transparent;
  } */
  
  /* Toggle this class - hide and show the popup */
  /* .popup .show {
    visibility: visible;
    -webkit-animation: fadeIn 1.5s linear forwards;
    animation: fadeIn 1.5s linear forwards;
  } */
  
  /* Add animation (fade in the popup) */
  /* @-webkit-keyframes fadeIn {
    0% { opacity: 0; }
    10% { opacity: 1; }
    80% { opacity: 1; }
    100% { opacity: 0; }
  } */
  
  /* @keyframes fadeIn {
    0% { opacity: 0; }
    10% { opacity: 1; }
    80% { opacity: 1; }
    100% { opacity: 0; }
  } */

/* CSS for modal popup image display SavedGifs/SavedMemes/User Profile   */
