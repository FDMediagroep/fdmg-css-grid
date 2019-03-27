import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Route from "./components/Route";
import {routes} from "./routes/routes";

ReactDOM.render(
    (<Route
        route={window.location.pathname}
        routes={routes}
    />),
    document.getElementById('root')
);
