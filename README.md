# Node Express CRUD App

A simple CRUD-based social media posts application built with **Node.js, Express.js, and EJS**.

The application allows users to create, view, edit, and delete posts through a server-rendered web interface.

## 🚀 Features

- Create new posts
- View all posts
- View individual posts
- Edit existing posts
- Delete posts
- UUID-based unique post IDs
- Server-side rendering with EJS
- RESTful routing
- HTTP method overriding for PATCH and DELETE requests
- Dark-themed responsive UI
- Static CSS using Express

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **EJS**
- **UUID**
- **Method-Override**
- **HTML5**
- **CSS3**

## 📂 Project Structure

```text
node-express-crud-app/
│
├── public/
│   └── style.css
│
├── views/
│   ├── edit.ejs
│   ├── index.ejs
│   ├── new.ejs
│   └── show.ejs
│
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## 🔄 CRUD Operations

| Operation        | Method | Route             |
| ---------------- | ------ | ----------------- |
| View all posts   | GET    | `/posts`          |
| Create post page | GET    | `/posts/new`      |
| Create post      | POST   | `/posts`          |
| View single post | GET    | `/posts/:id`      |
| Edit post page   | GET    | `/posts/:id/edit` |
| Update post      | PATCH  | `/posts/:id`      |
| Delete post      | DELETE | `/posts/:id`      |

## ⚙️ How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/arshh0-0/node-express-crud-app.git
```

### 2. Navigate into the project

```bash
cd node-express-crud-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
npm start
```

### 5. Open the application

Visit:

```text
http://localhost:8080/posts
```

## 💾 Data Storage

This project currently stores posts in an **in-memory JavaScript array**.

Because no database is currently connected, newly created or modified posts are reset whenever the Node.js server restarts.

This was intentionally kept simple to focus on learning and implementing Express.js routing, CRUD operations, middleware, and EJS server-side rendering.

## 📚 What I Learned

Through this project, I practiced:

- Creating an Express.js server
- Creating and organizing Express routes
- Handling GET, POST, PATCH, and DELETE requests
- Using middleware
- Parsing form data with `express.urlencoded()`
- Using `method-override`
- Rendering dynamic pages with EJS
- Passing data from Express routes to EJS templates
- Generating unique IDs with UUID
- Serving static files with Express
- Structuring a Node.js project
- Using Git and GitHub for version control

## 🔮 Future Improvements

Possible future improvements include:

- Add MongoDB for persistent data storage
- Add Mongoose for database modeling
- Add user authentication
- Add post timestamps
- Add input validation
- Add error handling for invalid post IDs
- Add likes and comments
- Deploy the application online

## 👨‍💻 Author

**Mohd Arsh**

Built as a learning project to practice **Node.js, Express.js, EJS, and CRUD application development**.
