# Content management (Phase 1 → Sanity)

## Today: JSON in `/content`

Non-developers can edit (or your team can update via git):

| File | Used on |
|------|---------|
| `content/people.json` | Home, Our People, `/people/[slug]`, search |

For each person, set `image` to `/images/partners/slug.jpg` when you have a headshot; remove `imagePosition` when using a dedicated photo (crop field is only for the shared team banner).
| `content/insights.json` | Home, Insights, search |
| `content/case-studies.json` | Case studies page |
| `content/careers.json` | Careers (empty array = “no open roles” page) |
| `content/tax-intelligence.json` | Tax centre disclaimer, last reviewed, official links |
| `content/site.json` | Phone, email, address, homepage stats, social URLs (shown when `url` is set) |
| `content/careers.example.json` | Copy into `careers.json` when posting roles |
| `content/company.json` | About story, mission, service focus list |
| `content/tax-calendar.json` | Tax Intelligence Centre calendar |

After editing JSON, redeploy the site (or restart `npm run dev` locally).

## Phase 1.5: Sanity.io

1. Create a project at [sanity.io](https://www.sanity.io).
2. Add to `.env.local`:

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_READ_TOKEN=
   ```

3. Mirror schemas: `person`, `insight`, `caseStudy`, `career`, `service` (see PRD).
4. Update `src/lib/cms/index.ts` to fetch from Sanity when `NEXT_PUBLIC_SANITY_PROJECT_ID` is set, with JSON fallback for preview.

Optional: embed Sanity Studio at `/studio` or host separately at `studio.kacertifiex.com`.
