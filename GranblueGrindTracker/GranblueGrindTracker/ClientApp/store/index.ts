import { Action, Reducer, ActionCreator } from 'redux';
import * as WeaponList from './WeaponList';
import * as WeaponUpgrade from './WeaponUpgrade';

export interface NormalizedObjects<T> {
    byId: { [id: string]: T };
    allIds: string[];
}

export interface TreasureItem {
    id: string;
    name: string;
}

export interface WeaponElement {
    id: string;
    name: string;
    imgUrl: string;
    weaponSuffix: string;
}

export interface WeaponCategory {
    id: string;
    linkTo: string;
    name: string;
}

export interface Weapon {
    id: string;
    category: string; // id of the category
    name: string;
    linkTo: string;
}

// this will be each upgrade stage of the weapon
export interface WeaponStage {
    id: string;
    weapon: string; // id of the weapon for the stage
    name: string;
}

// The top-level state object
export interface ApplicationState {
    weaponList: WeaponList.WeaponListState;
    weaponUpgrade: WeaponUpgrade.WeaponUpgradeState;
}

export const initialAppState: ApplicationState = {
    weaponList: {
        weapons: {
            byId: {
                "avenger": {
                    id: "avenger",
                    name: "Avenger",
                    category: "classChampion",
                    linkTo: "avenger"
                },
                "skofnung": {
                    id: "skofnung",
                    name: "Skofnung",
                    category: "classChampion",
                    linkTo: "skofnung"
                },
                "nirvana": {
                    id: "nirvana",
                    name: "Nirvana",
                    category: "classChampion",
                    linkTo: "nirvana"
                },
                "keraunos": {
                    id: "keraunos",
                    name: "Keraunos",
                    category: "classChampion",
                    linkTo: "keraunos"
                },
                "oliver": {
                    id: "oliver",
                    name: "Oliver",
                    category: "classChampion",
                    linkTo: "oliver"
                },
                "ipetam": {
                    id: "ipetam",
                    name: "Ipetam",
                    category: "classChampion",
                    linkTo: "ipetam"
                },
                "hellionGauntlet": {
                    id: "hellionGauntlet",
                    name: "Hellion Gauntlet",
                    category: "classChampion",
                    linkTo: "hellion-gauntlet"
                },
                "rosenbogen": {
                    id: "rosenbogen",
                    name: "Rosenbogen",
                    category: "classChampion",
                    linkTo: "rosenbogen"
                },
                "langeleik": {
                    id: "langeleik",
                    name: "Langeleik",
                    category: "classChampion",
                    linkTo: "langeleik"
                },
                "romulusSpear": {
                    id: "romulusSpear",
                    name: "Romulus Spear",
                    category: "classChampion",
                    linkTo: "romulus-spear"
                },
                "faust": {
                    id: "faust",
                    name: "Faust",
                    category: "classChampion",
                    linkTo: "faust"
                },
                "murakumo": {
                    id: "murakumo",
                    name: "Murakumo",
                    category: "classChampion",
                    linkTo: "murakumo"
                },
                "muramasa": {
                    id: "muramasa",
                    name: "Muramasa",
                    category: "classChampion",
                    linkTo: "muramasa"
                },
                "aschallon": {
                    id: "aschallon",
                    name: "Aschallon",
                    category: "classChampion",
                    linkTo: "aschallon"
                },
                "nebuchad": {
                    id: "nebuchad",
                    name: "Nebuchad",
                    category: "classChampion",
                    linkTo: "nebuchad"
                },
                "kapilavastu": {
                    id: "kapilavastu",
                    name: "Kapilavastu",
                    category: "classChampion",
                    linkTo: "kapilavastu"
                },
                "misericorde": {
                    id: "misericorde",
                    name: "Misericorde",
                    category: "classChampion",
                    linkTo: "misericorde"
                }
            },
            allIds: [
                "avenger",
                "skofnung",
                "nirvana",
                "keraunos",
                "oliver",
                "ipetam",
                "hellionGauntlet",
                "rosenbogen",
                "langeleik",
                "romulusSpear",
                "faust",
                "murakumo",
                "muramasa",
                "aschallon",
                "nebuchad",
                "kapilavastu",
                "misericorde"
            ]
        },
        categories: {
            byId: {
                "classChampion": {
                    id: "classChampion",
                    linkTo: "class-champion",
                    name: "Class Champion Weapons"
                },
                "revenant": {
                    id: "revenant",
                    linkTo: "revenant",
                    name: "Revenant Weapons"
                },
                "seraphic": {
                    id: "seraphic",
                    linkTo: "seraphic",
                    name: "Seraphic Weapons"
                },
                "xeno": {
                    id: "xeno",
                    linkTo: "xeno",
                    name: "Xeno Weapons"
                },
                "bahamut": {
                    id: "bahamut",
                    linkTo: "bahamut",
                    name: "Bahamut Weapons"
                },
                "ultima": {
                    id: "ultima",
                    linkTo: "ultima",
                    name: "Ultima Weapons"
                }
            },
            allIds: ["classChampion", "revenant", "seraphic", "xeno", "bahamut", "ultima"]
        }
    },
    weaponUpgrade: {
        weapon: {
            id: "",
            category: "",
            linkTo: "",
            name: ""
        },
        elements: {
            byId: {
                "fire": {
                    id: "fire",
                    name: "Fire",
                    imgUrl: "",
                    weaponSuffix: "Incendo"
                },
                "water": {
                    id: "water",
                    name: "Water",
                    imgUrl: "",
                    weaponSuffix: "Aqua"
                },
                "earth": {
                    id: "earth",
                    name: "Earth",
                    imgUrl: "",
                    weaponSuffix: "Terra"
                },
                "wind": {
                    id: "wind",
                    name: "Wind",
                    imgUrl: "",
                    weaponSuffix: "Ventus"
                },
                "light": {
                    id: "light",
                    name: "Light",
                    imgUrl: "",
                    weaponSuffix: "Lumen"
                },
                "dark": {
                    id: "dark",
                    name: "Dark",
                    imgUrl: "",
                    weaponSuffix: "Nyx"
                }
            },
            allIds: ["fire", "water", "earth", "wind", "light", "dark"]
        },
        selectedElementId: "fire"
    }
    /*entities: {
        elements: {
            byId: {
                "fire": {
                    id: "fire",
                    name: "Fire",
                    imgUrl: ""
                },
                "water": {
                    id: "water",
                    name: "Water",
                    imgUrl: ""
                },
                "earth": {
                    id: "earth",
                    name: "Earth",
                    imgUrl: ""
                },
                "wind": {
                    id: "wind",
                    name: "Wind",
                    imgUrl: ""
                },
                "light": {
                    id: "light",
                    name: "Light",
                    imgUrl: ""
                },
                "dark": {
                    id: "dark",
                    name: "Dark",
                    imgUrl: ""
                }
            },
            allIds: ["fire", "water", "earth", "wind", "light", "dark"]
        },
        items: {
            byId: {
                "1": {
                    id: "1",
                    name: "Swordmaster Distinction"
                },
                "2": {
                    id: "2",
                    name: "Sword Stone"
                },
                "3": {
                    id: "3",
                    name: "Luteus Centrum"
                },
                "4": {
                    id: "4",
                    name: "Earth Grimoire"
                },
                "5": {
                    id: "5",
                    name: "Silver Centrum"
                },
                "6": {
                    id: "6",
                    name: "Vohu Manah Anima"
                },
                "7": {
                    id: "7",
                    name: "Blue Sky Crystal"
                }
            },
            allIds: ["1", "2", "3", "4", "5", "6", "7"]
        },
        categories: {
            byId: {
                "classChampion": {
                    id: "classChampion",
                    linkTo: "class-champion",
                    name: "Class Champion Weapons"
                },
                "revenant": {
                    id: "revenant",
                    linkTo: "revenant",
                    name: "Revenant Weapons"
                },
                "seraphic": {
                    id: "seraphic",
                    linkTo: "seraphic",
                    name: "Seraphic Weapons"
                },
                "xeno": {
                    id: "xeno",
                    linkTo: "xeno",
                    name: "Xeno Weapons"
                },
                "bahamut": {
                    id: "bahamut",
                    linkTo: "bahamut",
                    name: "Bahamut Weapons"
                },
                "ultima": {
                    id: "ultima",
                    linkTo: "ultima",
                    name: "Ultima Weapons"
                }
            },
            allIds: ["classChampion", "revenant", "seraphic", "xeno", "bahamut", "ultima"]
        },
        weapons: {
            byId: {
                "avenger": {
                    id: "avenger",
                    name: "Avenger",
                    category: "classChampion",
                    linkTo: "avenger"
                },
                "skofnung": {
                    id: "skofnung",
                    name: "Skofnung",
                    category: "classChampion",
                    linkTo: "skofnung"
                },
                "nirvana": {
                    id: "nirvana",
                    name: "Nirvana",
                    category: "classChampion",
                    linkTo: "nirvana"
                },
                "keraunos": {
                    id: "keraunos",
                    name: "Keraunos",
                    category: "classChampion",
                    linkTo: "keraunos"
                },
                "oliver": {
                    id: "oliver",
                    name: "Oliver",
                    category: "classChampion",
                    linkTo: "oliver"
                },
                "ipetam": {
                    id: "ipetam",
                    name: "Ipetam",
                    category: "classChampion",
                    linkTo: "ipetam"
                },
                "hellionGauntlet": {
                    id: "hellionGauntlet",
                    name: "Hellion Gauntlet",
                    category: "classChampion",
                    linkTo: "hellion-gauntlet"
                },
                "rosenbogen": {
                    id: "rosenbogen",
                    name: "Rosenbogen",
                    category: "classChampion",
                    linkTo: "rosenbogen"
                },
                "langeleik": {
                    id: "langeleik",
                    name: "Langeleik",
                    category: "classChampion",
                    linkTo: "langeleik"
                },
                "romulusSpear": {
                    id: "romulusSpear",
                    name: "Romulus Spear",
                    category: "classChampion",
                    linkTo: "romulus-spear"
                },
                "faust": {
                    id: "faust",
                    name: "Faust",
                    category: "classChampion",
                    linkTo: "faust"
                },
                "murakumo": {
                    id: "murakumo",
                    name: "Murakumo",
                    category: "classChampion",
                    linkTo: "murakumo"
                },
                "muramasa": {
                    id: "muramasa",
                    name: "Muramasa",
                    category: "classChampion",
                    linkTo: "muramasa"
                },
                "aschallon": {
                    id: "aschallon",
                    name: "Aschallon",
                    category: "classChampion",
                    linkTo: "aschallon"
                },
                "nebuchad": {
                    id: "nebuchad",
                    name: "Nebuchad",
                    category: "classChampion",
                    linkTo: "nebuchad"
                },
                "kapilavastu": {
                    id: "kapilavastu",
                    name: "Kapilavastu",
                    category: "classChampion",
                    linkTo: "kapilavastu"
                },
                "misericorde": {
                    id: "misericorde",
                    name: "Misericorde",
                    category: "classChampion",
                    linkTo: "misericorde"
                }
            },
            allIds: [
                "avenger",
                "skofnung",
                "nirvana",
                "keraunos",
                "oliver",
                "ipetam",
                "hellionGauntlet",
                "rosenbogen",
                "langeleik",
                "romulusSpear",
                "faust",
                "murakumo",
                "muramasa",
                "aschallon",
                "nebuchad",
                "kapilavastu",
                "misericorde"
            ]
        }
    }*/
};

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    weaponList: WeaponList.reducer,
    weaponUpgrade: WeaponUpgrade.reducer
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
