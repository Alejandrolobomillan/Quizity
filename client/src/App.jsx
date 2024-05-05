import React, { useState } from 'react';
import './App.css';
import Pista from './components/pista.jsx'; // Importa el componente Pista
import Ciudad from './components/ciudad.jsx'; // Importa el componente Ciudad

const dictionary = [
  'Barcelona',
  'Madrid',
  'París',
  'Tokio',
  'Delhi',
  'São Paulo',
  'Ciudad de México',
  'El Cairo',
  'Pekín',
  'Bombay',
  'Osaka',
  'Karachi',
  'Chongqing',
  'Estambul',
  'Buenos Aires',
  'Calcuta',
  'Moscú',
  'Lagos',
  'Lahore',
  'Kinshasa',
  'Lima',
  'Bangkok',
  'Seúl',
  'Manila',
  'Bogotá',
  'Londres',
  'Bagdad',
  'Riad',
  'Tel Aviv',
  'Berlín',
  'Valencia',
  'Sevilla',
  'Santo Domingo',
  'Santiago',
  'Toronto',
  'Chicago',
  'Sídney',
  'Dallas',
  'Boston',
  'Miami',
  'Canberra',
  'Nueva York',
  'Los Angeles',
  'Roma',
  'Edimburgo',
  'Dublín',
  'Amsterdam',
  'Helsinki',
  'Oslo',
  'Estocolmo',
  'Viena',
  'Milán',
  'Ankara'
];

const bloque1 = [
  'hour_zone',
  'extension',
  'population'
];

const bloque2 = [
  'hard_curiosity',
  'hemisphere',
  'religion'
];

const bloque3 = [
  'flora',
  'temperature',
  'currency'
];

const bloque4 = [
  'animal',
  'sea_ocean',
  'language'
];

const bloque5 = [
  'climate',
  'plate',
  'monument'
];

const bloque6 = [
  'prefix',
  'continent'
];

const bloque7 = [
  'river',
  'language'
];

const bloque8 = [
  'easy_curiosity',
  'person'
];

// Seleccionar una ciudad aleatoria al inicio del programa
const randomIndex = Math.floor(Math.random() * dictionary.length);
const ciudadInicial = dictionary[randomIndex];

async function fetchguess(guessValue, atributo) {
  const res = await fetch(`http://localhost:4000/api/getcity${atributo}/${guessValue}`);
  const dato = await res.json();
  const atribute = dato[atributo];
  return atribute;
}

async function fetchciudad(ciudadInicial, atributo) {
  const res = await fetch(`http://localhost:4000/api/getcity${atributo}/${ciudadInicial}`);
  const dato = await res.json();
  const atribute = dato[atributo];
  return atribute;
}

function App() {
  const [pistas, setPistas] = useState([]);
  const [guessValue, setGuessValue] = useState(''); // Estado para almacenar el valor del input
  const [pistasCount, setPistasCount] = useState(0); // Contador para contar el número de pistas generadas
  const [ciudadGenerated, setCiudadGenerated] = useState(false); // Estado para rastrear si se ha generado una Ciudad
  const [suggestions, setSuggestions] = useState([]); // Estado para almacenar las sugerencias de palabras
  const [ciudadAleatoria, setCiudadAleatoria] = useState(ciudadInicial);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [imagenVisible, setImagenVisible] = useState(true);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setGuessValue(value); // Actualizar el estado con el valor del input

    // Filtrar las sugerencias basadas en las palabras del diccionario que coincidan con el valor del input
    const filteredSuggestions = dictionary.filter(word =>
      word.toLowerCase().includes(value.toLowerCase())
    );

    // Actualizar las sugerencias mostradas
    setSuggestions(filteredSuggestions);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    // Manejar la selección de una sugerencia haciendo clic en ella

    setGuessValue(suggestion);
    setSuggestions([]); // Limpiar las sugerencias después de seleccionar una
    setShowSuggestions(false);

  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.SuggestionsContainer')) {
      setShowSuggestions(false);
    }
  };
  console.log(ciudadAleatoria);
  const mostrarNuevaPista = async () => {
    setImagenVisible(false);
    // FALLAR
    if (guessValue.trim() !== ciudadAleatoria && guessValue.trim() !== '') {
      // Verificar si el valor del input no está vacío
      if (pistasCount < 9 && !ciudadGenerated) {
        
        // Generar una Pista si hay menos de 8 pistas o si no se ha generado una Ciudad después de la octava pista
        const newPistaNumber = pistasCount + 1;
        let descriptionBloc = 'description';
        
        if(pistasCount === 0) {
          const randB1 = bloque1[Math.floor(Math.random() * bloque1.length)];
          if(randB1 === 'hour_zone') {
            
            const zonaHorariaGuess = await fetchguess(guessValue, 'hour_zone');
            const zonaHorariaCiudad = await fetchciudad(ciudadInicial, 'hour_zone');         
            descriptionBloc = `${guessValue} esta en la zona horaria ${zonaHorariaGuess}, la ciudad que buscas esta en ${zonaHorariaCiudad}`;
            
          } else if(randB1 === 'extension') {
            
            const extensionGuess = await fetchguess(guessValue, 'extension');
            const extensionCiudad = await fetchciudad(ciudadInicial, 'extension');
            descriptionBloc = `${guessValue} tiene ${extensionGuess} Km2 pero la ciudad que buscas tiene ${extensionCiudad} Km2`;
            
          } else if(randB1 === 'population') {

            const populationGuess = await fetchguess(guessValue, 'population');
            const populationCiudad = await fetchciudad(ciudadInicial, 'population');
            descriptionBloc = `${guessValue} tiene ${populationGuess} habitantes pero la ciudad que buscas tiene ${populationCiudad} habitantes`;
            
          }
          
        }else if(pistasCount === 1) {
          const randB2 = bloque2[Math.floor(Math.random() * bloque2.length)];
          if(randB2 === 'hard_curiosity') {

            const hardCuriosityCiudad = await fetchciudad(ciudadInicial, 'hard_curiosity');
            descriptionBloc =  `${hardCuriosityCiudad}`;
          } else if(randB2 === 'hemisphere') {

            const hemisphereCiudad = await fetchciudad(ciudadInicial, 'hemisphere');
            descriptionBloc =  `La ciudad que buscas esta en el hemisferio ${hemisphereCiudad}`;
          } else if(randB2 === 'religion') {

            const religionCiudad = await fetchciudad(ciudadInicial, 'religion');
            descriptionBloc =  `En la ciudad que buscas la religión mas practicada es el ${religionCiudad}`;
          }
          
        }else if(pistasCount === 2) {
          const randB3 = bloque3[Math.floor(Math.random() * bloque3.length)];
          if(randB3 === 'flora') {
            
            const floraCiudad = await fetchciudad(ciudadInicial, 'flora');
            descriptionBloc =  `En la ciudad que buscas una flora muy comun es ${floraCiudad}`;
          } else if(randB3 === 'temperature') {
            
            const temperatureGuess = await fetchguess(guessValue, 'temperature');
            const temperatureCiudad = await fetchciudad(ciudadInicial, 'temperature');
            descriptionBloc =  `En ${guessValue} la temperatura media es ${temperatureGuess} en la que buscas ${temperatureCiudad}`;
          } else if(randB3 === 'currency') {
            
            const currencyCiudad = await fetchguess(ciudadInicial, 'currency');
            descriptionBloc = `La moneda de la ciudad que buscas es el ${currencyCiudad}`;
          }
        }else if(pistasCount === 3) {
          const randB4 = bloque4[Math.floor(Math.random() * bloque4.length)];
          if(randB4 === 'animal') {
            
            const animalCiudad = await fetchciudad(ciudadInicial, 'animal');
            descriptionBloc = `En la ciudad que buscas un animal muy comun es ${animalCiudad}`;
          } else if(randB4 === 'sea_ocean') {
            
            const seaOceanCiudad = await fetchciudad(ciudadInicial, 'sea_ocean');
            if(seaOceanCiudad === "No tiene") {
              descriptionBloc = 'La ciudad que buscas no la baña mar ni oceano';
            } else {
              descriptionBloc = `La ciudad que buscas la baña el mar/oceano ${seaOceanCiudad}`;
            }
          } 
        }else if(pistasCount === 4) {
          const randB5 = bloque5[Math.floor(Math.random() * bloque5.length)];
          if(randB5 === 'climate') {
            
            const climateGuess = await fetchguess(guessValue, 'climate');
            const climateCiudad = await fetchciudad(ciudadInicial, 'climate');
            descriptionBloc = `El clima en ${guessValue} es ${climateGuess} en la ciudad que tu buscas es ${climateCiudad}`;
          } else if(randB5 === 'plate') {
            
            const plateCiudad = await fetchciudad(ciudadInicial, 'plate');
            descriptionBloc = `El plato mas representativo de la ciudad que buscas es ${plateCiudad}`;
          } else if(randB5 === 'monument') {

            const monumentCiudad = await fetchciudad(ciudadInicial, 'monument');
            descriptionBloc = `El monumento mas representativo de la ciudad que buscas es ${monumentCiudad}`;
          }
        }else if(pistasCount === 5) { 
          const randB6 = bloque6[Math.floor(Math.random() * bloque6.length)];
          if(randB6 === 'prefix') {
            
            const prefixCiudad = await fetchciudad(ciudadInicial, 'prefix');
            descriptionBloc = `El prefijo telefónico de la ciudad que buscas es ${prefixCiudad}`;
          } else if(randB6 === 'continent') {
            
            const continentGuess = await fetchguess(guessValue, 'continent');
            const continentCiudad = await fetchciudad(ciudadInicial, 'continent');
            descriptionBloc = `${guessValue} esta en el continente ${continentGuess}, la ciudad que buscas esta en el continente ${continentCiudad}`; 
          }
          
        }else if(pistasCount === 6) { 
          const randB7 = bloque7[Math.floor(Math.random() * bloque7.length)];
          if(randB7 === 'river') {
            
            const riverCiudad = await fetchciudad(ciudadInicial, 'river');
            if(riverCiudad === "No tiene") {
              descriptionBloc = 'La ciudad que buscas no tiene rio';
            } else {
              descriptionBloc = `Por la ciudad que buscas pasa el ${riverCiudad}`;
            }
          } else if(randB7 === 'language') {
            
            const languageCiudad = await fetchciudad(ciudadInicial, 'language');
            descriptionBloc = `La ciudad que buscas su lenguaje mas representativo es el ${languageCiudad}`;
          }
        }else if(pistasCount === 7) {
          const randB8 = bloque8[Math.floor(Math.random() * bloque8.length)];
          if(randB8 === 'easy_curiosity') {
            
            const easycuriosityCiudad = await fetchciudad(ciudadInicial, 'easy_curiosity');
            descriptionBloc = `${easycuriosityCiudad}`;
          } else if(randB8 === 'person') {
            
            const personCiudad = await fetchciudad(ciudadInicial, 'person');
            descriptionBloc = `La persona mas representativa de la ciudad que buscas es ${personCiudad}`;
          } 
        }
        
        //Pista default
        const newPista = {
          number: newPistaNumber,
          title: `TITLE`,
          description: descriptionBloc,
          type: 'pista' // Agregar propiedad 'type' para identificar Pista
        };
        setPistas([...pistas, newPista]); // Agregar el nuevo componente Pista al estado de pistas
        setPistasCount(pistasCount + 1); // Incrementar el contador de pistas generadas
        
        // Verificar si se han generado 8 pistas y no se ha generado una Ciudad
        if (pistasCount === 8 && !ciudadGenerated) {
          // Generar una Ciudad después de la octava pista si aún no se ha generado
          const newCiudad = {
            number: `${ciudadAleatoria}`,
            type: 'ciudad' // Agregar propiedad 'type' para identificar Ciudad
          };
          setPistas([...pistas, newCiudad]); // Agregar el nuevo componente Ciudad al estado de pistas
          setCiudadGenerated(true); // Marcar que se ha generado una Ciudad
        }
      }
      // ACERTAR
    } else if(!ciudadGenerated && guessValue.trim() === ciudadAleatoria){
      const newCiudad = {
        number: `${ciudadAleatoria}`,
        type: 'ciudad' // Agregar propiedad 'type' para identificar Ciudad
      };
      setPistas([...pistas, newCiudad]); // Agregar el nuevo componente Ciudad al estado de pistas
      setCiudadGenerated(true); // Marcar que se ha generado una Ciudad

    }
    setGuessValue(''); // Limpiar el valor del input después de agregar la pista o ciudad
  };

  document.addEventListener('click', handleClickOutside);

  return (
    <div className="App">
      <h1>
        Quizity
        {imagenVisible && (
          <img src='/src/assets/LogoQuizity.png' alt='Imagen' className='rotating-image' />
        )}
      </h1>
      <input
        type='text'
        placeholder='Guess...'
        className='GuessInput'
        value={guessValue}
        onChange={handleInputChange}
      />
      <button className='SubmitButton' onClick={mostrarNuevaPista}>Guess</button>

      { showSuggestions && (
        <div className="SuggestionsContainer fadeInFromTop">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="Suggestion"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}

      {pistas.slice(0).reverse().map((pista) => (
        pista.type === 'ciudad' ? (
          <Ciudad
            key={pista.number}
            number={pista.number}
            title={pista.title}
            description={pista.description}
          />
        ) : (
          <Pista
            key={pista.number}
            number={pista.number}
            title={pista.title}
            description={pista.description}
          />
        )
      ))}
    </div>
  );
}

export default App;
