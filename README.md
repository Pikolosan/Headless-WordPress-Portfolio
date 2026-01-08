# Headless WordPress Portfolio (Next.js + GraphQL) 🚀

![Next.js](https://img.shields.io/badge/Next.js-15.0-black) ![WordPress](https://img.shields.io/badge/WordPress-Headless-blue) ![GraphQL](https://img.shields.io/badge/GraphQL-API-pink)

A decoupled CMS architecture bridging a **WordPress Backend** with a **Next.js Frontend**. Designed to demonstrate modern "Jamstack" principles, high performance, and security.

---

## 🏗 Architecture

- **Frontend:** Next.js (App Router) for Static Site Generation (SSG).
- **Backend:** WordPress (Local/Headless Mode) serving content.
- **Data Layer:** WPGraphQL API (replacing standard REST API for efficiency).
- **Styling:** Tailwind CSS.

---

## 🧠 Engineering Highlights

### 1. Efficient Data Fetching (GraphQL)
Instead of over-fetching data with the REST API, I implemented **GraphQL queries** to request *only* the specific fields needed (Title, Slug, Excerpt), reducing payload size by ~60%.

```graphql
query PostBySlug($id: ID!, $idType: PostIdType!) {
  post(id: $id, idType: $idType) {
    title
    content
    date
  }
}
```
### 2. Dynamic Routing & Security
- Utilized Next.js Dynamic Routes ([slug]) to programmatically generate pages.

- Security: The WordPress backend is completely decoupled from the frontend, meaning the admin dashboard is not exposed to the public web.

## 🛠 Tech Stack
- Framework: Next.js 15

- CMS: WordPress + WPGraphQL Plugin

- Language: JavaScript (ES6+)

- Styling: Tailwind CSS
