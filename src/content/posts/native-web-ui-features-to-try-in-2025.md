---
visibility: Draft
publishDate: 2025-03-17T05:00:00.000Z
title: Native web UI features to try in 2025
description: >-
  Patterns that have prevailed as some of the toughest patterns are soon-to-be
  first-class citizens for developers
seo:
  title: Native web UI features to try in 2025
  description: >-
    Patterns that have prevailed as some of the toughest patterns are soon-to-be
    first-class citizens for developers
  keywords: >-
    web development, ui development, html, css, javascript, web standards,
    websites
openGraph:
  image: /uploads/post--4.png
authors:
  - authorRef: src/content/authors/george-treviranus.json
categories:
  - categoryRef: src/content/categories/development.json
  - categoryRef: src/content/categories/accessibility.json
---

We've come a long way since 2008 (the inception of HTML5). Where you currently rely on complex JavaScript libraries for some of the below features, they're slowly becoming native to HTML, CSS, and JavaScript.

To keep explanations brief, I won’t dive in too much beyond the high level APIs. Each of these features could easily have an entire write-up for their potential use-cases.

That said, here's a high level look at these amazing features!

## Menu

The `<menu>` tag is an alternate to `<ul>`, which defines a set of list items as a semantic menu. Useful for both menubars and dropdowns.

```html
<menu>
  <li><button onclick="eat()">Eat</button></li>
  <li><button onclick="sleep()">Sleep</button></li>
  <li><button onclick="code()">Code</button></li>
</menu>
```

Support level: All browsers

[Read about `<menu>` on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu)

## Dialog

The `<dialog>` element creates a modal or non-modal dialog, useful for things like alerts, disclosure dialogs, picture-in-picture, and more.

```html
< !--trigger element-- >
<button type="button" id="trigger">Show the dialog</button>

<!--dialog -->
<dialog id="dialog">
  <button id="close-dialog" autofocus>Close</button>
  <p>This modal dialog has a groovy backdrop!</p>
</dialog>
```

Use JavaScript to add functionality:

```javascript
const dialog = document.querySelector("#dialog");
const showButton = document.querySelector("#trigger");
const closeButton = document.querySelector("#close-dialog");
// show
showButton.addEventListener("click", () => dialog.showModal());
// close
closeButton.addEventListener("click", () => dialog.close());
```

**Support level:** All browsers

[Read about `<dialog>` on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)

## Details

`<details>` is a disclosure element, similar to an accordion. Use it to show and hide content. Useful in text-heavy pages, like FAQs.

```html
<details>
  <summary>Details</summary>
  A larger description goes here; it's hidden by default, but can be expanded with an attribute or by clicking the summary
</details>
```

**Pro-tip:** Give each `<details>` element in a series the same name attribute value to prevent more than one from opening at a time.

**Support level:** All browsers ([some accessibility caveats apply](https://blog.learningtoo.eu/expanding-summary-details-accessibly))

[Read about `<details>` on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)

## Anchors

Anchors comprise a series of CSS features used to attach one element to another on a page. You can use the `anchor()` CSS function with `position-anchor`, `position-area`, and absolute positioning to achieve a tooltip or popover, for instance. 

Given the following HTML:

```html
<button type="button" class="trigger">Tooltip trigger</div>
<p class="tooltip">Some tooltip content.</p>
```

You can then provide CSS like the following (visual styles omitted for brevity), which absolutely positions a paragraph to the button:

```css
.trigger {
  anchor-name: --infobox;
}
.tooltip {
  position: absolute;
  position-anchor: --infobox;
  top: anchor(top);
  left: calc(anchor(right) + 10px);
  bottom: anchor(bottom);
}
```

**Support level:** Limited (Unsupported in Safari and Firefox)

More reading:

* [`anchor() function`](https://developer.mozilla.org/en-US/docs/Web/CSS/anchor)
* [`position-anchor` property](https://developer.mozilla.org/en-US/docs/Web/CSS/position-anchor)
* [`position-area` property](https://developer.mozilla.org/en-US/docs/Web/CSS/position-area)

## Animation Timelines

The view() CSS function enables a scroll progress animation using the nearest scrollable parent element. A good use-case to consider is a visual scroll indicator or to show/hide a menubar as a user scrolls down a page.

The feature combines with the `animation-timeline` CSS property:

```css
.element {
  animation-timeline: view(<axis>, <inset>);
}
```

Use keyframes to define your specific animation style.

**Support level:** Limited (Unsupported in Safari and Firefox)

[Read more about animation timelines on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline/view)

## View Transition API

Natively animate between website views using JavaScript. This can work with either single-page applications (SPAs) or multi-page applications (MPAs).

This feature solves a long-standing issue of apps using fairly complex JavaScript and CSS to transition page elements between views. If you’ve ever implemented this, you know exactly what I mean!

You can trigger a same-document view transition using `document.startViewTransition` (example courtesy of [Google](https://developer.chrome.com/docs/web-platform/view-transitions/)):

```javascript
function handleClick(e) {
  // Fallback for browsers that don't support this API:
  if (!document.startViewTransition) {
    updateTheDOMSomehow();
    return;
  }
  // With a view transition:
  document.startViewTransition(() => updateTheDOMSomehow());
}
```

For [cross-document transitions](https://developer.chrome.com/docs/web-platform/view-transitions/cross-document), you can opt-in with CSS:

```css
@view-transition {
  navigation: auto;
}
```

Then write your custom animation tied into [pageswap](https://developer.mozilla.org/en-US/docs/Web/API/PageSwapEvent) and/or [pagereveal](https://developer.mozilla.org/en-US/docs/Web/API/PageRevealEvent) events.

**Support level:** Limited (Unsupported in Firefox)

[Read about view transitions on MDN](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API)

## Popover API

Create interactive popovers with only HTML and minimal JavaScript. Style every aspect of the popover, including the backdrop and open/close animations. Popovers can be either modal or non-modal, depending on your use-case.

Use `popovertarget`, `popovertargetaction`, and `popover` attributes in HTML

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

Or use JavaScript: `popoverElement.togglePopover()`

You can style various parts of the element, like the `::backdrop` pseudo-element and `:popover-open` pseudo-class.

A big thing to note, too: you can even [create nested popovers](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using#nested_popovers)!

**Support level:** All browsers (barring `hint` attribute in Firefox and Safari)

[Read about popovers on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)

***

There's a ton more coming up, too. Since HTML5's inception (over 15 years ago... lordy), it's been a blast watching popular UI conventions migrate into browsers. The ones we’re discussing above aren't necessarily even new by industry standards, but it’s great to see growing (or even complete) support for these very necessary UI patterns.
