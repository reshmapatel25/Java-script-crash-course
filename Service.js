module.exports= class Service{
    constructor(serviceName,availableTime){
        this.serviceName=serviceName;
        this.availableTime=availableTime;
        this.timeslots= [];
    }
    report(){
        console.log('the available timeslots are: ');
    }
}