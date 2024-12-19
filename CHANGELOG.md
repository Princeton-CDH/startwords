# CHANGELOG

## Issue 5

- Caption functionality added for deepzoom and sketchfab shortcodes
- New instructions for using Docraptor to produce PDFs
- New acknowledgements functionality with dedicated formatting
- DOIs now minted by Princeton University Libraries using CrossRef
- Embedded tweets from Twitter accounts no longer active now replaced with plain text
- Hugo was not updated; TODO for next issue

## Issue 4

- Typeface and type styles for Chinese characters (Noto TC and Noto Sans TC)
- New python script for generating PDFs using DocRaptor API
  - Updated print styles to work with DocRaptor 
- New issue parameter to control how the width for wrapping the issue theme word on the issue list page
- deepzoom shortcode now allows specifying an optional caption 
- support for drop shadow on deep-zoom images with css class `shadow`
- support for side-scrolling wide tables with table shortcode using css class 'side-scroll'
- bugfix: single issue page doesn't include publication date
- bugfix: On mobile, IIIF figures may result in a scroll trap
- bugfix: Not enough space between intro text and feature text on homepage when there are only two feature articles
- bugfix: Author link icon 🔗 disappears against background in dark mode
- updated to Hugo v0.119

## 2022-08-10 updates

- New custom shortcode for embedding collapsed source code in documents
- Make source code for Issue 2 keyboards piece accessible in context
- Fix missing space between issue introduction author names
- Fix display problem for two-digit contextual note numbers
- Fix mobile display issue for translator on author list

## Issue 3

Major new features:
- multilingual support, with Spanish site navigation
- authors list page and author metadata
- support for more than two feature articles in an issue

- multilingual
  - As a reader, when reading the list of issues I want to know which language is included in each issue, so that I can identify issues with content in my language.
  - As a reader, when reading the issue details page I want to know which language(s) each article is available in, so that I can identify translated content and default language is explicit.
  - As a reader, when reading an issue that includes translated content, I want to know which language I'm reading and access other translations so I can read it in my preferred language.
  - As a reader, when reading an issue that includes translated content, I want to see all articles listed even if they are not available in the current language.
  - As a reader, when reading an article that is available in translation, I want to know which language I'm reading and access other translations so I can read it in my preferred language.
  - As a reader, I want to see DOIs for all versions of translated articles so that I know what languages the article is available in and can find and read them.
  - As a Spanish reader, I want navigation and paratext in my language so that I know how to use the site.
  - As an editor, I want to document issue contributors once for translated issues so that I don't have to duplicate information or risk it getting out of sync.

- author list
  - As a reader, I want to see all the authors who have contributed content to Startwords so I can see the range of contributors and find articles by authors.
  - As a reader, I want an easy way to discover the author list page, so that I can see it exists and access it from any page on the site.

- editorial
  - As an editor, I want to be able to feature more than two articles in an issue, so that I can accommodate more variety of content.
  - As an editor, I want to add content pages to the site so I can publish editorial, contributor guides, and other documentation on the site.
  - As an editor, I want to use interlude styles on any article so that I can highlight content using startwords-specific visuals.
  - As an editor, I want feature article opening line preview to accommodate a wider range of text lengths and more control over configuring the shape, so that authors have more flexibility with opening lines.

- fixes/styles
  - Add CSS styling for tables
  - links in issue introduction should be styled and visible as links
  - bugfix: contextual notes pollute browser history
  - bugfix: body text is indented on Firefox between ~1074 and 1448 width when content includes a video


## Issue 2
- Create video shortcode.
- As a content editor, I want to preview the look of an article without publishing it.
- Improve regex to remove tags from plaintext.
- Improve PDF rendering.
- Implement credits section.
- Fix links to allow for development with different hostnames.
- Implement handling of smaller images.


## Issue 1
- As an editor, I want to use a shortcode to format pull quotes in articles so that I can call attention to major insights.
- As an editor, I want to associate articles with their generated PDFs.
- As a reader, I want to read a long piece.
- As a reader, I want to read a short piece.
- As a reader, I want to read notes in context as I'm reading an article so that I can refer to additional information without losing my place.
- As a reader, I want to browse a list of all published issues.
- As a reader, I want to read a statement from the editor describing the project.
- As a reader, I want to preview all content for a single issue.
- As a reader, I want to download an article as a formatted PDF.
- As a reader, I want to download an article as plain text.
- As a reader, I want to get the DOI of an article so I understand it's a scholarly publication and can cite it.
- As a reader, I want to retrieve an article via a persistent URL.
- As a reader, I want to navigate around the site using the footer.
- As a reader, I want to save an article using the Zotero citation manager.
- As a reader, I want to see an error page if content isn't found.
- As a reader, I want to see a note in the plaintext version of an article in place of non-text content like images.
- As a reader, I want to see featured content on the site's homepage.
- As a reader, I want to navigate around the site using a custom navigation in the header.
- As a reader, I want the header navigation to get out of the way when I'm reading text.
- As a keyboard user, I want to see a visual focus indicator so I can easily navigate around the site.
- As a contributor, I want to embed images in pages.
- As a contributor, I want to embed 3-D content in pages.
- As a contributor, I want to embed deep zoom images in pages.