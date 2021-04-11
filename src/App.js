import React, {Suspense} from "react";
import {HashRouter as Router, Route} from "react-router-dom";

function App() {
  const Main = React.lazy(() => import("./components/Main"))
  const Privacy = React.lazy(() => import("./components/Privacy"))
  const Terms = React.lazy(() => import("./components/Terms"))

  return (
    <Suspense fallback={<div className="loadingSpinner"></div>}>
      <div>
        <Router basename={process.env.PUBLIC_URL}>
          <Route path={'/'} exact component={Main}/>
          <Route path={'/policy'} exact component={Privacy}/>
          <Route path={'/terms'} exact component={Terms}/>
        </Router>
      </div>
    </Suspense>
  );
}

export default App;
