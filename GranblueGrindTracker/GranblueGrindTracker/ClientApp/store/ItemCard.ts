import { Action, Reducer } from 'redux';
import { TreasureItem } from './WeaponStep';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface ItemCardState {
    item: TreasureItem;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

// NO ACTIONS

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).

// No actions so no need for this type

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

// No action creators because no actions

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const reducer: Reducer<ItemCardState> = (state: ItemCardState, action: any) => {
    // no state change is ever initiated by this component so nothing needed
    return state;
};

