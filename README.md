# react-dev-formative-1 — Dev Insights Mini Blog

A small internal blog platform built with **React + TypeScript and Vite** for Dev
Insights employees to share quick tips and updates. 

## Install, Run, and Test

This project is built with [Vite](https://vitejs.dev/) (scaffolded with
`npm create vite@latest . -- --template react-ts`), so it uses Vite's dev
server and build tooling rather than Create React App.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (with hot reload)
npm run dev
# Then open the printed local URL (usually http://localhost:5173)

# 3. Build a production bundle
npm run build

# 4. Preview the production build locally
npm run preview
```

There is no separate test suite for this formative . "testing" here means
running `npm run dev` and confirming the app renders the header and the list
of sample posts without console errors.

## Project Structure

```
src/
  types/Post.ts        # Post interface + preview/isNew helper functions
  hoc/withLogger.tsx    # Higher-Order Component that logs mount/unmount
  components/
    Header.tsx / .css   # Site header + nav link
    PostList.tsx / .css # Hardcoded list of sample posts
    Post.tsx / .css      # Single post card (memoized)
  App.tsx               # Root component, renders Header + PostList
  main.tsx              # Vite/React entry point
```

## Design Choices

I used functional components for `Header`, `PostList`, `Post`, and `App`. They
are enough for this small UI, and the only lifecycle-style work is already
handled by `useEffect` in `withLogger`. Using classes here would add extra
`this` and state handling without solving a real problem.

For styling, I kept the base layout in `Header.css`, `Post.css`, and
`PostList.css`. In `Post.tsx`, I also use an inline style because the card
background depends on the post author.

For the conditional parts, posts by `Frida` get the `#fff4d6` background. A
post from the last 24 hours gets a **"New!"** badge through a conditionally
rendered `<span>` and a class from `Post.css`. The first post uses the current
time so the badge is visible when the app loads.

I wrapped `Post` in `React.memo`, so it does not re-render when its own `post`
prop has not changed. Each list item uses `post.id` as its key instead of the
array index, which keeps React's tracking stable if the list changes. Finally,
`withLogger` wraps `Header` and logs its mount and unmount messages with a
`useEffect` cleanup.

## External Libraries

None beyond the standard Vite React + TypeScript template dependencies
(`react`, `react-dom`, `@vitejs/plugin-react`, `typescript`, `vite`). No
CSS-in-JS library was used , styling is done with plain CSS files and inline
styles.

## Challenges and How I Solved Them

The hardest part was creating the withLogger HOC because it needed to work with different prop types, so I used a generic to keep it flexible and type-safe. I also had to figure out the best way to handle conditional styling, using inline styles for data-based highlighting and CSS classes for simple on/off styles. Finally, I used each post’s id as the list key instead of the array index to avoid potential bugs when the list changes.

## Reflection 

I found it valuable to understand why different React patterns are used, especially inline styles, CSS classes, React.memo, stable keys, and generic HOCs.