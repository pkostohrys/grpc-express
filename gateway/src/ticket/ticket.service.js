const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const Promise = require("bluebird");

const REMOTE_SERVER = "0.0.0.0:2019";

class TicketService {

    constructor() {
        const proto = grpc.loadPackageDefinition(
            protoLoader.loadSync("../proto/ticket.proto", {
                keepCase: true,
                longs: String,
                enums: String,
                defaults: true,
                oneofs: true
            })
        );

        this.ticketGRPCService = new proto.ticket.TicketService(
            REMOTE_SERVER,
            grpc.credentials.createInsecure()
        );
    }

    async create(ticket) {
        return Promise.fromCallback((cb) => this.ticketGRPCService.create(ticket, cb));
    }

}
module.exports = TicketService;
