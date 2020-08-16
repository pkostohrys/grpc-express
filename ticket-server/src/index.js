const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const ticketController = require("./ticket/ticket.controller");

const server = new grpc.Server();
const SERVER_ADDRESS = "0.0.0.0:2019";

// Load protobuf
const proto = grpc.loadPackageDefinition(
    protoLoader.loadSync("../proto/ticket.proto", {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    })
);

// Add the implemented methods to the service.
server.addService(proto.ticket.TicketService.service, {
    create: ticketController.create
});

server.bind(SERVER_ADDRESS, grpc.ServerCredentials.createInsecure());

server.start();
