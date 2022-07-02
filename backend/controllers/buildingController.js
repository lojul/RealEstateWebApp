// database connection
require('dotenv').config();

const { Client } = require('pg');
const client = new Client({
    user: `${process.env.USER}`,
    host: `${process.env.HOST}`,
    database: `${process.env.DATABASE}`,
    password: `${process.env.PASSWORD}`,
    port: `${process.env.PORT}`,
})

client.connect(function (err) {
    if (!err) { console.log("Connected"); } else {
        console.log(err);
        console.log('Connection  Failed');
    }
});

// get buildings
const getDetails = () => {
    const sql = 'SELECT * FROM buildings';

    return new Promise(async (resolve, reject) => {
        client.query(sql)
            .then((data) => {
                resolve(data)
            })
            .catch((error) => {
                reject(error);
            })
    });
}

// insert a new building
const addBuilding = (name, year, address, district, coordinates, numOfTowers, numOfUnits, facilities, description, developer, propertyManagement, images, floorPlan, otherFiles) => {

    const sql = 'INSERT INTO buildings (name, year, address, district, coordinates, "numOfTowers", "numOfUnits", facilities, description, developer, "propertyManagement", images, "floorPlan", "otherFiles") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)';

    return new Promise(async (resolve, reject) => {
        client.query(sql, [name, year, address, district, coordinates, numOfTowers, numOfUnits, facilities, description, developer, propertyManagement, images, floorPlan, otherFiles])
            .then((data) => {
                resolve("Building added successfully!")
            })
            .catch((error) => {
                reject(error);
            })
    });
}

// update building (without images, floorPlan, otherFiles)
const updateBuilding = (id, name, year, address, district, coordinates, numOfTowers, numOfUnits, facilities, description, developer, propertyManagement) => {

    const sql = 'UPDATE buildings SET name = $1, year = $2, address = $3, district = $4, coordinates = $5, "numOfTowers" = $6, "numOfUnits" = $7, facilities = $8, description = $9, developer = $10, "propertyManagement" = $11 WHERE id = $12';

    return new Promise(async (resolve, reject) => {
        client.query(sql, [name, year, address, district, coordinates, numOfTowers, numOfUnits, facilities, description, developer, propertyManagement, id])
            .then((data) => {
                resolve("Building updated successfully!")
            })
            .catch((error) => {
                reject(error);
            })
    });
}

// delete building entirely
const deleteBuilding = (id) => {
    const sql = 'DELETE FROM buildings WHERE id = $1';
    return new Promise(async (resolve, reject) => {
        client.query(sql, [id])
            .then((data) => {
                resolve("Building deleted successfully!")
            })
            .catch((error) => {
                reject(error);
            })
    });

}

module.exports = {
    getDetails,
    addBuilding,
    updateBuilding,
    deleteBuilding
}