# Premium slug page expansion

All 34 dynamic offering pages use the new shared `src/components/LearningDetail.jsx` template:

- Light editorial hero + dark gradient focus card
- Topic-specific focus area cards
- Dark premium benefits section
- Four-step learning journey
- Outcomes section
- Native accessible FAQ accordions
- Related route links
- Gradient call-to-action section

Routes: `/tuition/[slug]` (12), `/language/[slug]` (10), `/booster/[slug]` (6), `/course/[slug]` (6).

Marketing text is illustrative, not a verified claim about currently available services.

Run `npm install && npm run build` to verify the project in your environment.
