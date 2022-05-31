import React, {useEffect} from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import RestaurantService from '../services/restaurant.service';

const Homepage = () => {
  const [restaurants, setRestaurants] = React.useState([]);

  useEffect(() => {
    RestaurantService.getAllRestaurants().then((resp) => {
      setRestaurants(resp.data);
    })
  }, []);

  return (
    <div>
      <Container>
        <h1 style={{ position: 'absolute', left: '50%', top: '10%' }}>Restaurants</h1>
        <div style={{ marginTop: '10rem' }}>
          <Row style={{ display: 'flex', justifyContent: 'start', flexDirection: 'row', flexWrap: 'wrap', width: '100%', gap: '1em' }}>
            {restaurants.map((r) => (
              <div style={{  display: 'flex', flexDirection: 'column', width: '30%', padding: '5px', border: '1px solid #BFBFBF', borderRadius: '10px', boxShadow: '10px 10px 5px #aaaaaa' }} key={r.id}>
                <span>Name: {r.name}</span>
                <span>pib: {r.pib}</span>
                <span>email: {r.email}</span>
                <span>Address: {r?.address?.city.name}, Street: {r?.address?.street} {r?.address?.city?.zipCode}</span>
                <button>Subscribe</button>
              </div>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Homepage