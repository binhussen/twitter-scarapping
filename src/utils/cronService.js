import { CronJob } from 'cron';

let cronJob = new CronJob("0 0 */1 * * *", function () {
    console.log("Pull Data From Coin Desk Twitter Page");


    console.log(
        "Done"
    );
});
export default cronJob;
