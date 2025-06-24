# Quick Hunt  - Backend

This is the backend server for the **Plant Care Tracker** web application — a full-stack project that allows users to manage and monitor care tasks for their indoor and outdoor plants.

🔗 **Client Repository:** [https://github.com/yourusername/plant-tracker-client](https://github.com/yourusername/plant-tracker-client)  
🔗 **Live Website:** [https://plantcaretracker.vercel.app](https://plantcaretracker.vercel.app)

---

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **CORS**
- **Dotenv**
- **Nodemon** (for development)

---

.
├── index.js              # Main server logic and routes
├── .env                  # Environment variables (ignored in Git)
├── package.json
└── README.md




---

## 🔐 Environment Variables (`.env`)

Create a `.env` file in the root of your project and add:

```env
PORT=5000
DB_USER=your_mongodb_username
DB_PASSWORD=your_mongodb_password

git clone https://github.com/rifat-hasan121/Quick-Hunt-Server
cd Quick-Hunt_Server

npm install

nodemon run dev

📡 API Endpoints
✅ GET /addUser
Get all tasks, optionally filtered by user email.

Query param: email=user@example.com

✅ GET /addUser/:id
Get a single job/task by MongoDB _id.

✅ GET /featured
Get 6 tasks sorted by nearest deadline (ascending order).

✅ POST /addUser
Add a new job/task.

Expects full job  data in the body.

✅ PUT /addUser/:id
Update an existing job/task by _id.

✅ DELETE /tasks/:id
Delete a task by _id.

✅ GET /
Basic test route returning "Hello World!"


✨ Features
MongoDB-based plant/task CRUD

Email-filtered user-specific data

Sort by upcoming deadline

JSON-based API

CORS enabled

Uses environment variables for sensitive data

🧪 Development Notes
MongoDB Atlas used for hosting the database

mongodb native driver used instead of mongoose

Project ready for deployment on platforms like Render, Railway, or Vercel Serverless Functions

👨‍💻 Developer
MD Rifat Hasan
GitHub: rifat-hasan121

