# Reactish

Reactish is a really short form (~30 lines) of reactive template rendering in javascript. Relies on Proxy for basic reactivity.

It might be ridiculously stupid, it's late. If you think it is, PRs welcome :)

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
