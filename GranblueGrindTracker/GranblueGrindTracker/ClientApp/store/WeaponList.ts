import { Action, Reducer, ActionCreator } from 'redux';
import { ApplicationState, initialAppState, NormalizedObjects, Weapon, WeaponCategory } from './';

export interface WeaponListState {
    weapons: NormalizedObjects<Weapon>;
    categories: NormalizedObjects<WeaponCategory>;
}

export const actionCreators = {

};

export const reducer: Reducer<WeaponListState> = (state: WeaponListState = initialAppState.weaponList, incomingAction) => {
    return state;
};
