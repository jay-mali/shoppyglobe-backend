# 🛒 ShoppyGlobe E-Commerce Backend API

This is the backend API for the ShoppyGlobe e-commerce application, created as part of a Full Stack Web Development Course project.

It includes:
- User Registration & Login
- Product listings
- Shopping Cart management
- MongoDB database integration

---

## 🧑‍🏫 This Guide is for Teachers / Evaluators

> This step-by-step guide assumes you have **nothing installed** on your laptop. Just follow it one step at a time — like a recipe!

---

## 🧩 PART 1: Install Required Tools

You need to install 3 things:

### 1️⃣ Node.js

- Go to: [https://nodejs.org/](https://nodejs.org/)
- Click **“Download LTS”**
- Run the installer → click "Next" → install → Done ✅

### 2️⃣ MongoDB & MongoDB Compass

- Go to: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
- Download the **MSI version** for Windows
- Run the installer:
  - ✅ Choose **“Complete” installation
  - ✅ Make sure **“Install MongoDB Compass”** is checked
- Click “Next” and complete the install

MongoDB is now ready!

---

## 🗂️ PART 2: Download and Run the Project

### 🔽 1. Download the Project Code

- Visit the GitHub repo:  
  👉 `https://github.com/jay-mali/shoppyglobe-backend.git`
- Click the green **“Code”** button → **Download ZIP**
- Extract the ZIP to your Desktop or any folder

### 📁 2. Open the Folder in VS Code

- If you don’t have VS Code, download from: [https://code.visualstudio.com/](https://code.visualstudio.com/)
- Open the extracted `shoppyglobe-backend` folder

---

## 🛠️ PART 3: Setup and Run the Project

### 📦 1. Install Project Dependencies

In VS Code → Open **Terminal**  
(From menu: Terminal → New Terminal)

Type this command:

```bash
npm install



#### Part4 : Start MongoDB
MongoDB should already be installed by now . Now:

Press Windows + S → search for MongoDB Compass

Open Compass → connect with this: --->   mongodb://localhost:27017

Leave Compass running


#### Part5 : Run the Server
In VS Code terminal, type:--->  npm run dev
 
 this will show --->  ✅ MongoDB connected
🚀 Server running 


####🧪 PART 6: Test the API (Using ThunderClient)

✅ Step 1: Install ThunderClient in VS Code

a.Open VS Code
b.Click on the Extensions icon (left sidebar)
c.Search for Thunder Client
d.Click Install

You’ll now see a small Thunder icon (⚡) on the left — that’s your API tester.


✅ Step 2: Register a New User

a. Click the Thunder ⚡ icon → Click "New Request"

b.In the top bar:

Method: POST

URL: http://localhost:5000/api/auth/register

Click the Body tab → Choose JSON → Paste this:

{
  "name": "Test User",
  "email": "test@example.com",
  "password": "test123"
}

d. Click Send

 You should see a response with a token and user object.


✅ Step 3: Login the User

Create a new request:

Method: POST

URL: http://localhost:5000/api/auth/login

Body → JSON:

{
  "email": "test@example.com",
  "password": "test123"
}

Click Send

->  Copy the token from the response — you’ll need this for all cart-related routes.

🛍️ Step 4: View All Products

Create a new request:

Method: GET

URL: http://localhost:5000/api/products

Click Send

--> You’ll see a list of sample products.

💡 Copy one _id value from the response — it will be used to test the cart.


✅ Step 5: Add Product to Cart

Create a new request:

Method: POST

URL: http://localhost:5000/api/cart

Click Headers tab → Add:

[Key - Value]

Authorization	Bearer <your token here>

Click Body tab → JSON → Paste:

{
  "productId": "REPLACE_WITH_PRODUCT_ID",
  "quantity": 2
}

--> Replace REPLACE_WITH_PRODUCT_ID with a real _id from the product list.

Click Send

♻️ Step 6: Update Cart Quantity

Create a new request:

Method: PUT

URL: http://localhost:5000/api/cart/<productId>

Use the same productId used above.

Headers:

Same Authorization token

Body → JSON:

{
  "quantity": 5
}

Click Send

 You should see the updated cart with the new quantity.


✅ Step 7: Remove Product from Cart

Create a new request:

Method: DELETE

URL: http://localhost:5000/api/cart/<productId>

Headers:

Same Authorization token

Click Send

---> The product will be removed from the cart.

👁️ Step 8: View Current Cart

Create a new request:

Method: GET

URL: http://localhost:5000/api/cart

Headers:

Same Authorization token

Click Send

✅ You’ll see the full cart for the logged-in user.

🔍 Step 9: View a Single Product by ID

Create a new request:

Method: GET

URL: http://localhost:5000/api/products/<productId>

Replace <productId> with a valid product _id

Click Send

---> You’ll see full product details like name, price, description, etc.



👨‍💻 Project By
Student: Jayesh Mali