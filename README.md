# Code Warehouse - Frontend Web

This is the web frontend for the **Code Warehouse** management system, developed as a collaborative project within our programming club. The ecosystem consists of a React web app, a mobile app (Solid.js), and a dedicated backend.

## 🛠 Tech Stack

- **Framework:** React
- **Language:** TypeScript
- **Build Tool:** Vite

## 📋 Admin Panel Features

The web application serves as the primary administrative interface for managing the database.

### Core View

The main dashboard features a dynamic **Data Table** designed for high-volume record management:

- **Pagination:** Efficiently handles large datasets by breaking them into manageable pages.
- **Smart Sorting:** Sort data by clicking on table column headers. Each click toggles between ascending and descending order.
- **Integrated Search:** A search bar located on the right side of the top bar allows for real-time data filtering based on the current sort criteria.

### Filtering System

A dedicated sidebar on the left provides granular control over the visible data:

- **UI Component:** Dropdown menus containing checkboxes for multi-select filtering.
- **Categories:** Includes filtering by **Location**, **Category**, and other product-specific attributes.

### Record Management

- **Inline Editing:** Clicking the edit icon on a row triggers a **Side Drawer** (sliding form) from the right.
- **Data Integrity:** Administrators can manually update all product details except for the **Record ID**, which remains read-only to ensure database consistency.

---

**Note:** To maintain a clean UI, this panel intentionally excludes Breadcrumbs and dedicated Sorting Tabs.

## 🏗 Project Structure

- `/src` – Application source code (components, hooks, views).
- `/public` – Static assets (icons, images).
- `vite.config.ts` – Development environment configuration.
- `tsconfig.json` – TypeScript compiler settings.

## 🚀 Getting Started

To run the project locally, follow these steps in your terminal:

**1. Clone the repository:**

```bash
git clone https://github.com/grupadotnet/code-warehouse-frontend.git
cd code-warehouse-frontend
```

**2. Install dependencies:**

```bash
npm install
```

**3. Start the development server:**

```bash
npm run dev
```

---

## 👥 Authors

- **Frontend Web Team:**
  - [Jakub Motyka](url_github)
  - [Mateusz Matla](url_github)
  - [Dawid Musiał](https://github.com/musialek007)
  - [Łukasz Śladowski](url_github)

Made with ❤️ by the Programming Club Team
