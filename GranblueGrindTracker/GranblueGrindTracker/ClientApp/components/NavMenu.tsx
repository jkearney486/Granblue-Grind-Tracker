import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
                <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={ '/' }>Granblue Grind Tracker</Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        {
                            // TODO: maybe get rid of the Home or make it where the user's list/queue is?
                        }
                        <li>
                            <NavLink exact to={ '/' } activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/class-champion'} activeClassName='active'>
                                Class Champion Weapons
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/revenant'} activeClassName='active'>
                                Revenant Weapons
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/seraphic'} activeClassName='active'>
                                Seraphic Weapons
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/xeno'} activeClassName='active'>
                                Xeno Weapons
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/bahamut'} activeClassName='active'>
                                Bahamut Weapons
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/ultima'} activeClassName='active'>
                                Ultima Weapons
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}
