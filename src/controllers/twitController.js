import TwitService from '../services/twitService.js';
import ResponseUtil from '../utils/responseUtil.js';
const responsesUtil = new ResponseUtil();

class TwitController {
    static async getTwits(req, res) {
        const {page, pageSize} = req.query;
        try {
            const twits = await TwitService.getTwits(page, pageSize);
            if (twits) {
                responsesUtil.setSuccess(200, 'Twits retrieved successfully!', twits);
            } else {
                responsesUtil.setSuccess(200, 'No twits found!', []);
            }
        } catch (error) {
            responsesUtil.setError(500, error);
        }
        return responsesUtil.send(res);
    }
}
export default TwitController;