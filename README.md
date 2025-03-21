Bug Tracker Application Documentation

This documentation provides a comprehensive guide to the Bug Tracker Application, a full-stack web application built using the MERN stack (MongoDB, Express.js, React, and Node.js). The application allows users to report, track, and manage bugs in a project. It also integrates testing and debugging best practices to ensure reliability.

Table of Contents
Introduction

Features

Technologies Used

Project Structure

Setup and Installation

Usage

Testing

Debugging

Error Handling

Styling

Future Enhancements

Introduction
The Bug Tracker Application is designed to help users report, track, and manage bugs in a project. It includes features for creating, updating, and deleting bugs, as well as testing and debugging tools to ensure the application's reliability.

Features
Bug Management:

Report new bugs by filling out a form.

View a list of all reported bugs.

Update bug statuses (e.g., open, in-progress, resolved).

Delete bugs.

Testing:

Unit, integration, and component tests for both backend and frontend.

Debugging:

Use of debugging tools like Chrome DevTools and Node.js inspector.

Error Handling:

Backend error handling using Express middleware.

Client-side error boundaries in React.

Technologies Used
Frontend
React: JavaScript library for building the user interface.

Vite: Fast build tool for React.

Axios: For making HTTP requests to the backend.

React Testing Library: For testing React components.

Backend
Express.js: Web framework for Node.js.

MongoDB: NoSQL database for storing bug data.

Mongoose: ODM (Object Data Modeling) library for MongoDB.

Jest: JavaScript testing framework.

Supertest: For testing HTTP endpoints.

Project Structure
Frontend
frontend/
├── public/
├── src/
│ ├── components/
│ │ ├── BugForm.jsx
│ │ ├── BugList.jsx
│ │ ├── BugItem.jsx
│ ├── App.jsx
│ ├── index.js
│ ├── index.css
│ ├── tests/
│ │ ├── BugForm.test.jsx
├── package.json
Backend
backend/
├── models/
│ ├── Bug.js
├── controllers/
│ ├── bugController.js
├── routes/
│ ├── bugRoutes.js
├── tests/
│ ├── bug.test.js
├── index.js
├── package.json
Setup and Installation
Prerequisites
Node.js (v18 or higher)

MongoDB (running locally or remotely)

Git (optional)

Steps
Clone the Repository (if applicable):

git clone https://github.com/PLP-Full-Stack-Development-MERN/week-6-testing-and-debugging-sambaraks652.git
cd mern-bug-tracker
Set Up the Backend:

Navigate to the backend folder:

cd backend
Install dependencies:

npm install
Start the backend server:

node index.js
Set Up the Frontend:

Navigate to the frontend folder:

cd ../frontend
Install dependencies:

npm install
Start the frontend development server:

npm run dev
Access the Application:

Open your browser and navigate to http://localhost:5173.

Usage
Reporting a Bug
Fill out the form with a title and description.

Click "Report Bug" to submit the bug.

Viewing Bugs
The list of reported bugs is displayed on the homepage.

Each bug shows its title, description, and status.

Updating Bug Status
Click on a bug to update its status (e.g., open, in-progress, resolved).

Deleting a Bug
Click the "Delete" button next to a bug to remove it from the list.

Testing
Backend Testing
Run unit and integration tests:

cd backend
npm test
Frontend Testing
Run component tests:

cd frontend
npm test
Debugging
Console Logs:

Use console.log to debug values in both frontend and backend.

Chrome DevTools:

Inspect network requests and component state in the React DevTools.

Node.js Inspector:

Debug the backend using:

node --inspect index.js
Error Boundaries:

Wrap components in an error boundary to handle crashes gracefully.

Error Handling
Backend
Use Express middleware to handle errors.

Example:

javascript
app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).json({ message: "Something went wrong!" });
});
Frontend
Use error boundaries to handle React component errors.

Example:

javascript
<ErrorBoundary>
<BugList />
</ErrorBoundary>
Styling
The application uses a clean and modern CSS style defined in index.css. Key features include:

A blue header with the title "Bug Tracker."

A clean form with input fields for title and description.

A list of bugs with status badges (red for open, yellow for in-progress, green for resolved).

Responsive design for smaller screens.

Future Enhancements
User Authentication:

Add user authentication to track who reported or updated a bug.

Advanced Filtering:

Implement filtering and sorting options for the bug list.

Notifications:

Add email or in-app notifications for bug updates.
