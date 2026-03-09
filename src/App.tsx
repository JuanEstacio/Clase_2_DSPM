import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { useState } from "react";

import LoginPage from "./pages/LoginPage";
import ListPage from "./pages/ListPage";

/* Core CSS */
import '@ionic/react/css/core.css';

/* Basic CSS */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import '@ionic/react/css/palettes/dark.system.css';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {

  const [logged, setLogged] = useState(
    localStorage.getItem("logged") === "true"
  );

  const login = () => {
    localStorage.setItem("logged", "true");
    setLogged(true);
  };

  const logout = () => {
    localStorage.removeItem("logged");
    setLogged(false);
  };

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>

          <Route exact path="/login">
            <LoginPage onLogin={login} />
          </Route>

          <Route exact path="/list">
            {logged ? <ListPage onLogout={logout} /> : <Redirect to="/login" />}
          </Route>

          <Route exact path="/">
            <Redirect to={logged ? "/list" : "/login"} />
          </Route>

        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;