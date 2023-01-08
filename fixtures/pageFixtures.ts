import {test as base,expect} from "@playwright/test";
import Register from "../pages/Register.Page";
import Home from "../pages/Home.Page";
import Login from "../pages/Login.Page";
import ContactUs from "../pages/ContactUs.Page";

type pages = {
    registerPage: Register,
    homePage: Home,
    loginPage:Login,
    contactUsPage: ContactUs
}
export const test = base.extend<pages>({
        registerPage: async({page},use) => {
            await use(new Register(page));
        },
        homePage: async({page},use) => {
            await use(new Home(page));
        },
        loginPage: async({page},use) => {
            await use(new Login(page));
        },
        contactUsPage: async({page},use) => {
            await use(new ContactUs(page));
        },
        
})

export {expect}