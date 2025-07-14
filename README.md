# Peer-to-Peer Payment App

This is a full-stack peer-to-peer payment application built using **React** for the frontend, **Node.js** and **Express** for the backend, and **MongoDB** for the database. It allows users to register, log in, send and receive money, and view transaction history. Authentication is secured with JWT, and password hashing is handled via bcrypt. The app also features a clean and responsive UI with modern state management and validation using Zod.

---

## Features

- User Authentication (JWT-based)
- Secure Password Storage (bcrypt)
- Send & Receive Money
- Transaction History
- Responsive React Frontend
- Express & MongoDB Backend
- Validation with Zod

---

## Client Installation

Install client dependencies:

```bash
cd client
npm install
```

### Run Client Locally

```bash
npm run dev
```

---

## Server Installation

Install server dependencies:

```bash
cd server
npm install
```

### Run Server Locally

```bash
nodemon index.js
```

---

## Environment Variables

Make sure to configure a `.env` file in the server directory with:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```


