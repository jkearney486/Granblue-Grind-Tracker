import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import WeaponList from './components/WeaponList';
import WeaponUpgrade from './components/WeaponUpgrade';

export const routes = <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/class-champion/:weaponId' component={WeaponUpgrade} />
    <Route exact path='/class-champion' component={WeaponList} />
</Layout>;
