import { LIST_POKEMONS_SUCCESS} from "../actions/pokemonActions";

export const pokemonReducer = (state = {pokemons: []}, action) => {
  switch (action.type) {
    case LIST_POKEMONS_SUCCESS:
      return {...state,  pokemons: state.pokemons};
    default: 
      return state;
  }
};

export default pokemonReducer;