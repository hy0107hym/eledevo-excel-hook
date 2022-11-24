import { put, takeLatest } from "@redux-saga/core/effects";
import { ItemAction } from "../action/ItemAction"
import { actions } from "../container";
import { callAPI } from "../api"

function* handleGet() {
    try {
        const res = yield callAPI.getItem(null, null, null)
        yield put(ItemAction.getSuccess({listData: res.data}))
        console.log(res.data , 'saga')
    } catch (error) {
        yield put(ItemAction.getFailure({ message: error.message }))
    }
}
function* handleImport({ data }) {
    try {
        const form = new FormData()
        for ( let i = 0; i < data.payload.file.length; i++) {
            form.append('file', data.payload.file[i])
        }
        yield callAPI.importExcel(null, null, form)
        yield put(ItemAction.importSuccess())
        yield put(ItemAction.getRequest())
    } catch (error) {
        yield put(ItemAction.importFailure(error))
    }
}
function* handleAdd({ payload }) {
    try {
        yield callAPI.addItem(null, null, payload)
        yield put(ItemAction.addSuccess())
        yield put(ItemAction.getRequest())
    } catch (error) {
        yield put(ItemAction.addFailure(error))
    }
}

function* handleDelete({ payload }) {
    try {
        yield callAPI.deleteItem({id : payload.id }, null, payload)
        yield put(ItemAction.deleteSuccess())
        yield put(ItemAction.getRequest())
    } catch (error) {
        yield put(ItemAction.addFailure(error))
    }
}

function* handleUpdate({ payload }) {
    try {
        yield callAPI.updateItem({id : payload.id }, null, payload)
        yield put(ItemAction.updateSuccess())
        yield put(ItemAction.getRequest())
    } catch (error) {
        yield put(ItemAction.addFailure(error))
    }
}

const studentSaga = [
    takeLatest(actions.types.GET_REQUEST, handleGet),
    takeLatest(actions.types.ADD_REQUEST, handleAdd),
    takeLatest(actions.types.DELETE_REQUEST, handleDelete),
    takeLatest(actions.types.UPDATE_REQUEST, handleUpdate),
    takeLatest(actions.types.IMPORT_REQUEST, handleImport),

]
export default studentSaga