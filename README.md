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
    image: './img.png',
    level: 5,
    file: './new.png'
}).build().then(console.log('Saved'))
```

Simple Discord example

```js
const { Blur } = require('effects-gallery.js');
const { Client, Intents } = require('discord.js');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    new Blur()
        .setImage('./img.png')
        .setLevel(5)
        .build().then(res => {
            message.channel.send({
                content: 'Hello world', files: [
                    { attachment: res }
                ]
            })
        })
})

client.login('');
```

### ⚡️ Available features

Find the features available on the [GitHub](https://github.com/ZerioDev/Effects.js/tree/main/testing) page of the project.

Realized with ❤️ by [ZerioDev](https://github.com/ZerioDev).