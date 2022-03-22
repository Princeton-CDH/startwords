---
layout: content_page
title: Style Guide
summary: For Contributors
---

## Overview of the Journal
<!--
```
Embed of Gissoo's ACH video goes here
https://drive.google.com/file/d/1cuY6KQ_zUuyWMwZLmYoFxqHY7PkA18EI/view?usp=sharing
``` -->

***Startwords* publishes experimental humanities research for a public audience.**

Things we look for in the articles we publish:

- story just as important as argument
- academic writing that allows for interpretive flexibility and exploration on the part of readers
- portrait of a project in progress
- interactive features
- digital methods in fields that don't traditionally have them applied
- writing that is engaging for a public audience
- writing that shows people how we understand, read, and use data in the humanities

For style inspiration, contributors can review other publications like:

[Triple Canopy](https://www.canopycanopycanopy.com/) • [The Pudding](https://pudding.cool/) • [Distill](https://distill.pub/) • [Journal of Slavery and Data Preservation](https://jsdp.enslaved.org/) • [Parametric Press](https://parametric.press/issue-02/) • [Emergence Magazine](https://emergencemagazine.org/)

Each issue of *Startwords* showcases (typically) two feature articles (2,000–5,000 words) in conversation on a shared theme. That theme is encapsulated by a keyword for the issue’s title (i.e. Issue 1: “Transformations”, Issue 2: “Scribes”).

Snippets, consisting of a couple hundred words of context and an interactive feature, elaborate on the issue theme with short provocations, tutorials, code, annotated data, or other nontraditional scholarly output. Snippets can be related to one of the two features (i.e. instructions for reproducing the feature article’s results), or snippets can be devoted to an entirely separate project, so long as they relate to the issue theme.

If using a [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) word processor like Google Docs or Microsoft Word to write your articles, please keep in mind the following features of how *Startwords* will typeset your article:

- The opening lines of your essay (the "lede" or "hook") will go on the homepage. There is room for roughly 185 total characters in that opening page lede, and it should be a complete sentence.
- Authors have the option of creating section breaks in their article with a flourished section break: the *Startwords* icon.
- Footnotes will be typeset using a new feature we call contextual notes: inline annotations anchored to the relevant position in the body text. These contextual notes can contain scrollable media, including long text and images. When linking to an external site or resource in your article, you’ll want to decide whether to use either a hyperlink or a contextual note, but not both. It's redundant to have a hyperlink at the end of a sentence alongside a contextual note. (In addition to making the clicking functionality difficult.)
- Pull quotes: you may suggest which of your article’s lines you’d like to feature in bigger text offset from the main body of the article. Alternatively, the Guest Editor and *Startwords* Editor can select these pull quotes for you.

## Editing & Typesetting

Rather than having contributors and editors work in a de-contextualized WYSIWYG word processor all the way up to the point of final page proofs, *Startwords* aspires to an iterative workflow that incorporates writing, editing, design, and development. After receiving your first drafts, the CDH team will create a “stub” or placeholder version of the new issue on a development branch. We will then send you initial page proofs, at an unlisted URL, showing how your writing will look once it's typeset on the site. During the editorial review and feedback process, you can iteratively edit based on how your writing will look when typeset alongside its interactive features or multimedia elements.

If you would like more information on the way we build the journal using the Hugo static site generator and typeset articles in HTML, PDF, and plain text, see the [*Startwords* theme README](https://github.com/Princeton-CDH/startwords/blob/main/themes/startwords/README.md).

## Licensing

Articles will be uploaded to the data repository [Zenodo](https://zenodo.org/), which will assign each article a DOI. Articles will be published open access, with CC-BY license, so they can be republished and reused in any other forum or format.

## Images

### Accessibility

All images that are informative (not decorative) must provide text content that can be accessed by non-sighted users. Contributors are responsible for writing this alternative image text.

#### Alternative Text

For images that don’t convey a large amount of information (for example, photographs) the author should supply alternative text that describes the image in an unbiased way using 100 **characters** or less, since some screen readers will only read the first 100 characters of the text.

One way to think of alternative text is as standing in for the image itself - therefore, the text should never duplicate information that is already elsewhere on the page (e.g. if the image has a caption). Put another way, it’s how you would describe a picture if you were talking to someone on the phone – just enough information for them to visualize it in words.

It should also never include the words “image”, “graphic”, etc. since the screen reader will often say this word before reading the description, causing the user to hear it twice.

##### Example

{{< figure src="images/weaving-soumak.jpg" alt="The weaver sits in front of a table top loom; one hand lifts two strand of the warp yarn, the other stretches out the yarn being looped around it." caption="Gissoo Doroudian, creating a Soumak weave.">}}

Alt text for this image might read: “A woman carefully adjusts blue threads on a wooden loom surrounded by bundles of cloth.”

##### Further reading

For more information on alternative text, see [the WHATWG HTML specification](https://html.spec.whatwg.org/multipage/images.html#alt).

#### Long Descriptions

Images that convey a substantial amount of information to the viewer, like charts and graphs, often require a longer description **in addition to** their alternative text (see above) in order to make all of the information available to non-sighted users. In this case, assistive technology will generally first read the alternative text, pause for a moment, then continue by reading the longer description.

For these images, the author should also supply a long description that captures all of the major insights of the image in an unbiased way using 100 **words** or less. There is no hard length requirement, but most assistive tech users prefer more concise descriptions where possible. The long description should try to avoid duplicating information available elsewhere on the page, including in the image’s alternative text and caption.

Long descriptions can also describe in detail particular data points or illustration techniques used in the image, in order to give the user a fuller understanding of the image that approximates the affordances of color, size, shape, etc.

##### Example

{{< figure src="images/2d-stacked-bar.svg" alt="two-dimensional stacked bar chart">}}


A long description for this image might read: “This chart compares the proportion of events for new members against the proportion of events for returning members for each year that the Shakespeare and Company bookstore was open. The overall number of events that brought people to the bookstore increases gradually from 1919 to 1929, drops off slightly, then increases dramatically from 1932 to 1939. The chart also distinguishes borrowing of books from subscriptions to the library. During the period from 1932 to 1939, the share of book borrowing by new members increased relative to existing members each year.”

##### Further reading

For more information on long descriptions, see [the W3C’s WAI tutorials](https://www.w3.org/WAI/tutorials/images/examples/2014-first-qtr/).

## Including Custom JavaScript/CSS

*Startwords* supports article-specific styles or functionality. For those Contributors planning to incorporate interactive content (JavaScript, etc.), we ask that you develop these resources on your own for now, and then we will integrate into our Hugo build. The Contributor will also be responsible for creating a static version of that interactive content for PDF (i.e. a screenshot of a GIF or a filterable data table).

To include custom CSS or JavaScript in an article, simply include the files in the resource bundle for the article (i.e., within the directory). Any files that end in .css or .js will be automatically inserted via stylesheet or script tag respectively. No preprocessing is applied to these files.

**Example:**

[“Weaving as Interface,”](https://startwords.cdh.princeton.edu/issues/1/weaving-as-interface/) in Issue 1, includes JavaScript and CSS [in the directory](https://github.com/Princeton-CDH/startwords/tree/main/content/issues/1/weaving-interface ) with the article.

## Alternate Versions of Content

### Figures

Images in article text should be added with the Startwords customized version of Hugo’s figure shortcode. This shortcode will generate derivative image sizes as needed for display, and provides support for extended descriptions for screen readers. See [figure shortcode documentation](https://github.com/Princeton-CDH/startwords/tree/main/themes/startwords#figure) for specifics.

Shortcodes are not included in the text version of an article; figure information should be duplicated in a text version of the figure, as explained in [theme documentation](https://github.com/Princeton-CDH/startwords/tree/main/themes/startwords#article-text-version).

### Interactive Content

The [deepzoom](https://github.com/Princeton-CDH/startwords/tree/main/themes/startwords#deepzoom) and [sketchfab](https://github.com/Princeton-CDH/startwords/tree/main/themes/startwords#sketchfab) shortcodes both include the optional parameters pdf-img and pdf-alt to specify a static image and image alt text to be displayed in the PDF.

In both cases, this generates a figure that is hidden in the HTML view but rendered in the PDF, with this structure:

```
<figure class="preview">

    <img src="images/modeling-3d-alt.jpg" alt="3D printed object and accompanying 3D printed labels displayed on a table; this side view shows labels for the years 1919–1942.">

  <figcaption>

      <p>The online version of this essay includes an interactive 3D viewer displaying a model of this object.</p>

  </figcaption>

</figure>
```

The same logic should work for custom interactive content that is added without using these shortcodes. (But editors should be sure to test all versions of an article with any such content!)

**Example:**

[“Data Beyond Vision,”](https://startwords.cdh.princeton.edu/issues/1/data-beyond-vision/) in Issue 1, includes sketchfab 3D model and IIIF Deep Zoom; in the PDF, each of these is replaced with a static image that shows the model from multiple angles or different portions of the weaving at various scales.
