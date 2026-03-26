# ERP Frontend

A React-based ERP-style admin UI with master data screens for parties, items, and products. Built with Create React App, React Router, and a component-driven layout with sidebar navigation.

## Features

- Party Master list with search and status badges
- Add Party form screen
- Party Opening screen
- Supplier Wise Labour screen
- Item Group, Product Master, and Item Master screens
- Sidebar navigation with expandable groups

## Routes

- `/` Party Master
- `/add-party` Add Party
- `/party-opening` Party Opening
- `/supplier-labour` Supplier Wise Labour
- `/item-group` Item Group
- `/product-master` Product Master
- `/item-master` Item Master

## Tech Stack

- React 19
- React Router 7
- Create React App
- lucide-react icons

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm start
```

The app runs at `http://localhost:3000`.

## Scripts

- `npm start` Run the app in development mode
- `npm test` Run tests in watch mode
- `npm run build` Build for production

## Notes

The current screens use local, in-memory data and are intended as a frontend UI scaffold.
