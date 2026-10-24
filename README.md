# BlackFame Studios

Marketing website for BlackFame Studios — React 19, Vite, Tailwind CSS 4 and Motion, deployed on Vercel.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build into dist/
npm run lint     # type check
```

## Contact form

Enquiries are sent by the Vercel function in `api/contact.ts` using [Resend](https://resend.com).
Set these in Vercel → Project → Settings → Environment Variables (see `.env.example`):

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Required to send email. Without it, the form opens the visitor's email app with the message pre-filled. |
| `CONTACT_TO_EMAIL` | Inbox that receives enquiries. Defaults to `hello@blackfamestudios.com`. |
| `CONTACT_FROM_EMAIL` | Sender address on a domain verified in Resend. |

`npm run dev` doesn't run the `/api` function, so locally the form always uses the email-app fallback. Use `vercel dev` to test real delivery.

## Images

Static assets live in `public/`:

- `public/clients/<name>.png` — client logos (see the list in `src/components/Intro.tsx`). Missing logos show the client's name instead.
- `public/team/<name>.jpg` — team portraits (see `src/components/TeamSection.tsx`). Missing photos show the person's initials.
- `public/portfolio/` — project images, `public/videos/` — hero video.
