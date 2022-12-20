class Vehicle {
    constructor(maximumPassengers,passenger,numberOfWheels,maximumSpeed,fuel,scheduleService){
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels= 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
loadPassenger(){
    if(this.passenger < this.maximumPassengers){
        console.log('There is room available')
    }else{
        console.log('This car is full')
    }
    
}

start(){
    if(this.fuel > 0){
        console.log("Start the car")
    }else {
        console.log("You need fuel to start")
    }

}

scheduleService(){
    
}

}

//This exports things you want to use from this "module", more info in readme
module.exports = {
    Vehicle
}
