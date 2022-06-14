export function findRestaurantById() {
  const restaurant = {
    id: 1,
    pib: "11111111",
    name: "picerija",
    email: "karaklicdjordje@gmail.com",
    users: [],
    address: {
      id: 1,
      city: {
        id: 1,
        name: "Novi Sad",
        zipCode: "21000",
      },
      street: "Novo selo",
      addressNumber: "15",
    },
  };

  return restaurant;
}
