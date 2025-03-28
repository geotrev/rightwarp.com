---
visibility: Draft
publishDate: 2025-03-28T05:00:00.000Z
title: You can only sort of opt-out of AI crawlers
description: A fast-evolving AI landscape means limited self-protection pathways
seo:
  title: How do you opt-out of AI crawlers?
  description: A fast-evolving AI landscape means limited self-protection pathways
  keywords: >-
    web development, ai, artificial intelligence, llm, large language model,
    seo, websites
openGraph:
  image: /uploads/post--5.png
  type: article
authors:
  - authorRef: src/content/authors/george-treviranus.json
categories:
  - categoryRef: src/content/categories/artificial-intelligence.json
  - categoryRef: src/content/categories/content-strategy.json
---

AI is evolving fast. I know, shocking news.

If you maintain a website, it's probably been crawled, ingested, and ultimately served back to users using these bots. This is good to partake in if your business is highly public, but what if you specifically don't want crawlers on your site?

Naturally, there's a hot debate on the ethics and copyright implications of open content harvesting for AI. Meta, for instance, [is under fire for leveraging a notorious piracy source](https://www.wired.com/story/new-documents-unredacted-meta-copyright-ai-lawsuit/) to train its AI. To put control back in the hands of business owners, there are startups specializing in both optimizing AI crawlability, and others defending the licensing rights for copyright holders and authors, such as [Created By Humans](https://www.createdbyhumans.ai/).

Other businesses, like Cloudflare, are [turning AI against itself](https://arstechnica.com/ai/2025/03/cloudflare-turns-ai-against-itself-with-endless-maze-of-irrelevant-facts/) by redirecting bots to unrelated web content when website owners disable AI access.

***

So what can you do to protect your data? Unfortunately, the only bulletproof option is user authentication.

You should also consider updating your website's `robots.txt` file. The downside of this, unfortunately, is that the file is essentially a polite request. Your robots file can still be completely ignored with no immediate penalty, and copyright case law is lagging on settling this once and for all, so having paper trails on your side will only help you.

For now, I'd recommend documenting most common AI bots and learning how to optimize your site content for them. [More about this on botify](https://www.botify.com/insight/ai-crawler-bots).

Here's a sample robots file that disallows crawlers (source: [techpays.com/robots.txt](https://techpays.com/robots.txt)):

```
# GPTBot is OpenAI's web crawler
User - agent: GPTBot
Disallow: /

# Google Bard & Gemini
User - agent: Google - Extended
Disallow: /

# ChatGPT - User is OpenAI's web crawler
User - agent: ChatGPT - User
Disallow: /

# Common Crawl bot
User - agent: CCBot
Disallow: /

# PiplBot is PiplBot's web crawler
User - agent: PiplBot
Disallow: /

# anthropic - ai is Anthropic's web crawler
User - agent: anthropic - ai
Disallow: /

# Claude - Web is Claude's web crawler
User - agent: Claude - Web
Disallow: /

# TurnitinBot is Turnitin's web crawler
User - agent: TurnitinBot
Disallow: /

# PetalBot is Petal's web crawler
User - agent: PetalBot
Disallow: /

# MoodleBot is Moodl's web crawler
User - agent: MoodleBot
Disallow: /

# magpie - crawler is Brandwatch.com's web crawler
User - agent: magpie - crawler
Disallow: /

# Meta
User - agent: meta - externalagent
Disallow: /

User - agent: ImagesiftBot
Disallow: /

# DotBot is OpenSiteExplorer's web crawler
User - agent: DotBot
Disallow: /
```

The owner of techpays recently discussed on LinkedIn how, despite having this file, his monthly hosting bill has been spiking due to bots. That said, this file can at least serve as a paper trail for when you see crawlers in your web logs, then send a cease and desist. Will they listen? Hard to say, but that's the way the wild west of AI is these days.
