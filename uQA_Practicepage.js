//Navigate to ultimateQA - Automation Practice
const { openBrowser, goto, click, text, link, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto('https://ultimateqa.com');
        await click('Automation Exercises');
        await text('Automation Practice').exists();
        await link('Big page with many elements').exists();
        await link('Fake Landing Page').exists();
        await link('Fake Pricing  Page').exists();
        await link('Fill out Forms').exists();
        await link('Learn how to automate an application that evolves over time').exists();
        await link('Login automation').exists();
        await link('Interactions with simple elements').exists();
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
