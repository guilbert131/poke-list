import { LIST_POKEMONS, LIST_POKEMONS_SUCCESS } from "../actions/pokemonActions";
import { call, put, takeLatest } from "redux-saga/effects";

export function* getPokemonsFetch(){
    return fetch('https://pokeapi.co/api/v2/pokemon/').then(response => response.json());
}

export function* getPokemons() {
const pokemons = yield call(getPokemonsFetch);
yield put({ type: LIST_POKEMONS_SUCCESS, pokemons });
}

export function* watchPokemon() {
  yield takeLatest(LIST_POKEMONS, getPokemons);
}