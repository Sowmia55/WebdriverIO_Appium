
describe.skip('Skip sign in', () => {
    it('Amazon Skip login', async () => {
        await $('//*[@resource-id="com.amazon.mShop.android.shopping:id/skip_sign_in_button"]')
        .click();  
        await expect($('//*[@resource-id="com.amazon.mShop.android.shopping:id/configurable_action_bar_view"]')).toBeDisplayed();  
    });
});

describe('Skip sign IN', () => {
    it('Amazon Skip login', async () => {
        await $('//*[@resource-id="com.amazon.mShop.android.shopping:id/skip_sign_in_button"]')
        .click();  
        await expect($('//*[@resource-id="com.amazon.mShop.android.shopping:id/configurable_action_bar_view"]')).toBeDisplayed();  
    });
});

  