import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const Navbar = () => (
  <Menu>
    <Link to='/'>
      <Menu.Item>
        <Icon name='home' color='green' />
        Home
      </Menu.Item>
    </Link>
    <Link to='/about'>
      <Menu.Item>
        <Icon name='box' color='blue' />
        About
      </Menu.Item>
    </Link>
    <Link to='/Pokedex'>
      <Menu.Item>
      <img src="https://img.icons8.com/offices/30/000000/pokedex.png" />
        Pokedex
      </Menu.Item>
    </Link>
  </Menu>
)


export default Navbar