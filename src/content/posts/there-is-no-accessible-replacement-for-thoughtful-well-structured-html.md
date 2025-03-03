---
visibility: Draft
publishDate: 2025-03-03T06:00:00.000Z
title: 'There is no accessible replacement for thoughtful, well-structured HTML'
description: 'As expected, accessibility overlays can’t fix what’s already broken'
seo:
  title: 'There is no accessible replacement for thoughtful, well-structured HTML'
  description: 'As expected, accessibility overlays can’t fix what’s already broken'
  keywords: >-
    blog, post, accessibility, a11y, web development, html, web design, web,
    WCAG, ADA
openGraph:
  image: /uploads/post--2.png
authors:
  - authorRef: src/content/authors/george-treviranus.json
categories:
  - categoryRef: src/content/categories/accessibility.json
  - categoryRef: src/content/categories/design.json
  - categoryRef: src/content/categories/development.json
---

In January of this year, accessibility overlay provider accessiBe [came under fire](https://www.accessibility.works/blog/avoid-accessibility-overlay-tools-toolbar-plugins/) through the FTC for false advertising. This isn’t terribly surprising, considering:

> In 2021, more than 400 companies with an accessibility widget or overlay on their website were sued over accessibility, per digital accessibility provider [UsableNet](https://f.hubspotusercontent30.net/hubfs/3280432/Remediated-2021-Year-End-Report-FINAL.pdf).\
> \
> \- Kyle Wiggers, [TechCrunch](https://techcrunch.com/2025/01/03/ftc-orders-ai-accessibility-startup-accessibe-to-pay-1m-for-misleading-advertising/)

I’m sure these tools work to an extent, but I feel the need to reiterate something I and several of my industry colleagues have been expressing for years: you can’t fix what’s already broken, and there’s no replacement for well structured HTML. A properly built web site is screen reader friendly by its nature, UI complexity be damned.

I’d even go a step further and say no AI or automation tool can fix asemantic, generic HTML in any given UI beyond a certain point. Code that is too generic will inevitably require human intervention, and AI is far from perfect at having context awareness.

So how did we get here? Let’s take a micro-dive into the history of modern web development.

## Seeking Answers In History

For the first 20-30 years of the public internet’s life, the technology of the web (HTML, CSS, JavaScript) was scattered. Each browser supported its own runtimes of JavaScript, which meant imperfect compatibility, and HTML structurally stayed largely the same.

Between 2010 and 2015, it felt a bit like a golden age for the tech industry. I was just exiting college and getting into the field, and people around me were actively talking about accessibility.

Around 2008, [HTML5](https://en.wikipedia.org/wiki/HTML5) entered the scene to give us more useful templating features. This enabled designers and developers to move away from [div soup](https://css-tricks.com/twitters-div-soup-and-uglyfied-css-explained/) and into the wonderful world of [semantic HTML](https://www.w3schools.com/html/html5_semantic_elements.asp), and combined with emerging CSS features like [animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations), our apps came to life well beyond what was ‘standard’ up to that point.

Keeping up with web standards is a constant endeavor in this industry, but things have been pretty consistent in the last 10 years, so could technology fatigue really be the answer?

## Signals In My Own Career

It wasn’t until around 2017 when I stopped to ask myself: if accessibility is so important, why do all these web products apparent suffer from inaccessible interfaces?

At the time, I was working at Scribd, who was going through an [accessibility lawsuit](https://dralegal.org/case/national-federation-of-the-blind-et-al-v-scribd-inc/) of its own. I started in their engineering organization as one of the engineers tasked with remediating violations across its products and website.

I don’t think I could easily articulate the poor execution of accessible interfaces at scale, but I might start by boiling down much of it to disabilities ignorance and manual human error in a rapidly evolving web ecosystem.

## A Tale As Old As Time

What I write here is just personal opinion, but we can’t ignore the pink elephant in the room: technology is constantly evolving, and when combined with the never-ending chase of shareholder value, it’s easy to connect the dots.

Where early-stage tech companies might skip out on many accessibility concerns in the name of securing their position in the market, it feels natural that companies would aim to capitalize on these shortfalls by succumbing to the exact same thought process.

Accessibility is hard work. Engineers, designers, and product managers tasked with remediating these issues aren’t looking for brownie points. [A significant portion of internet users are blind](https://nfb.org/resources/blindness-statistics), and our society demands dependence on the internet, so how can we do it right? Not with shortcuts.
