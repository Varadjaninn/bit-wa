const Airport = require("../AirportWA/entities/Airport");
const controller = require("../AirportWA/actions/controller");


try {
    let nikolaTesla = new Airport();
    
    let belgradeParis = controller.createFlight("Belgrade - Paris", "Oct 25 2017");
    let barcelonaBelgrade = controller.createFlight("Barcelona - Belgrade", "Nov 11 2017");
    let passenger1 = controller.createPassenger("Dario", "Stamenkovic", 67, "b");
    let passenger2 = controller.createPassenger("Cersei", "Lannister", 62, "b");
    let passenger3 = controller.createPassenger("Daenerys", "Targaryen", 14);
    let passenger4 = controller.createPassenger("Nikola", "Nikolic");
    belgradeParis.addPassenger(passenger1);
    belgradeParis.addPassenger(passenger2);
    barcelonaBelgrade.addPassenger(passenger3);
    barcelonaBelgrade.addPassenger(passenger4);
    nikolaTesla.addFlight(belgradeParis);
    nikolaTesla.addFlight(barcelonaBelgrade);
    console.log(nikolaTesla);
    console.log(belgradeParis);
    console.log(passenger1);
    console.log(belgradeParis.getData())
    console.log(nikolaTesla.getData());
} catch (e) {
    console.log(`Error: ${e.message}`);
}