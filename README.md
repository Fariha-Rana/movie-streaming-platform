# Streaming Platform

This is a streaming platform project that allows users to find and explore movies. It is built using Next.js and Tailwind CSS.
Website is Live at "https://movie-streaming-platform-cd0m70st9-fariha-ranas-projects.vercel.app"
## Installation

1. Clone the repository. 
2. Install dependencies by running `pnpm install`.

## Usage

1. You need TMDB API access token that you can create from here `https://www.themoviedb.org/settings/api`
2. Make an .env file and put the neccessary environment variable in it as shown in .env.example file
3. Start the development server by running `pnpm run dev`.
4. Open your browser and navigate to `http://localhost:3000` to access the application.

## Scripts

- [dev]: Starts the development server.
- [build]: Builds the production-ready application.
- [start]: Starts the production server.
- [lint]: Runs ESLint for code linting.

## Dependencies

- axios: HTTP client for making API requests.
- dotenv: Loads environment variables from a .env file.
- next: React framework for server-side rendering and static site generation.
- next-auth: Authentication library for Next.js applications.
- react: JavaScript library for building user interfaces.
- react-dom: React package for DOM rendering.
- react-loader-spinner: Loading spinner component for React.

## Dev Dependencies

- autoprefixer: PostCSS plugin to parse CSS and add vendor prefixes.
- eslint: JavaScript linter for identifying and reporting code errors.
- eslint-config-next: ESLint configuration for Next.js projects.
- postcss: CSS post-processor for transforming styles.
- tailwindcss: Utility-first CSS framework.

## Configuration Files

- .eslintrc.json: ESLint configuration file.
- postcss.config.js: PostCSS configuration file.
- tailwind.config.js: Tailwind CSS configuration file.
- next.config.js: Next.js configuration file.

## Project Structure

- [src/app]: Contains the main application components and pages.
- [src/components]: Contains reusable components.
- `src/utils`: Contains utility functions for making API requests.
