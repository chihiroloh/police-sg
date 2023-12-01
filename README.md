# Police-SG

## Introduction

This MERN-stack application is co-created by Wen Song, Chihiro and Glen for General Assembly's Unit 3 project, and is requirement for the course.

The project is a collaboration between the UIUX class and the SEI class, and the job of the SEI class is to create a working app based off the design of the UIUX class, so as to simulate real life working conditions between the 2 different teams during a project.
This app is created for the Singapore Police Force (SPF), for use by the public. The main functionalities of the app includes _reporting a crime_, _filing a report for missing items_ and _appealing for witnesses_ under various circumstances.

In the backend, the application uses JSON Web Tokens (JWT) as the primary method of authentication of its users. There are several API endpoints allowing the client to submit reports as well as get the submitted reports. If a user is registered as an "admin", they will also be able to create updates or update new case statuses.

## Screenshots

<img src="/frontend/src/assets/screenshots-Police-SG/screenshot-1.png" alt="Login Page" height="300">
<img src="/frontend/src/assets/screenshots-Police-SG/screenshot-1.png" alt="Login Page" height="300">
<img src="/frontend/src/assets/screenshots-Police-SG/screenshot-1.png" alt="Login Page" height="300">
<!-- ![Login page]() -->
![Homepage](/frontend/src/assets/screenshots-Police-SG/screenshot-2.png)
![Homepage](/frontend/src/assets/screenshots-Police-SG/screenshot-3.png)
![Tutorial](/frontend/src/assets/screenshots-Police-SG/screenshot-4.png)
![T&Cs](/frontend/src/assets/screenshots-Police-SG/screenshot-5.png)
![Report a crime](/frontend/src/assets/screenshots-Police-SG/screenshot-6.png)
![Report a crime](/frontend/src/assets/screenshots-Police-SG/screenshot-7.png)
![Report a crime](/frontend/src/assets/screenshots-Police-SG/screenshot-8.png)
![Contact us](/frontend/src/assets/screenshots-Police-SG/screenshot-9.png)
![Contact us](/frontend/src/assets/screenshots-Police-SG/screenshot-10.png)
![Appeals](/frontend/src/assets/screenshots-Police-SG/screenshot-11.png)
![Appeals](/frontend/src/assets/screenshots-Police-SG/screenshot-12.png)

## Technologies and Libraries Used

- React
- Node.js
- HTML
- CSS
- Figma
- Express.js
- MongoDB
- Mongoose
- JSONWebToken
- Bcrypt
- Multer

## Next Steps

- Implement geolocation to allow users to see the nearest police stations around them.
- Implement push notifications to notify users of new updates.
