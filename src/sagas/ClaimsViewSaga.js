

import { useDispatch } from 'react-redux';
import { call, put } from 'redux-saga/effects';
import callApiHelper from "../../../services/apiHelper";
import { claimViewURL, policy as policyURL } from "../../../services/constants";
import { setApiError, getClaimViewSummaryLoading, getFinancialOverViewLoading, getClaimViewEmailsLoading, getClaimViewDocumentsLoading, getSameClaimsLoading } from "../../../store/actions";
import { claimsViewConstants } from "../../../store/constants/AllClaims/claimsView/ClaimsViewConstants";
import { store } from "../../../store/store";

export function* fetchClaimSummaryViewSaga(action) {
    try {
        store.dispatch(getClaimViewSummaryLoading(true));
        const response = yield call(
            callApiHelper,
            process.env.REACT_APP_NOTIFICATION_SERVICE,
            claimViewURL.FETCH_CLAIM_VIEW_SUMMARY_URL.replace('claimId', action.payload),
            {},
            'GET',
            action.payload,
            null
        )
        if(response.status === 200) {
            store.dispatch(getClaimViewSummaryLoading(false));
            if(response.data.acknowledge === 1) {
                yield put({
                    type: claimsViewConstants.GET_CLAIM_SUMMARY_VIEW_SUCCESS,
                    payload: response.data
                })
            } else {
                yield put({
                    type: claimsViewConstants.GET_CLAIM_SUMMARY_VIEW_FAILURE,
                    payload: response.data
                })
            }
        }        
    }
    catch (e) {
        // yield put({
        //     type: claimsViewConstants.GET_CLAIM_SUMMARY_VIEW_FAILURE,
        //     payload: e
        // })
        yield put(setApiError(e))
    }
}

export function* fetchFinancialOverViewSaga(action) {
    try {
        store.dispatch(getFinancialOverViewLoading(true));
        const response = yield call(
            callApiHelper,
            process.env.REACT_APP_NOTIFICATION_SERVICE,
            claimViewURL.FETCH_FINANCIAL_OVERVIEW_URL.replace('claimId', action.payload),
            {},
            'GET',
            action.payload,
            null
        );
        if(response.status === 200) {
            store.dispatch(getFinancialOverViewLoading(false));
            if(response.data.acknowledge === 1) {
                yield put({
                    type: claimsViewConstants.GET_FINANCIAL_OVERVIEW_SUCCESS,
                    payload: response.data
                })
            } else {
                yield put({
                    type: claimsViewConstants.GET_FINANCIAL_OVERVIEW_FAILURE,
                    payload: response.data
                })
            }
        }    
    }
    catch (e) {
        // yield put({
        //     type: claimsViewConstants.GET_FINANCIAL_OVERVIEW_FAILURE,
        //     payload: e
        // })
        yield put(setApiError(e))
    }
}

export function* fetchClaimEmailsViewSaga(action) {
    try {
        store.dispatch(getClaimViewEmailsLoading(true));
        const response = yield call(
            callApiHelper,
            process.env.REACT_APP_NOTIFICATION_SERVICE,
            claimViewURL.FETCH_CLAIM_EMAILS_URL,
            {},
            'POST',
            action.payload,
            null
        );
        if(response.status === 200) {
            store.dispatch(getClaimViewEmailsLoading(false));
            if(response.data.acknowledge === 1) {
                yield put({
                    type: claimsViewConstants.GET_CLAIM_EMAILS_SUCCESS,
                    payload: response.data
                })
            } else {
                yield put({
                    type: claimsViewConstants.GET_CLAIM_EMAILS_FAILURE,
                    payload: response.data
                })
            }
        }  
    }
    catch (e) {
        // yield put({
        //     type: claimsViewConstants.GET_CLAIM_EMAILS_FAILURE,
        //     payload: e
        // })
        yield put(setApiError(e))
    }
}

export function* fetchClaimDocumentsViewSaga(action) {
    try {
        store.dispatch(getClaimViewDocumentsLoading(true));
        const response = yield call(
            callApiHelper,
            process.env.REACT_APP_NOTIFICATION_SERVICE,
            claimViewURL.FETCH_CLAIM_DOCUMENTS_URL,
            {},
            'POST',
            action.payload,
            null
        );
        if(response.status === 200) {
            store.dispatch(getClaimViewDocumentsLoading(false));
            console.log('response data', response.data)
            if(response.data.acknowledge === 1) {
                yield put({
                    type: claimsViewConstants.GET_CLAIM_DOCUMENTS_SUCCESS,
                    payload: response.data
                })
            } else {
                yield put({
                    type: claimsViewConstants.GET_CLAIM_DOCUMENTS_FAILURE,
                    payload: response.data
                })
            }
        }  
    }
    catch (e) {
        // yield put({
        //     type: claimsViewConstants.GET_CLAIM_DOCUMENTS_FAILURE,
        //     payload: e
        // })
        yield put(setApiError(e))
    }
}

export function* fetchSameClaimsViewSaga(action) {
    try {
        store.dispatch(getSameClaimsLoading(true));
        const response = yield call(
            callApiHelper,
            process.env.REACT_APP_NOTIFICATION_SERVICE,
            claimViewURL.FETCH_SAME_CLAIMS_URL.replace('claimId', action.payload),
            {},
            'GET',
            action.payload,
            null
        );
        if(response.status === 200) {
            store.dispatch(getSameClaimsLoading(false));
            if(response.data.acknowledge === 1) {
                yield put({
                    type: claimsViewConstants.GET_SAME_CLAIMS_SUCCESS,
                    payload: response.data
                })
            } else {
                yield put({
                    type: claimsViewConstants.GET_SAME_CLAIMS_FAILURE,
                    payload: response.data
                })
            }
        }
    }
    catch (e) {
        // yield put({
        //     type: claimsViewConstants.GET_SAME_CLAIMS_FAILURE,
        //     payload: e
        // })
        yield put(setApiError(e))
    }
}

export function* fetchClaimsViewPolicyExcessSaga(action) {
    try {
        const response = yield call(
            callApiHelper,
            process.env.REACT_APP_CLIENT_DATA_URL,
            policyURL.FETCHPOLICYEXCESS.replace(':claimId', action.payload),
            {},
            'GET',
            action.payload,
            null
        );
        if(response.status === 200) {
            if(response.data.acknowledge === 1) {
                yield put({
                    type: claimsViewConstants.GET_CLAIM_VIEW_PLOICY_EXCESS_SUCCESS,
                    payload: response.data
                })
                return response.data
            } else {
                store.dispatch(setApiError(response.data));
            }
        }
    }
    catch (e) {
        // yield put({
        //     type: claimsViewConstants.GET_SAME_CLAIMS_FAILURE,
        //     payload: e
        // })
        yield put(setApiError(e))
    }
}

export function* fetchClaimsViewUpdatePolicyExcessSaga(action) {
    try {
        const response = yield call(
            callApiHelper,
            process.env.REACT_APP_NOTIFICATION_SERVICE,
            claimViewURL.UPDATE_POLICYEXCESS,
            {},
            'POST',
            action.payload,
            null
        );
        if(response.status === 200) {
            if(response.data.acknowledge === 1) {
                yield put({
                    type: claimsViewConstants.UPDATE_CLAIM_POLICY_EXCESS_SUCCESS,
                    payload: response.data
                })
            } else {
                store.dispatch(setApiError(response.data));
            }
        }
    }
    catch (e) {
        yield put(setApiError(e))
    }
}



