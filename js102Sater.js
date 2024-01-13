class Vehicle {
    constructor(name,company, id){
        this.name = name;
        this.company = company;
        this.id = `${this.constructor.name}${id}`;
    }
}

class Car extends Vehicle {
    constructor(name, company ,id, carType, color, model ){
        super(name,company,id);
        this.carType = carType;
        this.color = color;
        this.model = model; 
    }
}

class Plane extends Vehicle{
    constructor(name, company ,id, planeType, model ){
        super(name,company,id);
        this.planeType = planeType;
        this.model = model; 
    }
}

class Employee {
    constructor(name, dateOfBirth, id){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.id = id;
    }
}

class Driver extends Employee{
    constructor(name, dateOfBirth, id, licenseID){
        super(name, dateOfBirth, id);
        this.licenseID = `driver${licenseID}`;
    }
}

class Pilot extends Employee{
    constructor(name, dateOfBirth, id, licenseID){
        super(name, dateOfBirth, id);
        this.licenseID = `pilot${licenseID}`;
    }
}

class Reserved{
    static count =0;
    constructor(reservationDate, employeeId , vehiclesId){
        this.reservationDate = reservationDate;
        this.employeeId = employeeId;
        this.vehiclesId = vehiclesId;
        Reserved.reservationCount()
        this.reservationId =  Reserved.count
    }
    static reservationCount() {
        Reserved.count++;
    }
}

const car1 = new Car('Camry', 'Huenday', '2345', 'Gaz', 'black', 'vhy6786');
const car2 = new Car('Jeep', 'BMW', '5679', 'Electric', 'white', 'nd989');
const car3 = new Car('Mazda', 'Mazda', '9876', 'Gaz', 'bage', 'shd999');

const plane1 = new Plane('plane1', 'company 1','5678', 'vhg879', '67');
const plane2 = new Plane('plane2', 'company 2','5678', 'vhg879', '57');

let reservationArray = [];


function pilotReserved(vehiclesId, employeeId){
    if(employeeId.startsWith('pilot') && vehiclesId.startsWith('Car')){
        console.log( 'The Employee and the Vichel are not Compatable, Pilot must assign to a Plan');
    } else if (employeeId.startsWith('pilot') && vehiclesId.startsWith('Plane')){
        console.log( 'Compatable');
        let date = new Date();
        let reservedEmplyee = new Reserved(date, employeeId, vehiclesId);
        reservationArray.push(reservedEmplyee);
    }
}

const driver1 = new Driver('Hassan', '1998/2/3','3456333');
const driver2 = new Driver('Ramy', '1991/7/23','56789');

const pilot1 = new Pilot('fahad', '1997/7/23','5678','56789');
const pilot2 = new Pilot('faisal', '1996/9/23','09876','56789');

pilotReserved(car2.id, pilot1.licenseID);
pilotReserved(plane2.id, pilot2.licenseID);
pilotReserved(plane1.id, pilot1.licenseID);
pilotReserved(plane1.id, pilot2.licenseID);

reservationArray.map(reserved => {
    console.log(reserved);
});
