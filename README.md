📝 Strapi + React Blog Website

A full-stack blog system built using Strapi v5 (Backend) and React + Vite + TailwindCSS (Frontend) with SQLite as the default database.

🚀 Features
Frontend (React + Vite + TailwindCSS)

Modern, responsive UI

Dynamic blog listing & category filtering

Search functionality

Scroll-animations & transitions

Dark / Light Mode toggle

Article detail pages

Fetch API integration with Strapi

Backend (Strapi v5)

Articles, Categories, Authors

Media upload system

REST API endpoints

Role-based permissions

Auto-generated admin panel

SQLite database (default, no setup needed)

🏗️ System Architecture
Users
   ↓ (Browser)
React Frontend (Vite + Tailwind)
   ↓ Fetch API
Strapi Backend (Node.js)
   ↓ Reads/Writes
SQLite Database

📦 Folder Structure
project-root/
│── backend/      # Strapi v5 project (server)
│── frontend/     # React + Vite application (client)
│── README.md

🛠️ Running Instructions (Evaluator Friendly)

Follow these steps to run the entire project within 20–30 minutes.

1️⃣ Clone the Repository
git clone <your-repo-url>
cd project-root

2️⃣ Install & Run the Backend (Strapi v5)
Install dependencies
cd backend
npm install

Start Strapi
npm run develop

After starting:

Strapi Admin Panel: http://localhost:1337/admin

API Base URL: http://localhost:1337/api

📌 First Run: You will be prompted to create an admin user.

3️⃣ Install & Run the Frontend (React + Vite)

Open a new terminal:

cd frontend
npm install
npm run dev


Frontend will start at:

👉 http://localhost:5173

4️⃣ Configure Frontend Environment (Required)

Inside frontend/ create:

.env
VITE_API_URL=http://localhost:1337


Restart frontend after adding env variables.

✔️ After setup

Open: http://localhost:5173

Create articles in Strapi Admin

Articles will appear instantly in the React frontend

🔐 Permissions Setup (Mandatory for Public Access)

In Strapi Admin:

Go to Settings → Users & Permissions → Roles → Public

Enable these permissions:

Article

find

findOne

Category

find

findOne

Upload

find

findOne

Click Save.

📤 Optional Deployment Instructions
🌐 Deploy Frontend

You can deploy using:

Vercel

Netlify

Cloudflare Pages

Just run:

npm run build


and upload dist/.

☁️ Deploy Backend

Best platform for Strapi:

Render

Railway

DigitalOcean

Strapi Cloud (when v5 support arrives)

Set environment variables:

HOST=0.0.0.0
PORT=1337
APP_KEYS=your_app_keys
API_TOKEN_SALT=your_salt
ADMIN_JWT_SECRET=your_secret

📚 Tech Stack
Layer	Technology
Frontend	React + Vite + Tailwind CSS
Backend	Strapi v5 (Node.js)
Database	SQLite
Styling	TailwindCSS
Deployment	Vercel / Render
👤 Author

VyomGarud
Full-Stack Developer
