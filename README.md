# WeatherApp

## Project Title and Description
WeatherApp is a web application designed to provide weather information to users. It allows users to search for current weather conditions and forecasts for specific locations. The application offers user-friendly interfaces for login, registration, and weather data display.

## Badges
![Static Badge](https://img.shields.io/badge/status-online-brightgreen)

## Quick Look
<img src="https://github.com/petrmichal0/weatherapp-frontend/assets/demo-image.png" width="700" alt="WeatherApp Demo">

## Table of Content
- [Project Title and Description](#project-title-and-description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
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

After starting, go to [http://localhost:3000](http://localhost:3000) in your web browser.

## Screenshots

<table>
  <tr>
    <th>Homepage</th>
    <th>Search Weather</th>
    <th>Weather Details</th>
  </tr>
  <tr>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <img src="https://github.com/petrmichal0/weatherapp-frontend/assets/homepage.png" width="300" height="300" alt="Homepage">
    </td>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <img src="https://github.com/petrmichal0/weatherapp-frontend/assets/search.png" width="300" height="300" alt="Search Weather">
    </td>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <img src="https://github.com/petrmichal0/weatherapp-frontend/assets/weather-details.png" width="300" height="300" alt="Weather Details">
    </td>
  </tr>
  <tr>
    <th>Login Page</th>
    <th>Signup Page</th>
  </tr>
  <tr>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <img src="https://github.com/petrmichal0/weatherapp-frontend/assets/login.png" width="300" height="300" alt="Login Page">
    </td>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <img src="https://github.com/petrmichal0/weatherapp-frontend/assets/signup.png" width="300" height="300" alt="Signup Page">
    </td>
  </tr>
</table>

## Demo (link)

Check out the live demo of the application [here](https://weatherapp-frontend-demo.netlify.app/).

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

## Third-Party Libraries

* React Router
* Tailwind CSS
* Axios
* ESLint
* Prettier

## License

This project is licensed under the MIT License - see the LICENSE file for details.
