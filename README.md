Part of main project for [micro-frameworks](https://github.com/multisolution/ops/issues/29)

To test events on console 

***test send***

`window.addEventListener('increment', (ev)=>console.log(ev.detail) )`



***test receive***

`var event = new CustomEvent('increment_evt', {detail: {target: 'vue'}}); window.dispatchEvent(event)`

