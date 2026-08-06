<!-- @license CC0-1.0 -->

# NL Design System Next.js example

A Next.js application that shows how to discover and use components from the [NL Design System](https://nldesignsystem.nl)
in a real app. The homepage deliberately mixes components from multiple implementations
(`@nl-design-system-candidate`, `@utrecht/component-library-react`, and `@amsterdam/design-system-react`), and the
`/detail` page shows how to apply a different theme to just part of a site.

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

### Install

Run the install from the root of the monorepo so all workspace packages are linked correctly:

```sh
pnpm install
```

### Run the dev server

From this directory (`apps/next`):

```sh
pnpm dev
```

Or from the monorepo root:

```sh
pnpm --filter @example/next dev
```

The app is served at [http://localhost:3000](http://localhost:3000).

## Available scripts

| Script       | Description                                      |
| ------------ | ------------------------------------------------ |
| `pnpm dev`   | Start the Next.js dev server                     |
| `pnpm build` | Build the app for production (output in `dist/`) |
| `pnpm start` | Start the production server (run `build` first)  |
| `pnpm clean` | Remove the `dist/` output directory              |

## How to use this project

- Start on the homepage (`app/(default)/page.tsx`). It explains the NL Design System's maturity model
  (Hall of Fame, Candidate, Community, Help wanted, Discouraged) and walks through the steps to install and use a
  component in a React app.
- Each component under `components/` (e.g. `components/Heading`, `components/Link`, `components/Alert`) wraps a
  single NL Design System component and applies those install/import steps.
- Visit `/detail` to see how to theme part of a site differently: it lives in its own route group
  (`app/(detail)/`) with its own layout that installs a different design tokens package and applies a different
  theme class, instead of the app-wide `start-theme`.
- Browse [nldesignsystem.nl/componenten](https://nldesignsystem.nl/componenten/) to discover which components exist
  and in which implementations before building your own.

## Adding a new component

1. Pick an implementation (e.g. `@nl-design-system-candidate`, `@utrecht/component-library-react`,
   `@amsterdam/design-system-react`) from [nldesignsystem.nl/componenten](https://nldesignsystem.nl/componenten/).
2. Install the React component and its CSS package, e.g.:

   ```sh
   pnpm add @nl-design-system-candidate/heading-react @nl-design-system-candidate/heading-css
   ```

3. Import the component's CSS once, and import/render the component — see any file in `components/` for a working
   example.

## Changing the theme

A theme is a design tokens package plus a class name applied to an element (usually `<html>`). See
`app/(detail)/layout.tsx` for an example that scopes a theme to a single route group, and `app/(detail)/detail/page.tsx`
for the full explanation.

## Related

- [Root repository README](../../README.md) — monorepo setup, contributing, and license information
- [Storybook for this project](https://nl-design-system.github.io/example/)
- [nldesignsystem.nl](https://nldesignsystem.nl)
