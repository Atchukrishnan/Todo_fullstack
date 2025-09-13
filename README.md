Fruit List App 🍎🍊🥭

A simple full-stack web application to manage a fruit list.
•	Frontend: React
•	Backend: Node.js + Express
•	Database: MongoDB Atlas
•	Backend Deployment: Render
•	Frontend Deployment: Vercel

Features
•	View all fruits in the list
•	Add new fruits
•	Live data storage in MongoDB Atlas
•	Deployed online (Frontend + Backend)
 
Folder Structure
project-root/
├── backend/
│ ├── index.js
│ ├── package.json
│ ├── .env
│ └── ...
├── frontend/
│ ├── src/
│ │ └── App.js
│ ├── package.json
│ ├── .env.production
│ └── ...
└── README.md

Backend Setup
1.	Navigate to backend folder:
cd backend

2.	Install dependencies:
npm install

3.	Create .env file with your MongoDB Atlas URI:
MONGO_URI=your_mongodb_atlas_connection_string

4.	Start backend server (runs on http://localhost:5000):
node index.js

Frontend Setup
1.	Navigate to frontend folder:
cd frontend

2.	Install dependencies:
npm install

3.	(Optional) Create .env for local development:
REACT_APP_BACKEND_URL=http://localhost:5000

4.	Start frontend (runs on http://localhost:3000):
npm start

Deployment
Backend (Render)
•	Push backend code to GitHub
•	Create a Web Service on Render
•	Set build & start commands:
npm install
node index.js

•	Add environment variable:
MONGO_URI=your_mongodb_atlas_connection_string

•	Deploy and get Render URL (e.g., https://fruit-backend-dsyl.onrender.com)
Frontend (Vercel)
•	Push frontend code to GitHub
•	Create a new project on Vercel
•	Root Directory: frontend/
•	Build Command:
npm run build

•	Output Directory: build
•	Add environment variable:
REACT_APP_BACKEND_URL=https://fruit-backend-dsyl.onrender.com

•	Deploy and get Vercel URL
 
Usage
•	Open frontend URL (Vercel) in browser
•	View fruits fetched from backend (Render + MongoDB Atlas)
•	Add a new fruit — updates MongoDB Atlas and UI
 
Tech Stack
•	React (Frontend)
•	Node.js + Express (Backend)
•	MongoDB Atlas (Database)
•	Axios (HTTP requests)
•	Render (Backend Hosting)
•	Vercel (Frontend Hosting)

Author
Atchaya Radhakrishnan




