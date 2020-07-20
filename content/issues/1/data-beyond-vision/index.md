---
type: article
title: Data Beyond Vision
order: 1
authors:
  - Rebecca Sutton Koeser
  - Gissoo Doroudian
  - Nick Budak
  - Xinyi Li
date: 2020-01-01
doi: 10.5281/zenodo.3713671
images: ["issues/1/data-beyond-vision/images/installation-octahedron.jpg"]
---


How do we represent tangible objects in a visual medium? We use words, pictures, and diagrams. We describe, share, show, and fail.

<!--more-->

Humanists continue to expand the range of texts they study, but the range of scholarly outputs has not seen a similar expansion. While there are movements within Digital Humanities to consider formats beyond the traditional, the presentation and publishing of more innovative and experimental works (such as installations and project demos) is still secondary or sidelined, where it exists at all.  What would it look like to consider non-textual research outputs as first-order scholarly work? The historian David Staley suggests the terms  “interpretive objects” or “humanistic objects” for creative scholarly acts that are not limited to text.[^1] Innovative work like this is carefully researched and theorized, and deserves scholarly engagement and intellectual rigor even if it does not fit into established modes of scholarly communication.

Academic research has a long history of textual scholarly practice and citation that we haven’t yet figured out how to adapt to non-textual scholarship. The [Journal of Open Humanities Data](https://openhumanitiesdata.metajnl.com/) and [The Journal of Open Source Software](https://joss.theoj.org/) can
both be seen as steps in this direction: they provide venues for the review and publication of data and software, respectively, accompanied by brief “metapapers”; but even these rely on transforming the content they review (data and software) into text in order to function! What are the implications if we truly expand the range of accepted scholarly outputs to include such interpretive objects as data structures, databases, software, datasets, physical objects, augmented reality experiences? Will all scholars need to become experts in all these modes, or can we find a way to be conversant, as with other important scholarly theories?

SEE
from a distance.
Cold, commanding.
Sense of mastery,
but optical illusions deceive.


Look in a mirror
and see yourself
seeing.


TOUCH
up close.
Intimate, incomplete.
Explore partial knowledge,
enlighten slowly.


Run fingers across skin
and touch yourself
touching.

These are not artist statements because this is not art; Data Art is something else. This is representation, correspondence, laborious translation. Call them maker statements, perhaps. These are our attempts to communicate our goals and help you read and interpret these unfamiliar objects and be challenged by the potential of physicalizations.

Data physicalization focuses on constructing data in physical form. It may be similar to other approaches in that it helps to understand and represent data, and in its use of the senses to communicate information, mainly through touch and sight. However, there are considerable distinctions among these approaches. What makes data physicalization distinct is that it encourages critical making by bridging the gap between creative physical and conceptual exploration. This matters because not only does it surfaces the amount of labor involved with data production and representation, and put it into different perspectives and dimensions; it can also creates an opportunity for viewers to become participants by taking part in the making of a piece using data.

Data Physicalization attempts to defamiliarize our eyes from many of the two-dimensional data representations we have seen, and put us “in the middle of data”. There is something unique about turning data points into physical forms and placing them in space that triggers the mind to understand data in a distinctive way.[^2]

{{< figure src="images/conceptmap.jpg" caption="Concept map situating data physicalization in relation to other types of data representations and interpretations." attr="From the “Data Beyond Vision” poster presented at DH2019, Utrecht, July 2019." attrlink="https://doi.org/10.5281/zenodo.3261531" desc_id="conceptmap-desc">}}
{{< wrap class="txt-only" >}}
⩩-----------------------------------------------------------------------------------⟩
| FIGURE.
|
| CAPTION: Concept map situating data physicalization in relation to other types of data representations and interpretations.
| ATTRIBUTION: From the “Data Beyond Vision” poster presented at DH2019, Utrecht, July 2019.
| LINK: https://doi.org/10.5281/zenodo.3261531
⩩-----------------------------------------------------------------------------------⟩
{{</ wrap >}}
{{< wrap class="sr-only" id="conceptmap-desc" >}}
Other approaches for data representation and interpretation include:
- Data Visualization, which focuses on storytelling by using graphical elements
- Data Edibilization, which focuses on experiencing data through food using edible materials
- Data Sonification, which focuses on auditory patterns by using sound
- Data Visceralization, which focuses on multiple sensory experiences by using multiple senses, making it the only approach that can incorporate all of the senses
- Data Art, which focuses on representing links between data and artistic creations by using expressive frameworks and raw data.
- Interpretive object, which focuses on revealing meanings and relationships via non-textual forms by using metaphors.
{{</ wrap >}}

Making use of other senses can provide a step towards greater accessibility. The typical solution for making data visualization accessible to vision-impaired readers is to provide a table with the data underlying the chart or graph. This isn’t practical for large datasets, and it’s clearly not the same experience, or otherwise we would provide the tabular data to all users. Another approach is to provide an extended description of the insights gained from the chart. This is helpful, but pre-digesting the chart in this way doesn’t allow readers to view and interpret the patterns and draw their own conclusions.

We invite you to participate in the labor of data work. Download models and instructions, use your hands to recreate the data physicalizations we developed, or use these as inspiration to make your own interpretive objects.

[![view folding section](images/icon-folding.svg)](#folding)
[![view modeling section](images/icon-printing.svg)](#modeling)
[![view weaving section](images/icon-weaving.svg)](#weaving)
[![view stacking section](images/icon-stacking.svg)](#stacking)

Folding in the Non-Famous Members of the Shakespeare and Company Library {#folding}
------------------------------------------------------------------------

{{<sketchfab id="9c96fadd27c34a11902f0a1281ea0ab4"
    title="Shakespeare and Company membership origami">}}

### Goal

The Shakespeare and Company library is most often known by its famous members — the writers of the Lost Generation and their friends. We wanted to highlight the activity of the relatively unknown members — frequently women - who in fact represent a much larger portion of the library's day-to-day activity and thus arguably better represent it. The piece makes use of unit origami to create a larger, cohesive form from small folded units, mirroring the relationship between a single member and the greater bulk of the library.

### Description

The physicalization contrasts the activity of the well-known members of the library (those linked by researchers to an entry in VIAF) with the activity of its relatively unknown members (no known authority records). Activity is represented by the total number of recorded events that would plausibly have brought members into the library - checking out, renewing, and returning books. By holding the physicalization in two different ways, the user can "grasp" two separate sets of data: the octahedron (non-famous members) and the cube (famous members). The ratio of the volumes of these two solids is equal to the ratio of the two datasets.

### Insights

A pie chart can be used to present the same ratio of data conveyed in the physicalization. ....

### Next Steps

Using cut, punched, or embossed paper would make the piece more tactile; instead of simply printing names, unique patterns could be added to represent data for individual members. In the future, we could generate unique folding patterns for individual library member activity and make them available via print-on-demand, which would enable viewers to become participants and turn folding into an act of recovery of the unknown library members.

Nick Budak, Xinyi Li

Modeling Shakespeare and Company Library Membership {#modeling}
---------------------------------------------------

{{<sketchfab id="89985d66f7244d87b7edbe5fd6266f0d"
    title="Shakespeare and Company membership lollipop chart">}}

### Goal

This data physicalization demonstrates the affordances of three dimensions for representing data: time series data are displayed with sequential months and years adjacent to each other, which makes it easier to discern seasonal and annual trends. I hope to inspire others to try experimental approaches to representing data; writing software to generate printable 3D models directly from the data makes the process reproducible, and may eventually enable others to create and print their own physicalizations. The tactile nature of the object suggests the possibilities of 3D printing to create more accessible representations of data.

### Description

This is a two variable, three dimensional lollipop chart showing the membership of the Shakespeare and Company library by month and year, from November 1919 when Sylvia Beach opened her bookstore to its official closing in 1942. Membership data is drawn from two different sources, both of which are incomplete: broad subscription information comes from [logbooks](https://shakespeareandco.princeton.edu/sources/logbooks/) (although logbooks for 1930 and parts of 1931-32 are missing); detailed borrowing histories come from [lending library cards](https://shakespeareandco.princeton.edu/sources/cards/) for a subset of members. The white represents the number of members with an active subscription in each month; the green[^3] corresponds to the number of members with borrowing activity in each month. For any month where the value is zero, there is no lollipop. Representing the two different datasets as adjacent half lollipops exposes the discrepancies between the stories these sources tell us about the membership of the library without privileging either of them. The two lollipop charts are designed to be printed independently and then assembled, so that any 3D printer can be used; however, this is a prototype and the design needs further revision.

### Insights

The same data can be presented in a two-variable bar chart. Overall trends are easy to see, but seasonal trends are not as distinct. Changing perspective on the physical object allows focusing on yearly or monthly trends. Missing data in one variable is visible in both ... [TBD][^4]


### Next Steps

The current version uses different shapes for the two variables, but adding textures would make the model even more tactile. Simple 3D labels with text and braille have been added for display alongside the piece, but perhaps they could incorporated directly on the model, and refined to provide a scale for the axes. The 3D printed objects could also be augmented with other media: lights or sound could convey intensity of borrowing activity, or threads connecting months to represent the number of subscription renewals and convey a sense of continuity. The Python code used to create these models could be generalized for reuse, and eventually made available as a Blender plugin.

Rebecca Sutton Koeser

Weaving Derrida’s references {#weaving}
----------------------------

> … we all of us, grave or light, get our thoughts entangled in metaphors…
><cite> George Eliot, Middlemarch</cite>

### Goal

With this piece, we aim to literalize the metaphor of weaving as writing by representing Derrida’s intertextuality as a woven tapestry. The textures of the yarn and woven fabric invite touch, but by showing an in-progress weaving with the pattern and instructions provided, we move viewers beyond seeing and touching to enable them to become participants in reconstructing the data. Showing the weaving in progress also foregrounds the labor of data work, since curation, collection, and visualization all take an enormous amount of work and skill, often from a range of different individuals.

{{< figure src="images/weaving_photo.jpg" caption="Setting up the warp on the loom to start weaving." >}}

{{< wrap class="txt-only" >}}
Photo. [TBD. Whatever level of description (if any!) we want here.]
{{</ wrap >}}

### Description

This weaving represents the references in chapter one of Jacques Derrida’s de la Grammatologie. The references have been cataloged and categorized by researchers for Derrida’s Margins. Each type of reference (epigraph, citation, quotation, footnote) is represented by a distinct yarn and weaving pattern. Derrida’s highly intertextual writing suggested the idea of weaving, and using yarn to symbolize the foundational work of deconstructionism, which operates by finding the place where a text unravels, gives additional depth to this physicalization. Textile work is often stereotyped as women’s work, so this piece also raises questions of gender, art versus craft, and high tech versus low tech.

{{< deepzoom tile="https://iiif.princeton.edu/loris/iiif/2/figgy_prod%2F58%2F51%2Fd4%2F5851d48b225b42699a13181c778a6095%2Fintermediate_file.jp2/info.json" height="10em">}}

### Insights

[tbd]

### Next Steps

Adding conductive thread and sensors could turn the weaving into an interface, so that touching the fabric would bring up the relevant reference on an associated screen. Data weavings could also be augmented with other media, such as lights and sound to convey other aspects of the same or related data. Incorporating other work on automated weaving and knitting machines would add to the variety of options for data textiles.

Rebecca Sutton Koeser, Gissoo Doroudian

Stacking New and Continuing Membership Activities of Shakespeare and Company Library {#stacking}
------------------------------------------------------------------------------------

### Goal

This piece aims to reveal the continuity and growth of Sylvia Beach’s lending library by showing the extent of activity and recorded membership based on logbooks and lending cards. Multiple variables are encoded in the dimensions of stacking boxes based on the technique of pop-up box folds. By exhibiting the evolution of the library over time while contrasting activities of new and old patrons, this piece enables multiple ways to compare and interpret the data from diverse perspectives. By transforming a flat surface to a three-dimensional form with play of light and shadows, this production technique serves as a metaphor for the purpose of larger Shakespeare and Company Project— bringing archival data to life and facilitating rich interpretations[^5]

### Description

Shakespeare and Company Project library membership data from 1919 to 1941 are represented as a hybrid of time-series and stacked bar charts showing part-to-whole relationship made from paper and folding. Each unit, a cuboid in space and sometimes its stacking child, represents one year and displays nine variables for that year. The height corresponds to the number of active subscribers recorded in the logbooks; the depth depicts the number of members with borrowing activity, according to each member’s lending library card; the length along the timeline is based on the total number of borrowing events. Each of the variables is split into two parts: previous patrons who have renewed a subscription contrasted with new members. The upper portion shows the growth and the activities of new readers. Viewers can see the rise and fall of subscribers, inspect the difference between active borrowers and subscribers, compare the growth over time by viewing the stacking part from the front, and survey the involvement of continuing members versus new patrons, to name a few possibilities. In some cases, a small number of new members were very active readers based on their borrowing activity. Data was mapped to the shapes with Data Illustrator, semi-manual calculation and vector drawing.

### Insights

[tbd]

### Next Steps

The data encoding process could be automated by writing custom code, which could then be made available as a tool for presenting part-to-whole relationships. With the addition of time-based media such as projection mapping, this piece could convey more context and narratives around the lending library.

Xinyi Li


[^1]:  Staley, David. “On the ‘Maker Turn’ in the Humanities.” In _Making Things and Drawing Boundaries_, edited by Jentery Sayers, 32–41. Experiments in the Digital Humanities. University of Minnesota Press, 2017. https://doi.org/10.5749/j.ctt1pwt6wq.5.

[^2]: Test short note.

[^3]: We use white and green in our physicalizations of data from the Shakespeare and Company Project because those are the two main colors used in the site design. ![color palette from Shakespeare and Company Project](images/scp_colors_dark.png)

[^4]: Test note with image. ![view folding section](images/icon-folding.svg)

[^5]: Test really long note. Viewers can see the rise and fall of subscribers, inspect the difference between active borrowers and subscribers, compare the growth over time by viewing the stacking part from the front, and survey the involvement of continuing members versus new patrons, to name a few possibilities. In some cases, a small number of new members were very active readers based on their borrowing activity. Data was mapped to the shapes with Data Illustrator, semi-manual calculation and vector drawing.