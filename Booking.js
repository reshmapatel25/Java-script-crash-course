module.exports = class Booking{
    constructor(bookingId){
        this.bookingId=bookingId;
        
    }
    booking(customerId,serviceId,availableTime){
        console.log(customeId +' have booked with '+ serviceId+ ' at '+availableTime );
    }
}