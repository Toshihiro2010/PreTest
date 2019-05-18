import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation'
import Main from './screen/Main';
import Test from './screen/Test';
import Restaurant from './screen/Restaurant';


const App = createStackNavigator({
    Main: Main,
    Test: Test,
    Restaurant: Restaurant
},
    {
        headerMode: 'none',
        initialRouteName: 'Main'
    }
)

export default createAppContainer(App);;
