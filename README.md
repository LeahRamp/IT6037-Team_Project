
# IT6037 – Team Project
repo link: https://github.com/LeahRamp/IT6037-Team_Project

This guide helps you set up, run, and test the fullstack student resources application including both backend (Node.js + Express + MongoDB) and frontend (React Native) using Android Studio Emulator.

## 1. Open the Project in VS Code

1. Open your terminal (PowerShell, Bash, or macOS Terminal).
2. Navigate to your project folder:

   cd /path/to/IT6037-Team_Project

3. Open the project in **VS Code**:

   code .

## 2. Run the Backend (API Server)

1. In **VS Code**, open the terminal.
2. Navigate to the backend folder:

   cd backend-api

3. Start the backend server:

   npm start

4. You should see this confirmation message in the terminal:

   Server running on port 5000
   MongoDB Connected

The backend server is now running and connected to MongoDB.

## 3. Run the Frontend (React Native App)

1. In **VS Code**, open a **new terminal tab**.
2. Navigate to the frontend folder:

   cd StudentResourcesApp

3. Start the frontend development server:

   npm start

4. The **Metro Bundler** window will open in your terminal or browser.

5. Open **Android Studio** and run an **Android Emulator**.

6. In the Metro window, press the key:

   a

   to launch the app in the emulator.

Your mobile app is now running.

## 🔐 4. Firebase Authentication

The app uses **Firebase** for user authentication.

### User Roles and Permissions:

- **Student** – Can view content.
- **Tutor** – Can add and edit resources.()
- **Admin** – Full control: add, edit, delete.

Login Details:
Student=Student@gmail.com, password:963852
Tutor=Tutor@gmail.com, password:456123
Admin=admin@gmail.com, password:789456
