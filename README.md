# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

This is a test to check out Astro.Build. The site will go over:
## + Styling 
## + pages
## + shared layouts
## + static images 
## + Blog content collection
## + Render an Article page 
## + Blog index + page 
## + SEO 
## + Sitemap Generation
## + RSS feed Generation 
## + Vercel Deployment
## + Astro Islands Architecture 
### - with React
- step 1: npx astro add react
- step 2: Create react file in components
- step 3: import file into page using
``` tsx
  import PostLike from "../../components/PostLike";
```
- step 4 use as a regular tag. Use the `client:` with `visible, idle, only, media or load`  
``` tsx
  <Layout seo={{ title: post.data.title }}>
    <article class="prose lg:prose-xl">
      <Content />
      <PostLike client:visible />
    </article>
  </Layout>
```
###  - refactoring to plain JS 
## + starting fly.io account 
- step 1: create fly.io account 
- step 2: log into account and install fly.io in terminal
- step 3: input cc into fly.io to connect
``` sh
  curl -L https://fly.io/install.sh | sh
  ~/.fly/bin/flyctl auth login
  ~/.fly/bin/flyctl launch
```
## + Dockerize application
- Step 1: add node
``` sh
npx astro add node
```
- Step 2: Change astro.config.mjs>>defineConfig>>output: "server" to "hybrid"
- Step 3: rebuild application
```sh 
npm run build 
```
- Step 4: delete all in dockerfile and write:
```dockerfile
from node:lts-alpine as runtime
workdir /app 

copy . .

run npm install
run npm run build 

env HOST=0.0.0.0
env PORT=4321
env MODE=production 

expose 4321

cmd npm run start 

```
## + Github action for CIDI
## + Use Drizzle ORM 
## + API Endpoints
## + Dynamic OG image gen 
