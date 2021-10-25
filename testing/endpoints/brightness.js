const { Brightness } = require('../../methods');

new Brightness()
    .setImage('./img/avatar.jpg')
    .setLevel(5)
    .write('./img/brightness.jpg')
    .build().then(console.log('Saved'))

/*
    .setImage() will be the picture used
    .setLevel() will be the level used on the filter (can be between 1 and 9)
    .write() to save the new picture in a file
    .build() to get the result (return a buffer if needed)

    If the number in .setLevel() is not between 1 and 20 the value will automatically be set to the number 5
*/