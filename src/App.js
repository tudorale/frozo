import React, {Suspense} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  const Main = React.lazy(() => import("./components/Main"))
  return (
    <Suspense fallback={<div className="loadingSpinner"></div>}>
      <div>
        <Router>
          <Route path={process.env.PUBLIC_URL + '/'} exact component={Main}/>
        </Router>
      </div>
    </Suspense>
  );
}

export default App;
