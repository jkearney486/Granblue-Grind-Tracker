import * as React from 'react';
import { Route } from 'react-router-dom';
import { TreasureItem } from '../store/WeaponStep';
import ItemTableState from '../store/ItemTable';
import ItemCard from '../components/ItemCard';
import { connect } from 'react-redux';

type ItemTableProps = ItemTableState;

class ItemTable extends React.Component<ItemTableProps, {}> {
    public render() {
        return <div>
            
        </div>;
    }
}

export default connect(

)(ItemTable) as typeof ItemTable;

