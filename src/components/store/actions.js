const orderRegistred = ({ commit }, value) => {
    commit("ORDER_REGISTRED", value)
}

const openPopupOrder = ({ commit }) => {
    commit("OPEN_POPUP_ORDER")
}

export default {
    orderRegistred,
    openPopupOrder
}