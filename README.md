# Foundation UI - Engine

Visit [@fui/engine](https://foundation-ui.netlify.app/).

## Technologies

- [Next.js](https://nextjs.org)
- [Drizzle](https://orm.drizzle.team)

## Learn More

## Contribute

## CI/CD

Handled by Netlify for now

## TODO

- [x] Add Editor
- [x] Add Lib Details folder and boilerplate components
- [x] Add CI (Netlify)
- [x] Set up database with SingleStore and data model
- [x] Update Schema to show library and JSON files
- [x] Manually insert samples
- [x] Render samples in the UI
- [x] Deploy to confirm the setup is up and running
- [x] Update Navigation Links
- [x] Cleanup Database and data fetching patterns
- [x] Generate Library
- [x] Library Page Details
- [x] Library CRUD Actions

- [ ] Add Auth using Clerk
- [ ] Add Analytics

- [ ] Github/Slack/Discord Integration
- [ ] Setup Feedback w/Discord Integration
- [ ] Setup Support Redirection

- [ ] Add Testing suites Github Actions to trigger it
- [ ] General tidying-up

- [ ] Library Preview Page

## Notes

### (31/02/2025)

- Might be a good idea to explore how the same implementation could be done using another provider.
  S2 handles a lot of thing but it looks like the machinery is too big for what FUI_ENGINES project requires.

### (01/03/2025)

- Lot of features indeed, lots and rabbit holes also. Don't like that a lot but i'm going to roll with it for now.
  Let's follow that rule: If there are further more obstacles due to S2 itself, i'll switch provider.

### (08/03/2025)

- This choice of db provider still bugs me, not that the service isn't good or anything.
- Here are the providers i'm thinking about, ranked by preference: Vercel PG, Scaleway Dedibox, NextCloud, AWS RDS, Keep S2
