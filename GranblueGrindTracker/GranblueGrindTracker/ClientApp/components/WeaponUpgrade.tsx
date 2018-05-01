import * as React from 'react';
import { RouteComponentProps, Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState, Weapon } from '../store';
import * as WeaponUpgradeStore from '../store/WeaponUpgrade';

type WeaponUpgradeProps =
    WeaponUpgradeStore.WeaponUpgradeState
    & typeof WeaponUpgradeStore.actionCreators
    & RouteComponentProps<{ weaponId: string }>;

class WeaponUpgrade extends React.Component<WeaponUpgradeProps, {}> {
    public render() {
        // TODO: remove this when done with dev
        const props = this.props;
        return (
            <div>
                <div>
                    {this.props.elements.allIds.map((id) => {
                        return <button key={id} className="btn btn-element" onClick={() => this.props.selectElement(id)}>
                            {this.props.elements.byId[id].name}
                        </button>;
                    })}
                </div>
                {this.props.weapon.name}
                {' '}
                {this.props.elements.byId[this.props.selectedElementId].weaponSuffix}
            </div>
        );
    }
}

export default connect(
    (state: ApplicationState, ownProps: any) => {
        const newState: WeaponUpgradeStore.WeaponUpgradeState = {
            ...state.weaponUpgrade,
            weapon: state.weaponList.weapons.byId[ownProps.match.params.weaponId]
        };
        return newState;
    },
    WeaponUpgradeStore.actionCreators
)(WeaponUpgrade) as typeof WeaponUpgrade
