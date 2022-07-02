const express = require("express");
const router = express.Router();
const controller = require("../controllers/buildingController")

// for searching
router.get("/search", async (req, res) => {
    controller
        .getDetails()
        .then((data) => {
            res.send(data.rows);
        })
        .catch((error) => {
            res.send(error)
        });
});

// for adding
router.post("/add", async (req, res) => {

    const name = req.body.name;
    const year = parseInt(req.body.year);
    const address = req.body.address;
    const district = req.body.district;
    const coordinates = req.body.coordinates;
    const numOfTowers = parseInt(req.body.numOfTowers);
    const numOfUnits = parseInt(req.body.numOfUnits);
    const facilities = (req.body.facilities).split(',');
    const description = req.body.description;
    const developer = req.body.developer;
    const propertyManagement = req.body.propertyManagement;
    const images = req.body.images;
    const floorPlan = req.body.floorPlan;
    const otherFiles = req.body.otherFiles;

    controller
        .addBuilding(name, year, address, district, coordinates, numOfTowers, numOfUnits, facilities, description, developer, propertyManagement, images, floorPlan, otherFiles)
        .then((data) => {
            res.send({ message: "Building deleted successfully!" });
        })
        .catch((error) => {
            res.send(error)
        });

})

// for updating
router.put("/update", async (req, res) => {

    const id = req.body.id;
    const name = req.body.name;
    const year = req.body.year;
    const address = req.body.address;
    const district = req.body.district;
    const coordinates = req.body.coordinates;
    const numOfTowers = req.body.numOfTowers;
    const numOfUnits = req.body.numOfUnits;
    const facilities = req.body.facilities;
    const description = req.body.description;
    const developer = req.body.developer;
    const propertyManagement = req.body.propertyManagement;
    const images = req.body.images;
    const floorPlan = req.body.floorPlan;
    const otherFiles = req.body.otherFiles;

    controller
        .updateBuilding(id, name, year, address, district, coordinates, numOfTowers, numOfUnits, facilities, description, developer, propertyManagement, images, floorPlan, otherFiles)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error)
        });

})

// for deleting
router.delete("/delete", async (req, res) => {

    const id = req.body.id;

    controller
        .deleteBuilding(id)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error)
        });

})

module.exports = router;