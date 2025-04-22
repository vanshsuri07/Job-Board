# 💼 Job Board

Job Board is a full-stack web application where users can post and search for developer jobs. It supports features like login, job posting, job filtering, and resume uploads.

---

## 🚀 Tech Stack

- **Frontend:** React (Create React App)
- **Backend:** Node.js + Express
- **Database:** MongoDB (optional)
- **Deployment:** Render

---

## ✨ Features

- 🔐 User login and signup
- 📝 Post developer jobs
- 🔍 Search and filter job listings
- 📄 Upload resumes
- ⚡ Responsive user interface

---

## 📁 Folder Structure

job-board/ ├── client/ # React frontend ├── server/ # Node/Express backend ├── .gitignore ├── README.md

yaml
Copy
Edit

---

## 🛠️ Getting Started

These steps will help you run the project locally.

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/vanshsuri07/job-board.git
cd job-board
2️⃣ Install Dependencies
Install packages for both frontend and backend:

bash
Copy
Edit
# For frontend
cd client
npm install

# For backend
cd ../server
npm install
3️⃣ Run the App Locally
Open two terminals:

Terminal 1 – Start the backend:

bash

cd server
npm start
Terminal 2 – Start the frontend:

bash

cd client
npm start
Then open your browser and go to:
👉 http://localhost:3000

🌐 Live Demo
✅ Live demo hosted on Render:
👉 https://job-board-l3b0.onrender.com

🔐 Environment Variables
In the /server folder, create a .env file and add:

env

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
⚠️ Keep this file private. Never upload it to GitHub.


🧾 License
This project is open source and available under the MIT License.

🙌 Credits
Made with ❤️ by Vansh Suri
```
