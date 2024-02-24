import { watchPokemon } from "./pokemon";
import { all } from "redux-saga/effects";

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([watchPokemon() /*, another saga here*/]);
}