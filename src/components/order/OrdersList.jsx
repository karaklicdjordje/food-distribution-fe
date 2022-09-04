import React from 'react'

const OrdersList = ({ orders }) => {
    return orders.map((order, index) => (
        <div
            key={index}
            className="flex flex-col rounded-md border-2 mb-2 p-2 bg-slate-200"
        >
            <span>Date: {order.orderDateTime.split("T")[0]}</span>
            <span
                className={`${order.orderStatus === "ORDERED"
                        ? "bg-green-400 rounded"
                        : "bg-red-400 rounded"
                    }`}
            >
                Order status: {order.orderStatus}
            </span>
            <span>Number of items: {order.orderItems.length}</span>
            <span>TOTAL: {order.totalPrice}</span>
        </div>
    ));
}

export default OrdersList