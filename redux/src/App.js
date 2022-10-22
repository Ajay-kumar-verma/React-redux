
import CakeContainer from './components/CakeContainer';
import {Provider} from  'react-redux'

import stores from './rtk/store';

function App() {

//  const {getState,subscribe} =store;
//  console.log("Store in App :",stores.getState()) ;


return (<>
  <Provider store={stores} >
   <CakeContainer />
  </Provider>
 
  </>
  );
}

export default App;
