import * as React from 'react';
import { connect } from 'react-redux';
import { TreasureItem } from '../store/WeaponStep';

type ItemCardProps = TreasureItem;

class ItemCard extends React.Component<ItemCardProps, {}> {
    public render() {
        return <div>
            {this.props.name}
        </div>;
    }
}

export default connect(

)(ItemCard) as typeof ItemCard;
