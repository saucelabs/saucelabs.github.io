## [Sauce Labs Open Source](https://opensource.saucelabs.com/)

This repository contains static files to generate the website for Sauce Labs
Open Source Program Office.

The page is based on the [Kross Hugo Theme](https://themes.gohugo.io/kross-hugo-portfolio-template/).

## Prerequisites

The following tools are required to build this page:

-   [Hugo](https://gohugo.io/) (static website generator)
-   [Sass](https://sass-lang.com/) (CSS extension)
-   [Node.js](https://nodejs.org/en/)

## File Locations

Important files to edit are:

-   `/content` for all content files
-   `/data` for module content
-   `/static/images` for all images
-   `/static/sass` to modify CSS files using Sass
-   `/assets/js` to modify JavaScript files
-   `/layouts/` to modify templates
-   `/static/` other static content

## Build Locally

First clone the project to a directory and install all dependencies:

```sh
git clone https://github.com/saucelabs/saucelabs.github.io.git
cd saucelabs.github.io
npm install
```

Pull the git submodules (for the Hugo theme) after cloning the project from GitHub

```sh
git submodule update --init
```

Then build the page via:

```sh
npm run build
```

If you want to develop the page and use livereload, start the server via:

```sh
npm start
```

You can then open page on: [http://localhost:8080](http://localhost:8080). The server will automatically reload if files change.
