// Import the Ionic CSS
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';
// Import App CSS
import './App.css';
// Import App components
import { Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Authentication from './pages/auth/Authentication';
import { ThemeProvider } from './context/ThemeContext';
import Inicio from './pages/inicio/Inicio';

setupIonicReact();

const App: React.FC = () => (
  <ThemeProvider>
    <IonApp>
      <IonReactRouter>
        <div className="flex w-full h-screen overflow-hidden flex-col bg-white dark:bg-zinc-950 font-quicksand">

          <Switch>
            <Route path="/auth" component={Authentication} />
            <Route path="/inicio" component={Inicio} />
            <Route path="/" render={() => <Redirect to="/auth" />} />
          </Switch>

        </div>
      </IonReactRouter>
    </IonApp>
  </ThemeProvider>
);

export default App;
