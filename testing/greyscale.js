const { Greyscale } = require('../methods');

new Greyscale()
    .setImage('./img/avatar.jpg')
    .write('./img/new.jpg')
    .build().then(console.log('Saved'))