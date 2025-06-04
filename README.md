# Tom Hamilton Personal Site

This project contains the source code for [Tom Hamilton](https://tomhamilton.me)'s advisory services website. It is built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. UI components are based on [shadcn/ui](https://ui.shadcn.com/).

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

- Run `npm run lint` to execute ESLint using the configuration in the repo.
- A production build can be created with `npm run build` (requires network access for font downloads).

## Service & Content Structure

- All main pages live under the `app/` directory as folders with a `page.tsx` file.
- The `/services` page is a consolidated, scrollable, anchored page with sections for approach, client types, engagement styles, contract formats, and case studies.
- The contact form is simplified: no company field, optional phone, and a free text box for intake.
- Testimonials and case studies are anonymized and bolded for clarity.
- The homepage features a "Real Results" section with bolded anonymous titles.

## Adding/Editing Content

- To add a new service/case study, update the array in `app/services/page.tsx`.
- To update testimonials or homepage copy, edit `app/page.tsx`.
- Navigation is managed in `components/site-header.tsx`.

## Deployment & Git Workflow

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Describe your changes"
   ```
2. **Push to GitHub:**
   ```bash
   git push origin main
   ```
3. **Production deployment:**
   - This site is deployed via Vercel. Pushing to `main` will trigger an automatic production deployment at [tomhamilton.me](https://tomhamilton.me).
   - You can also run a production build locally:
     ```bash
     npm run build
     npm start
     ```

---

For questions or issues, contact Tom via the site contact form or at hi@tomhamilton.me.

