import puppeteer from 'puppeteer';

const ScrapService = async()=> {
        // Start a Puppeteer session with:
        // - a visible browser (`headless: false` - easier to debug because you'll see the browser in action)
        // - no default viewport (`defaultViewport: null` - website page will in full width and height)
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
        });
        // Open a new page
        const page = await browser.newPage();

        // On this new page:
        // - open the "https://twitter.com/coindesk" website
        // - wait until the dom content is loaded (HTML is ready)
        await page.goto("https://twitter.com/coindesk", {waitUntil: "domcontentloaded",});
        // Get page data
        const twits = await page.evaluate(() => {
            const twitList = document.
            querySelectorAll(".r-1jgb5lz > section > div > div");

            console.log("twitList",twitList)
            return Array.from(twitList).map((quote) => {
                const title = quote.querySelector(".r-zl2h9q > span > span").innerText;
                return {title};
            });
        });
}
export default ScrapService;