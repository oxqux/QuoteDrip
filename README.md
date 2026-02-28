# QuoteDrip 💧

**QuoteDrip** is a sleek, modern random quote generator built with a focus on minimalist design and a seamless user experience. Designed to inspire, it fetches curated quotes from around the world in their original languages.

This project serves as a showcase of modern web development practices using **Svelte**, **Vite**, and **TypeScript**.

---

## ✨ Features

* **Multilingual Support**: Explore wisdom globally with quotes available in multiple languages (English, Russian, French, etc.).
* **Dynamic Fetching**: Quotes are retrieved asynchronously via a dedicated API endpoint (hosted on a separate branch) using the Fetch API.
* **Responsive "Drip" Design**: A beautiful, mobile-friendly UI with smooth transitions and modern aesthetics.
* **Type Safety**: Built with TypeScript to ensure robust code and a better developer experience.

## 🚀 Tech Stack

* **Framework**: [Svelte](https://svelte.dev/)
* **Build Tool**: [Vite](https://vitejs.dev/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: CSS3 (Modern Flexbox/Grid & Transitions)

## 🛠️ Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone git@github.com:oxqux/QuoteDrip.git
    ```
2.  **Navigate to the project directory**:
    ```bash
    cd QuoteDrip
    ```
3.  **Install dependencies**:
    ```bash
    pnpm i
    ```
4.  **Run the development server**:
    ```bash
    pnpm dev
    ```

## 📖 How it Works

The application uses the `fetch` API to request data from a JSON-based "server" located in a secondary branch of this repository. This simulates a real-world production environment where the frontend remains decoupled from the data source.

---

## ⚖️ Third-party licenses

This project uses components and styles derived from the Svelte framework, which is licensed under the MIT License.

Copyright (c) Svelte contributors.
