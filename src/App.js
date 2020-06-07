import React,{Suspense} from 'react';
import { HashRouter as Router } from 'react-router-dom';
import MyRoutes from './components/MyRoute';
import routes from './router';
import loading from './components/Loadding';

function App() {
  return (
    <Router>
      <Suspense fallback={loading()}>
        {/* <Switch> */}
          <MyRoutes routes={routes}></MyRoutes>
        {/* </Switch> */}
      </Suspense>
    </Router>
  );
}

export default App;
