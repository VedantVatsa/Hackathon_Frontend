# Shoppingify
Shoppingify is a responsive e-commerce web application designed to provide a seamless and enjoyable shopping experience. This project includes a variety of components such as a header, footer, category list, and image slider, all built using React and Tailwind CSS, with additional UI elements from the Lucide React icon library.
```
Table of Contents
- Getting Started
- Prerequisites
- Installation
- Running the App
- Project Structure
- Components
  - Category
  - Header
  - Footer
  - List
  - Slider
```


## Getting Started
Follow these instructions to set up and run the project on your local machine for development and testing purposes.

## Prerequisites
Ensure you have the following installed on your machine:

-Node.js
-npm or yarn

## Installation
Clone the repository
Install the dependencies:
```
npm install
# or
yarn install
```
Running the App
Start the development server:
```
npm run dev
```

## Project Structure
The project has a simple structure:
```
shoppingify/
├── public/
│   ├── images/
│   │   ├── c1.png
│   │   ├── c2.png
│   │   ├── ...
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.js
│   │   │   ├── dropdown-menu.js
│   │   │   ├── carousel.js
│   │   │   └── ...
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── List.jsx
│   │   ├── Slider.jsx
│   │   └── ...
│   ├── App.jsx
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```
## Components
**Header**
The Header component includes the logo, navigation menus, a search bar, a shopping cart indicator, and a login button. It uses DropdownMenu from ui components for category and deal browsing.

**Footer**
The Footer component includes various sections like company info, product categories, support links, legal information, and social media links.

**List**
The List component displays categories of products, each represented by an image and a label. The layout is responsive and adjusts to different screen sizes.

**Slider**
The Slider component is an image carousel showcasing product images. It includes previous and next navigation buttons for sliding through the images.

**Category**
The Category component displays a grid of product categories with associated images and names. It uses Tailwind CSS for styling and ensures a responsive layout that adapts to different screen sizes.




