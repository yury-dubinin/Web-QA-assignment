const LoginPage = require('../../login.page');
const MainPage = require('../../main.page');
const ArticlePage = require('../../article.page');
const ReadArticlePage = require('../../read-article.page');
const expect = require('chai').expect;

describe('Verify CRUD Article feature', () => {
    const articleID = `${Math.random()}`;

    before(async () =>{
        await LoginPage.open();
        await LoginPage.login('valeron@email.com', 'Valeron');
    });

    it('able to create new article', async () => {
        await MainPage.openNewArticle();
        await ArticlePage.publishArticle(articleID)
        await MainPage.open();
        await MainPage.openGlobalFeed();
        const titles = await MainPage.getAllTitlesFromPage()
        expect(titles).to.include.members([articleID]);
    });

    it('able to read existing article', async () => {
        await MainPage.open();
        await MainPage.openGlobalFeed();
        await MainPage.openArticle(articleID)
        const articleTitle = await ReadArticlePage.getHeaderText()
        expect(articleTitle).to.be.equal(articleID)
    });

    it('able to edit existing article', async () => {
        await MainPage.open();
        await MainPage.openGlobalFeed();
        await MainPage.openArticle(articleID)
        await ReadArticlePage.editArticle()
        await ArticlePage.enterAbout('new' + articleID)
        await ArticlePage.enterBody('new' + articleID)
        await ArticlePage.publishArticle('new' + articleID)
        const articleTitle = await ReadArticlePage.getHeaderText()
        expect(articleTitle).to.be.equal('new' + articleID)
    });

    it('able to delete existing article', async () => {
        await MainPage.open();
        await MainPage.openGlobalFeed();
        await MainPage.openArticle('new' + articleID)
        await ReadArticlePage.deleteArticle()
        await MainPage.openGlobalFeed();
        const titles = await MainPage.getAllTitlesFromPage()
        expect(titles).to.not.include.members(['new' + articleID]);
    });

    it('able to perform all CRUD operations', async () => {
        await MainPage.open();
        await MainPage.openNewArticle();
        await ArticlePage.publishFullArticle('title' + articleID, 'about' + articleID, 'body' + articleID)
        const articleTitle = await ReadArticlePage.getHeaderText()
        expect(articleTitle).to.be.equal('title' + articleID)
        await ReadArticlePage.editArticle()
        await ArticlePage.publishArticle('new' + articleID)
        const newArticleTitle = await ReadArticlePage.getHeaderText()
        expect(newArticleTitle).to.be.equal('new' + articleID)
        await ReadArticlePage.deleteArticle()
        await MainPage.openGlobalFeed();
        const titles = await MainPage.getAllTitlesFromPage()
        expect(titles).to.not.include.members(['new' + articleID]);
    });
});
