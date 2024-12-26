import { Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import NavigationItems from './navigation/NavigationItems';

function Inicio() {
  return (
    <div className="flex w-full h-full flex-col overflow-hidden">

      <Switch>
        
        {NavigationItems.map((Item, index) => (
          <Route
            key={index}
            path={'/inicio' + Item.route}
            component={Item.component}
          />
        ))}

        <Redirect exact from="/inicio" to={'/inicio' + NavigationItems.find((item) => item.default)?.route} />

      </Switch>

      <Navigation />
    </div>
  );
}

export default Inicio;
