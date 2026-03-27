import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { AuthProvider, useAuthContext } from './context/AuthContext';
import Home from './pages/Home';

//Pages
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import TasksPage from './pages/TasksPage';
import FruitsPage from './pages/FruitsPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';
import '@ionic/react/css/palettes/dark.always.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

/* 🔐 RUTAS PROTEGIDAS */
const AppRoutes: React.FC = () => {

  const { user, loading } = useAuthContext();

  if (loading) return <div style={{padding:20}}>Cargando...</div>;

  return (
    <IonRouterOutlet>

      {/* Públicas */}
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />

      {/* Protegidas */}
      <Route exact path="/home">
        {user ? <HomePage /> : <Redirect to="/login" />}
      </Route>

      <Route exact path="/contacts">
        {user ? <ContactsPage /> : <Redirect to="/login" />}
      </Route>

      <Route exact path="/tasks">
        {user ? <TasksPage /> : <Redirect to="/login" />}
      </Route>

      <Route exact path="/fruits">
        {user ? <FruitsPage /> : <Redirect to="/login" />}
      </Route>

      {/* Redirect principal */}
      <Route exact path="/">
        <Redirect to={user ? "/home" : "/login"} />
      </Route>

    </IonRouterOutlet>
  );
};

/* 🚀 APP PRINCIPAL */
const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>

      <AuthProvider>
        <AppRoutes />
      </AuthProvider>

    </IonReactRouter>
  </IonApp>
);

export default App;
