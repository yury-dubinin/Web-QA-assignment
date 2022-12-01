
const Page = require('./page');

class ArticlePage extends Page {

    get inputTitle() {
        return $('input[formcontrolname="title"]');
    }

    get inputAbout(){
        return $('input[formcontrolname="description"]')
    }

    get inputBody(){
        return $('textarea[formcontrolname="body"]')
    }

    get btnSubmit() {
        return $('button[type="button"]');
    }

    async enterAbout(about){
        await this.inputAbout.setValue(about);
    }

    async enterBody(body){
        await this.inputBody.setValue(body);
    }

    async publishArticle (title) {
        console.log('Create article with title: ' + title);
        await this.inputTitle.setValue(title);
        await this.btnSubmit.click();
    }

    async publishFullArticle (title, about, body) {
        console.log('Create article with followings: ' + [title, about, body]);
        await this.inputBody.setValue(body);
        await this.inputAbout.setValue(about);
        await this.inputTitle.setValue(title);
        await this.btnSubmit.click();
    }
}

module.exports = new ArticlePage();
