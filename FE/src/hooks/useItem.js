import { useDispatch, useSelector } from "react-redux"
import { ItemAction } from "../action/ItemAction"

export const UseItem = () => {
    const dispatch = useDispatch();
    const listItem = useSelector((state) => state.items.listItem)
    const getItem = () => dispatch(ItemAction.getRequest())
    const addItem = (data) => dispatch(ItemAction.addRequest(data))
    const deleteItem = (data) => dispatch(ItemAction.addRequest(data))
    const updateItem = (data) => dispatch(ItemAction.addRequest(data))
    const importExcel = (data) => dispatch(ItemAction.importRequest(data))
    return {
        listItem,
        getItem, addItem, deleteItem, updateItem, importExcel
    }
}