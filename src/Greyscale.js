const jimp = require('jimp');

class Greyscale {
    constructor(data = {}) {
        this.res = null;
        this.file = data.file ?? null;
        this.image = data.image ?? null;
    }

    write(file) {
        this.file = file;
        return this;
    }

    setImage(img) {
        this.image = img;
        return this;
    }

    async build() {
        this.res = await jimp.read(this.image);
        this.res.greyscale();

        this.file ? await this.res.write(this.file) : null;

        return new Promise(async (resolve, reject) => {
            this.res.getBuffer('image/png', (error, buffer) => error ? reject(error) : resolve(buffer))
        });
    }
}

module.exports = Greyscale;