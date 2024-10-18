# WeatherApp Frontend

## Project Title and Description
WeatherApp is a web application designed to provide weather information to users. It allows users to search for current weather conditions and forecasts for specific locations. The application offers user-friendly interfaces for login, registration, and weather data display.

## Badges
![Static Badge](https://img.shields.io/badge/status-online-brightgreen)

## Quick Look
<img src="https://github.com/user-attachments/assets/e95e9ccf-4f4e-499e-9d4e-34b36885f8ff" width="700" alt="WeatherApp Demo">

## Table of Content
- [Project Title and Description](#project-title-and-description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Backend Information](#backend-information)
- [Screenshots](#screenshots)
- [Demo (link)](#demo-link)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Third-Party Libraries](#third-party-libraries)
- [License](#license)

## Features
- Search for weather information by city or location.
- View detailed weather data including temperature, humidity, wind speed, and forecast.
- User authentication for personalized weather settings.
- Ability to add favorite cities after logging in.
- Responsive design for optimal viewing on different devices.
  
## Installation

### Prerequisites
- Node.js (v12 or higher)
- npm (v6 or higher)

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/petrmichal0/weatherapp-frontend.git
    ```

2. Navigate to the project directory:
    ```bash
    cd weatherapp-frontend
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

## Usage
To start the application, run the following command:
```bash
npm run dev
```

By default, the development server runs on port 5180. After starting the server, go to [http://localhost:5180](http://localhost:5180) in your web browser to view the application.

If you need to change the port, you can do so in the vite.config.js file under the server section.


## Backend Information

The backend for this project is hosted at the following URL:

- Backend API: https://my-weatherapp-backend-1a24a5724dcc.herokuapp.com/

The source code for the backend is available on GitHub:

- Backend Repository: [https://github.com/petrmichal0/weatherapp-backend](https://github.com/petrmichal0/weatherapp-backend)

All API endpoints and detailed documentation on how to interact with the backend are provided in the backend repository. If you want to see the available API requests and how to use them, please visit the backend repository's README or relevant documentation files.


## Screenshots

<table>
  <tr>
    <th>Homepage</th>
    <th>Log in</th>
    <th>Sign up</th>
  </tr>
  <tr>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
  <a href="https://github.com/user-attachments/assets/ebc13b3e-5d93-42d6-a4df-0a2d7786fa7f">
    <img src="https://github.com/user-attachments/assets/ebc13b3e-5d93-42d6-a4df-0a2d7786fa7f" width="300" height="300" alt="Homepage">
  </a>
</td>
<td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
  <a href="https://github.com/user-attachments/assets/8caf62b6-ad12-4a9d-8416-4488a2c42a38">
    <img src="https://github.com/user-attachments/assets/8caf62b6-ad12-4a9d-8416-4488a2c42a38" width="300" height="300" alt="Log in">
  </a>
</td>
<td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
  <a href="https://github.com/user-attachments/assets/89a12d6e-819d-4d50-9b14-d0c41e3a0d67">
    <img src="https://github.com/user-attachments/assets/89a12d6e-819d-4d50-9b14-d0c41e3a0d67" width="300" height="300" alt="Sign up">
  </a>
</td>
  </tr>
  <tr>
    <th>After login</th>
    <th>Favorite Cities</th>
    <th>Forgot Password</th>
  </tr>
  <tr>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
  <a href="https://github.com/user-attachments/assets/88388bee-9c3e-4d90-bca5-f1882629e163">
    <img src="https://github.com/user-attachments/assets/88388bee-9c3e-4d90-bca5-f1882629e163" width="300" height="300" alt="After login">
  </a>
</td>
<td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
  <a href="https://github.com/user-attachments/assets/0004a9ee-5aea-47f8-adc0-c90904e2e066">
    <img src="https://github.com/user-attachments/assets/0004a9ee-5aea-47f8-adc0-c90904e2e066" width="300" height="300" alt="Favorite Cities">
  </a>
</td>
<td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
  <a href="https://github.com/user-attachments/assets/2d753ae4-a80d-45b4-bf15-ab976a4eac17">
    <img src="https://github.com/user-attachments/assets/2d753ae4-a80d-45b4-bf15-ab976a4eac17" width="300" height="300" alt="Forgot Password">
  </a>
</td>
  </tr>
</table>

## Demo (link)

Check out the live demo of the application [here](https://my-weatherapp-frontend-9e993cefb36f.herokuapp.com/Prague).

## Project Structure

```css
WeatherApp/
├── public/
│   ├── vite.svg
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   │   ├── apple.png
│   │   │   ├── drop.png
│   │   │   ├── facebook.png
│   │   │   ├── google.png
│   │   │   ├── sun.png
│   │   │   ├── wind.png
│   │   ├── images/
│   │       ├── avatar.png
│   │       ├── bg.png
│   │       ├── cloud.png
│   │       ├── emptyStar.png
│   │       ├── fullStar.png
│   │       ├── heavyrain.png
│   │       ├── line.png
│   │       ├── mist.png
│   │       ├── moderaterain.png
│   │       ├── partlycloudy.png
│   │       ├── sun.png
│   ├── consts/
│   │   ├── index.js
│   ├── pages/
│   │   ├── Favorite.jsx
│   │   ├── ForgetPassword.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Logout.jsx
│   │   ├── PageNotFound.jsx
│   │   ├── ResetPage.jsx
│   │   ├── ResetPassword.jsx
│   │   ├── Signup.jsx
│   ├── services/
│   │   ├── apiAuth.js
│   │   ├── apiWeather.js
│   ├── ui/
│   │   ├── AppLayout.jsx
│   │   ├── AsyncStorage.js
│   │   ├── Header.jsx
│   │   ├── Search.jsx
│   │   ├── ApiContext.jsx
│   │   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .env
├── .eslintrc.cjs
├── .gitignore
├── Procfile
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Technologies Used

[![React Badge](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)](#)
[![Vite Badge](https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&labelColor=black&logo=vite&logoColor=646CFF)](#)
[![TailwindCSS Badge](https://img.shields.io/badge/-TailwindCSS-38B2AC?style=for-the-badge&labelColor=black&logo=tailwindcss&logoColor=38B2AC)](#)

## Third-Party Libraries:
- **React Router**: A library for handling navigation and routing in React applications.
- **Axios**: A library for making HTTP requests, simplifying interaction with APIs.
- **Dotenv**: Allows loading environment variables from `.env` files.
- **Nodemailer**: A library for sending emails from Node.js applications.
- **React Icons**: A collection of icons that can be easily used in React projects.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the LICENSE file for details.
