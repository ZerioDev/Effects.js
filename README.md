# EffectsJS

A simple module to add effects to your pictures 🎨

*Project under construction... follow the progress on the [Discord](https://discord.gg/5cGSYV8ZZj) server.*

*If you don't have any development knowledge, it is recommended to join the Discord support server to get help.*

### 🎠 A nice and easy to use system

Add a blur filter to an image ? It's possible and easy !

```js
const { Blur } = require('effects-gallery.js');

new Blur()
    .setImage('./img.png')
    .setLevel(5)
    .write('./new.png')
    .build().then(console.log('Saved'))

new Blur({
    file: './new.png',
    level: 5,
    image: './img.png'
}).build().then(console.log('Saved'))
```

Realized with ❤️ by [ZerioDev](https://github.com/ZerioDev).