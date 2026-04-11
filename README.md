# QuCore Dynamic Auth (ATH)

**Centralized authentication and authorization service for the QuCore ecosystem. Provides SSO (Single Sign-On) and RBAC (Role-Based Access Control) across all corporate platforms.**

## Tech Stack

- **Runtime**: Node.js 22+
- **Frontend**: Next.js 15 (TypeScript)
- **Style**: Tailwind CSS + SCSS (Strict Backticks, Zero Semicolons)
- **State**: Redux Toolkit
- **Real-time**: Socket.io-client

---

## Configuration & Placeholders

This module requires specific environment variables. Before running, ensure you have replaced these placeholders in your configuration

---

## Installation & Setup

### 1. Environment Configuration

Create your configuration files and follow the internal instructions for BLOCK #1 (Local) and BLOCK #2 (Docker Overrides).

```bash
# Setup local environment
cp .env.example .env

# Setup production/docker environment
cp .env.example .env.prod
```

### 2. Local Execution

Use this for standard development on your host machine.

```bash
# Install dependencies
npm install

# Run the Next.js development server
npm run dev
```

### 3. Docker Execution

The frontend supports containerized environments for consistent development and production parity.

```bash
# Run in development mode (with hot-reload)
docker-compose -f docker-compose.dev.yml up -d --build

# Run in production mode
docker-compose -f docker-compose.prod.yml up -d --build
```

## Project Structure

A brief overview of the key directories in the **QuCore Auth** frontend:

- **`src/app/`**: Next.js App Router (pages, layouts, and global assets).
- **`src/components/`**: Reusable UI atoms and larger functional widgets.
- **`src/i18n/` & `src/locales/`**: Internationalization configuration and translation files.
- **`src/store/`**: Redux Toolkit slices for global state management.
- **`src/services/`**: API clients and external communication logic (Axios, Sockets).

---

## Contributing

We follow the **QuCore Elite** standard:

1. **Linting**: No semicolons, single quotes for logic, backticks for templates.
2. **Naming**: PascalCase for components, camelCase for functions/files.
3. **Check**: Always run `npm run lint` before committing.

## License & Authorship

Created and maintained by **Artem Zhytovoz**.
Distributed under the **GNU GPL v3** license.

---

_Every line of code is a step toward global technological leverage._
