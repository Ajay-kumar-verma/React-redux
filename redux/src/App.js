
import CakeContainer from './components/CakeContainer';
import {Provider} from  'react-redux'
import {store} from './redux/store/index';
function App() {
    
return (<>
  <Provider store={store} >
   <CakeContainer />
  </Provider>
 
  </>
  );
}

export default App;
