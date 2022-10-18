 import {configureStore}   from 'redux-toolkit' 
 import  reducer from '../Cake/CakeReducer'

 const store =configureStore(reducer);

export  {store};