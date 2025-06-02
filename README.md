# Tom Hamilton Personal Site

This project contains the source code for [Tom Hamilton](https://tomhamilton.me)'s advisory services website. It is built with **Next.js 15**, **TypeScript** and **Tailwind CSS**. UI components were bootstrapped using the [shadcn/ui](https://ui.shadcn.com/) toolkit.

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000` by default.

Running `npm run lint` will execute ESLint using the configuration in the repo. A production build can be created with `npm run build` (requires network access for font downloads).

## Service page structure

All marketing/service pages follow a simple pattern under the `app` directory:

```
app/
  <service-name>/
    page.tsx
```

Each `page.tsx` exports a React component named after the service (e.g. `ResultsPage`). Pages typically:

- Use a `<div className="container ...">` wrapper for consistent layout
- Display an `<h1>` heading at the top
- Render content inside a `<div className="prose ...">` section

New services can be added by creating a new folder with its own `page.tsx` following the same pattern and adding a navigation link in `components/site-header.tsx` if needed.

