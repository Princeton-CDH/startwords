---
type: issue
layout: single
title: Issue {{ .Name }}
number: {{ .Name }}
theme: INSERT_THEME
# Unless the publish date is before today's date, hugo won't publish it.
date: {{ now.Format "2006-01-02" }} # Change me
slug: {{ .Name }}
summary: Insert the beginning of the editor's letter. This will be displayed on the home page.
# editorial staff and any development & design contributors for this issue
contributors:
    - Editor:
      - name
    - Manuscript Editing:
      - name

---


add issue introduction here