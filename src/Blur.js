const jimp = require('jimp');

class Blur {
    constructor(data = {}) {
        this.res = null;
        this.file = data.file ?? null;
        this.image = data.image ?? null;
        this.level = data.level ?? 5;
    }

    write(file) {
        this.file = file;
        return this;
    }

    setImage(img) {
        this.image = img;
        return this;
    }

    setLevel(number) {
        this.level = number;
        return this;
    }

    async build() {
        this.res = await jimp.read(this.image);
        this.res.blur(isNaN(this.level) ? 5 : parseInt(this.level));

        this.file ? await this.res.write(this.file) : null;

        return new Promise(async (resolve, reject) => {
            this.res.getBuffer('image/png', (error, buffer) => error ? reject(error) : resolve(buffer))
        });
    }
}

module.exports = Blur;