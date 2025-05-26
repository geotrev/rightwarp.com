---
visibility: Draft
publishDate: 2025-05-26T05:00:00.000Z
title: 'Web accessibility & animations: strategies for success'
description: 'Hey, web animations can be accessible, too!'
seo:
  title: 'Web accessibility & animations: strategies for success'
  description: 'Hey, web animations can be accessible, too'
  keywords: >-
    animations, websites, accessibility, web design, digital design, web
    animations, business websites, ui design, ux design
openGraph:
  image: /uploads/post--7.png
  type: article
authors:
  - authorRef: src/content/authors/george-treviranus.json
categories:
  - categoryRef: src/content/categories/accessibility.json
  - categoryRef: src/content/categories/design.json
  - categoryRef: src/content/categories/development.json
---

On the surface, animations and accessibility can seem at odds. Once you understand them, however, you can quickly see how little considerations can make a big quality of life difference for users of all abilities.

For the purposes of this article, we'll focus only on the web, but it's worth pointing out how accessibility applies everywhere consumer products exist: phones, tablets, checkout kiosks, and heck, even doors (shoutout to Norman doors). In fact, I'd go as far as to say poorly designed "things" are in many ways an accessibility concern.

First, we'll cover authoritative requirements on web accessibility, then we'll explore specifics of tools and strategies you can use. There are also extra resources at the end for further learning.

## Web Content Accessibility Guidelines (WCAG)

The key component to understanding web accessibility is ensuring it complies with [POUR](https://www.wcag.com/resource/what-is-wcag/#What_is_POUR_and_why_is_it_critical_to_WCAG_standards). There are three levels of compliance: A, AA, and AAA. In general, AA is the preferred minimum and [the ADA recognizes WCAG](https://www.ada.gov/resources/web-guidance/) in its requirements.

For animations, key requirements to think about include SC [2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html), [2.3.2](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes.html), and [2.3.3](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html):

The key points are:

* **Hide, pause, and stop (2.3.3):** Give users the ability to control an animation by stopping or hiding it completely.
* Avoid flashing (2.3.1): Avoid content that flashes or ensure it's within the allowed threshold.
* Flashing threshold (2.3.2): Ensure flashing doesn't exceed 3 times in 1 second.

There are some exceptions, in particular for SC 2.3.3, where animations minimal enough or critical to an interaction can be permitted (although they still can't violate the other two criterion).

### Impact

What about real world impact? What types of disabilities/illnesses affected by animations?

Some individuals have a vestibular (inner-ear) disorder, giving them sensitivities to motion, causing nausea, vertigo, dizziness, and headaches.

Others have cognitive disabilities, where animations can actively confuse and disorient them, preventing their access to information or from using the website altogether.

## Enter Animations

If you've been on the internet for more than five minutes, you've probably seen all sorts of animations.

Animations are obvious, visual features, whereas accessibility is often more subtle for folks without disabilities. Accessibility aids individuals with issues like vision, motor, and/or cognitive impairments.

On the web, animations utilize HTML, CSS, and JavaScript to create movements in user interfaces. HTML adds semantic structure, whereas CSS and JavaScript define the structure of an animation.

Animations can be **automatic** (e.g., without user interaction) or **interactive** (e.g., a button press).

### Technical Details

#### CSS Features

Currently, CSS is the most common and approachable entry point for creating web animations.

##### Respecting User Preference

No better place to start than by acknowledging the `prefers-reduced-motion` media query. Don't forget to have a fallback!

Media Query example code

##### Redirectable Animations

The more complex your animation, the more you need to consider specific methodologies around how users can interrupt and cause elements to be redirected in the interface.

The quick note I'll make is to be aware of *how* your animation can be interrupted. If a user quickly cancels or interacts with something else on a page, causing elements to change mid-animation, the elements can otherwise jump or drop frames (rightfully causing confusion!).

Emil Kowalski did a [write up](https://emilkowal.ski/ui/building-a-toast-component) of his work building a React component that initially had this exact problem. Worth the read if you're interested in the coding side.

In his case, using `keyframes` caused the animation to "snap" to the last frame of the animation when interrupted (in this case, rendering multiple UI elements quickly and successively), causing frame drops/skipping. Once he switched to using the `transition` property, the problem was fixed.

Allowing CSS transitions to be interruptible is part of what makes them **robust** and **resilient** (calling back to the POUR principles from the beginning). Without this consideration, users are likely to consider your website/product low quality, or worse, feel confused or succumb to physical effects.

#### JavaScript APIs

In JavaScript, user motion preferences can be detected with the [matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) method in browsers.

matchMedia example

Furthermore, utilizing the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Web_Animations_API_Concepts) can be very powerful in making very custom animations. Most developers (myself included) like use third party tools like [Motion](https://motion.dev), [GSAP](https://gsap.com), and [React Spring](https://react-spring.dev), as they do most of the heavy lifting and optimization for you.

Speaking of performance…

### A Note on Performance

Writing a performant and well-designed animation contributes to its accessibility, too. A poor performing animation can make your website look broken and cause confusion. You've probably seen such animations in the wild.

One way to work within the constraints of browsers is to prioritize hardware-acceleration (using your machine's graphics card).

Normally, animations use your computer's CPU. This is fine for simple animations, but what about the complex ones? CSS properties that benefit from hardware-acceleration include opacity, transition, and filter. More are slated to be supported, but these are the big ones right now.

If you aren't seeing the performance you expect from these properties, you can try setting will-change: \<property-name>, especially if your animation uses 3D-space (e.g., using transform-style: preserve-3d). Keep in mind, however:You shouldn't overuse it.Remove your will-change declaration after animations complete.

will-transform example

Over-using hardware-acceleration can ironically cause further performance degradation. In general, your browser is pretty smart and will do the right thing by default.

Also be aware of [layout shift](https://developer.mozilla.org/en-US/docs/Web/API/LayoutShift). If your animation affects surrounding elements, the browser will need to do extra work to re-render content constantly, taking up excess memory.

## Accessibility is an opportunity to enhance

Designed carefully along technical constraints and in line with WCAG, animations can be accessible. Not only that, they can be a joy for those who like them, and easily managed by those who don't.

## Additional resources

Here are some links for further reading:

* [Logo Marquee Animation: Jeremy Frank](https://jeremyfrank.dev/craft/logo-marquee/)
* [Animation performance: Motion One](https://motion.dev/docs/performance)
* [Designing Fluid Interfaces: Apple](https://developer.apple.com/videos/play/wwdc2018/803)
* [CSS Transform: Emil Kowalski](https://emilkowal.ski/ui/css-transforms)
* [Accessible Web Animations: CSS Tricks](https://css-tricks.com/accessible-web-animation-the-wcag-on-animation-explained/)
* [Responsive Design for Motion: Webkit](https://webkit.org/blog/7551/responsive-design-for-motion/)
