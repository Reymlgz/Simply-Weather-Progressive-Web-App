# Simply-Weather-Progressive-Web-App
 This Progressive Web App (PWA) allows users to search for weather information based on a timezone, displaying details such as city and country. The project is built using React, includes a service worker for offline functionality.


# Getting Started

## Prerequisites

Make sure you have the following tools installed before running the application:

* Node.js
* npm (comes with Node.js)

## Installation

### 1. Clone the repository:

```
git clone https://github.com/your-username/Simply-Weather-Progressive-Web-App.git
```

### 2. Change to the project directory:

```
cd swpwa
```

### 3. Install dependencies:

```
npm install
```

# Usage

To launch the project, use the following command:

```
npm start
```

Visit http://localhost:3000 in your web browser to view the App.

# Project Structure

The project follows the typical structure of a React application. Key directories and files include:

   * **public**: Static files and the offline.html file.
        * **images**: Include the images used in the project.
   * **src**: Contains the source code of the application.
        * **components**: React components used in the app.
        * **API** Include the file to fetch data from the Weather API.
        * **styles**: CSS stylesheets.
        * **App.js**: Main component.

# Service Worker

The Weather App includes a service worker to enable offline functionality and improve performance. The service worker is registered in the src/App.js file.

# Offline Support

An **offline.html** file is provided in the **public** directory. In case of network issues or when the app is offline, this HTML file will be displayed. The service worker handles the caching of assets for offline use.

# Progressive Web App (PWA)

A Progressive Web App (PWA) is a type of application software delivered through the web, built using common web technologies such as HTML, CSS, and JavaScript. PWAs are designed to work on any platform with a standards-compliant browser and provide a consistent and enhanced user experience, regardless of the device.

# Key Characteristics of PWAs

   * **Reliability**: PWAs can function in low-quality or no network conditions due to service workers, which cache assets and enable offline functionality.

   * **Performance**: PWAs are optimized for speed and responsiveness, providing a smooth user experience even on slower networks.

   * **Engagement**: Users can install PWAs on their devices, making them easily accessible from the home screen and fostering increased user engagement.

   * **Responsive Design**: PWAs are designed to be responsive, adapting to various screen sizes and orientations.

   * App-Like Experience*: PWAs provide an app-like experience with features such as push notifications and a fullscreen mode.

   * **Discoverability**: PWAs are discoverable through search engines and can be shared via URLs, eliminating the need for installation through app stores.

# More Info

If you want to know more about **PWA** visit https://web.dev/articles/what-are-pwas for more info. 
