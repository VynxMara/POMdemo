import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.js';



test('test', async ({ page }) => {

    const Loginn = new LoginPage(page);

    await Loginn.gotoLoginPage();
    await Loginn.login('tomsmith', 'SuperSecretPassword!');

});
