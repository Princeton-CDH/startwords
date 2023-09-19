#!/usr/bin/env python
"""
python script to create PDFs for Startwords articles using the DocRaptor API.

To use:

- install python dependencies: `pip install docraptor`
- create a DocRaptor account and get an API key https://docraptor.com
- set your API key as environment variable DOCRAPTOR_API_KEY
- run the script with a Startwords article url and an output filename, e.g.
  `create_pdf.py https://startwords.cdh.princeton.edu/issues/3/mapping-latent-spaces/ -o
  startwords-3-mapping-latent-spaces.pdf`


The DocRaptor API allows unlimited test PDFs, which are watermarked; creating
a test PDF is the default behavior. When you are ready to create a final
PDF, use the `--real` flag to turn test mode off.

"""
import argparse
import os

import docraptor


DOCRAPTOR_API_KEY = os.environ.get("DOCRAPTOR_API_KEY", None)


def create_pdf(url, output=None):
    if DOCRAPTOR_API_KEY is None:
        print("DocRaptor API key must be set in environment as DOCRAPTOR_API_KEY")
        return

    doc_api = docraptor.DocApi()
    doc_api.api_client.configuration.username = DOCRAPTOR_API_KEY

    output_filename = output or "output.pdf"

    try:
        response = doc_api.create_doc(
            {
                "test": True,  # test documents are free but watermarked
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


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Generate a PDF from a url",
    )
    parser.add_argument("url")
    parser.add_argument("-o", "--output", help="Output filename for PDF")
    parser.add_argument("--real", action="store_true")

    args = parser.parse_args()
    create_pdf(args.url, args.output)
