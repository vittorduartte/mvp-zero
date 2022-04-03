const ORDER_REGISTRED = (state, value) => {
    state.order = value
}
const OPEN_POPUP_ORDER = (state) => {
    state.popupOrder = !state.popupOrder
}
export default {
    ORDER_REGISTRED,
    OPEN_POPUP_ORDER
}