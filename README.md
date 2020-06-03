opensource.saucelabs.com Hugo Template
======================================

This repository contains static files to generate the website for Sauce Labs Open Source Program Office. If you are looking for its content please visit the official [GitHub repository](https://github.com/saucelabs/opensource).

The page is based on the [Kross Hugo Theme](https://themes.gohugo.io/kross-hugo-portfolio-template/).

# Prerequisites

The following tools are required to build this page:

- [Hugo](https://gohugo.io/) (static website generator)
- [Sass](https://sass-lang.com/) (CSS extension)

# File Locations

Important files to edit are:

- `/static/images` for all images
- `/static/sass` to modify CSS files using Sass
- `/themes/kross-hugo/assets/js` to modify JavaScript files
- `/themes/kross-hugo/layouts/` to modify templates
- `/themes/kross-hugo/static/` other static content

This repository doesn't contain any content files as they are maintained in [`github.com/saucelabs/opensource`](https://github.com/saucelabs/opensource).

# Build Locally

First clone the project to a directory:

```sh
$ git clone git@github.com:saucelabs/opensource.saucelabs.com.git
```

Then build the page via:

```sh
$ npm run build
```

If you want to develop the page and use livereload, start the server via:

```sh
$ npm start
```

You can then open page on: [http://localhost:8080](http://localhost:8080). The server will automatically reload if files change.
