export default {
    namespace: 'products',
    state: {
        aaa: "1",
        bbb: 2
    },
    reducers: {
        'list'(state, { payload: id }) {
            return state.bbb;
        },
    },
};