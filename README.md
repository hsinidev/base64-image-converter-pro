# ✨ Base64 Image Converter

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.2-646CFF?logo=vite&logoColor=white)
![SEO Optimized](https://img.shields.io/badge/SEO-Optimized-green)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

A powerful, modern, and visually stunning tool to instantly convert your images into Base64-encoded strings. Perfect for embedding images directly into HTML, CSS, and email templates, all running client-side for maximum speed and privacy.

---

### 🚀 [LIVE DEMO: doodax.com](https://doodax.com)

---

**Now featuring an immersive 3D Galaxy background, full SEO optimization with JSON-LD Schema, and a client-side architecture that respects user privacy.**

## Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [SEO & Metadata](#seo--metadata)
- [Contact](#contact)

---

## About The Project

This Base64 Image Converter provides a seamless and efficient workflow for developers and designers who need to embed images directly into their code. By converting images to Base64 strings, you can reduce HTTP requests, simplify deployment, and ensure images are always available within your emails or web pages, even if external sources are blocked.

This application replicates the complex, multi-state UI of professional tools, wrapped in a sleek, dark cosmic theme with a dynamic nebula background for a superior user experience.

---

## Key Features

-   🌌 **Stunning Cosmic Theme**: A beautiful, animated nebula background with 3D starfield parallax effects.
-   📥 **Drag & Drop Upload**: Easily drag and drop multiple images at once.
-   ⚡ **Instant Conversion**: Client-side processing using the `FileReader` API ensures privacy and speed.
-   🛡️ **Privacy Focused**: No images are ever uploaded to a server.
-   📱 **Fully Responsive**: A seamless experience across all devices.
-   🔍 **SEO Optimized**: Includes FAQ Schema, WebApplication Schema, and rich metadata.
-   📋 **Smart Copying**: One-click copy for `<img>` tags and CSS background properties.

---

## Project Structure

```
/
├── public/
│   ├── favicon.svg
│   ├── robots.txt         # SEO Crawler directives
│   └── sitemap.xml        # Site map for doodax.com
├── src/
│   ├── components/        
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ImageUploader.tsx
│   │   ├── Results.tsx
│   │   ├── SeoArticle.tsx # Long-form content & SEO logic
│   │   ├── LegalModals.tsx# Popups for Privacy/Terms/Contact
│   │   └── Footer.tsx
│   ├── utils/             
│   ├── App.tsx            # Main layout & state
│   ├── index.tsx          
│   └── types.ts           
├── index.html             # Main entry with Meta tags & CSS Background
├── package.json
└── README.md              
```

---

## Getting Started

### Prerequisites

Make sure you have Node.js and npm (or yarn/pnpm) installed on your machine.

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/hsinidev/base64-image-converter.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd base64-image-converter
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```
4.  Start the development server:
    ```sh
    npm run dev
    ```

---

## Usage

1.  **Open the application** in your web browser.
2.  **Drag and drop** one or more image files (JPG, PNG, GIF, WebP, SVG, BMP).
3.  The application will instantly process the images.
4.  Copy the generated Base64 string or CSS code block.
5.  Read the **SEO Guide** below the tool for technical details.

---

## SEO & Metadata

This project is pre-configured with:
1.  **JSON-LD Schema**: `WebApplication` and `FAQPage` schemas are injected into the head.
2.  **Meta Tags**: Optimized Title, Description, Keywords, and OpenGraph/Twitter cards.
3.  **Semantic HTML**: Proper use of `<main>`, `<article>`, `<nav>`, and `<header>` tags.

---

## Contact

**HSINI MOHAMED** - Full Stack Developer

*   GitHub: [@hsinidev](https://github.com/hsinidev)
*   Email: hsini.web@gmail.com
*   Website: [doodax.com](https://doodax.com)

Project Link: [https://github.com/hsinidev/base64-image-converter](https://github.com/hsinidev/base64-image-converter)
