import { agentManagementActionTypes } from "../../constants/agentMangement/agentManagementActionTypes";

export const fetchAgentListing = (data) => {
    return {
        type: agentManagementActionTypes.FETCH_AGENT_LISTING,
        payload: data
    }
}

export const fetchListingSuccess = data => {
    return {
        type: agentManagementActionTypes.FETCH_AGENT_LISTING_SUCCESS,
        payload: data
    }
}

export const fetchAgentListingFailure = error => {
    return {
        type: agentManagementActionTypes.FETCH_AGENT_LISTING_FAILURE,
        payload: error
    }
}
export const clearAgentListing = (data) => {
    return {
        type: agentManagementActionTypes.CLEAR_AGENT_LISTING,
        payload: data
    }
}

export const fetchAgentRelationshipManager = (data) => {
    return {
        type: agentManagementActionTypes.FETCH_AGENT_RELATIONSHIP_MANAGERS,
        payload: data
    }
}

export const fetchAgentRelationshipManagerSuccess = data => {
    return {
        type: agentManagementActionTypes.FETCH_AGENT_RELATIONSHIP_MANAGERS_SUCCESS,
        payload: data
    }
}

export const fetchAgentRelationshipManagerFailure = error => {
    return {
        type: agentManagementActionTypes.FETCH_AGENT_RELATIONSHIP_MANAGERS_FAILURE,
        payload: error
    }
}

export const createOrUpdateAgent = (data) => {
    return {
        type: agentManagementActionTypes.CREATE_OR_UPDATE_AGENT,
        payload: data
    }
}

export const createOrUpdateAgentSuccess = data => {
    return {
        type: agentManagementActionTypes.CREATE_OR_UPDATE_AGENT_SUCCESS,
        payload: data
    }
}

export const createOrUpdateAgentFailure = error => {
    return {
        type: agentManagementActionTypes.CREATE_OR_UPDATE_AGENT_FAILURE,
        payload: error
    }
}

export const updateAgentListingData = (data) => {
    return {
        type: agentManagementActionTypes.UPDATE_AGENT_LISTING_DATA,
        payload: data
    }
}

export const fetchAgentDetailsSuccess = (data) => {
    return {
        type: agentManagementActionTypes.FETCH_AGENT_DETAILS_SUCCESS,
        payload: data
    }
}
export const updateAgentStatus = (data) => {
    debugger
    return {
        type: agentManagementActionTypes.UPDATE_AGENT_STATUS,
        payload: data
    }
}

export const fetchAgentDetailsFailure = (data) => {
    return {
        type: agentManagementActionTypes.FETCH_AGENT_DETAILS_FAILURE,
        payload: data
    }
}

export const updateAgentStatusSuccess = (data) => {
    return {
        type: agentManagementActionTypes.UPDATE_AGENT_STATUS_SUCCESS,
        payload: data
    }
}

export const fetchAgentDetails = (data) => {
    return {
        type: agentManagementActionTypes.FETCH_AGENT_DETAILS,
        payload: data
    }
}
export const updateAgentStatusFailure = (data) => {
    return {
        type: agentManagementActionTypes.UPDATE_AGENT_STATUS_FAILURE,
        payload: data
    }
}


export const resetSaveAgent = () => {
    return {
        type: agentManagementActionTypes.RESET_SAVE_AGENT,
    }
}

export const deleteDocuments = (data) => {
    return {
        type: agentManagementActionTypes.DELETE_DOCUMENTS,
        payload: data
    }
}

export const downloadDocument = (data) => {
    return {
        type: agentManagementActionTypes.DOWNLOAD_DOCUMENT,
        payload: data
    }
}

export const uploadDocument = (data) => {
    return {
        type: agentManagementActionTypes.UPLOAD_DOCUMENT,
        payload: data
    }
}

export const uploadDocumentSuccess = (data) => {
    return {
        type: agentManagementActionTypes.UPLOAD_DOCUMENT_SUCCESS,
        payload: data
    }
}

export const uploadDocumentFailure = (data) => {
    return {
        type: agentManagementActionTypes.UPLOAD_DOCUMENT_FAILURE,
        payload: data
    }
}


export const addTagDocument = (data) => {
    return {
        type: agentManagementActionTypes.ADD_TAG_DOCUMENTS,
        payload: data
    }
}

export const addTagDocumentSuccess = (data) => {
    return {
        type: agentManagementActionTypes.ADD_TAG_DOCUMENTS_SUCCESS,
        payload: data
    }
}

export const addTagDocumentFailure = (data) => {
    return {
        type: agentManagementActionTypes.ADD_TAG_DOCUMENTS_FAILURE,
        payload: data
    }
}

export const resetAddTagStatus = () => {
    return {
        type: agentManagementActionTypes.RESET_ADD_TAG_STATUS,
    }
}


export const fetchAgentBinders = (data) => {
    return {
        type: agentManagementActionTypes.FETCH_AGENT_BINDERS,
        payload: data
    }
}

export const fetchAgentBindersSuccess = (data) => {
    return {
        type: agentManagementActionTypes.FETCH_AGENT_BINDERS_SUCCESS,
        payload: data
    }
}

export const fetchAgentBindersFailure = (data) => {
    return {
        type: agentManagementActionTypes.FETCH_AGENT_BINDERS_FAILURE,
        payload: data
    }
}


export const fetchAgentPolicy = (data) => {
    return {
        type: agentManagementActionTypes.FETCH_AGENT_POLICY,
        payload: data
    }
}

export const fetchAgentPolicySuccess = (data) => {
    return {
        type: agentManagementActionTypes.FETCH_AGENT_POLICY_SUCCESS,
        payload: data
    }
}

export const fetchAgentPolicyFailure = (data) => {
    return {
        type: agentManagementActionTypes.FETCH_AGENT_POLICY_FAILURE,
        payload: data
    }
}

export const resetUploadDocumentStatus = () => {
    return {
        type: agentManagementActionTypes.RESET_UPLOAD_DOCUMENT_STATUS,

    }
}

