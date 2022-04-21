---
type: article
slug: 'on-spanish-parrots'
title: |
  On Spanish-Speaking Parrots
order: 2
authors:
    - delrioriandegimena
date: 2022-02-01
doi: 10.5281/zenodo.5750691 #TODO: replace DOI
pdf: https://zenodo.org/record/5750691/files/startwords-2-datas-destinations.pdf #TODO: replace PDF
images: ["issues/2/datas-destinations/images/datas-destinations-social.png"] #TODO: replace social preview
summary: Spanish is the second most widely-spoken language in the world as a mother tongue.
---

## 1. A Parrot called MarIA

Spanish is the second most widely-spoken language in the world as a mother tongue.[^1] Official reports, survey-based studies, and Wikipedia confirm it. Also, Google can predict it. There are more than twenty countries where Spanish is the official language. Furthermore, Spanish is the most popular second language choice in American universities and there are twenty-three Academies of the Spanish Language ---the Academias de la Lengua Española--- all over the world[^2]. However, and quite paradoxically, Spanish has been losing the geopolitical and symbolic battle against English as language of science since the last century, and very few technological developments have helped to improve this situation[^3].

In recent years, global research on artificial intelligence (AI) and machine learning has grown exponentially, offering computational linguistics and natural language processing (NLP) a place of relevance in the academic curriculum of different disciplines and fields, such as Digital Humanities. Nonetheless, the North-South imbalance in this field is evident. Most NLP research is still mainly done in English and it takes a lot of time sometimes to make these resources available in Spanish. Moreover, when they do become available, it is often via multilingual versions which are not as performant as the English alternative.

Concerning the Spanish-speaking countries, Spain has been taking the lead in research on AI and NLP with initiatives such as *Aporta*, published in the data.gob.es portal of the Ministry of Economic Affairs and Digital Transformation[^4], and the project "Tecnologías emergentes y datos abiertos: Inteligencia Artificial"[^5]. Although the Spanish initiative is welcome and accounts for sustained human and technological work, it is an absolutely technopositivist proposal. There is not much critical reflection on the dangers or limitations in the use of open public data to develop and exploit language models, and nothing is said, for instance, about the silicon technologies that are part of a strategic industry and a geopolitical asset that only a few countries in the world take profit from.

Last July, the Iberian country unveiled the first major project on language and AI from the National Library of Spain (BNE). MarIA is the first massive AI model in the Spanish language. MarIA, a RoBERTa model, was born from a large amount of data that the BNE ingested in the MareNostrum supercomputer of the Barcelona Supercomputing Centre. MarIA's data are the files in WARC format resulting from the tracking and archiving of the Spanish website, which, by law, the BNE scrapes and preserves (Gutiérrez-Fandiño et al, 2021)[^6].

Let\'s talk about numbers: 59 terabytes of the BNE web archive and 6,910,000 hours of the MareNostrum supercomputer were used to build, curate and compile this corpus. As a result, 201,080,084 clean and duplicate-free documents were obtained, occupying a total of 570 gigabytes. The second step of the training, based on neural network technology, required 184,000 processor hours and more than 18,000 GPU hours (Gutiérrez Fandiño et al., 2021). According to the paper published a few months ago, the released models ---between 125 million and 355 million parameters respectively---, will be expanded using new and different sources, such as scientific publications of the Spanish Higher Council for Scientific Research (Consejo Superior de Investigaciones Científicas-CSIC) and the Spanish Wikipedia[^7]. There are also plans to start training models for other Romance languages ​​such as Catalan, Galician, Basque, Portuguese and for much more complex varieties of Spanish, such as what is usually named as Latin American Spanish or *español de América*.

It comes as no surprise that the so-called Global South is suspicious of technology, as an uncomfortable consumer of foreign Northern developments and as receiver of critiques from the big nations[^8]. A clear example is the accusation to Southern countries that do little to reduce environmental damage by perpetuating the use of old technologies, but that looks distractedly at the discussion about how the new bitcoin, blockchain and AI industries is polluting and damaging the Global South (Howson, 2020)[^9].

I must confess that my perspective on language models and AI is one of a Southern researcher who is quite suspicious both of MarIA's Spanish and its capabilities, especially when it comes to adapt it performance, for instance, to the *rioplatense* Spanish[^10] in translation apps, subtitling, automatic language prediction or correction, or chatbots. I find this situation as part of what Thomas Hervé Mboa Nkoudou (2020) define as the techno-utopian rhetoric that puts forward the benefits of technological innovations but, paradoxically, rarely refers to the risks or drawbacks associated with the adoption of socio-technical infrastructures.

Undoubtedly, I am convinced that we need more MarIAs. Still, I think these MarIAs should be explained in an open research ecosystem if they really want to overcome the difficulties regarding technological colonialism debates and turn into reusable and reproducible models in those more than twenty countries that speak Spanish. I am not aware of the research performed by the BNE model in terms of linguistic, geographic, or racial bias, but I imagine that the Spanish Language Academias around the world should also take part in this project. When it comes to the release of a model to the Spanish-speaking world for mass adoption, openness and diversity should be mandatory.

## 2. A Parrot called BERTIN

The same week MarIA was widely announced on media, BERTIN was born[^11]. The aim of this project was to pre-train a RoBERTa-base model from scratch using Common Crawl during the Flax/JAX Community Event, held between July 7-14, 2021. I was really impressed when, all of a sudden, there were two RoBERTa models available in Spanish. I decided to interview one of its mentors, Dr. Javier de la Rosa, a young and brilliant Spanish researcher and NLP expert. In the following section, part of the conversation we had is transcribed since it can help us reflect on how, why and which language models are needed for the Spanish language.

### 2.1. Javier, BERTIN and Gimena

**Gimena (G):** *BERTIN is proposed as a collaborative project. What role do humanists or linguists play or could play in creating datasets and curating outputs?*

**Javier (J):** The creation of BERTIN has been community-oriented from its conception. Open by and for the community. Programmers, engineers, AI researchers, digital humanists, computational linguists showed keen interest in taking part in BERTIN. Unfortunately, due to a purely practical matter (we only had funding and resources for 10 days), not everyone was able to participate. However, very interesting and rich conversations about the orientation and goals of the project were had. In that sense, I think that one of the aspects to which both humanists and linguists could contribute to in this kind of projects is the detection and documentation of bias. In our case, this issue emerged as an afterthought. As we analyzed the model, we realized that it preferred words from the European or peninsular Spanish (\"coche\" vs \"auto\" vs \"carro\") and we understood that the model could suffer from a certain geographic biases that had to be highlighted and corrected. Unfortunately, it is not easy to decrease biases after the model is trained. Nonetheless, team members with a linguistic background did a very good job documenting it.

**G:** *How should we create linguistic data or datasets in such a way that they do not perpetuate biases and hegemonic norms?*

**J:** At the moment, AI, in general, and language models, in particular, are a very active field. Toolkits are starting to analyze the data before the training begins, for example, to reduce certain known biases or to find patterns that could become problematic when exploiting the models. However, I must say that not all biases are bad. For example, one way to have a language model that is capable of understanding other varieties of Spanish could be skewing the dataset in order to magnify a less represented variety and produce a model capable of adapting better to diverse varieties.

**G:** *If you had to teach a subject on data curation with a humanistic perspective, what methods or practices would you teach? Can we imagine a future where the humanities become important to data experts?*

It is true that humanists have been curating data from time immemorial, but we are lagging behind and moving too slowly compared to the advances of technology and AI. That being said, there are initiatives to make these two worlds a bit more data-wise. For example, Thomas Padilla\'s Collections as Data project has opened a new research line for institutions, especially libraries and archives. This can be seen in language models and other AI initiatives such as the one from the National Library of Norway, which used its digital collection to build the language model for Norwegian[^12], including that of the BNE. Therefore, I believe that if I had to teach data curation, I would do it from this hybrid perspective, pointing out to the importance of preservation and the need to have data in formats that are not only interoperable but also (re)usable.

**G:** *Do you see negative consequences of humanists relying on Google either to use or test their models? Is there a chance that we can develop open source resources for this kind of research? Should we continue to trust big tech companies with questionable ethical practices, or start developing smaller language models?*

Business for large companies does not rely in software, but in hardware and infrastructure. Most of the advances in AI are developed using open technologies and this is why it has progressed so fast during the last 10-15 years. Both the adoption of free software and the release of models and open source libraries are the way of inviting users to work on those platforms. For instance, if you want to train a model for Basque, you can do it in Google Cloud and then leave. But if Google provides you the code, and allows you to integrate it with its platform, and also teaches you how to apply it on 30 other languages, it saves you a lot of work. Of course, you can also try to train your model on a supercomputer like the MareNostrum that has been used for the BNE model, but access to these types of resources is not easy or direct. You could even buy 120 NVIDIA graphic cards and train them, but it is a material investment difficult to justify when there are on-demand solutions that assure an efficient use of money. What we have tried to show with BERTIN is that some costs can be reduced when training a model. We are still a long way from being able to train these massive models on our personal computers, but we must not stop making progress in this regard.

## 3. Some reflections

From my point of view, an important conclusion that emerges from the BERTIN project is that it shows that, although we cannot escape the need for big data and big machines to produce language models with good performance, the expense of training them can be reduced in terms of time and data. As a result, it makes it possible for smaller teams to approach this world that, at the moment, looks exclusive for large Global Northern companies and institutions. It is also a proposal aware of the needs of a more open approach to research and of the environmental impact of technology. Far from a techno-utopic perspective, BERTIN is not at war against companies or institutions and it is not aligned with open science activism, but somehow tries to take the best of both worlds. Possibly, this middle ground is where Global Spanish AI and NLP projects could take place in the future years.

Although the field of AI goes beyond the horizon of humanistic work, it is evident that language models have many applications with an immediate impact on the humanities and digital humanities. They can improve the outputs of systems for optical character recognition (OCR), stylometric techniques and attribution of authorship. They can help generating automatic text summaries, finding similarities in textual collections, classifying works based on theme, genre or content, linking data based only on information contained in a text, etc. Still, it is also important to note that the outputs of these systems must also be subjected to study and criticism, aligning, in this way, with open science initiatives. In this regard, another project by Javier De la Rosa I would like to refer to is ALBERTI, a BERT-based multilingual model for poetry. ALBERTI is capable of completing poems automatically but, in a second stage, humans evaluate and determine which ALBERTI substitutions could be considered more poetic[^13]. Being it a good example to show that all models must be evaluated and limited by humans, not only in the humanities but in everyday life. As the proverb goes, "Quien mucho habla, mucho yerra" ("He who speaks too much, makes many mistakes"), which seems true both for humans and machines.

## Bibliographic references

Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). On the dangers of stochastic parrots: Can language models be too big?. Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency, 610-623. <https://doi.org/10.1145/3442188.3445922>

El español, una lengua que hablan 580 millones de personas, 483 millones de ellos nativos. (2019). *Instituto* *Cervantes*. <https://www.cervantes.es/sobre_instituto_cervantes/prensa/2019/noticias/presentacion_anuario_madrid.htm>

Gutiérrez-Fandiño, A., Armengol-Estapé, J., Pàmies, M., Llop-Palao, J., Silveira-Ocampo, J., Carrino, C. P., Gonzalez-Agirre, A., Armentano-Oller, C., Rodriguez-Penagos, C., & Villegas, M. (2021). Spanish language models. arXiv:2107.07253 \[cs\]. <http://arxiv.org/abs/2107.07253>

Howson, P. (2020). Climate crises and crypto-colonialism: Conjuring value on the blockchain frontiers of the global south. *Frontiers in Blockchain,* *3*(22). <https://doi.org/10.3389/fbloc.2020.00022>

Kummervold, P., de la Rosa, J., Wetjen, F., & Brygfjeld, S.A. (2021). Operationalizing a National Digital Library: The Case for a Norwegian Transformer Model. <http://arxiv.org/abs/2104.09617>

Mboa Nkoudou, Thomas Hervé (2020). Les makerspaces en Afrique francophone, entre développement local durable et technocolonialité: trois études de cas au Burkina Faso, au Cameroun et au Sénégal. PhD thesi. Université Laval, Canadá. <https://corpus.ulaval.ca/jspui/handle/20.500.11794/67577>

[^1]: The title and content of this essay plays with that of the article "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?", by Bender et al. (2021). This essay and "On Spanish Speaking Parrots" do not have a direct translation relationship. Initially, when I was invited to participate in the virtual round table "Machine Predictions and Synthetic Text", which was held on October 26, 2021, and in which I participated together with outstanding specialists such as Lauren Klein, Ted Underwood, Toma Tasovac and two of the authors of the aforementioned article (Angelina McMillan-Major and Margaret Mitchell), I wrote the text in Spanish, in order to organize my ideas. A week before the event, I rewrote the text in English, trying to escape (with medium or little luck) the insurmountable problem of transferring grammatical structures and expressions from Spanish to English. I would like to thank my dear sister, María Cruz del Rio, for correcting the first English draft and Grant Wythoff for final review.

[^2]: According to a report published by the Cervantes Institute (2019), 528 million people speak Spanish as a native, second or foreign language.

[^3]: In this regard, a very interesting multilingual tool for text discoverability that could be adapted to different disciplines, created by an Argentine biologist and an American bioinformatician, is PanLingua. PanLingua allows searches in the user\'s language on the bioRxiv.org database using Google Translate to provide automatic translations of the query term into different languages. PanLingua can be accessed from: <https://panlingua.rxivist.org/>.

[^4]: Aporta's oficial website: <https://datos.gob.es/es/informa-sobre>.

[^5]: As the site is bilingual, an English version of the documentation of this project can be read at: <https://datos.gob.es/en/documentacion/emerging-technologies-and-open-data-artificial-intelligence>.

[^6]: Gutiérrez Fandiño et al. (2021) do not mention whether the large amount of literary text digitized by the BNE was used to feed MarIA.

[^7]: Although they don't specify if by the Spanish Wikipedia they point to the Wikipedia of Spain or of the different Spanish-speaking Wikipedias.

[^8]: A very interesting initiative on Global South AI: <https://points.datasociety.net/ai-in-the-global-south-sites-and-vocabularies-e3b67d631508?source=user_profile---------1---------------------------->

[^9]: This article explains how the bitcoin industry is causing power outages in Argentina, a cheap provider of electricity: <https://www.iproup.com/finanzas/28621-cortes-de-luz-el-gobierno-busca-granjas-de-minado-de-bitcoin>.

[^10]: *Rioplatense* is the variety of Spanish spoken mainly in Argentina and Uruguay: <https://en.wikipedia.org/wiki/Rioplatense_Spanish>.

[^11]: More about BERTIN on its huggingface's site: <https://huggingface.co/bertin-project/bertin-roberta-base-spanish>.

[^12]: Author's note: This project is described in Kummervold et al. (2021).

[^13]: More about ALBERTI at: <https://huggingface.co/spaces/flax-community/alberti>.
