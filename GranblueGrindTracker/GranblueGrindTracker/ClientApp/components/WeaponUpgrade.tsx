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
        let name = `${this.props.weapon.name} ${this.props.elements.byId[this.props.selectedElementId].weaponSuffix}`;
        if (this.props.weapon.fiveStarName) {
            name = this.props.weapon.fiveStarName;
        }
        return <div className="weapon-upgrade">
            <div className="element-picker">
                {this.props.elements.allIds.map((id) => {
                    return <button key={id} className={`btn btn-element ${id === this.props.selectedElementId ? "active" : ""}`} onClick={() => this.props.selectElement(id)}>
                        {this.props.elements.byId[id].name}
                    </button>;
                })}
            </div>
            <div className="weapon">
                {name}
            </div>
            <div>
                <button className="btn btn-add btn-primary">
                    Add
                </button>
            </div>
        </div>;
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
