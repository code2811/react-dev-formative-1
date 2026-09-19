# react-dev-formative-1 — Dev Insights Mini Blog

A small internal blog platform built with **React + TypeScript + Vite** for Dev
Insights employees to share quick tips and updates. This is a Formative 1
assessment covering React basics, TypeScript typing, component styling, and
optimization/HOCs from Weeks 1–3.

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

There is no separate test suite for this formative — "testing" here means
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

**Component types — functional vs. class:** Every component in this project
(`Header`, `PostList`, `Post`, `App`) is a **functional component**. None of
them need lifecycle methods beyond what `useEffect` already covers (used
inside the `withLogger` HOC), and functional components with hooks are the
current React standard — they're more concise and easier to test than
class components for this scale of UI. A class component would only have
made sense here if a component needed multiple internal state values with
complex `this` bindings, which none of these do.

**Styling methods:** Two methods are used, as required:
1. **External CSS files** (`Header.css`, `Post.css`, `PostList.css`) for all
   base layout and appearance.
2. **Inline styles** in `Post.tsx`, where the card's background color is
   computed per-render from `post.author` (see "Conditional styling" below).

**Conditional styling:**
- Posts by `Jane Doe` get a highlighted background color (`#fff4d6`), set via
  an inline `style` object computed from `post.author`.
- Any post whose `datePosted` is within the last 24 hours shows a **"New!"**
  badge, toggled by conditionally rendering a `<span>` with a CSS class from
  `Post.css`. The first sample post is dated "now" specifically so you can
  see this badge on load.

**Optimization & HOC:**
- `Post` is wrapped in `React.memo` so it only re-renders when its own
  `post` prop changes, not whenever `PostList`'s parent re-renders for
  unrelated reasons.
- Each `Post` is rendered with a stable, unique `key={post.id}` in
  `PostList`, rather than the array index, so React can correctly track
  list items if posts are ever reordered or removed.
- `withLogger` is a Higher-Order Component that wraps `Header` and logs
  `"[withLogger] Header mounted"` / `"...unmounted"` to the console via a
  `useEffect` cleanup function.

## External Libraries

None beyond the standard Vite React + TypeScript template dependencies
(`react`, `react-dom`, `@vitejs/plugin-react`, `typescript`, `vite`). No
CSS-in-JS library was used — styling is done with plain CSS files and inline
styles, which already satisfies the "at least two methods" requirement.

## Challenges & How I Solved Them

_(Fill this in with your own experience before submitting — a couple of
sentences on something that was genuinely tricky, e.g. getting the "New!"
badge logic right, typing the HOC generically, or deciding on the highlight
color.)_

## Reflection (for Canvas submission)

_(Write your 1–2 paragraph reflection here on what you found most valuable
and what you'd like to explore further — this is meant to be in your own
words for the formative.)_
