import React from 'react'
import Menu from '../components/restaurant/Menu';

const Restaurant = () => {
    const title = 'Naslov menija';

    return (
        <div>
            <Menu title={title} />
        </div>
    )
}

export default Restaurant