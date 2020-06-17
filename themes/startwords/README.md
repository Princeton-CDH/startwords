# <div align="center"><img src="https://startwords.cdh.princeton.edu/logotype.svg" /> Theme</div>

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Hugo](https://img.shields.io/badge/hugo-0.67-blue.svg)](https://gohugo.io)

The Startwords Hugo theme is designed for [a journal of the same name](https://startwords.cdh.princeton.edu/) by the [Center for Digital Humanities](cdh.princeton.edu/) at Princeton University.

## Features

- Multiple article output formats: articles are generated as .txt files using Hugo's `{{ .Plain }}` [page variable](https://gohugo.io/variables/page/) and as PDFs using [WeasyPrint](https://weasyprint.org/)
- Layouts: custom content types include feature articles [available under [layouts/article](https://github.com/Princeton-CDH/startwords/tree/master/themes/startwords/layouts/article)], single issues, and list of issues [both available under [layouts/issue](https://github.com/Princeton-CDH/startwords/tree/master/themes/startwords/layouts/issue)].
- To retain the simplest directory structure that will give us the URLs we want, articles are placed in an issue number directory and have `type:article` specified in the page metadata.
- Excerpts of the current issue's opening lines are generated on the homepage using Hugo's `<!--more-->` [content summary divider](https://gohugo.io/content-management/summaries/)
- Article DOIs (registered with [Zenodo](zenodo.org/)) are specified in each article's YAML header, so that article metadata can be easily harvested by [Zotero](https://www.zotero.org/) citation management software.
- Markdown footnotes (`[^1]`) are rendered both as **contextual notes**—a new design feature that allows for popup annotations to float above a referenced line—as well as endnotes at the bottom of an article's page.
- Article illustration capabilities are built in using [IIIF](https://iiif.io/) for images and [Sketchfab](https://sketchfab.com/) for 3D embeddings.

## Shortcodes

The _Startwords_ theme includes the following custom short codes.

### pullquote

Use for a styled pull quote. Supports markdown within text content.
Should indicate placement (left/right) for tablet/desktop and provide
the text content to be included in the pull quote.

Example use:

```
{{<pullquote left `Cancer is **invisible**, and so are data.`>}}
```

### deepzoom

Use to embed an [OpenSeaDragon](http://openseadragon.github.io/) zoomable image viewer. The OpenSeaDragon javascript library will be automatically added to pages that use this shortcode. Multiple deep zoom
images are supported on a page.

Example use:

```
{{< deepzoom tile="http://iiif.example.com/image-id/info.json" height="10em">}}
```

or

```
{{< deepzoom "http://iiif.example.com/image-id/info.json" >}}
```

Currently expects parameters `tile` as named or first argument and `height`.

### sketchfab

Use to embed a [SketchFab]() 3D model viewer.

Example use::
```
{{<sketchfab id="9c96fadd27c34a11902f0a1281ea0ab4"
    title="Shakespeare and Company membership origami">}}
```

## Information Architecture

![](https://startwords.cdh.princeton.edu/Information%20Architecture.svg)
