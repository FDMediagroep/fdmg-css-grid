import * as React from 'react';
import {RoutesConfig} from "../components/Route";
import Error from "../components/Error";
import Page from "../components/Page";
import FlexBox from '../components/head/FlexBox';
import GridFlex from '../components/head/GridFlex';
import Grid from '../components/head/Grid';

export interface RoutesConfigExtra extends RoutesConfig {
    head?: JSX.Element[];
}

export const routes: RoutesConfigExtra[] = [
    {path: '/', head: [<Grid key="grid"/>], action: (props) => <Page {...props}/>},
    {path: '/2', head: [<FlexBox key="flexBox"/>], action: (props) => <Page {...props}/>},
    {path: '/3', head: [<GridFlex key="gridFlex"/>], action: (props) => <Page {...props}/>},
    {path: '*', head: [<head key="error"/>], action: (props) => <Error {...props}/>}
];
