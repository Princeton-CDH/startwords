#!/usr/bin/env python
"""
python script to create PDFs for Startwords articles using the DocRaptor API.

To use:

- install python dependencies: `pip install docraptor bs4 requests`
- create a DocRaptor account and get an API key https://docraptor.com
- set your API key as environment variable DOCRAPTOR_API_KEY
- run the script with a Startwords article url and an output filename, e.g.
  `create_pdf.py https://startwords.cdh.princeton.edu/issues/3/mapping-latent-spaces/ -o
  startwords-3-mapping-latent-spaces.pdf`

The DocRaptor API allows unlimited test PDFs, which are watermarked; creating
a test PDF is the default behavior for this script. When you are ready to
create a final PDF, use the `--no-test` flag to turn test mode off.

To generate PDFs for all the feature articles in one Startwords issue,
use the `--issue` flag and run with the issue url, e.g.,
`create_pdf.py https://startwords.cdh.princeton.edu/issues/3/mapping-latent-spaces/ --issue`

PDFs will be named according to current Startwords PDF naming conventions.

"""
import argparse
import os
from urllib.parse import urlparse

import docraptor
import requests
from bs4 import BeautifulSoup


DOCRAPTOR_API_KEY = os.environ.get("DOCRAPTOR_API_KEY", None)


def create_pdf(url, output="output.pdf", test=True):
    doc_api = docraptor.DocApi()
    doc_api.api_client.configuration.username = DOCRAPTOR_API_KEY

    output_filename = output or "output.pdf"

    try:
        response = doc_api.create_doc(
            {
                # test documents are free but watermarked
                "test": test,
                "document_type": "pdf",
                "document_url": url,
                # "javascript": True,
                "prince_options": {
                    "media": "print",  # @media 'screen' or 'print' CSS
                },
            }
        )

        # create_doc() returns a binary string
        with open(output_filename, "w+b") as f:
            binary_formatted_response = bytearray(response)
            f.write(binary_formatted_response)
            f.close()
        print(f"Successfully created PDF: { output_filename }")
    except docraptor.rest.ApiException as error:
        print(error.status)
        print(error.reason)
        print(error.body)


def create_issue_pdfs(issue_url, test=True):
    response = requests.get(issue_url)
    if not response.status_code == requests.codes.ok:
        response.raise_for_status()

    # parse the xml and find the links to feature articles
    issue = BeautifulSoup(response.content, "html.parser")
    # find the links for the articles
    # limit to links under /issues/ (no author links, DOIs, etc)
    article_links = issue.find(id="features").css.select('a[href^="/issues/"]')
    # snippets are under features; get a snippet link list to exclude them
    snippets = issue.css.select('.snippets a[href^="/issues/"]')

    # article links are relative; use issue url to create absolute urls
    parsed_issue_url = urlparse(issue_url)
    for link in article_links:
        # skip snippets for now (make configurable via parameter when needed)
        if link in snippets:
            continue
        article_parsed_url = parsed_issue_url._replace(path=link["href"])
        article_url = article_parsed_url.geturl()
        # filenames are similar to urls;
        # convert /issues/N/title-slug/ to startwords-N-title-slug.pdf
        output_filename = "startwords-%s.pdf" % "-".join(
            link["href"].strip("/").split("/")[1:]
        )
        print(f"\nCreating PDF from { article_url }\n\t➡️ { output_filename }")
        create_pdf(article_url, output_filename, test=test)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Generate a PDF from a url",
    )
    parser.add_argument("url")
    parser.add_argument("-o", "--output", help="Output filename for PDF")
    parser.add_argument(
        "--no-test",
        action="store_false",  # turn test mode off when this parameter is specified
        default="true",  # testing is true by default
        help="Turn off the test flag and generate real PDFs",
    )
    parser.add_argument("--issue", action="store_true")

    args = parser.parse_args()

    if DOCRAPTOR_API_KEY is None:
        print("DocRaptor API key must be set in environment as DOCRAPTOR_API_KEY")
        exit(-1)

    # creating a single article or all articles for one issue?
    if args.issue:
        create_issue_pdfs(args.url, test=args.no_test)
    else:
        create_pdf(args.url, args.output, test=args.no_test)
