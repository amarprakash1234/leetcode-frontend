# LeetCode Clone - Frontend

A modern frontend for an online coding and DSA problem-solving platform built with **React** and **Vite**.

Website URL : http://16.171.24.209
Admin User: email:amarprakash@gmail.com, password:**********

The application allows users to register, log in, browse coding problems, and access individual problem pages. It also includes an **admin dashboard** for managing problems and related content.

📸 Screenshots
Signuppage
screenshots/signup_page.png
🏠 Homepage
screenshots/home.png
💻 Problems Page
screenshots/problem_page.png
AdminPanel
screenshots/admin_panel.png



⚡ Code Editor

## 🚀 Features

### 👤 User Features

* User Signup
* User Login
* Authentication persistence
* Protected routes
* Problem listing
* Individual problem pages
* Code editor integration
* Loading states during authentication

### 👨‍💻 Admin Features

The application includes role-based admin routes for managing the platform.

* Admin dashboard
* Create new problems
* Update existing problems
* Delete problems
* Upload problem-related content
* Manage video content

Admin routes are accessible only to authenticated users with the `admin` role.

## 🛠️ Tech Stack

* **React 19**
* **Vite**
* **React Router**
* **Redux Toolkit**
* **React Redux**
* **Axios**
* **React Hook Form**
* **Zod**
* **Monaco Editor**
* **Tailwind CSS**
* **DaisyUI**
* **Lucide React**
* **ESLint**
* **Docker**
* **Docker Compose**

## 📁 Project Structure

```text
leetcode-frontend/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AdminPanel.jsx
│   │   ├── AdminDelete.jsx
│   │   ├── AdminVideo.jsx
│   │   ├── AdminUpload.jsx
│   │   ├── AdminUpdate.jsx
│   │   └── UpdateProblem.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Admin.jsx
│   │   └── ProblemPage.jsx
│   │
│   ├── store/
│   ├── utils/
│   │
│   ├── authSlice.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── Dockerfile
├── docker-compose.yml
├── package.json
├── vite.config.js
└── README.md
```

## 🔐 Authentication and Protected Routes

The application uses Redux for authentication state management.

When the application starts, it checks whether the user is already authenticated.

The following routes are protected:

| Route                      | Access              |
| -------------------------- | ------------------- |
| `/`                        | Authenticated users |
| `/problem/:problemId`      | Authenticated users |
| `/admin`                   | Admin only          |
| `/admin/create`            | Admin only          |
| `/admin/delete`            | Admin only          |
| `/admin/update`            | Admin only          |
| `/admin/update/:problemId` | Admin only          |
| `/admin/video`             | Admin only          |
| `/admin/upload/:problemId` | Admin only          |

Unauthenticated users are redirected to the signup page.

## 💻 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git

### 1. Clone the Repository

```bash
git clone https://github.com/amarprakash1234/leetcode-frontend.git
```

### 2. Move into the Project Directory

```bash
cd leetcode-frontend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will start on:

```text
http://localhost:5173
```

## 📜 Available Scripts

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run ESLint

```bash
npm run lint
```

## 🐳 Run with Docker

The project includes a `Dockerfile` for containerizing the frontend application.

### Build the Docker Image

```bash
docker build -t leetcode-frontend .
```

### Run the Container

```bash
docker run -p 5173:5173 leetcode-frontend
```

## 🐳 Run with Docker Compose

The project also includes a `docker-compose.yml` file.

Run:

```bash
docker compose up --build
```

According to the current Docker Compose configuration, the application is exposed on port `80`.

Open:

```text
http://localhost
```

To stop the containers:

```bash
docker compose down
```

## 🎯 Main Application Flow

```text
User
  │
  ▼
Signup / Login
  │
  ▼
Authentication Check
  │
  ├── Not Authenticated ──► Signup Page
  │
  └── Authenticated
          │
          ▼
       Home Page
          │
          ▼
     Select Problem
          │
          ▼
      Problem Page
```

For admin users:

```text
Admin Login
     │
     ▼
Admin Dashboard
     │
     ├── Create Problem
     ├── Update Problem
     ├── Delete Problem
     ├── Upload Content
     └── Manage Videos
```

## 👨‍💻 Author

**Amar Prakash**

* GitHub: https://github.com/amarprakash1234

## ⭐ Support

If you like this project, consider giving the repository a star ⭐.

