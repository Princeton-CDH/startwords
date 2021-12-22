---
type: article
title: {{ replace .Name "-" " " | title }}
slug: {{ .Name }}
order: 1 # set to determine article order within the issue
authors:
  - author name (firstname lastname)
  - additional author (if any)
date: {{ now.Format "2006-01-02" }} # Change me
images: ["{{ .File.Dir }}images/social-media-preview.jpg"]
# summary: Optional override article beginning if necessary
# tags: [DataBeyondVision, HowTo, ... etc]
# doi: DOI/zenodo.ZENODO_ID
# pdf: https://zenodo.org/record/DOI/files/startwords-#-{{ .Name }}.pdf
---

opening summary

<!--more-->

article content
