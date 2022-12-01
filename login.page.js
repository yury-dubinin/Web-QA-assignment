
const Page = require('./page');

class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail() {
        return $('input[formcontrolname="email"]');
    }

    get inputPassword() {
        return $('input[formcontrolname="password"]');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }

    get btnSignIn(){
        return $('//a[.=" Sign in "]');
    }

    async login (username, password) {
        await this.btnSignIn.click();
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

module.exports = new LoginPage();
