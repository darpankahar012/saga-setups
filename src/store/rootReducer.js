import { combineReducers } from "redux";

import { agentManagement } from "./reducers/agentManagement/agentManagementReducer";

const appReducer = combineReducers({
  agentManagement: agentManagement,
});

const initialState = appReducer({}, {});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_SUCCESS") {
    state = initialState;
  }

  return appReducer(state, action);
};

export default rootReducer;
