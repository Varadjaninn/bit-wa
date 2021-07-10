const Person = require("../entities/Person");
const Seat = require("../entities/Seat");
const Passenger = require("../entities/Passenger");
const Flight = require("../entities/Flight");


const createFlight = (relation, date) => new Flight(relation, date);

const createPassenger = (firstName, lastName, seatNumber, category) => {
    let person = new Person(firstName, lastName);
    let seat = new Seat(seatNumber, category);
    return new Passenger(person, seat);
};

module.exports = {createFlight, createPassenger}