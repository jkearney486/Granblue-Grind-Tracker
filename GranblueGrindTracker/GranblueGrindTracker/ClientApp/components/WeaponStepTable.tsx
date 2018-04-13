import * as React from 'react';
import { Route } from 'react-router-dom';
import { WeaponStepState } from '../store/WeaponStep';
import ItemTable from './ItemTable';
import { connect } from 'react-redux';

type WeaponStepTableProps = WeaponStepState;

class WeaponStepTable extends React.Component<WeaponStepTableProps, {}> {
    public render() {
        return <div>
            <div>
                {this.props.name}
            </div>
            <div>
                
            </div>
        </div>;
    }
}

export default connect(

)(WeaponStepTable) as typeof WeaponStepTable;


