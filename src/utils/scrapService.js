import puppeteer from 'puppeteer';
import TwitService from "../services/twitService.js";
import EmailService from "./emailService.js";
import DocumentService from "./documentService.js";

const scrapService = {
    getTweets: async () => {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        await page.goto('https://twitter.com/coindesk', { waitUntil: 'networkidle2' });

        const contents = await page
            .$$eval('article div[lang]', (tweets) => tweets
                .map((tweet) => tweet.textContent));

            const registeredTwits = await TwitService.getTwits();
            const registeredContents = registeredTwits.rows.map(obj => obj.content);
            let filteredContent = contents.filter((content) =>
                !registeredContents?.includes(content));

            if (filteredContent.length === 0) {
                scroll = false;
            }

            if (filteredContent.length > 0) {
                contents.forEach(async (content) => {
                    await TwitService.addTwit({
                        title: 'coindesk',
                        content: content
                    });
                });
            }

        const videos = await page
            .$$eval('article video', (tweets) => tweets
                .map((tweet) => tweet.textContent));
        if (videos.length > 0) {
            videos.forEach(async (video) => {
                EmailService.sendEmail();
            });
        }
        browser.close();
    }
};
export default scrapService;