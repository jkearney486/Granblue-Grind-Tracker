import { fetch, addTask } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface NormalizedObjects<T> {
    byId: { [id: number]: T };
    allIds: number[];
}

export interface WeaponStep {
    id: number;
    name: string;
    requiredLevel: string | null;
    requiredSkillLevel: string | null;
    selectedElement: number;
    items: number[];
    elements: number[];
}

export interface TreasureItem {
    id: number;
    name: string;
}

export interface WeaponElement {
    id: number;
    name: string;
}

export interface NormalizedEntities {
    weaponSteps: NormalizedObjects<WeaponStep>;
    elements: NormalizedObjects<WeaponElement>;
    items: NormalizedObjects<TreasureItem>;
}

export interface UIState {

}

export interface WeaponStepState {
    ui: UIState;
    entities: NormalizedEntities;
}


const normalizedState: NormalizedEntities = {
    weaponSteps: {
        byId: {
            1: {
                id: 1,
                name: "Aschallon Terra",
                requiredLevel: "100",
                requiredSkillLevel: null,
                selectedElement: 3,
                items: [1, 2, 3, 4, 5, 6, 7],
                elements: [1, 2, 3, 4, 5, 6]
            },
            2: {
                id: 2,
                name: "Ridill",
                requiredLevel: "150",
                requiredSkillLevel: null,
                selectedElement: 3,
                elements: [],
                items: [1,2,3,4]
            }
        },
        allIds: [1,2]
    },
    elements: {
        byId: {
            1: {
                id: 1,
                name: "Fire"
            },
            2: {
                id: 2,
                name: "Water"
            },
            3: {
                id: 3,
                name: "Earth"
            },
            4: {
                id: 4,
                name: "Wind"
            },
            5: {
                id: 5,
                name: "Light"
            },
            6: {
                id: 6,
                name: "Dark"
            }
        },
        allIds: [1,2,3,4,5,6]
    },
    items: {
        byId: {
            1: {
                id: 1,
                name: "Swordmaster Distinction"
            },
            2: {
                id: 2,
                name: "Sword Stone"
            },
            3: {
                id: 3,
                name: "Luteus Centrum"
            },
            4: {
                id: 4,
                name: "Earth Grimoire"
            },
            5: {
                id: 5,
                name: "Silver Centrum"
            },
            6: {
                id: 6,
                name: "Vohu Manah Anima"
            },
            7: {
                id: 7,
                name: "Blue Sky Crystal"
            }
        },
        allIds: [1,2,3,4,5,6,7]
    }
};

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

interface SelectElementAction {
    type: 'SELECT_WEAPON_ELEMENT';
    elementId: number;
    weaponStepId: number;
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
// probably not needed for now but will be later
type KnownAction = SelectElementAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    selectElement: (selectedElementId: number, currentWeaponStepId: number) => <SelectElementAction>{
        type: 'SELECT_WEAPON_ELEMENT',
        elementId: selectedElementId,
        weaponStepId: currentWeaponStepId
    }
};


// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const defaultState: WeaponStepState = {
    ui: {

    },
    entities: normalizedState
};

export const reducer: Reducer<WeaponStepState> = (state: WeaponStepState, incomingAction: Action) => {
    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'SELECT_WEAPON_ELEMENT':
            const newState: WeaponStepState = {
                ui: state.ui,
                entities: {
                    elements: state.entities.elements,
                    items: state.entities.items,
                    weaponSteps: {
                        allIds: state.entities.weaponSteps.allIds,
                        byId: {
                            ...state.entities.weaponSteps.byId,
                            [action.weaponStepId]: {
                                ...state.entities.weaponSteps.byId[action.weaponStepId],
                                selectedElement: action.elementId
                            }
                        }
                    }
                }
            };

            return newState;
        default:
            break;
    }

    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || defaultState;
};
