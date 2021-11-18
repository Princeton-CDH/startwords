---
type: article
slug: 'strangers-in-the-landscape'
title: |
  "Strangers in the Landscape": On Research Development and Making Things for Making
order: 1
authors:
    - Samantha Blickhan
    - Will Granger
    - Shaun A. Noordin
    - Becky Rother
date: 2021-10-01 # TODO: Update date
doi: 10.5281/zenodo.3713678 # TODO: update doi
pdf: https://zenodo.org/record/3713678/files/their-data-ourselves.pdf # TODO: update pdf link
images: # TODO: insert pullquote screenshot in \images directory
---

This piece is about making in support of making. It is about projects born from myriad goals that gather new objectives along their lifecycle, through evaluation and iteration. <!--more-->

This piece is about translating: from concept to design to product; from fragment to image to text; from high-level goal to incremental steps. It is about workflows and spin-offs and objectives; it is about unraveling a tapestry to learn how to spin its yarn.

In *Data Feminism,* Catherine D’Ignazio and Lauren F. Klein use the example of the proliferation of street signs to make a point about making: “one does not need street names for navigation until one has strangers in the landscape.” In D’Ignazio and Klein’s usage, the ‘strangers’ here are data scientists, digging through data with which they are not intimately familiar. In this piece, we use our experience as platform maintainers[^1] to illustrate how all collaborators and participants are ‘strangers’ at one point or another in the process of research development; it is only through collective building that we can successfully name our streets.

The framework for our discussion will be Scribes of the Cairo Geniza, a crowdsourcing project hosted on the Zooniverse platform. Scribes invites members of the public to engage deeply with the Cairo Geniza corpus: hundreds of thousands of manuscript fragments written in Hebrew and Arabic script, dating mostly from the 10th-13th centuries CE. A collaboration between the Zooniverse team and a group of specialists from the Judaica Digital Humanities program at the University of Pennsylvania Libraries (as well as a consortium of partner institutions), each of the lead institutions brought their own goals to this project. For the Penn team, the original goal was to fully digitize the Geniza corpus through transcription of the fragment texts by a non-specialist audience. The Zooniverse team came to the Scribes partnership as part of a larger research and development effort, ‘Transforming Libraries and Archives through Crowdsourcing,’ which aimed to expand the resources available on the Zooniverse platform to better support galleries, libraries, archives, and museums in their efforts to create and run crowdsourcing projects.

This piece will trace the history of this partnership, focusing on the interplay between often-competing elements of Digital Humanities (henceforth DH) collaboration: optimization and engagement, experience and outcome. When we attempt to balance the demands of infrastructure against the practice of paleography, what can we ourselves learn about the process?

{{< wrap id="interlude" >}}
{{< wrap class="left" >}}

**01. The Basics: A Form With Some Text Input**

Let's start by setting up a very basic web form. It has one text input field, one submit button, and one output panel.

{{</ wrap >}}
{{</ wrap >}}

## Communal Making and Collective Building

When we build public crowdsourcing projects, the work we do as platform builders/maintainers is intended to facilitate research goals without sacrificing the experience of the people who will be engaging with what we build. This means taking the ideas our collaborators bring to the table (“What do you want to do with this project?”) and creating tools and interfaces that support their needs (“What do we need to build/adapt to facilitate the realization of these goals?”) while simultaneously supporting public audiences by allowing them to engage with the project content with no assumption of previously-held knowledge (“How do we need to adjust these goals—and, by extension, the supporting tools/infrastructure—to make this project inclusive of a broad, public audience?”).

{{<pullquote left `…bridging concepts as varied as paleography and pull requests requires time and patience`>}}

Bill Endres writes that “Building faces the challenge of not being writing.” In the article context Endres was discussing ‘building’ as a practice typically excluded from the institutional measures around granting tenure in humanities departments. Much of the discourse around building in DH acknowledges the disparity in impact between the creation of tools and the production of traditional research, but this phrase also reminds us that writing is the medium by and around which scholarly communication has also primarily taken place. We write, we peer review, we give written feedback. When we talk about the Things We Are Building, it can often require translation or mediation from team members who have spent time in both ‘worlds’. Learning how to communicate across varying disciplinary backgrounds or via unfamiliar mediums (in our case, concepts as varied as paleography and Pull Requests), requires time and patience.

{{< wrap id="interlude" >}}
{{< wrap class="left" >}}

**02. A Simple On-screen Keyboard**

A straightforward solution is to create an on-screen keyboard for the user. In this example, we create an a Japanese keyboard with 5 characters. Clicking on each button/"keyboard key" adds the corresponding character to the end of the text input field.

{{</ wrap >}}
{{</ wrap >}}

It can help to identify shared frames of reference early in the collaboration. The original proposal for the project that would become Scribes of the Cairo Geniza envisioned a public transcription effort that would teach volunteers “without any prerequisite knowledge” how to transcribe the Arabic and Hebrew scripts found in the Geniza. It cited a previous Zooniverse project, Ancient Lives (2011), which featured a clickable keyboard that allowed users to transcribe ancient Greek papyri from the Oxyrhynchus Collection at the University of Oxford's Sackler Library through the process of character matching. Ancient Lives became an important reference for the entire Geniza project team, allowing a group of people with a variety of professional backgrounds to engage in referential communication around a shared goal, rather than fumbling together towards an abstract concept. Starting with a critique of an existing resource allowed us to determine the features that were applicable for the context in which we were working; what we wanted to recreate (or revamp) as well as what components were missing that would be key to working with Geniza fragments.

[^1]: While 'platform maintainers' here refers to members of the team who build and maintain the Zooniverse crowdsourcing platform, there is a variety of experience that this role can bring to a collaboration. The authors of this piece (core Zooniverse team members who worked on the Scribes of the Cairo Geniza front-end interface) have professional backgrounds in manuscript studies/digital humanities research, front-end development (x2), and UX design, respectively.