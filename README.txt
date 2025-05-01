
Grocery Price Finder - Project README

🛒 Grocery Price Finder

This is a full-stack web application that allows users to search grocery items, view pricing from multiple stores, and find the cheapest option. Built with:

- Backend: Node.js, Express, MongoDB Atlas (via Mongoose)
- Frontend: HTML/CSS/JavaScript (served from Express /public)

🚀 Live Site:
https://grocery-price-finder-llot.onrender.com

📦 Features

- ✅ Search grocery items by name
- ✅ Find the cheapest price across stores
- ✅ View all stored grocery data in a table
- ✅ Responsive and clean UI

⚙️ Deployment Steps

1️⃣ Clone the Repo:

git clone https://github.com/Gungnir44/grocery-price-finder.git
cd grocery-price-finder

2️⃣ Install Dependencies:

npm install

3️⃣ Seed the Database (Optional):

node seed.js

4️⃣ Run Locally:

node server.js
# Visit: http://localhost:5000

🌐 Deployment (Render.com)

- Service Type: Web Service
- Start Command: node server.js
- Build Command: (blank or npm install)
- Root Directory: (blank if your code is in the root)
- Environment: MongoDB Atlas (whitelisted 0.0.0.0/0 for development)

🔌 API Endpoints

| Method | Route                  | Description                                        |
|--------|------------------------|----------------------------------------------------|
| GET    | /api/items             | Returns a list of all grocery items in the DB      |
| GET    | /api/cheapest?item=X   | Returns the cheapest listing for the item X        |

🗄️ Project Structure

/grocery-price-finder
├── /public
│   └── index.html      # Frontend UI
├── server.js           # Express server + API routes
├── seed.js             # Seed script to populate MongoDB
├── package.json
└── README.txt

✅ Example API Response

GET /api/items:

[
  {
    "_id": "6813d2043c4a24d2e8ed4a47",
    "name": "Milk",
    "price": 2.99,
    "store": "Walmart",
    "location": "Downtown"
  },
  {
    "_id": "6813d2043c4a24d2e8ed4a48",
    "name": "Eggs",
    "price": 3.99,
    "store": "Aldi",
    "location": "Uptown"
  }
]

🔒 Security Notes

- MongoDB Atlas: Currently open to 0.0.0.0/0 for testing; restrict IP access for production.
- Environment Variables: For future improvements, move MongoDB URI into .env and load with dotenv.
