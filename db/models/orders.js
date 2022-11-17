const client = require("../client");

module.exports = {
    addOrder
}

async function addOrder(firstName, lastName, email, phone, concrete, house, deck, patio, fence, additionalInfo) {
    try {
        console.log('add ORder!!!! DB!!')
        const {
            rows: [order],
          } = await client.query(
            `
              INSERT INTO orders("firstName", "lastName", email, phone, "ConcreteWashAndSeal", "HouseWash", "DeckWash", "PatioWash", "FenceWash", "Additional Information")
              VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
              RETURNING *;
          `,
            [firstName, lastName, email, phone, concrete, house, deck, patio, fence, additionalInfo]
          );
          return order;
    } catch (error) {
        console.log(error);
    }
}