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

// search by name, address, district
const getDetails = (term) => {

    const sql = "SELECT id, name, year, address, district FROM buildings WHERE LOWER(name) LIKE $1 OR LOWER(address) LIKE $1 OR LOWER(district) LIKE $1";

    return new Promise(async (resolve, reject) => {
        client.query(sql, ['%' + term.toLowerCase() + '%'])
            .then((data) => {
                resolve(data)
            })
            .catch((error) => {
                reject(error);
            })
    });
}

// search by id
const getBuildingDetails = (id) => {

    const sql = 'SELECT id, name, year, address, district, coordinates, "numOfTowers", "numOfUnits", facilities, description, developer, "propertyManagement", images, "floorPlan", "otherFiles" FROM buildings WHERE id = $1';

    return new Promise(async (resolve, reject) => {
        client.query(sql, [id])
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
                // console.log(data)
                // resolve("Building added successfully!")
                client.query("SELECT currval(pg_get_serial_sequence('buildings','id'));").then((data) => {
                    // console.log(data.rows[0].currval)
                    resolve(data.rows[0].currval)
                }).catch((error) => {
                    console.log(error)
                    reject(error);
                })
            })
            .catch((error) => {
                console.log(error)
                reject(error);
            })
    });
}

// update building (coordinates, without images, floorPlan, otherFiles)
const updateBuilding = (id, name, year, address, district, numOfTowers, numOfUnits, facilities, description, developer, propertyManagement) => {

    const sql = 'UPDATE buildings SET name = $1, year = $2, address = $3, district = $4, "numOfTowers" = $5, "numOfUnits" = $6, facilities = $7, description = $8, developer = $9, "propertyManagement" = $10 WHERE id = $11';

    return new Promise(async (resolve, reject) => {
        client.query(sql, [name, year, address, district, numOfTowers, numOfUnits, facilities, description, developer, propertyManagement, id])
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


const getAll = () => {
    const sql = 'SELECT id, name, year, address, district FROM buildings';
    return new Promise(async (resolve, reject) => {
        client.query(sql)
            .then((data) => {
                resolve(data.rows)
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
    deleteBuilding,
    getAll,
    getBuildingDetails
}