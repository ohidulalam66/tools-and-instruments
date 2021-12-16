import React from 'react';
import './Memo.css'

const Memo = props => {
    const { memo } = props;

    let totalQuantity = 0;
    let total = 0;
    for (const tool of memo) {
        if (!tool.quantity) {
            tool.quantity = 1;
        }
        totalQuantity = totalQuantity + tool.quantity;
        total = total + tool.quantity * tool.price;
    }

    const shippingCost = 15;
    const tax = (total + shippingCost) * 0.1;
    const orderTotal = (total + shippingCost + tax);



    return (
        <div className="position-fixed">
            <h4 className="text-center mt-3 mb-5 Selected-tool">Selected Cart: {totalQuantity}</h4>
            <table className="table">
                <tbody>
                    <tr>
                        <td colSpan="2">Shipping Cost</td>
                        <td>${shippingCost}</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Tax</td>
                        <td>${tax}</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Total</td>
                        <td>${total}</td>
                    </tr>
                    <tr className="fw-bold">
                        <td colSpan="2">Oder Total</td>
                        <td>${orderTotal}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Memo;

