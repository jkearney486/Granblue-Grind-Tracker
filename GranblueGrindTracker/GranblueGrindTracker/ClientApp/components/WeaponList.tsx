import * as React from 'react';
import { RouteComponentProps, Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as WeaponListStore from '../store/WeaponList';

type WeaponListProps =
    WeaponListStore.WeaponListState
    & typeof WeaponListStore.actionCreators
    & RouteComponentProps<{}>;

class WeaponList extends React.Component<WeaponListProps, {}> {
    public render() {
        return <div>
            {this.props.weapons.allIds.map((id) => {
                const weapon = this.props.weapons.byId[id];
                const cat = this.props.categories.byId[weapon.category];
                if (this.props.match.path.includes(cat.linkTo)) {
                    return (
                        <div key={weapon.id}>
                            <NavLink to={`${this.props.match.path}/${weapon.id}`}>
                                {weapon.name}
                            </NavLink>
                        </div>
                    );
                }
            })}
        </div>;
    }
}

export default connect(
    (state: ApplicationState, ownProps: any) => state.weaponList,
    WeaponListStore.actionCreators
)(WeaponList) as typeof WeaponList;
