
# Project 3

**WDI-SM-43 Project 3 : Virtual Town Hall**

Team Branch Squad: John Lee, Betsy Donohue, Boone Reynolds, Steven Peltzer

**Presentation Deck:** https://docs.google.com/presentation/d/1V1WqcjMs_c-E9zHjgz9ZkVPYlm3Dg9Ska2o1C-YoEgA/edit?usp=sharing

**Technologies Used:**

- HTML / CSS / Javascript / EJS
- 'MEN' Stack: Mongo.db, Express, Node.Js
- Facebook O Authentication

**General Approach:**

- Started off brainstorming
- All liked the idea of a Virtual Town Hall
  - Got the idea from Reps canceling their town hall meetings due to backlash
  - We believe reps are civil servants and need to vote based on the views of their constituents.  VTH gives them hard data and no choice but to listen to those voices, however small
- Divided up rolls based on interest
- Created ERD
- Developed wireframes/user experience
- Split into groups of 2 to CRUD the models as we all would like to be involved in the backend
- set up the models,  got authentication/authorization to work
- set up controllers and routes
- set up front end(views, ejs, ajax, app.js)
- connected front end with back end (voting system)


**Installation Instructions:**

1.   Clone the Repository into your workspace.

     ```	$ git clone https://github.com/branchsquad/Project3```

     Then move into the new directory/folder.

     ```$ cd Project3```

2.   In your terminal run npm install to install all necessary dependency modules and packages

       ```$ npm install```  

3.   Host the server locally by running in the command line:

       ```$ node server.js```

       Or run nodemon if you have the package installed in your Node version.

       ```$ nodemon```

4.   To run the app locally, go to your browser of choice and port to http://localhost:3000

       For example: ```$ google-chrome http://localhost:3000```




**Link to Trello:**  https://trello.com/b/Qf7Y1PUR/project-3-virtual-town-hall



**Data Models:**

![erd](assets/erd.JPG)

**Wireframes:**

![sign_up](assets/sign_up.JPG)

![log_in](assets/log_in.JPG)



![voter_profile](assets/voter_profile.JPG)



![local_proposals](assets/local_proposals.JPG)

![rep_profile](assets/rep_profile.JPG)



![proposal](assets/proposal.JPG)



![create_proposal](assets/create_proposal.JPG)



**Unsolved Problems / Major Problems:** 

- Cannot differentiate between 'user' and 'rep'
- search function is still pretty primitive
- facebook oauth auto fills in required fields with empty strings or random number (can be edited by user in their profile but would like to pull that info during the oauth process)
- Props don't reorder based on date