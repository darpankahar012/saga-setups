import { call, put } from 'redux-saga/effects';
import callApiHelper from "../../services/apiHelper";
import { adminManagement } from "../../services/constants";
import { fetchListingSuccess, fetchAgentListingFailure } from "../../store/actions/agentManagement/agentManagementActions";
// import {setApiError} from "../../store/actions";

export function* fetchAgentListingSaga(action) {
    try {
        const response = yield call(
            callApiHelper,
            process.env.REACT_APP_CLIENT_DATA_URL,
            adminManagement.FETCH_AGENT_LIST,
            {},
            'POST',
            action.payload,
            null
        );
        if(response.status === 200) {
            if(response.data) {
                yield put(fetchListingSuccess( response.data ))
            } else {
                yield put(fetchAgentListingFailure( 'Failed while fetching data' ))
            }
        }
    }
    catch (e) {
        yield put(fetchAgentListingFailure(e))
        // yield put(setApiError(e))
    }
}
