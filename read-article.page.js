
const Page = require('./page');

class MainPage extends Page {

    get divHeader() {
        return $('//div/h1');
    }

    get btnEdit(){
        return $('//div[@class="banner"]//a[.=" Edit Article "]')
    }

    get btnDelete() {
        return $('//div[@class="banner"]//button[.=" Delete Article "]')
    }

    async editArticle(){
        await this.btnEdit.click()
    }

    async deleteArticle(){
        await this.btnDelete.click()
    }

    async getHeaderText (){
        const text = await this.divHeader.getText()
        return text
    }
}

module.exports = new MainPage();
