# NetflixGPT 🎥🌐

Discover movies in a whole new way! With NetflixGPT, you can simply describe what’s on your mind. If you’re unsure of a title, our app leverages Google's Gemini API to suggest movies tailored to your thoughts. Additionally, we utilize the TMDB API to fetch detailed movie information, making your search experience seamless and accurate.

---

## Features ✨

- 🔎 **Get Movie Suggestions by Description** – Can't remember a title? Just describe it, and Gemini API will suggest relevant movies.
- 🗂 **State Management with Redux** – Efficiently manage and store movie data using React Redux.
- 🌟 **Detailed Movie Information** – Get movie overviews, ratings, posters, and more via TMDB API.
- 📌 **Seamless User Experience** – Powered by modern UI/UX with Tailwind CSS and React Router.

---

## Built With ⚙️

- **React** ⚛️ – Frontend framework.
- **React Router DOM** 🗺️ – For seamless navigation.
- **React Redux** 📦 – State management for storing API data.
- **Google Gemini API** 🤖 – AI-powered movie recommendations.
- **TMDB API** 🎬 – Fetching movie details and metadata.
- **Tailwind CSS** 🎨 – Styling for a sleek UI.

---

## Installation 🚀

Follow these steps to set up the project locally:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v20 or later recommended)
- [Git](https://git-scm.com/)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/NetflixGPT.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd NetflixGPT
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```env
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key
   REACT_APP_GEMINI_API_KEY=your_gemini_api_key
   ```

5. **Start the development server:**

   ```bash
   npm run dev
   ```

6. **Open the app:**
   Visit `http://localhost:3000` in your browser.

---

## Usage 🔄

- **Get Movie Suggestions** – Describe a movie concept, and Gemini API will provide recommendations.
- **Browse Movie Details** – Click on any movie to view its synopsis, cast, rating, and more.

---

## Contributing 📚

We welcome contributions! If you’d like to improve the project, follow these steps:

1. **Fork the repository.**
2. **Create a new branch:**
   ```bash
   git checkout -b feature-name
   ```
3. **Make your changes and commit:**
   ```bash
   git commit -m "Add your message here"
   ```
4. **Push to your fork:**
   ```bash
   git push origin feature-name
   ```
5. **Open a pull request.**

---

## Acknowledgments 🌟

- Built with **React, Redux, and Tailwind CSS**.
- Uses **Google's Gemini API** for AI-powered movie recommendations.
- Fetches movie data from **TMDB API** for accurate search results.

Enjoy discovering movies with NetflixGPT! 🚀🎬
