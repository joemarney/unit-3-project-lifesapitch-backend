## Description
Build a full stack CRUD app. The back-end made with Express and Node while the front-end made with React.  The API will be secured using JWTs.  The front-end will utilise AJAX to communicate with the back-end.
  
## Deployment Link


## Link to Front / Backend


## Image of Homepage


## Code Installation
      

## Time Frame / Collaboration 
  - 1 week
  - Working in collaboration with 'Joe Marney' 

## Technologies Used
    - Node.js
    - MongoDB
    - React
	- dbdiagram.io
	- FIGMA
	- NOTION
	- Netlify
	- Visual Studio Code
	- Visual Studio Live Share
	- Google Sheets
	- GitHub

   - Dependencies
      		- axios
			- express
			- Morgan
			- bcryptjs
			- connect-mongo
			- dotenv
			- mongoose
			- cors
			- jsonwebtoken
			- react
			- react-Dom
			- react-Router-Dom
			- sass


## Brief
    

## Planning
For our collaboration project we decided to use NOTION to plan and structure our app.
(Notion can allow all users to collaborate on a single folder as well as create Tasks, embed files etc)

Our initial focus was planning out the key features we wanted to see within the app (at this stage we didn’t have a theme in mind but decided to flesh out the app to build a theme on)

After deciding on full CRUD, as well as some interesting stretch goals and basic layouts, we settled on a camping style app. 

This app allows people to rate and review campsites they’ve been to, as well as allowing users that class as ‘campsite owners’ to add their own campsites to them database for judgement.


## Build Process
1. Setup Notion and collaborate on the key features and theme of the app
2. Extensive planning of the Wireframe, Routing Tables, ERD and User Stories
3. Setup the framework for us to work on
    1. Creating a collaborative Git File
    2. Setting up the backend server
    3. Setting up the frontend 
    4. Installing all the packages
    5. Adding in boilerplate code
    6. Linking MongoDB to our app
    7. Laying out the Structure with pseudocode
4.  From there we focused on the backend first
    1. Creating models
    2. Creating Controllers
    3. Setting Up the middleware JWT
    4. Setting Up routes
   
## Challenges
We had problems with the `.compareSync()` function in the sign in route.
	- We then realised it was due to a misspelling of 'hashedPassword'

Problems with `campsite.deleteOne()`
	- Instead we opted for `findByIdAndDelete()`

## Wins
	
 
## Bugs

    
## Future Improvements / Stretch
