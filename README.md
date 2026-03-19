# Le Charme Floral 🌸

![Le Charme Floral Hero Image](public/images/hero.jpg)

**Le Charme Floral** is a premium, beautifully designed web application crafted for an artisan floral creator based in Bizerte, Tunisia. The platform showcases natural and artificial floral arrangements with an elegant, responsive design and a high-performance image gallery.

---

## ✨ Features

*   **Modern, Elegant UI:** A refined aesthetic with smooth transitions, glassmorphism elements, and a harmonious color palette designed to emphasize the beauty of the floral creations.
*   **Performance First:** Advanced image optimization strategies implemented from the ground up to ensure blazing-fast load times.
*   **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewing experiences.
*   **Interactive Gallery:** A custom-built, responsive masonry-style gallery featuring an interactive lightbox for viewing high-resolution images.
*   **Optimized Image Delivery:**
    *   **Automated WebP Conversion:** Next-generation image formats generated automatically using the Sharp API.
    *   **Responsive `srcset`:** Dynamically serves the right image size (480w, 800w, 1200w, or 1920w) depending on the user's screen size and device profile.
    *   **Cumulative Layout Shift (CLS) Prevention:** Explicit dimensions prevent content jumping.
    *   **Skeleton Loading:** Smooth shimmer animations (`pulse`) display natively while images load, avoiding blank spaces.
    *   **Eager & Lazy Loading:** The LCP (Largest Contentful Paint) Hero image is eagerly preloaded, while off-screen components are lazy-loaded to save bandwidth.

---

## 🛠 Tech Stack

**Core:**
*   [React 18](https://react.dev/) - UI Library
*   [TypeScript](https://www.typescriptlang.org/) - Static Type Checking
*   [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling

**Styling & UI:**
*   [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
*   [Lucide React](https://lucide.dev/) - Beautiful, consistent iconography

**Image Optimization:**
*   [Sharp](https://sharp.pixelplumbing.com/) - High-performance Node.js image processing

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  **Clone the repository** (if applicable):
    ```bash
    git clone https://github.com/Useradel07/le_charme_floral.git
    cd le_charme_floral
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Optimize Images:**
    Before running the app locally or building for production, generate the responsive `.webp` image assets running the optimization script:
    ```bash
    npm run optimize-images
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The site will be running at `http://localhost:5173`.

---

## 📦 Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Builds the application for production, outputting to the `dist` folder. |
| `npm run optimize-images` | Runs the `sharp` Node.js script to process all JPEGs into responsive WebP sizes. |
| `npm run preview` | Starts a local web server to serve the generated production build for testing. |
| `npm run lint` | Runs ESLint to statically analyze the code and catch errors. |
| `npm run typecheck` | Checks for TypeScript compilation errors without emitting files. |

---

## 🏗 Project Structure

```text
le_charme_floral/
├── public/                 # Static assets (favicon, generated images)
│   └── images/             # Source JPEGs and optimized WebPs
├── scripts/
│   └── optimize-images.mjs # Sharp image conversion script
├── src/
│   ├── components/         # Reusable React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Gallery.tsx
│   │   ├── Hero.tsx
│   │   ├── OptimizedImage.tsx # High-performance picture wrapper
│   │   └── Services.tsx
│   ├── index.css           # Global styles and Tailwind directives
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
├── index.html              # HTML template
├── package.json            # Dependencies and npm scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

---

## 🌐 Deployment

This project is configured to be easily deployed to [Vercel](https://vercel.com/). 

When deploying, ensure your build command encompasses image optimization if you aren't committing the generated `.webp` files to your repository.
For example, set your build command to:
```bash
npm run optimize-images && npm run build
```

---

## 📄 License & Copyright

© **Le Charme Floral**. All rights reserved. 
Images and code within this repository are the property of the creator and may not be reused or distributed without explicit permission.
