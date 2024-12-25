import { Route, Switch } from 'react-router-dom'
import Navigation from './navigation/Navigation'
import NavigationItems from './navigation/NavigationItems'

function Home() {
  return (
    <div className='flex w-full h-full flex-col overflow-hidden'>

      <Switch>
        {NavigationItems.map((Item, index) => (
          <Route
            key={index}
            path={'/home' + Item.route}
            component={Item.component}
          />
        ))}
      </Switch>

      <Navigation />

    </div>
  )
}

export default Home
