## What?

This demonstrates an issue when using tsconfig to create aliases and having an "override" mechanism in place.

In the example we have `app/theme-a` and `app/theme-b`, the `theme-b` should override anything in `theme-a`.

## Issue?

When only overriding the `.css` files in `theme-b`, it causes the following error

```
Error: Invalid tag: /build/_assets/Button-76HC2XTL.css
    at startChunkForTag (/reproduction-remix-alias-css-imports/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server.node.development.js:2870:13)
    at pushStartCustomElement (/reproduction-remix-alias-css-imports/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server.node.development.js:2738:15)
    at pushStartInstance (/reproduction-remix-alias-css-imports/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server.node.development.js:2977:18)
    at renderHostElement (/reproduction-remix-alias-css-imports/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server.node.development.js:5702:18)
    at renderElement (/reproduction-remix-alias-css-imports/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server.node.development.js:6018:5)
    at renderNodeDestructiveImpl (/reproduction-remix-alias-css-imports/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server.node.development.js:6170:11)
    at renderNodeDestructive (/reproduction-remix-alias-css-imports/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server.node.development.js:6142:14)
    at renderNode (/reproduction-remix-alias-css-imports/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server.node.development.js:6325:12)
    at renderHostElement (/reproduction-remix-alias-css-imports/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server.node.development.js:5708:3)
    at renderElement (/reproduction-remix-alias-css-imports/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server.node.development.js:6018:5)
```

## Fix?

Currently the only solution I found is to re-create the `.tsx` export which points to the original file (remove `.fix` from `/app/theme-b/index.fix.ts`)

This is of-course not ideal, as you might have multiple themes and you won't always be able to isolate which file should be used.
