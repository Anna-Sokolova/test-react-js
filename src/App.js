import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//routes
import routes from './routes';

//components
import AppBar from './components/AppBar/AppBar';
import Loader from './components/Loader/Loader';

//dinamick pages грузятся асинхронно!!!
const MainPage = lazy(() =>
  import('./pages/MainPage/MainPage' /* webpackChunkName: "main-page" */),
);
const StatsPage = lazy(() =>
  import('./pages/StatsPage/StatsPage' /* webpackChunkName: "stats-page" */),
);
const ChartsPage = lazy(() =>
  import(
    './pages/ChartsPage' /* webpackChunkName: "charts-page" */
  ),
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path={routes.main} component={MainPage} />
        <Route exact path={routes.stats} component={StatsPage} />
        <Route path={routes.charts} component={ChartsPage} />
        <Redirect to={routes.main} />
      </Switch>
    </Suspense>
  </>
);

export default App;
