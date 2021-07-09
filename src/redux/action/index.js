import fakestoreapi from "../../apis/fakestoreapi";

export function setProduct(product) {
    return {
        type: "SET_PRODUCT",
        payload: product
    };
}

export const fetchProducts = () => {
    return async function (dispatch, getState) {
    const response = await fakestoreapi.get("/products")
        dispatch({
            type: "FETCH_PRODUCTS",
            payload: response.data,
    })
}
}

export const fetchProduct = (id) => {
    return async function (dispatch, getState) {
    const response = await fakestoreapi.get(`/products/${id}`)
        dispatch({
            type: "SELECTED_PRODUCT",
            payload: response.data,
    })
}
}
export function selectedProduct(product) {
    return {
        type: "SELECTED_PRODUCT",
        payload: product
    };
}
export function removeSelectedProduct() {
    return {
        type: "REMOVE_SELECTED_PRODUCT",
    };
}


