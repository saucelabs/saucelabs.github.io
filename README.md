opensource.saucelabs.com Hugo Template
======================================

This repository contains static files to generate the website for Sauce Labs Open Source Program Office. If you are looking for its content please visit the official [GitHub repository](https://github.com/saucelabs/opensource).

# Prerequisites

The following tools are required to build this page:

- [Hugo](https://gohugo.io/) (static website generator)
- [Sass](https://sass-lang.com/) (CSS extension)

# Build Locally

First clone the project to a directory:

```sh
$ git clone git@github.com:saucelabs/opensource.saucelabs.com.git
```

Then download its content files:

```sh
$ npm setup
```

and start the server:

```sh
$ npm start
```

You can then open page on: [http://localhost:8080](http://localhost:8080). The server will automatically reload if files change.