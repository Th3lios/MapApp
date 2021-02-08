import wd from 'wd'
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
    maxInstances: 1,
    browserName: '',
    appiumVersion: '1.19.1',
    platformName: 'Android',
    platformVersion: '10',
    deviceName: 'HUAWEI P30 lite',
    automationName: 'UiAutomator2',
    appPackage: "com.mapapp",
    appActivity: "com.mapapp.MainActivity",
    udid: "AGT4C19513002563"
}

const driver = wd.promiseChainRemote('localhost', PORT);

describe('Init Test', () => {
    beforeAll(async () => {
        await driver.init(config);
        await driver.sleep(3000);
    }) // Sometime for the app to load

    it('Should press the login button', async () => {
        expect(await driver.hasElementByAccessibilityId('login-button')).toBe(true);
        const element = await driver.elementByAccessibilityId('login-button')
        await element.click()
        expect(await driver.hasElementByAccessibilityId('notHere')).toBe(false);
    });

    // it('Should press the sign up button', async () => {
    //     expect(await driver.hasElementByAccessibilityId('register-button')).toBe(true);
    //     const element = await driver.elementByAccessibilityId('register-button')
    //     await element.click()
    //     expect(await driver.hasElementByAccessibilityId('notHere')).toBe(false);
    // });

})
