/*
 * action types
 */

export const LIST_POKEMONS = "LIST_POKEMONS";
export const LIST_POKEMONS_SUCCESS = "LIST_POKEMONS_SUCCESS"

/*
 * action creators
 */

export function listPokemons() {
  return { type: LIST_POKEMONS};
}