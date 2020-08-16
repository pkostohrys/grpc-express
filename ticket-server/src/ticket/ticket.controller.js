const ticketService = require('./ticket.service');

class TicketController {

    async create(call, callback) {
        try {
            const result = await ticketService.create(call.request);
            callback(null, result);
        } catch (error) {
            callback(error, null);
        }
    }

}
module.exports = new TicketController();
