import React from 'react';
import Button from "@material-ui/core/Button";




export default function Orders() {

return (
  <div>
  <h1>Personalise Your Box</h1>
  <h3 className="price">€19.99</h3>
  <ul>
                <li>Eggs</li>
                <li>oil</li>
                <li>Flour</li>
                <li>Black Pepper</li>
                <li>Salt</li>
                <li>Butter</li>
                <li>Baked Beans</li>
            </ul>
    <Button variant="contained" color="secondary">
        Order
    </Button>

    </div>
    );
  }


