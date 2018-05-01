import { Action, Reducer, ActionCreator } from 'redux';
import { ApplicationState, initialAppState, Weapon, WeaponCategory, NormalizedObjects, WeaponElement } from './';

export interface WeaponUpgradeState {
    weapon: Weapon;
    elements: NormalizedObjects<WeaponElement>;
    selectedElementId: string;
}

interface SelectElementAction {
    type: 'SELECT_WEAPON_ELEMENT';
    elementId: string;
}

type KnownAction = SelectElementAction;

export const actionCreators = {
    selectElement: (selectedElementId: string) => <SelectElementAction>{
        type: 'SELECT_WEAPON_ELEMENT',
        elementId: selectedElementId
    }
};

export const reducer: Reducer<WeaponUpgradeState> = (state: WeaponUpgradeState = initialAppState.weaponUpgrade, incomingAction: Action) => {
    const action = incomingAction as KnownAction;

    switch (action.type) {
        case 'SELECT_WEAPON_ELEMENT':
            const newState: WeaponUpgradeState = {
                ...state,
                selectedElementId: action.elementId
            };

            return newState;
        default:
            break;
    }

    return state;
};
