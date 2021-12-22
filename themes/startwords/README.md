# <div align="center"><img src="https://startwords.cdh.princeton.edu/logotype.svg" alt="Startwords"/> Theme</div>

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Hugo](https://img.shields.io/badge/hugo-0.72-blue.svg)](https://gohugo.io)

The Startwords Hugo theme is designed for [a journal of the same name](https://startwords.cdh.princeton.edu/) by the [Center for Digital Humanities](cdh.princeton.edu/) at Princeton University.

## Features

- Markdown footnotes ([^1]) are rendered both as **contextual notes**—a new design feature that allows for popup annotations to float above a referenced line—as well as endnotes at the bottom of an article's page. These contextual notes also allow for images to be included within the space of the note itself.
- Multiple article output formats: articles are generated as .txt files using Hugo's `{{ .Plain }}` [page variable](https://gohugo.io/variables/page/) and as PDFs using [paged.js](https://pagedjs.org/)
- Article DOIs (registered with [Zenodo](zenodo.org/)) are specified in each article's YAML header, so that article metadata can be easily harvested by [Zotero](https://www.zotero.org/) citation management software.
- Article illustration capabilities are built in using deep-zoom view of [IIIF](https://iiif.io/) images and [Sketchfab](https://sketchfab.com/) for embedding 3D models.
- Excerpts of the current issue's opening lines are generated on the homepage using Hugo's [content summary divider](https://gohugo.io/content-management/summaries/), either with a `<!--more-->` tag after an article's opening sentence, or by populating a `summary:` field in the article's YAML header.
- Article order in an issue is configurable. The first two articles will be displayed as featured essays highlighted side by side on the issue page; all other articles will be listed by title in the order specified.
- Layouts: custom content types include feature articles [available under [layouts/article](https://github.com/Princeton-CDH/startwords/tree/master/themes/startwords/layouts/article)], single issues, and list of issues [both available under [layouts/issue](https://github.com/Princeton-CDH/startwords/tree/master/themes/startwords/layouts/issue)].
- To retain the simplest directory structure that will give us the URLs we want, articles are placed in an issue number directory and have `type:article` specified in the page metadata.
- The feature essays for an issue are determined by order and the number of features in that issue (the features come first). By default, each issue has two features, but that can be customized by setting `num_features` in the issue metadata. A maximum of 5 features is currently supported. 
- Issue-specific contributors can be specified in issue index metadata via `contributors` parameter, for display on the single-issue detail page, underneath the issue contents.  Provide the role or title and a list of one or more names. For example:
```yaml
contributors:
  - Editor:
    - Grant Wythoff
  - Technical Lead:
    - Nick Budak
  - Technical:
    - Rebecca Sutton Koeser
    - Grant Wythoff
```

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

## Generate new issues and articles

You can use [hugo archetypes](https://gohugo.io/content-management/archetypes/#directory-based-archetypes) to quickly build new issues and articles. To build the fourth issue, for example, use this command:

```sh
hugo new --kind issue issues/4
```

In `content/issues/4/_index.md` file, you'll then need to set metadata like `theme` and `contributors`.

And to draft a new article named "A Cup of Tea":

```sh
hugo new --kind article issues/4/a-cup-of-tea
# All articles  have an `images` directory
mkdir content/issues/4/a-cup-of-tea/images
```

Then you would need to manually set the metadata and content for the article in `issues/4/a-cup-of-tea/index.md`. The `order` parameter determines what order in the issue this article falls. (This also helps determine whether an article is categorized as a "feature" or a "snippet", see note about `num_features` above.) The `images` parameter is used for social media previews. And the `date`, `doi`, and `pdf` metadata must be set later in the publishing process.

Both of these commands need to be performed at the project's top-level directory.

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

Use to embed an [OpenSeaDragon](http://openseadragon.github.io/) zoomable image viewer. The OpenSeaDragon javascript library will be automatically added to pages that use this shortcode. Multiple deep zoom images are supported on a page.

Example use:

```
{{< deepzoom tile="http://iiif.example.com/image-id/info.json" alt="Interactive zoomable viewer showing a rubber duck sitting in a bathtub." pdf-img="http://example.com/duck.png" pdf-alt="A rubber duck sitting in a bathtub." height="10em">}}
```

When pages using this shortcode are rendered as a PDF, the interactive viewer will be replaced by the static image specified in the `pdf-img` attribute, if one was provided. The image will be displayed using the same styles as a figure (see below), with the automatically added caption `The online version of this essay includes an interactive deep zoom viewer displaying a high resolution capture of this object.`.

#### parameters

- `tile`, URL to a IIIF image that will be displayed in the viewer.
- `alt`, text used by assistive technology to describe the content of the viewer.
- `pdf-img`, optional: URL to a static image that will be used in place of the viewer in the PDF version of the article.
- `pdf-alt`, optional: text used by assistive technology to describe the image specified by `pdf-img`. required if `pdf-img` is specified.
- `height`, optional: vertical size of the viewer. defaults to `30em`.

[view source](layouts/shortcodes/deepzoom.html)

### sketchfab

Use to embed a [SketchFab](https://sketchfab.com/) 3D model viewer as an `<iframe>`.

Example use:
```
{{<sketchfab id="89985d66f7244d87b7edbe5fd6266f0d" alt="3-D model of a rubber duck sitting in a bathtub." pdf-img="http://example.com/duck.png" pdf-alt="A rubber duck sitting in a bathtub.">}}
```

When pages using this shortcode are rendered as a PDF, the interactive viewer will be replaced by the static image specified in the `pdf-img` attribute, if one was provided. The image will be displayed using the same styles as a figure (see below), with the automatically added caption `The online version of this essay includes an interactive 3D viewer displaying a model of this object.`.

#### parameters

- `id`, ID of the SketchFab object to be embedded; can be found in the URL to view the object.
- `alt`, text used by assistive technology to describe the content of the viewer.
- `pdf-img`, optional: URL to a static image that will be used in place of the viewer in the PDF version of the article.
- `pdf-alt`, optional: text used by assistive technology to describe the image specified by `pdf-img`. required if `pdf-img` is specified.

[view source](layouts/shortcodes/sketchfab.html)

### figure

This is a customized version of Hugo's default [figure shortcode](https://gohugo.io/content-management/shortcodes/#figure) that rescales raster images using custom breakpoints and displays them with a caption.

**It's highly recommended to use `figure` rather than simple images via Markdown, so that images can be automatically sized and properly styled. Non-`figure` images may not display in a consistent manner.**

Images that are in "landscape mode" (wider than they are tall) will be shown at as close to full paragraph width as possible. Images that are in "portrait mode" will be shown as close to 75% of the paragraph width as possible without stretching the image to larger than 80% of the viewport height. SVG images will be shown at their intrinsic size, with a minimum with of 150px. If the provided image is an SVG or a GIF, no scaled derivates will be generated, since SVGs are vectors and [Hugo's image resizing doesn't support resizing animated GIFs](https://github.com/gohugoio/hugo/issues/5030). For details on the derivative generation strategy, see the shortcode source below.

You can optionally provide an `attr` to add an attribution to the caption, and `attrlink` will make the attribution a link pointing to the given URL. If you need extra control over the height of the image, you can pass any valid CSS measurement to `max-height`, which will be applied via an inline style.

For assistive technology, an `alt` is required to describe the image. Optionally, you can associate the image with another element containing a visually hidden long description using `desc-id`, which will be the value used for `aria-describedby`.

Simple example:
```
{{< figure src="images/duck.jpg" alt="Rubber duck sitting in a bathtub." >}}
```

Example use for a photograph with attribution:
```
{{< figure src="images/duck.jpg" alt="Rubber duck sitting in a bathtub." caption="Gerald relaxing in the bath." attr="Photo by me." attrlink="http://example.com/" >}}
```

Example use for a chart or graph, with long description:
```
{{< figure src="images/chart.svg" alt="Bar chart showing sales growth for Q1 2020." caption="Sales are improving for our industry." desc-id="chart-desc" >}}
{{< wrap class="sr-only" id="chart-desc">}}Four different economic sectors are represented. The sector showing the most sales growth is the rubber duck industry, with growth approaching 25%.{{</ wrap >}}
```

#### parameters

- `src`, URL of the image in the figure.
- `alt`, text used by assistive technology to describe the content of the figure.
- `caption`, optional: descriptive text to be shown underneath the figure.
- `attr`, optional: attribution text to be shown underneath the figure.
- `attrlink`, optional: URL for making `attr` text a hyperlink.
- `desc-id`, optional: html id of an element containing longer descriptive text.

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

### video

Use to wrap an embedded video with an image for preview in PDF / print view.

Desired video content should be placed _inside_ the video shortcode and may use existing Hugo shortcodes.

Example use:
```
{{< video youtube_id="-SpanvQZhVI" >}}
  {{< youtube id="-SpanvQZhVI" title="Douglass Day 2020 - Highlights" >}}
{{< /video >}}
```

#### parameters

- `youtube_id` youtube id, if embedding a youtube video: used to generate the default preview image
- `pdf-img`, path to preview image for display in the pdf
- `pdf-alt`, alternate text for the still image (optional)

Either `pdf-img` or `youtube_id` should be specified.

[view source](layouts/shortcodes/video.html)

## Generating PDFs

PDF versions of feature articles should be created with [paged.js](https://pagedjs.org/) from the production site so that URLs are correct.

Install paged.js command-line interface:
```
npm install -g pagedjs-cli pagedjs
```

Generate a PDF:
```
pagedjs-cli https://startwords.cdh.princeton.edu/issues/1/their-data-ourselves/ -o startwords-1-their-data-ourselves.pdf
```


## Information Architecture

![](https://startwords.cdh.princeton.edu/Information%20Architecture.svg)

## License

The Startwords theme is licensed under the [Apache 2.0 License](LICENSE).

©2021 Trustees of Princeton University. Permission granted via Princeton Docket #21-3753-1 for distribution online under a standard Open Source license.