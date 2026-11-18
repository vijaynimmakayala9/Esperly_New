# Esperly GIF upgrade

- Real looping GIF: `public/animations/learning-cap.gif` (not a Lottie JSON).
- Reduced-motion still: `public/animations/learning-cap-still.webp`.
- New `PageExperience.jsx` adds three substantial, responsive sections to each route, with route-specific copy and a GIF showcase.
- Content stays within `max-w-7xl`; backgrounds extend full viewport width.
- All new styling uses Tailwind className only.
- `PremiumShowcase.jsx` icon prop now uses a string name.
- GIF is original artwork; no external GIF hotlink dependency.
- Form submission and booking still require a real backend.
