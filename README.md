# Be Fit - React Web Application

This is a React-based application designed to help users search for and discover workout routines using the Rapid API. Built with `create-react-app`, this project provides an intuitive interface for fitness enthusiasts to find exercises tailored to their specific needs.

## App Link

https://be-fit-ms.web.app/

## Key Features

- **Search by Equipment**: Find workouts that require specific equipment, making it easy to tailor your exercise routine to the tools you have available.
- **Search by Target Muscle**: Focus your training by searching for exercises that target specific muscles, ensuring that you can build strength where it matters most.
- **Search by Body Part**: Easily discover workouts based on the body part you want to work on, whether it's arms, legs, core, or any other area.
- **Workout Instructions**: Get detailed instructions for each workout to ensure proper form and technique, helping you achieve the best results.
- **Instructional Videos**: Access videos for each workout to visually guide you through the exercise, making it easier to follow along.
- **Workout Alternatives**: Explore alternative exercises for any workout, giving you the flexibility to switch up your routine while still targeting the same muscles or body parts.

## APIs Used

### 1. **ExerciseDB API**
The **ExerciseDB API** is a comprehensive database of workout exercises that allows you to search and retrieve detailed information about various exercises. This API enables users to explore workouts based on equipment, target muscles, and body parts. It provides crucial details like exercise instructions and alternatives, making it a valuable resource for creating personalized workout plans.
#### Link:  [https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb)

### 2. **YouTube Search and Download API**
The **YouTube Search and Download API** is used to enhance the workout experience by providing access to instructional videos for exercises. This API allows users to search for relevant workout videos on YouTube, enabling them to watch and follow along with professional trainers. It also supports downloading videos, making it convenient to access content offline.
#### Link:  [https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb](https://rapidapi.com/h0p3rwe/api/youtube-search-and-download)

## Design

![Desktop](https://github.com/user-attachments/assets/11d4bd7c-6945-4efa-ad23-ff2c3807c3a7)

## Installation

Follow these steps to install and run the React Workout Search application locally on your machine.

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher) or **Yarn** (v1.x or higher)
- A code editor like **VS Code**

### Steps to Install

1. **Clone the Repository**

   Start by cloning the repository to your local machine using Git. Open your terminal and run:

   ```bash
   git clone https://github.com/msmurali/be-fit-web-app.git

2. **Navigate to the Project Directory**

   Change into the project directory:

   ```bash
   cd be-fit-web-app
   
3. **Install Dependencies**

   Install the required dependencies using npm or Yarn:

   - Using npm:

     ```bash
     npm install
     ```

   - Using Yarn:

     ```bash
     yarn install
     ```
     
4. **Set Up Environment Variables**

   Create a `.env` file in the root directory of the project and add your below keys

   ```env
    REACT_APP_EXERCISES_API_BASE_URL=exercise-api-base-url-from-rapid-api
    REACT_APP_YOUTUBE_API_BASE_URL=youtube-search-and-download-api-base-url-from-rapid-api
    REACT_APP_YOUTUBE_STREAM_API_BASE_URL=https://www.youtube.com/watch
    REACT_APP_RAPID_API_KEY=rapid-api-key
    REACT_APP_EXERCISES_API_HOST=exercise-api-host-from-rapid-api
    REACT_APP_YOUTUBE_API_HOST=youtube-search-and-download-api-host-from-rapid-api
   ```
   
5. **Start the Development Server**

   Run the following command to start the development server:

   - Using npm:

     ```bash
     npm start
     ```

   - Using Yarn:

     ```bash
     yarn start
     ```
     
6. **Explore the App**

   You can now explore the app, search for workouts, and watch instructional videos. Make any necessary modifications as per your requirements.

   This will start the app and open it in your default web browser. The app will be available at `http://localhost:3000`.
