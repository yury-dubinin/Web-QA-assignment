
const Page = require('./page');

class MainPage extends Page {

    get linkNewArticle() {
        return $('a[routerlink="/editor"]');
    }

    get linkGlobalFeed() {
        return $('//a[.=" Global Feed "]');
    }

    get linkArticlePreview() {
        return $$('//a[@class="preview-link"]/h1');
    }

    get paginationModule() {
        return $('.pagination')
    }

    async openNewArticle () {
        await this.linkNewArticle.click();
    }

    async openGlobalFeed (){
        await this.linkGlobalFeed.click();
    }

    async getAllTitlesFromPage (){
        // wait is here just to show that I know about its existence
        await this.paginationModule.waitForDisplayed({ timeout: 1000 });
        const elements = await this.linkArticlePreview;
        console.log('Found ' + elements.length + ' elements')
        const titles = await this.promToArr(elements)
        console.log('Article titles: ' +  titles)
        return titles
    }

    async openArticle(title){
        await $(`//a[@class="preview-link"]/h1[.="${title}"]`).click()
    }

    async promToArr( elements ){
        const tt = []
        for (const element of elements){
            const text = await element.getText()
            tt.push(text )
        }
        return tt
    }
}

module.exports = new MainPage();
