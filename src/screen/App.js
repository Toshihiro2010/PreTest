import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation'
import Main from './Main';


const App = createStackNavigator({
    Main: Main
},
    {
        headerMode: 'none'
    }
)

export default createAppContainer(App);;
