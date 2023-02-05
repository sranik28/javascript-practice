function ticketPrice(ticketQuantity){
    const first100Ticket=100;
    const second200Ticket=90;
    const restTicket=70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Ticket;
        return price;
    }
    else if(ticketQuantity <= 200){
         const first100Price = 100 * first100Ticket;
         const restTicketQuantity = ticketQuantity - 100;
         const second200Price = restTicketQuantity * second200Ticket;
         const totalPrice = first100Price + second200Price;
         return totalPrice;
    }
    else{
        const first100Price = 100 * first100Ticket;
        const second200Price = 100 * second200Ticket;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicket;
        const totalPrice = first100Price + second200Price + restTicketPrice;
        return totalPrice ;
    }
}
const result = ticketPrice(280);
console.log("total ticket:", result);