test.js
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/buses' component={Buses}/>
      <Route path='/schedules' component={Schedules}/>
    </Switch>
  </main>
)