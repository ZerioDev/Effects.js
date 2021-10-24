const { Blur } = require('../../methods');

new Blur()
    .setImage('./img/avatar.jpg')
    .setLevel(5)
    .write('./img/blur.jpg')
    .build().then(console.log('Saved'))