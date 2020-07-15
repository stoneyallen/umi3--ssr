import React from 'react';
import { connect } from 'dva';

const Products = ({ dispatch, products }) => {
    return (
        <div>
            <h2>List of Products</h2>
            <div>{products.aaa}</div>
            <div>{products.bbb}</div>
        </div>
    );
};

// export default Products;
export default connect(({ products }) => ({
    products,
}))(Products);
// export default function Product(){
//     return 666
// }