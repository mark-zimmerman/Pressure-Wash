const { client } = require("./");

async function dropTables() {
    try {
        await client.query(`
        DROP TABLE IF EXISTS "orders";
        `);
    } catch (error) {
        console.log(error);
    }
}
console.log('init!!!!');
async function createTables() {
    try {
    await client.query(`
        CREATE TABLE orders (
            id SERIAL PRIMARY KEY,
            "firstName" VARCHAR(255) NOT NULL,
            "lastName" VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(15) NOT NULL,
            "ConcreteWashAndSeal" BOOLEAN DEFAULT false,
            "HouseWash" BOOLEAN DEFAULT false,
            "DeckWash" BOOLEAN DEFAULT false,
            "PatioWash" BOOLEAN DEFAULT false,
            "FenceWash" BOOLEAN DEFAULT false,
            "Additional Information" VARCHAR(255)
        );
    `);
    } catch (error) {
        console.log(error);
    }
}

async function buildTables() {
    try {
        client.connect();

        dropTables();
        console.log('tablesDropped');

        createTables();
        console.log('tables created');
    } catch (error) {
        console.log(error);
    }
}

buildTables() 
    .catch(console.error)