# Tinker Template

This repository is a template for tinkering with frontend projects. It uses
[Parcel](https://parceljs.org) to easily bundle up frontend assets that can
be deployed to [Zeit](https://zeit.co) for sharing.

It makes use of:

1. Plain HTML for HTML
1. [Stylus](http://stylus-lang.com) for CSS
1. [TypeScript](https://www.typescriptlang.org) for JavaScript

## Scripts

A number of scripts are in [package.json](package.json) for developing, building, and deploying:

- `yarn dev` This starts a Parcel development server (with live reload, etc.)
- `yarn build` This simply builds to the "public" directory (which is .gitignore-ed)
- `yarn deploy` This deploys the project Zeit
