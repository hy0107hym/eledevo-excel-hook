import { createAction } from "@reduxjs/toolkit";
import { actions } from "../container";

export const ItemAction = {
    getRequest: createAction(actions.types.GET_REQUEST),
    getSuccess: createAction(actions.types.GET_SUCCESS),
    getFailure: createAction(actions.types.GET_FAILURE),

    addRequest: createAction(actions.types.ADD_REQUEST),
    addSuccess: createAction(actions.types.ADD_SUCCESS),
    addFailure: createAction(actions.types.ADD_FAILURE),

    deleteRequest: createAction(actions.types.DELETE_REQUEST),
    deleteSuccess: createAction(actions.types.DELETE_SUCCESS),
    deleteFailure: createAction(actions.types.DELETE_FAILURE),

    updateRequest: createAction(actions.types.UPDATE_REQUEST),
    updateSuccess: createAction(actions.types.UPDATE_SUCCESS),
    updateFailure: createAction(actions.types.UPDATE_FAILURE),

    importRequest: createAction(actions.types.IMPORT_REQUEST),
    importSuccess: createAction(actions.types.IMPORT_SUCCESS),
    importFailure: createAction(actions.types.IMPORT_FAILURE),
}