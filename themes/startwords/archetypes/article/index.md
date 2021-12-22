---
type: article
title: {{ replace .Name "-" " " | title }}
slug: {{ .Name }}
order: 1 # set to determine article order within the issue
authors:
  - author name (firstname lastname)
  - additional author (if any)
date: 2120-10-01 # Change me
images: ["{{ .File.Dir }}images/social-media-preview.jpg"]
summary: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
# tags: [DataBeyondVision, HowTo, ... etc]
# doi: DOI/zenodo.ZENODO_ID
# pdf: https://zenodo.org/record/DOI/files/startwords-#-{{ .Name }}.pdf
---

opening summary

<!--more-->

article content
