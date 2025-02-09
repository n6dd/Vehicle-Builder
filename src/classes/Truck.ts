// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
// TODO: Declare properties of the Truck class

class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // TODO: Create a constructor that accepts the properties of the Truck class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Truck class
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
  
  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels: Wheel[], towingCapacity: number) {
    super();

    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    if (wheels.length !== 4) {
      this.wheels = [ new Wheel(18, "Michelin"), new Wheel(18, "Michelin"), new Wheel(18, "Michelin"), new Wheel(18, "Michelin") ];
    } else {
      this.wheels = wheels;
    } 
    
    this.towingCapacity = towingCapacity;
  }
    
  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // TODO: Get the make an model of the vehicle if it exists
    const vehicleMakeAndModel = `${vehicle.make} ${vehicle.model}`;
    if (vehicle.weight <= this.towingCapacity) {
    // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
    // TODO: If it is, log that the vehicle is being towed
    // TODO: If it is not, log that the vehicle is too heavy to be towed
      console.log(`${vehicleMakeAndModel} is being towed by ${this.make} ${this.model}`);
    } else {
      console.log(`${vehicleMakeAndModel} is too heavy to be towed by ${this.make} ${this.model}`);
    }
  }

  // TODO: Override the printDetails method from the Vehicle class
  // TODO: The method should call the printDetails method of the parent class
  // TODO: The method should log the details of the Truck
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
   override printDetails(): void {
    super.printDetails();
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed}`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity} kg`);

    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch ${this.wheels[0].getTireBrand}`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch ${this.wheels[1].getTireBrand}`
    );
    console.log(
      `Wheel 3: ${this.wheels[2].getDiameter} inch ${this.wheels[2].getTireBrand}`
    );
    console.log(
      `Wheel 4: ${this.wheels[3].getDiameter} inch ${this.wheels[3].getTireBrand}`
    );
  };
}

// Export the Truck class as the default export
export default Truck;
