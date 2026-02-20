# Wild Oasis Project

## Overview

The Wild Oasis Project is a modern web application built using React that demonstrates the use of various advanced technologies and best practices in web development.

The Wild Oasis is a small boutique hotel with 8 luxurious small wooden cabins. This app is build to manage everything about the hotel: cabins, bookings and guests. This is an internal application used to check in guests as they arrive.
Users of the app are hotel employees. New users can only be signed in inside the app.

If you want to check the implemented functionality feel free to use predefault credentials for the first test login.

[The link to the deployed project](https://world-oasis-admin.vercel.app/)

## Technologies Used

1. **React**: The core library for building the user interface, allowing for the creation of reusable components.

2. **React Context API**: Utilized for state management, particularly for implementing a theme toggler (light/dark mode). This allows seamless updates across the application without the need for prop drilling.

3. **TanStack Query (formerly React Query)**: Implemented for data fetching, caching, and synchronization of server state. It simplifies making asynchronous requests and handling global state related to data.

4. **Styled Components**: For styling components, this library enables the use of tagged template literals, enhancing the application's design and responsiveness while maintaining CSS in JavaScript.

5. **React Router**: Used for handling routing within the application, enabling a single-page application (SPA) experience by allowing users to navigate without page reloads.

6. **React Hook Form**: Used for managing form state, handling validation, and improving performance by reducing re-renders.

7. **Superbase**: A backend-as-a-service platform utilized for authentication and real-time data storage, simplifying backend development without the need to manage a server.

8. **Responsive Design**: The application is meticulously designed to be fully responsive, ensuring a smooth user experience across various devices and screen sizes.

## Features

- **Theme Toggle**: Users can switch between light and dark themes for a personalized experience.
- **Data Fetching**: Efficiently fetch and display data using TanStack Query, with automatic caching and synchronization.
- **User Authentication**: Built-in user authentication using Superbase, providing secure access to user-specific content.
- **Enhanced Forms**: Robust form handling using React Hook Form, ensuring validation and user feedback.
