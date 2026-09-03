# Mise Lab — Design Style Matcher

A small Astro app: a 4-question quiz that matches a visitor to one of six
Mise Lab design styles. Built as a practice project for learning Webflow
Cloud.

## What's here

- `src/pages/index.astro` — the entire app: content, quiz logic, and styling
- All quiz content (6 styles, 4 questions, 24 answer options) lives at the
  top of that file, in plain JavaScript objects, so it's easy to edit later

## What's intentionally not built yet

There's a marked spot in the code (search for "STORAGE HOOK") where a call
to Webflow Cloud's key-value store will go, to track and display how many
visitors have landed on each style. That's a deliberate next step, added
after this app is deployed and connected to Webflow Cloud's storage.

## Next steps to deploy

1. Push this project to a new GitHub repository.
2. In Webflow, open Site Settings > Webflow Cloud on the Mise Lab site.
3. Start the deploy wizard, choose "Bring your own app," and point it at
   this repository.
4. Choose "Existing site" as the deployment target and set a mount path
   (for example, `/style-matcher`), rather than a new standalone domain.
5. Deploy, then visit the mounted path on the live site to test it.
