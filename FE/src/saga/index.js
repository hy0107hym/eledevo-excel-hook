import { all } from "@redux-saga/core/effects";
import ItemSaga from "./ItemSaga";

function* rootSaga() {
  yield all([
    ...ItemSaga
  ]);
}
export default rootSaga;