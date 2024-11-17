# Personal Portfolio

Welcome to my personal portfolio repository! This portfolio is built with React for the frontend and integrates with Sanity CMS for content management. It showcases my skills, projects, and achievements as a Software Developer. The portfolio is designed to be responsive, user-friendly, and highlights my expertise in web development.

## Features

- **Responsive Design**: Optimized for all devices and screen sizes.
- **About Me Section**: Information about my background, skills, and career goals.
- **Project Showcase**: A list of projects I’ve worked on, with links to live demos and source code.
- **Skills Section**: A display of technologies I am proficient in.
- **Contact Form**: A form to get in touch with me directly.
- **Testimonial Section**: Positive feedback and recommendations from colleagues and clients, dynamically managed through Sanity CMS.
- **Sanity CMS Integration**: Manages all portfolio content dynamically.

## Technologies Used

### Frontend
- **React.js**
- **React Icons**
- **Framer Motion** (for animations)
- **Sass** (for styling)
- **Sanity Client** (`@sanity/client`, `@sanity/image-url`) to fetch and display content dynamically

### Backend
- **Sanity CMS**: Acts as the backend, handling content management and APIs for serving data.

### Other Tools
- **Testing**: Jest, React Testing Library
- **Styling**: Sass

## Installation

To get the project up and running locally, follow these steps:

### Frontend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/AmanBhanse/personal-portfolio.git
    ```

2. Navigate into the frontend project directory:
    ```bash
    cd personal-portfolio/frontend
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```
4. create the `personal-portfolio/backend/sanityCred.json` in format
    ```
    {
    "projectId" : "XXXXX",
    "token" : "XXXXXXX"
    }
    ```
    Please note that `projectId` and `token` you will be getting from your sanity dashboard. 

5. Run the frontend locally:
    ```bash
    npm start
    ```

### Sanity CMS Setup

1. Navigate to the `backend` directory:
    ```bash
    cd personal-portfolio/backend
    ```

2. Install Sanity CLI globally if you don’t already have it:
    ```bash
    npm install -g @sanity/cli
    ```

3. Install the required dependencies for the Sanity project:
    ```bash
    npm install
    ```

4. Run the Sanity Studio locally to manage content:
    ```bash
    npx start
    ```

5. The Sanity Studio will be available at `http://localhost:3333` by default. Ensure you have an active Sanity project linked.

## Running the Project

### Running sanity server first :

1. Navigate to the `backend` directory:
    ```bash
    cd personal-portfolio/backend
    ```
2. Run the Sanity Studio locally (If not started already):
    ```bash
    npx start
    ```

### Running frontend now :

1. Navigate to the `frontend` directory:
    ```bash
    cd personal-portfolio/frontend
    ```
2. Start the frontend server using:
    ```bash
    npm start
    ```

4. Open the frontend at `http://localhost:3000` to view the portfolio.

Sanity CMS dynamically serves content to the React frontend.

## Project Structure

### Frontend (`personal-portfolio/frontend`)

- **public/**: Contains static files and assets.
- **src/**: Contains React components and logic.
- **package.json**: Lists the dependencies and scripts for the frontend.

### Backend (Sanity CMS) (`personal-portfolio/backend`)

- **schemas/**: Defines content schemas for managing data in Sanity CMS (e.g., testimonials, projects, about me).
- **sanity.json**: Configuration for the Sanity Studio project.
- **package.json**: Lists the dependencies and scripts for Sanity CMS.

## Demo

Check out the live demo of my portfolio [here](https://aman-bhanse-portfolio.netlify.app/).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
