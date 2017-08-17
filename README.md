# Reactish

Reactish is a really short form (~30 lines) of reactive template rendering in javascript. Relies on Proxy for basic reactivity.

It might be ridiculously stupid, it's late. If you think it is, PRs welcome :)

## Goal

Reactively render a template literal (ideally from a html template tag) supporting inline subtemplate instancing and properties on a mutable data-context, essentially model-driven rendering.

The idea goes something like this:
- Define my template(s)
- Define my data-model(s)
- Changes to the data-model are reflected in the DOM automatically
- Limitation: Ideally fewer than 100 lines of readable code

## Demo

[https://codepen.io/bobbigmac/pen/gxowVy?editors=0010](https://codepen.io/bobbigmac/pen/gxowVy?editors=0010)

## Usage

```javascript
let data = {
  title: 'hello',
  className: 'myClass',
  counter: 0,
  list: ['cheese', 'bacon', 'sausages']
};

// Render via reactish
document.querySelector('.content').reactish(data, function() {
  return `<div>${this.title}</div>` + 
   `<div class="${this.className}">${this.counter}</div>` + 
   `<div class="list">${this.list.map(x => `<span>${x}</span>`).join(' ')}</div>`
});

//Modify element.state properties to cause rerender
window.setInterval(() => document.querySelector('.content').state.counter++, 1000);
//OR fetch('some-url').then(update(state.list));
```

## Roadmap

- Maybe subtemplates
- Maybe rerendering on key, without clearing unchanged contents

Don't know how to do either of these things (yet)

## Problems

Have been playing with using template literals inside template tags to render subtemplates. See [literal-templating.html](./literal-templating.html)

There's some progress on rendering reactively through template-tag literals too, though can't find a decent way to support modifying the state for objects in subtemplates. See [reactive-literal-templating.html](./reactive-literal-templating.html)

Here's a codepen for the reactive template tag stuff: [https://codepen.io/bobbigmac/pen/YxYBdo?editors=1010]](https://codepen.io/bobbigmac/pen/YxYBdo?editors=1010)