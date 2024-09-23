# React-TailwindCSS Project

This project is a React application styled with TailwindCSS. It includes a `SearchResults` component that serves as the main file, importing various other components like `SearchResultNavbar`, `SearchResultCards`, `SearchResultFilters`, `SearchResultText`, and `SearchResultPagination`.

## Getting Started
Follow these instructions to set up the project on your local machine.

### Prerequisites
Ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher) or yarn (v1 or higher)

### Installation

**after creating react-app like**
npx create-react-app my-app
cd my-app

**Install dependencies:**

1. **Install TailwindCSS:**

    npm install -D tailwindcss postcss autoprefixer

    npx tailwindcss init -p

    **Replace the content of your tailwind.config.js with:**

    /** @type {import('tailwindcss').Config} */
      module.exports = {
        content: [
           "./src/**/*.{js,jsx,ts,tsx}",
        ],
        theme: {
        extend: {},
      },
        plugins: [],
     }

     **Replace the src/index.css with**

     @tailwind base;
     @tailwind components;
     @tailwind utilities;


3. **install additional dependencies for tooltip**
    npm install @mui/material @emotion/react @emotion/styled

4. **for slider used in SearchResultFilters.jsx component**

    npm install react-slider

5. **Run the development server:**

    npm start




