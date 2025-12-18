import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/menu')
      .then(res => setMenu(res.data));
  }, []);

  return (
    <div>
      <h2>Menu</h2>
      {menu.map(m => (
        <div key={m.id}>
          {m.name} - {m.price} บาท
        </div>
      ))}
    </div>
  );
}

export default Menu;