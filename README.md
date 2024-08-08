# InfiPics 📸

InfiPics is a web application that allows users to browse and favorite items in an infinite-scroll capable interface. Built with React and Vite, it provides a smooth and responsive user experience for exploring a diverse collection of images and content.

- [InfiPics Preview](https://ibb.co/3sdjVTm)

## Features ✨

- Infinite scroll functionality for seamless browsing;
- Ability to favorite items;
- Diverse content including images, icons, and artwork;
- Responsive design for various screen sizes;

## Tech Stack 🛠️

- HTML;
- CSS;
- BEM (Block Element Modifier) methodology for styling;
- SCSS for styling preprocessor;
- React;
- Vite;

## Getting Started 🚀

### Prerequisites 🧩

- Node.js (version 14 or later recommended);
- npm or yarn;

### Installation 🛠️

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/InfiPics.git
    ```

2. Navigate into the project directory:

    ```bash
    cd InfiPics
    ```

3. Install the dependencies:

    Using npm:

    ```bash
    npm install
    ```

    Or using yarn:

    ```bash
    yarn install
    ```

    Also create an .env file outside of the scope and add these to the .env file:

    ```bash
    VITE_FLICKR_API_KEY=2afbd3e2f0f61f15bb4c37d2d658f304
    VITE_FLICKR_API_URL=https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${VITE_FLICKR_API_KEY}&format=json&nojsoncallback=1&text=landscape&extras=owner_name
    ```

4. Start the development server:

    Using npm:

    ```bash
    npm run dev
    ```

    Or using yarn:

    ```bash
    yarn dev
    ```

    The application should now be running on `http://localhost:3000` (or the port specified in your Vite configuration).

## Usage 🖥️

- Navigate through the infinite scroll interface to explore the available items.
- Click the heart icon to favorite any item. Favorited items can be reviewed later.

## Styling 🎨

This project uses SCSS for styling and follows the BEM (Block Element Modifier) methodology to maintain organized and modular styles. 

To compile SCSS files, you can use the following command:

Using npm:

```bash
npm run build-css
