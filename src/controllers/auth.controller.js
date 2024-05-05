import City from '../models/city.model.js'

export const register = async (req, res) => {
    const {id, name, religion, hour_zone, continent, sea_ocean, river,
        extension, population, easy_curiosity, hard_curiosity,
    climate, language, currency, animal, person, monument, plate,
flora, temperature, hemisphere, prefix } = req.body
    try {
        const newCity = new City({
            id,
            name,
            religion,
            hour_zone,
            continent,
            sea_ocean,
            river,
            extension,
            population, 
            easy_curiosity,
            hard_curiosity,
            climate,
            language,
            currency,
            animal,
            person,
            monument,
            plate,
            flora,
            temperature,
            hemisphere,
            prefix
        });
        await newCity.save();
        res.send('registrando')
    } catch (error) {
        console.log(error);
    }
};

export const getcities = async (req, res) => {
    const cities = await City.find()
    res.json(cities)
}

export const getcitynamebyid = async (req, res) => {
    try { 
        const cityId = req.params.id;
        const city = await City.findOne({ id: cityId });
        if (!city) {
            return res.status(404).json({ message: "Ciudad no encontrada" });
        }
        res.json({ name: city.name });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el nombre de la ciudad" });
    }
}

export const getcityreligion = async (req, res) => {
    try { 
        const cityName = req.params.name;
        const city = await City.findOne({ name: cityName });
        if (!city) {
            return res.status(404).json({ message: "Ciudad no encontrada" });
        }
        res.json({ religion: city.religion });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el nombre de la ciudad" });
    }
}

export const getcityhour_zone = async (req, res) => {
    try { 
        const cityName = req.params.name;
        const city = await City.findOne({ name: cityName });
        if (!city) {
            return res.status(404).json({ message: "Ciudad no encontrada" });
        }
        res.json({ hour_zone: city.hour_zone });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el nombre de la ciudad" });
    }
}

export const getcitycontinent = async (req, res) => {
    try { 
        const cityName = req.params.name;
        const city = await City.findOne({ name: cityName });
        if (!city) {
            return res.status(404).json({ message: "Ciudad no encontrada" });
        }
        res.json({ continent: city.continent });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el nombre de la ciudad" });
    }
}

export const getcitysea_ocean = async (req, res) => {
    try { 
        const cityName = req.params.name;
        const city = await City.findOne({ name: cityName });
        if (!city) {
            return res.status(404).json({ message: "Ciudad no encontrada" });
        }
        res.json({ sea_ocean: city.sea_ocean });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el nombre de la ciudad" });
    }
}

export const getcityextension = async (req, res) => {
    try { 
        const cityName = req.params.name;
        const city = await City.findOne({ name: cityName });
        if (!city) {
            return res.status(404).json({ message: "Ciudad no encontrada" });
        }
        res.json({ extension: city.extension });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el nombre de la ciudad" });
    }
}

export const getcitypopulation = async (req, res) => {
    try { 
        const cityName = req.params.name;
        const city = await City.findOne({ name: cityName });
        if (!city) {
            return res.status(404).json({ message: "Ciudad no encontrada" });
        }
        res.json({ population: city.population});
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el nombre de la ciudad" });
    }
}

export const getcityeasy_curiosity = async (req, res) => {
    try { 
        const cityName = req.params.name;
        const city = await City.findOne({ name: cityName });
        if (!city) {
            return res.status(404).json({ message: "Ciudad no encontrada" });
        }
        res.json({ easy_curiosity: city.easy_curiosity});
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el nombre de la ciudad" });
    }
}

export const getcityhard_curiosity = async (req, res) => {
    try { 
        const cityName = req.params.name;
        const city = await City.findOne({ name: cityName });
        if (!city) {
            return res.status(404).json({ message: "Ciudad no encontrada" });
        }
        res.json({ hard_curiosity: city.hard_curiosity });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el nombre de la ciudad" });
    }
}

export const getcityclimate = async (req, res) => {
    try { 
        const cityName = req.params.name;
        const city = await City.findOne({ name: cityName });
        if (!city) {
            return res.status(404).json({ message: "Ciudad no encontrada" });
        }
        res.json({ climate: city.climate });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el nombre de la ciudad" });
    }
}

export const getcitylanguage = async (req, res) => {
    try { 
        const cityName = req.params.name;
        const city = await City.findOne({ name: cityName });
        if (!city) {
            return res.status(404).json({ message: "Ciudad no encontrada" });
        }
        res.json({ language: city.language });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el nombre de la ciudad" });
    }
}

export const getcitycurrency = async (req, res) => {
    try { 
        const cityName = req.params.name;
        const city = await City.findOne({ name: cityName });
        if (!city) {
            return res.status(404).json({ message: "Ciudad no encontrada" });
        }
        res.json({ currency: city.currency });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el nombre de la ciudad" });
    }
}

export const getcityanimal = async (req, res) => {
    try { 
        const cityName = req.params.name;
        const city = await City.findOne({ name: cityName });
        if (!city) {
            return res.status(404).json({ message: "Ciudad no encontrada" });
        }
        res.json({ animal: city.animal });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el nombre de la ciudad" });
    }
}

export const getcityperson = async (req, res) => {
    try { 
        const cityName = req.params.name;
        const city = await City.findOne({ name: cityName });
        if (!city) {
            return res.status(404).json({ message: "Ciudad no encontrada" });
        }
        res.json({ person: city.person });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el nombre de la ciudad" });
    }
}

export const getcitymonument = async (req, res) => {
    try { 
        const cityName = req.params.name;
        const city = await City.findOne({ name: cityName });
        if (!city) {
            return res.status(404).json({ message: "Ciudad no encontrada" });
        }
        res.json({ monument: city.monument });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el nombre de la ciudad" });
    }
}

export const getcityplate = async (req, res) => {
    try { 
        const cityName = req.params.name;
        const city = await City.findOne({ name: cityName });
        if (!city) {
            return res.status(404).json({ message: "Ciudad no encontrada" });
        }
        res.json({ plate: city.plate });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el nombre de la ciudad" });
    }
}

export const getcityflora = async (req, res) => {
    try { 
        const cityName = req.params.name;
        const city = await City.findOne({ name: cityName });
        if (!city) {
            return res.status(404).json({ message: "Ciudad no encontrada" });
        }
        res.json({ flora: city.flora });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el nombre de la ciudad" });
    }
}

export const getcityseatemperature = async (req, res) => {
    try { 
        const cityName = req.params.name;
        const city = await City.findOne({ name: cityName });
        if (!city) {
            return res.status(404).json({ message: "Ciudad no encontrada" });
        }
        res.json({ temperature: city.temperature });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el nombre de la ciudad" });
    }
}

export const getcityhemisphere = async (req, res) => {
    try { 
        const cityName = req.params.name;
        const city = await City.findOne({ name: cityName });
        if (!city) {
            return res.status(404).json({ message: "Ciudad no encontrada" });
        }
        res.json({ hemisphere: city.hemisphere });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el nombre de la ciudad" });
    }
}

export const getcityprefix = async (req, res) => {
    try { 
        const cityName = req.params.name;
        const city = await City.findOne({ name: cityName });
        if (!city) {
            return res.status(404).json({ message: "Ciudad no encontrada" });
        }
        res.json({ prefix: city.prefix });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el nombre de la ciudad" });
    }
}