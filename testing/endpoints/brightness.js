const { Brightness } = require('../../methods');

new Brightness()
    .setImage('./img/avatar.jpg')
    .setLevel(5)
    .write('./img/brightness.jpg')
    .build().then(console.log('Saved'))