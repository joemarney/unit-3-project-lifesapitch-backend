## Description
Build a full stack CRUD app. The back-end made with Express and Node while the front-end made with React.  The API will be secured using JWTs.  The front-end will utilise AJAX to communicate with the back-end.
  
## Deployment Link
[Deployment Link](https://lifesapitch.netlify.app/)

## Link to Front / Backend
[Frontend GitHub Link](https://github.com/joemarney/unit-3-project-lifesapitch-frontend.git)


## Image of Homepage
![an image of the homepage of our app 'Lifes A Pitch'](/AppScreenshot.png)

## Code Installation
[ Backend GitHub Link](https://github.com/joemarney/unit-3-project-lifesapitch-backend.git)

## Time Frame / Collaboration 
  - 1 week
  - Working in collaboration with Joe Marney and Finn McDougall

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

  #### Dependencies:
  
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
	- reactjs-popup


## Brief
As a duo, we had to create a functioning app working with mongoDB, react and node.js(express). We had a 1 week time frame to complete it with a few given requirements

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
 5. After setting up the backend with Express, we moved onto the frontend with React
	1. Very similar to the setup of the back end, we started this section by creating the necessary folders, files and boiler plate for the code
	2. We then decided to kick off the sign up / out / in components 
	3. In turn we had to create the services, utilities and interceptors
	4. We then got stuck on a sign out but in which we decided to come back to it after creating the simpler pages. We decided that we wanted to see progress after being stuck on the bug for a while
	5. Then we added all of the campsite components and functionality. This was the main part of our project so we assumed this would take the most time. 
	   1. We added full CRUD to this section of the app, ensuring that users had to be logged on to be able to add their own campsites.
	6. We ran into a few bugs here and there but we were able to fix them all
 6. Lastly, we decided to style. We generally left this to last as this is a simpler part of the process. One that we are both able to do our own thing without worrying about logic or bugs.
 7. Finally we added a bit more to the 'profile' and 'About Us' section of the code as we wanted to flesh it out a bit more.
 8. And then deployment of both the front and back end!
   
## Challenges
We had problems with the `.compareSync()` function in the sign in route.
	- We then realised it was due to a misspelling of 'hashedPassword'

Problems with `campsite.deleteOne()`
	- Instead we opted for `findByIdAndDelete()`

A bit of styling issue, trying to workout why some pages had more/less margins than the rest. But it was easily rectifiable 

## Wins
Creating functioning pop-ups that blurred out the background and allowed users to add campsites

> 'There wasn't the exact code online for this so I had to patch bits together to make it work' - Finn


 
## Bugs
NA
	
## Future Improvements / Stretch
