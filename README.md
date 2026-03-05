# zerodha-clone
Built to demonstrate full-stack MERN development skills including REST API design, database modeling, and responsive dashboard UI development.Zerodha Clone – Full Stack MERN Trading Platform

A full-stack stock trading platform inspired by Zerodha that allows users to view holdings, manage positions, and place buy/sell orders through a modern dashboard interface.

This project demonstrates full-stack development using the MERN stack and RESTful APIs.

Live Demo

Frontend: (Add link if deployed)
Backend API: (Add link)

Features

View stock holdings and portfolio

View open positions

Place buy/sell orders

Dashboard with portfolio analytics

REST API integration

Modular React components

MongoDB database for storing orders, holdings, and positions

Tech Stack

Frontend

React.js

Vite

Bootstrap / CSS

Backend

Node.js

Express.js

MongoDB

Mongoose

Tools

Git

GitHub

Postman

VS Code

Project Structure
Zerodha/
│
├── backend/
│   ├── model/
│   │   ├── HoldingsModel.js
│   │   ├── PositionsModel.js
│   │   └── OrdersModel.js
│   │
│   ├── index.js
│   └── package.json
│
├── dashboard/
│   ├── src/
│   └── package.json
│
├── frontend/
│   ├── src/
│   └── package.json
│
└── README.md
API Endpoints
Get Holdings
GET /allHoldings
Get Positions
GET /allPositions
Create Order
POST /newOrder

Example request:

{
"name": "INFY",
"qty": 2,
"price": 1500,
"mode": "BUY"
}
Installation & Setup
1 Clone Repository
git clone https://github.com/yourusername/zerodha-clone.git
cd zerodha-clone
2 Backend Setup
cd backend
npm install

Create .env

MONGO_URL=your_mongodb_connection
PORT=3002

Run server

node index.js
3 Frontend Setup
cd frontend
npm install
npm run dev
4 Dashboard Setup
cd dashboard
npm install
npm run dev
Screenshots

Add project screenshots here.

Example:

Dashboard
Portfolio
Orders Page

Learning Outcomes

Built a full-stack MERN application

Designed RESTful APIs

Implemented MongoDB database modeling

Developed React component-based UI

Integrated frontend with backend AFuture Improvements

User authentication (JWT)

Real-time stock price API

Charting with TradingView

Portfolio analytics

WebSocket live price updates

Author

Anoop Sharma

GitHub: https://github.com/anoopsharmait
