import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation'
import Main from './screen/Main';
import Test from './screen/Test';


const App = createStackNavigator({
    Main: Main,
    Test: Test
},
    {
        headerMode: 'none',
        initialRouteName:'Test'
    }
)

export default createAppContainer(App);;
