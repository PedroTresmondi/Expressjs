class FormatAnimals {
    execute(animals) {
        const formattedAnimals = animals.map(function (animal) {
            const result = {
                id: animal._id,
                nome: animal.nome,
                raca: animal.raca,
                idade: animal.idade,
                tipo: animal.tipo
            }
            return result;
        })
        
        return formattedAnimals;
    }
}

module.exports = FormatAnimals; 