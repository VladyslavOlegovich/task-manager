# Task Manager Project

This repository contains a Task Manager application with a React frontend and a NestJS backend, using PostgreSQL as the database. The frontend can be run as a web application in the browser or as a desktop application using Electron. The frontend is built with Vite, a modern build tool, which uses port `5173` by default.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- PostgreSQL (v12 or higher)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/VladyslavOlegovich/task-manager.git
cd task-manager
```

### 2. Set Up the Database

You need to set up a local PostgreSQL database.

#### Install PostgreSQL on your machine:

- **On macOS:**
  ```bash
  brew install postgresql
  ```
- **On Ubuntu:**
  ```bash
  sudo apt-get install postgresql
  ```
- **On Windows:** Download and install from [postgresql.org](https://www.postgresql.org/download/)

#### Start the PostgreSQL service:

- **On macOS:**
  ```bash
  brew services start postgresql
  ```
- **On Ubuntu:**
  ```bash
  sudo service postgresql start
  ```
- **On Windows:** Start the service via the PostgreSQL installer or pgAdmin.

#### Create a database named `task_manager`:

```bash
psql -U postgres
CREATE DATABASE task_manager;
\q
```

Or use **pgAdmin**:

- Open pgAdmin, right-click on "Databases" → "Create" → "Database...".
- Enter `task_manager` as the database name and click "Save".

> Ensure PostgreSQL is running on port **5432** (default). If the port is different (e.g., 5433), update the `DB_PORT` in the `.env` file in the backend directory.

### 3. Set Up the Backend

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the backend directory by copying `.env.example`:

```bash
cp .env.example .env
```

Update the `.env` file with your database credentials:

```ini
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_DATABASE=task_manager
```

> Set `DB_PASSWORD` to the password of your PostgreSQL user (set during PostgreSQL installation).

### 4. Set Up the Frontend

Navigate to the frontend directory:

```bash
cd ../frontend
```

Install dependencies:

```bash
npm install
```

Ensure the API URL in `src/config.ts` points to:

```ini
http://localhost:3000
```

### 5. Run the Application

You can run the Task Manager as a web application in the browser or as a desktop application using Electron.

#### Option 1: Run as a Web Application

Start the backend:

```bash
cd backend
npm run start:dev
```

This will start the NestJS server on `http://localhost:3000`.

Start the frontend:

```bash
cd ../frontend
npm run dev
```

This will start the React app on `http://localhost:5173`.

**Open your browser and go to:** `http://localhost:5173`

#### Option 2: Run as a Desktop Application (Electron)

Start the backend:

```bash
cd backend
npm run start:dev
```

This will start the NestJS server on `http://localhost:3000`.

Start the frontend in Electron mode:

```bash
cd ../frontend
npm run start:electron
```

This will launch the Task Manager as a desktop application.

**(Optional) Build the desktop app for distribution:**

```bash
npm run dist
```

This will create an executable file in the `dist` folder (e.g., `.exe` for Windows, `.dmg` for macOS).

### 6. Verify

- **For the web app:** Open your browser and go to `http://localhost:5173`.
- **For the desktop app:** The Electron window should open automatically after running `npm run start:electron`.
- You should see the Task Manager interface, and you can add, edit, and delete tasks.

### 7. Stop the Application

Stop the frontend and backend with `Ctrl + C` in their respective terminals.

**Stop the PostgreSQL service (optional):**

- **On macOS:**
  ```bash
  brew services stop postgresql
  ```
- **On Ubuntu:**
  ```bash
  sudo service postgresql stop
  ```
- **On Windows:** Stop the service via pgAdmin or the Services app.

For the desktop app, simply close the Electron window.

## Notes

- If port `5432` is already in use, change `DB_PORT` in `backend/.env` to a free port (e.g., `5433`) and ensure PostgreSQL is configured to use that port.
- If port `5173` is occupied, Vite will prompt you to use a different port.
