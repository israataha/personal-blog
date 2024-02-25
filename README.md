# Netlify Remix Tailwind Template

This template was built using the [Netlify Remix Template](https://github.com/netlify/remix-template), which includes built in support for Vite, and was modified to add integration with Tailwind.

- [Remix Docs](https://remix.run/docs)
- [Remix Vite Docs](https://remix.run/docs/en/main/future/vite)
- [Netlify Functions Overview](https://docs.netlify.com/functions/overview)
- [Installing Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)
- [Get started with Netlify Core](https://docs.netlify.com/get-started/)

## Netlify CLI Setup

1. Install the [Netlify CLI](https://docs.netlify.com/cli/get-started/):

```sh
npm i -g netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the latest version:

```sh
npm i -g netlify-cli@latest
```

_Optional_

2. Sign up and log in to Netlify:

```sh
netlify login
```

3. Create a new site:

```sh
netlify init
```

## Development

Ensure all packages are installed by running:

```sh
npm install
```

Run

```sh
netlify dev
```

Open up [http://localhost:8888](http://localhost:8888), and you're ready to go!

### Serve your site locally

To serve your site locally in a production-like environment, run

```sh
netlify serve
```

Your site will be available at [http://localhost:8888](http://localhost:8888). Note that it will not auto-reload when you make changes.

## Deployment

There are two ways to deploy your app to Netlify, you can either link your app to your git repo and have it [auto deploy changes to Netlify](https://docs.netlify.com/get-started/#deploy-a-project-to-netlify), or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:

```sh
# preview deployment
netlify deploy --build

# production deployment
netlify deploy --build --prod
```
