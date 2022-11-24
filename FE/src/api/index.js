import { Helpers } from "../utils";
import ApiScheme from "./scheme"

export const callAPI = {
    getItem: Helpers.createApi(ApiScheme.ITEM.GET_ITEM),
    addItem: Helpers.createApi(ApiScheme.ITEM.ADD_ITEM),
    deleteItem: Helpers.createApi(ApiScheme.ITEM.DELETE_ITEM),
    updateItem: Helpers.createApi(ApiScheme.ITEM.UPDATE_ITEM),
    importExcel : Helpers.createApi(ApiScheme.ITEM.IMPORT_EXCEL)
}