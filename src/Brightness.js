const jimp = require('jimp');

class Brightness {
    constructor(data = {}) {
        this.res = null;
        this.file = data.file ?? null;
        this.image = data.image;
        this.level = data.level ?? 5;
    }

    write(file) {
        this.file = file;
        return this;
    }

    setImage(img) {
        if (!img) throw new Error('You must provide an picture in the setImage() section');

        this.image = img;
        return this;
    }

    setLevel(number) {
        const value = parseInt(number);

        if (!value || value <= 0 || value > 9) return this;

        this.level = number;
        return this;
    }

    async build() {
        this.res = await jimp.read(this.image);
        this.res.brightness(Number(`0.${this.level}`));

        this.file ? await this.res.write(this.file) : null;

        return new Promise(async (resolve, reject) => {
            this.res.getBuffer('image/png', (error, buffer) => error ? reject(error) : resolve(buffer))
        });
    }
}

module.exports = Brightness;