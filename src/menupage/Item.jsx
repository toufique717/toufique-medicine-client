import React from 'react';

import { Helmet } from 'react-helmet-async';

const Item = () => {
    return (
        <div>
              <Helmet>
                 <title>Medicine Menu</title>
             </Helmet>
            <h1>This is menu page </h1>
        </div>
    );
};

export default Item;