import { takeLatest } from "redux-saga/effects";
import { fetchAgentListingSaga } from "../sagas/agentManagement/fetchAgentListingSaga";
import { agentManagementActionTypes } from "./constants/agentMangement/agentManagementActionTypes";
export default function* rootSaga() {
  yield takeLatest(
    agentManagementActionTypes.FETCH_AGENT_LISTING,
    fetchAgentListingSaga
  );
}
