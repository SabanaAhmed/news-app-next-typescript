This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, To access the API, you will need to <a href="https://open-platform.theguardian.com/access/" target="_blank">sign up for an API key</a>, which should be sent with every request. 

Second, replace the api key (NEXT_PUBLIC_THEGUARDIAN_REST_API_KEY) in .env file

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

 `app/page.tsx` file contains the following functionality
 - Fetch the news from <a href="https://open-platform.theguardian.com/documentation/" target="_blank">The Guardian Rest API</a>
 - Filter the news list based on the search term.
