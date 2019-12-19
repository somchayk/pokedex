import React from 'react';
import { Table } from 'semantic-ui-react';
import Pokemon from './Pokemon';


const List = ({ pokemons }) => (
  <>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>Level</Table.HeaderCell>
          <Table.HeaderCell>Moves</Table.HeaderCell>
          <Table.HeaderCell>Weight</Table.HeaderCell>
          <Table.HeaderCell>Height</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {
          pokemons.map( p => 
            <Pokemon
              key={p.id} 
              {...p}
            />
          )
        }
      </Table.Body>
    </Table>
  </>
)
export default List;