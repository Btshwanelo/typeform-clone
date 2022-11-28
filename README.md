# typeform-clone
 
@ -1,45 +1,2 @@
# typeform-clone
 
The repository has two application, backend and frontend.

backend - is RESTful API application built with Nodejs and Express.

frontend - is forntend application buit with ReactJs. The application is consuming data from backend through RESTful API

Requirements
Nodejs (recommended latest npm)
mongodbd

Setup
You need to clone the repository to your local machine and follow the steps below to run the applications.

clone the project

git clone https://github.com/Btshwanelo/typeform-clone.git
go to root directory

npm install
go to frontend directory

cd frontend

install dependencies

npm install
go to root directory

cd ..
Running App from root directory

npm run dev
You will notice that server will be running on port 4040

['server] [nodemon] restarting due to changes...
['server] [nodemon] starting `node backend/server.js`
[client'] Compiled successfully!
[client'] webpack compiled successfully
['server] server is running on PORT: 4040
['server] server is running...


- should be able to add questions and answer the quiz