const { Greyscale } = require('../../methods');

new Greyscale()
    .setImage('./img/avatar.jpg')
    .write('./img/greyscale.jpg')
    .build().then(console.log('Saved'))

/*
    .setImage() will be the picture used
    .write() to save the new picture in a file
    .build() to get the result (return a buffer if needed)
*/