import React, {Suspense} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  const Main = React.lazy(() => import("./components/Main"))
  const Privacy = React.lazy(() => import("./components/Privacy"))
  const Terms = React.lazy(() => import("./components/Terms"))

  return (
    <Suspense fallback={<div className="loadingSpinner"></div>}>
      <div>
        <Router>
          <Route path={process.env.PUBLIC_URL + '/'} exact component={Main}/>
          <Route path={process.env.PUBLIC_URL + '/policy'} exact component={Privacy}/>
          <Route path={process.env.PUBLIC_URL + '/terms'} exact component={Terms}/>
        </Router>
      </div>
    </Suspense>
  );
}

export default App;
