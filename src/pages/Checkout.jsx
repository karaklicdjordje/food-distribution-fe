import React from "react";

const Checkout = () => {
  const [selectedOffers, setSelectedOffers] = React.useState([]);
  
  React.useEffect(() => {
    setSelectedOffers(JSON.parse(window.localStorage.getItem('selectedOffers') || []));
  }, []);

  return (
    <div>
      {selectedOffers.length > 0 ? (
        selectedOffers.map((offer) => (
          <div>
            <div className="w-1/2 h-screen relative">
              <div
                className="bg-gray-400 w-full absolute rounded-lg"
                style={{ left: "50%", top: "30%" }}
              >
                <span></span>
                <span className="p-5 text-white" key={offer.id}>
                  {offer.id}
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-1/2 h-screen relative">
          <div
            className="bg-gray-400 animate-bounce w-full h-40 absolute rounded-lg"
            style={{ left: "50%", top: "30%" }}
          >
            <h1 className="text-center text-lg color-white p-5 shadow-md text-white">
              No items!
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
