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
            {this.renderSelectedItem()}
            {this.renderElementButtons()}
            {this.renderItems()}
        </div>;
    }

    private renderElementButtons() {
        return <div>
            {this.props.entities.weaponSteps.byId[1].elements.map((elementId: number) =>
                <div className="weapon-element" key={elementId}>
                    <button onClick={() => { this.props.selectElement(elementId, 1); }}>
                        {this.props.entities.elements.byId[elementId].name}
                    </button>
                </div>
            )}
        </div>;
    }

    private renderItems() {
        return <div>
            {this.props.entities.weaponSteps.byId[1].items.map((itemId: number) => {
                return <div key={itemId}>
                    {this.props.entities.items.byId[itemId].name}
                </div>;
            })}
        </div>;
    }

    private renderSelectedItem() {
        return <div>
            Selected: <strong>{
                this.props
                    .entities
                    .elements
                    .byId[this.props
                        .entities
                        .weaponSteps
                        .byId[1].selectedElement].name
            }</strong>
        </div>;
    }
}

export default connect(
    (state: ApplicationState) => state.weaponStep,
    WeaponStepStore.actionCreators
)(WeaponStepTable) as typeof WeaponStepTable;
