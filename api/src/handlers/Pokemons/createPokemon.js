const { createPokemon } = require('../../controllers');

module.exports = async (req, res) => {
    try {
        let { name, image, hp, attack, defense, speed, weight, height, typeIds } = req.body;
        const dataPokemon = { name, image, hp, attack, defense, speed, weight, height, typeIds };//creo para el controller
        const newPokemon = await createPokemon(dataPokemon);//controller
        return res.status(200).json(newPokemon);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};