# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.



## Instructions to run frontend

`npm run dev`
- runs on   ➜  Local:   http://localhost:5173/
- dev mode to run locally

`npm run build`
- build mode to run when hosted on aws or whatever


## Frontend App Structure

- index.html
    - the actual html file loaded by your browser
    - filled in by your referenced src script with your <script> component
- main.jsx
    - connects your react to your html
    - globally imports all your css with index.css
    - puts your react app inside the root element
        - createRoot(document.getElementById('root')).render(
    - renders your app component
