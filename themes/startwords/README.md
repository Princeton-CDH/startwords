# <div align="center"><img src="https://startwords.cdh.princeton.edu/logotype.svg" /> Theme</div>

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![Hugo](https://img.shields.io/badge/hugo-0.67-blue.svg)](https://gohugo.io)

The Startwords Hugo theme is designed for [a journal of the same name](https://startwords.cdh.princeton.edu/) by the [Center for Digital Humanities](cdh.princeton.edu/) at Princeton University.

## Goals

The main architectural goals of this theme are to:
- reduce complexity and focus on the content by using a static site generator
- support a range of viewing devices (including mobile phones, tablets, laptops) and output formats (including html, plain text, and PDF)
- use automation & tools to reduce manual steps in publishing workflow
- apply innovative, thought-provoking designs to a digital publication

## Features

- Multiple article output formats: articles are generated as .txt files using Hugo's `{{ .Plain }}` [page variable](https://gohugo.io/variables/page/) and as PDFs using [WeasyPrint](https://weasyprint.org/)
- Layouts: custom content types include feature articles [available under [layouts/article](https://github.com/Princeton-CDH/startwords/tree/master/themes/startwords/layouts/article)], single issues, and list of issues [both available under [layouts/issue](https://github.com/Princeton-CDH/startwords/tree/master/themes/startwords/layouts/issue)].
- To retain the simplest directory structure that will give us the URLs we want, articles are placed in an issue number directory and have `type:article` specified in the page metadata.
- Excerpts of the current issue's opening lines are generated on the homepage using Hugo's `<!--more-->` [content summary divider](https://gohugo.io/content-management/summaries/)
- Article DOIs (registered with [Zenodo](zenodo.org/)) are specified in each article's YAML header, so that article metadata can be easily harvested by [Zotero](https://www.zotero.org/) citation management software.
- Article footnotes are generated as **contextual notes** using…
- Article illustration capabilities are built in using [IIIF](https://iiif.io/) for images and [Sketchfab](https://sketchfab.com/) for 3D embeddings.

## Structure

**[include GD's structure diagram here]**
