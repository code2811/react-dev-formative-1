# react-dev-formative-1 — Dev Insights Mini Blog

A small internal blog page for a company called Dev Insights, built with React, TypeScript, and Vite,where Employees can browse quick dev tips and updates .

## How to run it

I set this up with Vite (`npm create vite@latest . -- --template react-ts`), not Create React App, so the commands are:

```bash
npm install      # install everything
npm run dev      # start the dev server, then open the localhost link it prints
npm run build     # production build
npm run preview  # preview that build locally
```

There's no test suite for this — I just checked `npm run dev` and made sure the header and post list showed up with no console errors.

## Project structure

```
src/
  types/Post.ts         # Post interface + helper functions (preview text, "is it new")
  hoc/withLogger.tsx     # logs when a component mounts/unmounts
  components/
    Header.tsx / .css    # top bar + nav link
    PostList.tsx / .css  # the hardcoded sample posts
    Post.tsx / .css       # a single post card, memoized
  App.tsx                # renders Header + PostList
  main.tsx                # Vite/React entry point
```

## Why I built it this way

## Why I built it this way

I went with functional components for everything . Header, PostList, Post, App. None of them needed class-style state or lifecycle methods, and the one spot where I actually needed mount/unmount logic (withLogger), useEffect handled that fine on its own. 

For styling, I wanted to actually use two different approaches instead of just picking one  so I split it into plain CSS files for the general layout  and an inline style in Post.tsx specifically for the author highlight.

For the conditional styling part, I decided posts by Frida should stand out with a light yellow background, and I wanted the "New!" badge to actually mean something rather than just being hardcoded onto a random post ,so it checks if a post was made in the last 24 hours. I made the first sample post use the current timestamp on purpose, so the badge is actually visible the moment the app loads instead of me having to fake it.

For optimization, I wrapped Post in React.memo since there's no reason for a post to re-render if its own data hasn't changed, and I made sure each post in the list uses its id as the key instead of the array index — index-based keys can cause subtle bugs if posts ever get reordered or removed later. 

## External libraries

Nothing beyond what Vite's react-ts template already includes (react, react-dom, @vitejs, typescript, vite). No CSS-in-JS library , just plain CSS and inline styles, which was enough to cover the two styling methods requirement.

## Challenges and how I solved them

The hardest part was creating the withLogger HOC because it needed to work with different prop types, so I used a generic to keep it flexible and type-safe. I also had to figure out the best way to handle conditional styling, using inline styles for data-based highlighting and CSS classes for simple on/off styles. Finally, I used each post's `id` as the list key instead of the array index to avoid potential bugs when the list changes.

## Reflection

It was a bit challenging  but  i found it valuable to understand why different React patterns are used, especially inline styles, CSS classes, `React.memo`, stable keys, and generic HOCs. Going forward I'd like to learn more about react.