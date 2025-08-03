# Freelancer Tracker

A React frontend application built with Vite, featuring authentication, dashboard functionality, and project management capabilities.

## Prerequisites

- Node.js version 20.12.2 (use nvm to manage Node versions)
- pnpm package manager

## Getting Started

### 1. Clone the repository

### 2. Set up Node.js version

```bash
nvm use
```

This will automatically use Node.js 20.12.2 as specified in `.nvmrc`.

### 3. Install pnpm (if not already installed)

```bash
npm install -g pnpm
```

### 4. Install dependencies

```bash
pnpm install
```

### 5. Start the development server

```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `pnpm dev` - Start the development server with hot reload
- `pnpm build` - Build the application for production
- `pnpm preview` - Preview the production build locally
- `pnpm lint` - Run ESLint to check for code issues
- `pnpm format` - Format code using Prettier

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: TanStack Query (React Query)
- **Form Handling**: React Hook Form with Yup validation
- **HTTP Client**: Axios
- **Routing**: React Router
- **Icons**: React Icons

## Development

### Code Style

This project uses ESLint and Prettier for code formatting and linting. Run the following commands to maintain code quality:

```bash
pnpm lint    # Check for linting errors
pnpm format  # Auto-format code
```
