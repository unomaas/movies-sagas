## T2W12HW - Ryan's React Movie Saga App

Thanks for looking into my weekend project, the React movie saga web app! 



# Description

Duration: 3 Day Sprint

This is a web based application that uses React to interact with a virtual server and database.  The objective was to get hands-on experience working with React to build a full-stack app using CRUD methodology and Router capability for a Detailed View.  

The app functionality will take the user through a simple "feedback" process, asking them to leave feedback on how they're feeling, how they're understanding content, how well supported they feel, and if there's any comments.  

At the end of the feedback process, the app will review their choices displayed on the DOM, and be able to submit their feedback to the database.  After submission, they may leave new feedback again, if desired.  



## Prerequisites

Node.js: https://nodejs.org/en/

PostgreSQL: https://www.postgresql.org/

Postico: https://eggerapps.at/postico/ 



## Installation

To run this program, you will need to:

[] Build the database in your SQL server with the code in "database.sql" file. 

[] Run 'npm install' in your terminal to install the dependencies.

[] Run 'npm run server' in one terminal, and 'npm run client' in another terminal.



## Usage

#1. To use this app, start the server and client in your terminal.  React will navigate to http://localhost:3000/ in your browser.  

#2. The app will display a list of movie tiles, with both a title and movie poster.  A navigation bar is displayed at the top of the page, in the header. 

#3. Clicking on the "Add New Movie" link will take the user to the add movie form.  There the user can enter a Title, URL, Description, and select a Genre.  Clicking the checkbox will submit and take the user to the home page with the new movie in the list.  Clicking the red back arrow, or the "Home" link, will cancel adding a new movie. 

#4. Clicking on any of the movie titles or posters will navigate the user to a detailed view page.  There the user can see the Title, Poster, Description, and Genres attached to this movie.  Clicking on the red back arrow, or the "Home" link, will take the user back to the movie list.  



### Accessibility: 

I strive to make my apps accessible to all!  

This specific app is dyslexia-friendly, with a custom font, "OpenDyslexia", added to the server.  It also has alt tags attached to all of the pictures.  


### Built With

JavaScript/HTML/CSS, jQuery, React, Redux, Node, Material-ui, Axios, PG. 



### Acknowledgement

I'd like to give thanks to Dane Smith, and everyone in Prime Academy's Genocchi cohort for helping me get through this week at Prime Digital Academy!  I wouldn't be here today without them.  
 


### Support

If you have suggestions, comments, or issues, please contact me at rdmjobs@live.com.  Thanks for reviewing my project!  Stay wonderful. <3