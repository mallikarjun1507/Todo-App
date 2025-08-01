

-- Project Setup & Run Instructions – Todo-App---
 Tech Stack
Frontend: React (Vite)
Backend: Node.js + Express
Database: MySQL

---Create MySQL Database-------
---Open MySQL (MySQL Workbench)---

--Run the following commands--

CREATE DATABASE tododb;

USE tododb;

CREATE TABLE todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  completed BOOLEAN DEFAULT FALSE
);


--Create a .env file in the /server directory:--

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=Root
DB_NAME=tododb


---Clone the Repository-----

git clone https://github.com/mallikarjun1507/Todo-App.git ,
cd Todo-App ,
code .

 --Backend Setup (/server)--
-- Install Dependencies--

cd server,
npm install ,

--Run Backend Server--
node server.js


-- Frontend Setup (/client)--
--- Install Dependencies--
cd ../client ,
npm install

---Run Frontend (client)---
npm run dev
