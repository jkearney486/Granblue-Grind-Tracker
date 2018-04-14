import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as WeaponStepStore from '../store/WeaponStep';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';

type WeaponStepTableProps =
    WeaponStepStore.WeaponStepState
    & typeof WeaponStepStore.actionCreators
    & RouteComponentProps<{}>;

class WeaponStepTable extends React.Component<WeaponStepTableProps, {}> {
    public render() {
        return <div>
            <div>
                {this.props.entities.weaponSteps.byId[1].name}
            </div>
            <div>
                {this.props.entities.weaponSteps.byId[1].items.map((itemId: number) => {
                    return <div>
                        {this.props.entities.items.byId[itemId].name}
                    </div>;
                })}
            </div>
        </div>;
    }
}

export default connect(
    (state: ApplicationState) => state.weaponStep,
    WeaponStepStore.actionCreators
)(WeaponStepTable) as typeof WeaponStepTable;


