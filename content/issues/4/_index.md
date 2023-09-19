---
type: issue
layout: single
title: Issue 4
number: 4
theme: PALIMPSESTS
theme_wrap_width: 8rem
date: 2023-08-29 # Change me
slug: 4
num_features: 2
summary: This issue of Startwords explores palimpsests of sound, script, and place in the language and history of medieval China. The two projects featured here work through layers of time with the goal of reconstructing now-lost literary soundscapes and urban landscapes.
# author(s) of issue introduction as a slug drawn from data/authors.yml
authors: 
    - ShieldsAnna
# editorial staff and any development & design contributors for this issue
contributors:
    - Editor:
      - Grant Wythoff
    - Technical Lead:
      - Rebecca Sutton Koeser
    - UX Designer:
      - Gissoo Doroudian
    - Manuscript Editing:
      - Camey Van Sant
---

This issue of *Startwords* explores palimpsests of sound, script, and place in the language and history of medieval China. The two projects featured here work through layers of time with the goal of reconstructing now-lost literary soundscapes and urban landscapes. As a scholar of medieval Chinese literary and cultural history whose work is grounded in traditional methods, (with some limited experience in quantitative methods), I read these papers as an outsider to computational work in the humanities, but with great enthusiasm for their potential to produce new knowledge. Both projects build on recent, ground-breaking scholarship---in philology, phonology, and archaeology---and design new tools for old questions. What did a millennium of phonological change erase from the ways that ancient Chinese texts produced meaning through script and sound? How did people in the medieval Chinese capital of Chang'an experience its spatial, cultural, and linguistic complexity? As you will see, the answers to these questions can be discovered if we allow scholarly and scribal practices of the ancient past to inspire the unconventional use of computational tools in the present.

"Of Sonorous Medieval Chinese Texts and NLP Model Training: Reading the *Jingdian Shiwen* 經典釋文 as Semi-structured Data," by Nick Budak and Gian Rominger, presents the design of a machine learning algorithm to parse the data of a monumental sixth-century dictionary, Lu Deming's *Explanation of Words in the Classics and Canons* (*Jingdian shiwen* 經典釋文). Important new work in Chinese historical linguistics has reconstructed the phonology of Old and Middle Chinese, just as recent decades of manuscript discoveries from tombs have revolutionized our knowledge of graphic variation in the Chinese script in the ancient through medieval eras. Budak and Rominger use this scholarship in their innovative design of a natural language processing (NLP) model to parse the semi-structured data of the *Jingdian shiwen*, a text that captures features of the early Chinese language that slowly disappeared from the phonology of spoken Chinese. The *Jingdian shiwen* is a highly productive text for their purposes: as a dictionary, it encodes both phonological and semantic data, provides textual excerpts and examples to gloss its definitions, and attempts to stabilize reading and pronunciation practices in the context of historical change. The text is, as the authors put it, "effectively a machine-readable dataset millennia before such machines would exist." After mining the phonological data of *Jingdian shiwen*, the authors will transform it into first Middle and then Old Chinese, to create a fully machine-readable dataset. The ultimate aim of Budak's and Rominger's work is to recreate the complex soundscapes of early Chinese texts, which depended heavily on rhyme, wordplay, punning, and other forms of graphic and phonic interplay, and to deepen our understanding of their rich polyphony and polysemy.

"Toward a Deep Map of Chang'an," by Xin Wen, also builds on recent, revolutionary discoveries as well as traditional historical sources to conceptualize a layered, dynamic map of, Chang'an 長安 (located on the site of present-day Xi'an 西安), one of the largest and most diverse cities of the global medieval world. The explosive growth in the past few decades of archaeology on the site of Chang'an, the former capital of the Han (202 BCE-220 CE) and Tang (618-907) dynasties, gives Wen access to precise new GIS and material data for sites as varied as palaces, tombs, streets, and waterways in the city. Wen will combine this data with historical two-dimensional maps, historical accounts of Chang'an, and the most recent scholarship on urban centers in China to visualize and animate the city's social, cultural, and political history. This work has the potential to illuminate the experience of navigating the city---captured so vividly by people such as Tang poets and storytellers, and by Japanese monks who travelled to Chang'an---in multiple dimensions and across time.

Budak and Rominger's language model and Wen's deep map are both works in progress. Much like Lu Deming's seventh-century commentary and Lü Dafang's eleventh-century map --- cumulative product of countless collaborations and influences that took years to complete --- the work of these digital humanists is a contribution to a set of scholarly inquiries that spans centuries. What we are treated to here is a portrait not only of what these projects might become, but also the ways that a sustained engagement with ancient forms of knowledge making can challenge us to rethink the predominant modes of understanding text and space in fields like data science and digital humanities.
