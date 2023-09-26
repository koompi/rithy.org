# SolidStart Portfolio site

## Developing

We will use **pnpm** here;

```bash
# install packages
pnpm install 

# run development server
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

Solid apps are built with _adapters_, which optimise your project for deployment
to different environments.

By default, `pnpm/npm run build` will generate a Node app that you can run with
`pnpm/npm start`. To use a different adapter, add it to the `devDependencies` in
`package.json` and specify in your `vite.config.js`.
