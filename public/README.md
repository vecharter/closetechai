Public folder for static assets

Place static files you want served as-is (images, favicon, robots.txt, etc.) in this `public/` folder.

How Vite serves these files:

- Files under `public/` are served at the project root path during development and from the build output.
  For example, `public/images/placeholder.svg` is available at `/images/placeholder.svg`.

Usage examples in components:

- Image tag: `<img src="/images/placeholder.svg" alt="placeholder" />`
- CSS background: `background-image: url('/images/bg.png')`

Notes:

- Files in `public/` are copied to the dist folder unchanged during build.
- Prefer importing assets from `src/` when you want hashed filenames and bundling; use `public/` for truly static files.
