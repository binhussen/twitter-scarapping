import Twit from '../models/twit.js';
class TwitService {
    static async getTwits(page, pageSize) {
        const limit = pageSize ? +pageSize : undefined;
        let offset = page ? (+page - 1) * limit : undefined;

        try {
            return await Twit.findAndCountAll({
                limit: limit,
                offset: offset
            });
        } catch (error) {
            throw error;
        }
    }

    static async addTwit(newTwit) {
        try {
            return await Twit.create(newTwit);
        } catch (error) {
            throw error;
        }
    }
}
export default TwitService;