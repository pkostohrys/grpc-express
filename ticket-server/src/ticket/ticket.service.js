class TicketService {

    constructor() {
        this.tickets = [];
    }

    create(ticket) {
        if(this.tickets.length > 1000) {
            this.tickets = [];
        }
        this.tickets.push(ticket);
        return {
            tickets: this.tickets
        };
    }

}
module.exports = new TicketService();
