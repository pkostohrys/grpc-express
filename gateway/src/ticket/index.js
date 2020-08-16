const express = require('express');
const router = express.Router();

const TicketService = require('./ticket.service');

const ticketService = new TicketService();

router.post('/', async function(req, res, next) {
    const result = await ticketService.create(req.body);
    res.send(result);
});

module.exports = router;
