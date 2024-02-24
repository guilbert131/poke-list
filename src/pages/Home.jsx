import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import { Skeletons } from "../components/Skeletons";
import { useDispatch, useSelector } from "react-redux";
import { listPokemons } from "../store/actions/pokemonActions";
export const Home = ({ setPokemonData }) => {
  const [pokemons, setPokemons] = useState([]);
  const navigate = useNavigate();
  const pokemonRedux = useSelector(state => state.pokemon.value)
  const dispatch = useDispatch()
  
  useEffect(() => {
    // getPokemons();
    dispatch(listPokemons())
  }, []);

  // const getPokemons = () => {
  //   var endpoints = [];
  //   for (var i = 1; i < 200; i++) {
  //     endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
  //   }
  //   axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
  // };

  const pokemonFilter = (name) => {
    var filteredPokemons = [];
    if (name === "") {
      listPokemons();
    }
    for (var i in pokemonRedux) {
      if (pokemonRedux[i].data.name.includes(name)) {
        filteredPokemons.push(pokemonRedux[i]);
      }
    }

    setPokemons(filteredPokemons);
  };

  const pokemonPickHandler = (pokemonData) => {
    setPokemonData(pokemonData);
    navigate("/profile");
  };
  return (
    <div>
      <Navbar pokemonFilter={pokemonFilter} />
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          {pokemonRedux.length === 0 ? (
            <Skeletons />
          ) : (
            pokemonRedux.map((pokemon, key) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                <Box onClick={() => pokemonPickHandler(pokemon.data)}>
                  <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
                </Box>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </div>
  );
};
