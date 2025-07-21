# 💸 Peer-to-Peer Payment App

A secure and user-friendly web application for peer-to-peer money transfers. Built with a modern full-stack JavaScript stack.

## 🚀 Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT + Cookies
- **Validation**: Zod
- **Security**: bcrypt for password hashing

## ✅ Features

- 🔐 Secure Signup and Login (JWT-based auth)
- 💰 Send and Receive Payments
- 📜 View Transaction History
- 🧾 Track Available Balance
- ⚠️ Real-time Input Validation using Zod
- 🌙 Responsive Design with Dark Mode Support

## 📁 Project Structure

```
client/        # React Frontend
server/        # Node.js + Express Backend
```

## 🛠️ Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB running locally or Atlas URI

### Clone the Repository

```bash
git clone https://github.com/shreykosti/Peer-to-Peer-Payment-App.git
cd Peer-to-Peer-Payment-App
```

### Setup Backend

```bash
cd server
npm install
# Create a .env file with your Mongo URI and JWT_SECRET
npm run dev
```

### Setup Frontend

```bash
cd client
npm install
npm start
```

## 🔐 Environment Variables

Backend `.env` should include:

```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

### 📸 Screenshots

| Login Page | Dashboard | Transaction View |
| :---: | :---: | :---: |
| ![Login Page Screenshot](login.png) | ![Dashboard Screenshot](Dashboard.png) | ![Transaction View Screenshot](tH.png) |


## 🌐 Live Demo

Hosted on Vercel/Render: [**Live Site**](https://payment-app-frontend-v1.vercel.app/)
