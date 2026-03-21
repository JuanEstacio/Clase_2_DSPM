import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { AuthProvider, useAuthContext } from './context/AuthContext';
import { TasksProvider } from './context/TasksContext';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TasksPage from './pages/TasksPage';
import TaskFormPage from './pages/TaskFormPage';
import TaskDetailPage from './pages/TaskDetailPage';

/* CSS */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.always.css';

import './theme/variables.css';

setupIonicReact();

const AppRoutes: React.FC = () => {

  const { user, loading } = useAuthContext();

  if (loading) return <div>Cargando...</div>;

  return (
    <IonRouterOutlet>

      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />

      <Route exact path="/tasks">
        {user ? <TasksPage /> : <Redirect to="/login" />}
      </Route>

      <Route exact path="/task/new">
        {user ? <TaskFormPage /> : <Redirect to="/login" />}
      </Route>

      <Route exact path="/task/:id">
        {user ? <TaskDetailPage /> : <Redirect to="/login" />}
      </Route>

      <Route exact path="/">
        <Redirect to={user ? "/tasks" : "/login"} />
      </Route>

    </IonRouterOutlet>
  );
};

const App: React.FC = () => (
  <IonApp className='dark'>
    <IonReactRouter>

      <AuthProvider>
        <TasksProvider>
          <AppRoutes />
        </TasksProvider>
      </AuthProvider>

    </IonReactRouter>
  </IonApp>
);

export default App;