import { CronJob } from 'cron';
import scrapService from "./scrapService.js";

let cronJob = new CronJob("0 0 */1 * * *", function () {
    console.log("Started Pulling Data From Coin Desk Twitter Page...");
    scrapService();
    console.log("Done");
});
export default cronJob;
