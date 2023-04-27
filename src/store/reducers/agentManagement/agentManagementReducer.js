import { agentManagementActionTypes } from "../../constants/agentMangement/agentManagementActionTypes";

const initialState = {
    loading: false,
    data: [],
    filteredData: [],
    relationshipManagers: [],
    saveAgent: {},
    selectedAgent: {},
    updateStatus: {},
    uploadDocumentStatus: undefined,
    error: undefined,
    policy: [],
    binders: [],
    updateTagStatus: undefined
}

export const agentManagement = (state = initialState, action) => {
    switch (action.type) {
        case agentManagementActionTypes.FETCH_AGENT_LISTING:
            return {
                ...state,
                updateStatus: {},
                filteredData: [],
                error: undefined,
                loading: true,
            }
        case agentManagementActionTypes.FETCH_AGENT_LISTING_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        case agentManagementActionTypes.FETCH_AGENT_LISTING_FAILURE:
            return {
                ...state,
                loading: false,
                list: [],
                error: action.payload
            }
        case agentManagementActionTypes.CLEAR_AGENT_LISTING:
            return {
                ...state,
                data: [],
                filteredData: []
            }
        case agentManagementActionTypes.UPDATE_AGENT_LISTING_DATA:
            return {
                ...state,
                filteredData: action.payload
            }
        case agentManagementActionTypes.FETCH_AGENT_RELATIONSHIP_MANAGERS_SUCCESS:
            return {
                ...state,
                relationshipManagers: action.payload,
            }
        case agentManagementActionTypes.FETCH_AGENT_RELATIONSHIP_MANAGERS_FAILURE:
            return {
                ...state,
                loading: false,
                relationshipManagers: [],
                error: action.payload
            }
        case agentManagementActionTypes.CREATE_OR_UPDATE_AGENT_SUCCESS:
            return {
                ...state,
                saveAgent: action.payload
            }
        case agentManagementActionTypes.CREATE_OR_UPDATE_AGENT_SUCCESS:
            return {
                ...state,
                saveAgent: action.payload
            }
        case agentManagementActionTypes.CREATE_OR_UPDATE_AGENT_FAILURE:
            return {
                ...state,
                saveAgent: action.payload
            }
        case agentManagementActionTypes.RESET_SAVE_AGENT:
            return {
                ...state,
                saveAgent: {}
            }
        case agentManagementActionTypes.FETCH_AGENT_DETAILS_SUCCESS:
            return {
                ...state,
                selectedAgent: action.payload
            }
        case agentManagementActionTypes.FETCH_AGENT_DETAILS_FAILURE:
            return {
                ...state,
                selectedAgent: {}
            }
        case agentManagementActionTypes.UPDATE_AGENT_STATUS_SUCCESS:
            debugger
            return {
                ...state,
                updateStatus: action.payload
            }
        case agentManagementActionTypes.UPLOAD_DOCUMENT:
            return {
                ...state,
                uploadDocumentStatus: 'uploading',
            }
        case agentManagementActionTypes.UPLOAD_DOCUMENT_SUCCESS:
            return {
                ...state,
                uploadDocumentStatus: 'Success',
            }
        case agentManagementActionTypes.UPLOAD_DOCUMENT_FAILURE:
            return {
                ...state,
                uploadDocumentStatus: 'Failed',
            }
        case agentManagementActionTypes.RESET_UPLOAD_DOCUMENT_STATUS:
            return {
                ...state,
                uploadDocumentStatus: '',
            }
        case agentManagementActionTypes.ADD_TAG_DOCUMENTS_SUCCESS:
            return {
                ...state,
                updateTagStatus: action.payload,
            }
        case agentManagementActionTypes.ADD_TAG_DOCUMENTS_FAILURE:
            return {
                ...state,
                updateTagStatus: action.payload,
            }
        case agentManagementActionTypes.RESET_ADD_TAG_STATUS:
            return {
                ...state,
                updateTagStatus: undefined,
            }
        case agentManagementActionTypes.FETCH_AGENT_BINDERS_SUCCESS:
            return {
                ...state,
                binders: action.payload,
            }
        case agentManagementActionTypes.FETCH_AGENT_BINDERS_FAILURE:
            return {
                ...state,
                binders: action.payload,
            }
        case agentManagementActionTypes.FETCH_AGENT_POLICY_SUCCESS:
            return {
                ...state,
                policy: action.payload,
            }
        case agentManagementActionTypes.FETCH_AGENT_POLICY_FAILURE:
            return {
                ...state,
                policy: action.payload,
            }
        default:
            return state
    }
}
