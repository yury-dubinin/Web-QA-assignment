require('dotenv').config()
module.exports = class Page {
    async open() {
        await browser.url(`https://${process.env.CREDENTIALS}@qa-task.backbasecloud.com/`)
    }
}
