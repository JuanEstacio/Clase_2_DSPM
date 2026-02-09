import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloWorld from './HelloWolrd';
import PrintMessage from './PrintMesage';
import Contador from './Contador';
import Arrays from './Arrays';
import Arreglos from './Arreglos';
import EjemploDependencia from './EjemploDependencia';
import EjemploMontaje from './EjemploMontaje';
import ContactsApp from './ContactosApp';
import './index.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
.render(
  <h1>
    <React.StrictMode>
        < HelloWorld  />
        < PrintMessage message = "Como te va?" />
        < PrintMessage message = "Soy un mensaje!!!" />
        <Contador></Contador>
        <Arrays></Arrays>
        <Arreglos></Arreglos>
        <EjemploDependencia></EjemploDependencia>
        <EjemploMontaje></EjemploMontaje>
        <ContactsApp></ContactsApp>
    </React.StrictMode>
  </h1>
)
