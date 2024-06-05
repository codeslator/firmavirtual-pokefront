# FirmaVirtual PokeFront
Technical Test by **FirmaVirtual Mexico** - @codeslator (Andres Melendez) - WebApp built with **React + Vite + TypeScript** using **TailwindCSS + DaisyUI** to develop UI components and **TanStack React Query** to make requests to **FirmaVirtual PokeAPI**.
## Requirements
To run this app, you must have installed Node & NPM.

## Installation

This README has the instructions to install and execute this webapp. The first step is clone the repository from **GitHub**.
```bash
git https://github.com/codeslator/firmavirtual-pokefront.git
```
After clone the repository, you must to install all dependencies.
```bash
cd firmavirtual-pokefront
npm install
```
 When dependencies are installed, before run the webapp in local, make sure you have the `.env` file in the repository with the following variables:
 ```
VITE_FIRMAVIRTUAL_API_URL=http://localhost:3000
```
After add environment variables, you can execute the Vite App using the following command:
```bash
npm run dev
```
If application started correctly, will be listen in **5173** port. Open in your Browser the following URL: `http://localhost:5173/`. Now the **React** created with **Vite** is running. Great!
Finally, you can start to navigate in the webapp. **Good job!**

## Directory Structure
The WebApp project has the following directory structure:
```
├── src
│   ├── apis
│   │   ├── firmaVirtualApi.ts
│   │   └── index.ts
│   ├── global
│   │   ├── ...
│   │   └── index.ts
│   ├── hooks
│   │   ├── ...
│   │   └── index.ts
│   ├── interfaces
│   │   ├── ...
│   │   └── index.ts
│   ├── router
│   │   ├── ...
│   │   └── index.tsx
│   ├── services
│   │   ├── ...
│   │   └── index.ts
│   ├── views
│   │   ├── assets
│   │   ├── common
│   │   ├── components
│   │   ├── layouts
│   │   └── pages
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
├── .env
├── ...
├── index.html
├── docker-compose.yml
├── package.json
├── postcss.config.json
├── tailwind.config.json
├── tsconfig.json
├── tsconfig.node.json
├── README.md
└── vite.config.ts
```
This was part of the developement of this Technical Test. **I hope you like it!** Thanks for this opportunity and sorry for delay.