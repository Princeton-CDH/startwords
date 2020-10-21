# <div align="center"><img src="https://startwords.cdh.princeton.edu/logotype.svg" alt="Startwords"/> Theme</div>

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Hugo](https://img.shields.io/badge/hugo-0.72-blue.svg)](https://gohugo.io)

The Startwords Hugo theme is designed for [a journal of the same name](https://startwords.cdh.princeton.edu/) by the [Center for Digital Humanities](cdh.princeton.edu/) at Princeton University.

## Features

- Markdown footnotes ([^1]) are rendered both as **contextual notes**—a new design feature that allows for popup annotations to float above a referenced line—as well as endnotes at the bottom of an article's page. These contextual notes also allow for images to be included within the space of the note itself.
- Multiple article output formats: articles are generated as .txt files using Hugo's `{{ .Plain }}` [page variable](https://gohugo.io/variables/page/) and as PDFs using [WeasyPrint](https://weasyprint.org/)
- Article DOIs (registered with [Zenodo](zenodo.org/)) are specified in each article's YAML header, so that article metadata can be easily harvested by [Zotero](https://www.zotero.org/) citation management software.
- Article illustration capabilities are built in using deep-zoom view of [IIIF](https://iiif.io/) images and [Sketchfab](https://sketchfab.com/) for embedding 3D models.
- Excerpts of the current issue's opening lines are generated on the homepage using Hugo's [content summary divider](https://gohugo.io/content-management/summaries/), either with a `<!--more-->` tag after an article's opening sentence, or by populating a `summary:` field in the article's YAML header.
- Article order in an issue is configurable. The first two articles will be displayed as featured essays highlighted side by side on the issue page; all other articles will be listed by title in the order specified.
- Layouts: custom content types include feature articles [available under [layouts/article](https://github.com/Princeton-CDH/startwords/tree/master/themes/startwords/layouts/article)], single issues, and list of issues [both available under [layouts/issue](https://github.com/Princeton-CDH/startwords/tree/master/themes/startwords/layouts/issue)].
- To retain the simplest directory structure that will give us the URLs we want, articles are placed in an issue number directory and have `type:article` specified in the page metadata.

## Article text version

This theme includes a custom plain text version of articles which
is generated from the markdown for the article. HTML tags and shortcodes
are removed; markdown links, images, and footnotes are converted to plain
text versions to convey the information.

Guidelines for generating the best text output:

- Lines of text should *not* be hard-wrapped
- Section headings should use [Setext format](https://en.wikipedia.org/wiki/Setext) for best display in text output; underline second-level headings with `-------` in equal numbers to the characters in the title rather than starting with `## ` on the same line. (Do not use setext underline `======` because this is an H1, which is the article title.) Third level headings can use standard markdown.
- Footnotes should be placed at the end of the article.
- Figures are currently not automatically included in text output, although if you provide extended descriptions they will be included. To provide alternate text content for your figure, use the following template (omit any lines with no content):

```
{{< wrap class="txt-only" >}}
#-----------------------------------------------------------------------------------
| FIGURE.  <optional description here>
|
| CAPTION: <caption, if any>
| ATTRIBUTION: <attribution, if any>
| LINK: <attribution link, if any>
#-----------------------------------------------------------------------------------
{{</ wrap >}}
```

Editors working on publishing new articles should review the text versions of those articles to check for any formatting or display problems; if new markup has been introduced which is not handled properly, the text template may need to be revised.

The regular expressions used to convert article markdown to the plain text article display are managed in a [data file](data/article_txt_replace.toml), with comments to document the purpose of each regular expression.

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

[view source](layouts/shortcodes/pullquote.html)

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

[view source](layouts/shortcodes/deepzoom.html)

### sketchfab

Use to embed a [SketchFab]() 3D model viewer.

Example use::
```
{{<sketchfab id="9c96fadd27c34a11902f0a1281ea0ab4"
    title="Shakespeare and Company membership origami">}}
```

[view source](layouts/shortcodes/sketchfab.html)

### figure

This is a slightly-customized version of Hugo's default [figure shortcode](https://gohugo.io/content-management/shortcodes/#figure) that adds an option to pass in an identifier to set as the
`aria-describedby` attribute. Also sets `role="img"` on the `<img>` element to allow for SVG images.

Has all the same options as the original, plus `desc_id`.

It's highly recommended to use `figure` rather than simple images via Markdown, so that images can be automatically sized and properly styled.
Non-`figure` images may not display in a consistent manner.

[view source](layouts/shortcodes/figure.html)

### wrap

Wrap a block of text to set class or id attributes (currently
only supported for headers in goldmark).

Example use::
```
{{< wrap id="conceptmap-desc" class="sr-only">}}
Other approaches for data representation and interpretation include:
- Data Visualization, which focuses on storytelling by using graphical elements
{{</ wrap >}}
```

[view source](layouts/shortcodes/wrap.html)


## Information Architecture

![](https://startwords.cdh.princeton.edu/Information%20Architecture.svg)

## License

The Startwords theme is licensed under the [Apache 2.0 License](LICENSE).
