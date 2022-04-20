import { getProducts } from '../../api/product';
import { ERROR_FETCHING_PRODUCTS, SUCCESS_FETCHING_PRODUCT, START_FETCHING_PRODUCT,SET_PAGE,SET_CATEGORY,SET_KEYWORD,NEXT_PAGE,PREV_PAGE,TOGGLE_TAGS } from './constants';
import debounce from 'debounce-promise';

export const startFetchingProduct = () => ({
    type: START_FETCHING_PRODUCT
});

export const errorFetchingProduct = () => ({
    type: ERROR_FETCHING_PRODUCTS
});

export const successFetchingProduct = () => ({
    type: SUCCESS_FETCHING_PRODUCT
});

let debounceFetchProducts = debounce(getProducts, 1000);

export const fetchProducts = () => {
    return async (dispatch, getState) => {
        dispatch(startFetchingProduct());
        let perPage = getState().products.perPage || 8;
        let curentPage = getState().products.currentPage || 1;
        let category = getState().products.category || '';
        let tags = getState().products.tags || [];
        let keyword = getState().products.keyword || '';

        const params = {
            limit: perPage,
            skip: (curentPage * perPage) - perPage,
            category,
            tags,
            keyword
        };

        try {
            const { data, totalItems } = await debounceFetchProducts(params);
            dispatch(successFetchingProduct());
            dispatch({
                type: SUCCESS_FETCHING_PRODUCT,
                payload: {
                    data,
                    totalItems
                }
            });
        } catch (error) {
            dispatch(errorFetchingProduct());
        }
    };
};

