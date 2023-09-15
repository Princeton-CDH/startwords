# <div align="center"><img src="https://startwords.cdh.princeton.edu/logotype.svg" alt="Startwords"/></div>

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Hugo](https://img.shields.io/badge/hugo-0.101-blue.svg)](https://gohugo.io)
![Node version](https://img.shields.io/badge/node-18-blue)

_Startwords_ is a research periodical irregularly published by the [Center for Digital Humanities](cdh.princeton.edu/) at Princeton University. It is implemented as a static site using the [Hugo static site generator](https://gohugo.io).

## Design

See [the theme README](https://github.com/Princeton-CDH/startwords/blob/master/themes/startwords/README.md) for more information on the site's features and architecture.

## Developing

### Hugo setup

To run the site locally for development, first follow the [instructions to install
Hugo](https://gohugo.io/getting-started/installing/). You can check that Hugo
is installed with:

```sh
$ hugo version
```

this should output version info like:

```
Hugo Static Site Generator v0.72.0/extended darwin/amd64 BuildDate: unknown
```

check that the version you installed is at least as new as the version shown in
the hugo badge at the top of this file.

### Static files

After hugo is installed, you'll need to install the javascript dependencies that
are used to compile the site's static files. To check if you have node installed:

```sh
$ node --version
```

This should output a version string that is at least as new as the version shown
in the node badge at the top of this file. To install dependencies, run npm in
the project's root directory:

```sh
$ npm install
```

If the install completes without errors, you're ready to build the site for
development.

### Serving locally

To run a development server with auto-reload:

```sh
$ hugo server -D
```

You should see some debug output, followed by:

```sh
Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
Press Ctrl+C to stop
```

Open a web browser to the above address to see a local version of the site. When
you make changes and save files locally, hugo will automatically refresh the page.

## License

### Content
Content published in _Startwords_ is licensed under the Creative Commons Attribution 4.0 International License (CC-BY).

### Software

Software included in _Startwords_ is licensed under the [Apache 2.0 License](LICENSE).

©2021 Trustees of Princeton University. Permission granted via Princeton Docket #21-3753-1 for distribution online under a standard Open Source license.