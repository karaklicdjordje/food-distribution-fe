import React, { useContext, useState } from "react";

const OrderContext = React.createContext(null);
const UpdateOrderContext = React.createContext(null);
const ResetOrderContext = React.createContext(null);

// custom hooks
export function useOrderContext() {
  return useContext(OrderContext);
}

export function useUpdateOrderContext() {
  return useContext(UpdateOrderContext);
}

export function useResetOrderContext() {
  return useContext(ResetOrderContext);
}

const ShoppingCartContext = ({ children }) => {
  const [selectedOrders, setSelectedOrders] = useState([]);

  function handleOrders(newOrder) {
    setSelectedOrders((prevState) => {
      return [...prevState, newOrder];
    });
  }

  function resetOrders() {
    setSelectedOrders([]);
  }

  return (
    <OrderContext.Provider value={selectedOrders}>
      <UpdateOrderContext.Provider value={handleOrders}>
        <ResetOrderContext.Provider value={resetOrders}>
          {children}
        </ResetOrderContext.Provider>
      </UpdateOrderContext.Provider>
    </OrderContext.Provider>
  );
};

export default ShoppingCartContext;
