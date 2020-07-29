const { openBrowser, goto, click, text, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto('https://ultimateqa.com');
        await click('Automation Exercises');
        await click('Big page with many elements');
        await text('Section of Buttons').exists();
        await click('Button');
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
