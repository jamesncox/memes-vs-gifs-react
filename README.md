## Memes vs Gifs

This app is my take on a meme or gif generator. A user can either sign up or log in if they already have an account, afterwhich they are given their own profile. A user can create combinations of their favorite randomly-generated memes or gifs and captions. The created meme or gif and caption combo is saved to the database and displayed in the user's profile page, as well as the designated meme or gif show page for everyone's memes and gifs. A user can also create their own caption, which gets saved to the database, and that caption is available for selection by anyone. Captions can be sorted by ratings, "NSFW", "PG" or viewing all ratings simultaneously. A created caption must be given a rating to persist to the database.

This app utilizes a Rails API back-end with a postgreSQL database, as well as a React.js front-end.

The Back-End: The following end-points are utilized in the API to fetch data:

'http://localhost:3000/api/v1/login' - Post request to Session create action to set a session ID for an existing user.

'http://localhost:3000/api/v1/signup' - Post request to User create action to sign up a new user.

'http://localhost:3000/api/v1/current_user' - Get request to custom route to keep a signed-in User logged in, even on page refresh.

'http://localhost:3000/api/v1/logout - Delete request to the destroy the signed-in user's session, logging them out.

'http://localhost:3000/api/v1/captions' - Get, Post and Delete requests to see all the captions from the database, create new captions, and delete a selected caption.

'http://localhost:3000/api/v1/auth_check' - Get request to custom route in Sessions controller to set the CSRF-Token every time App.js component mounts, storing in state, and able to send back with every request. 

'http://localhost:3000/api/v1/memes' - Get and Post requests to populate app with User-created meme/caption combos, and delete them from their profile page.

'http://localhost:3000/api/v1/gifs' - Get and Post requests to populate app with User-created gif/caption combos, and delete them from their profile page.

The Front-End: Utilizes a React framework, structured with Redux to store almost all of state in the Redux store, and make it accessible to any component in my app. The app features Redux, Thunk, React Router, and styled with a combination of CSS and Styled Components. This app is structured with container and presentational components. The majority of components are class components, with a few functional components. Memes vs gifs utilizes async actions, displaying loading messages and error messages at various stages of fetching process. 

### Running Memes vs Gifs

To run Memes vs Gifs, complete the following steps:
- Clone both repositories https://github.com/jamesncox/memes-vs-gifs-react.git and https://github.com/jamesncox/memes-vs-gifs-api.git 
- In seperate terminals cd into memes-vs-gifs-react and memes-vs-gifs-api
- From memes-vs-gifs-react run 'yarn install' 
- From memes-vs-gifs-api run the following: 'bundle install', 'rails db:migrate', and 'rails db:seed' (this populates the base set of caption cards)
- From memes-vs-gifs-api run 'rails s' to start the Rails server, hosted on http://localhost:3000/
- From memes-vs-gifs-react run 'yarn start' to start the React server, hosted on http://localhost:3001
- Memes vs Gifs server in a new browser window or tab automatically, but if it doesn't, navigate to http://localhost:3001 
- Click around and see the behaviour of the app before you are signed in, then create an account under the signup page, and begin creating memes, gifs and captions! 


### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
