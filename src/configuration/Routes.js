import Home from '../components/Home/Home';
import Music from '../components/Music/Music';
import { Route, Switch } from 'react-router-dom';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={ Home }/>
            <Route path='/music' exact component={ Music }/>
        </Switch>
    )
}

export default Routes