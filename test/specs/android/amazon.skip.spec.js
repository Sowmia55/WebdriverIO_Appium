describe('Skip sign IN', () => {
    it('Amaon Skip login', async () => {
      await $('//*[@resource-id="com.amazon.mShop.android.shopping:id/skip_sign_in_button"]')
        .click();
  
        await expect($('//*[@resource-id="com.amazon.mShop.android.shopping:id/configurable_action_bar_view"]')).toBeDisplayed();
    
    });
});

  