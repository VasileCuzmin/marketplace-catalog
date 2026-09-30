# Marketplace Catalog

A full-stack plant marketplace catalog built with React, TypeScript, Vite, and Express. The application lets visitors browse a paginated product collection, inspect product details, and read or submit reviews.

The repository contains both the browser client and a lightweight local API. Product and review data are stored in memory for development purposes.

## Features

- Product catalog with 12-item offset pagination
- Product detail pages and review lists
- Review submission endpoint
- Category discovery endpoint
- Cursor-based product pagination API for clients that need incremental loading
- Runtime response validation in the client
- Request cancellation while changing catalog pages
- One-minute in-memory client cache for paginated product requests
- API, validation, and timeout error states

## Tech Stack

| Area           | Technology                           |
| -------------- | ------------------------------------ |
| Client         | React 19, React Router 7, TypeScript |
| Styling        | Tailwind CSS                         |
| Client tooling | Vite, ESLint, Prettier               |
| API            | Express 5, CORS                      |
| Server tooling | `tsx`                                |

## Prerequisites

- Node.js 20 or later
- npm

## Getting Started

From the `marketplace-catalog` directory:

```bash
npm install
npm start
```

`npm start` runs both development servers:

| Service     | Address                 | Purpose           |
| ----------- | ----------------------- | ----------------- |
| Vite client | `http://localhost:5173` | React application |
| Express API | `http://localhost:4000` | Catalog API       |

Vite proxies browser requests beginning with `/api` to the Express server, so the client uses relative API paths during development.

To run each service separately:

```bash
npm run dev:client
npm run dev:api
```

## Scripts

| Command                | Description                                                       |
| ---------------------- | ----------------------------------------------------------------- |
| `npm start`            | Start the API and client development servers together.            |
| `npm run dev`          | Start only the Vite client.                                       |
| `npm run dev:client`   | Start the Vite client on port 5173.                               |
| `npm run dev:api`      | Start the Express API on port 4000 with file watching.            |
| `npm run type-check`   | Type-check both the client and API without producing output.      |
| `npm run lint`         | Run ESLint across the repository.                                 |
| `npm run lint:fix`     | Apply ESLint fixes where possible.                                |
| `npm run format:check` | Check formatting with Prettier.                                   |
| `npm run format`       | Format files with Prettier.                                       |
| `npm run build`        | Type-check and create a production client build in `dist/client`. |
| `npm run preview`      | Serve the built client locally.                                   |

## Application Routes

| Route           | Page                       |
| --------------- | -------------------------- |
| `/`             | Redirects to `/products`   |
| `/products`     | Paginated product catalog  |
| `/products/:id` | Product detail and reviews |

## API Reference

All successful API responses use a `data` property and a `meta` property. Error responses use an `error` property.

### Health

```http
GET /api/health
```

Returns the API status and an ISO timestamp.

### Categories

```http
GET /api/categories
```

Returns category metadata and product counts for Tropical, Succulents & Cacti, Ferns, Herbs, Flowering, and Air Plants.

### Products

```http
GET /api/products
GET /api/products/offset?page=1&pageSize=12
GET /api/products/cursor?limit=10&cursor=<cursor>
GET /api/products/:id
```

`/api/products/offset` supplies the catalog page data. Its response metadata includes `total`, `page`, `pageSize`, and `totalPages`.

`/api/products/cursor` accepts an optional opaque `cursor` and a `limit` up to 100. Its response metadata contains `nextCursor`, which is `null` once all products have been returned.

### Reviews

```http
GET /api/products/:id/reviews
POST /api/products/:id/reviews
Content-Type: application/json

{
  "rating": 5,
  "title": "Thriving already",
  "comment": "It arrived healthy and well packed.",
  "author": "Alex"
}
```

`POST` creates a review with a generated ID, `verified: false`, and the current timestamp. Reviews are kept only in the server process and are lost whenever the API restarts.

## Project Structure

```text
src/
  api/                         Express application and in-memory data
    data/                      Product and review fixtures
    routes/                    Categories and products endpoints
    cursor.ts                  Cursor encoding and decoding
  client/                      React application
    api/                       Request helpers, cache, and client API functions
    components/                Catalog, product, review, and pagination UI
    pages/                     Listing and product detail routes
    shared/                    Shared layout components and hooks
  types/                       Shared API contracts and runtime validators
```

## Client Data Flow

The client requests paginated products from `/api/products/offset`. Before a new catalog-page request starts, React runs the previous effect cleanup and aborts the prior request. This prevents a slower prior page response from replacing newer results.

Responses are validated at runtime before rendering. Invalid response data raises a `ValidationError`, allowing the UI to distinguish malformed API data from normal API and timeout failures.

The paginated product client caches successful responses for 60 seconds, keyed by the requested page and page size.

## Data Model

A product includes its identifier, name, category, price, rating, review count, image URL, stock status, and an optional badge. Product detail data extends this with additional information such as care instructions and specifications. Review records include a rating, title, comment, author, verification state, and creation timestamp.

Shared TypeScript models and response validators are in `src/types`, and are used by both the API and the client.

## Development Notes

- The API has no persistent database; fixture data is loaded from `src/api/data`.
- The Vite development proxy is configured in `vite.config.ts`.
- The production build contains the client only. Deploy the Express API separately or provide an equivalent API behind the `/api` path.
- Undefined `/api` paths return a `404` response with `{ "error": "Not Found" }`.

## Verification

Before submitting changes, run:

```bash
npm run type-check
npm run lint
npm run format:check
npm run build
```
