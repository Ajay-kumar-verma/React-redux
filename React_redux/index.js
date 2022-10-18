const {createStore,combineReducers,applyMiddleware}  =require('redux');
const reduxLogger=require('redux-logger');
const {createLogger}=reduxLogger

console.log("This is redux ");

const BUY_CAKE="BUY_CAKE";
const BUY_ICECREAM="BUY_ICECREAM";
const BUY_BALL="BUY_BALL";

const logger=createLogger({
    duration : false,
    fun:()=>console.log("sddf")
});

function buyCake(){
      return {
      type:BUY_CAKE,
      info:'First redux action'
    }
}

function buyIceCream(){
    return {
    type:BUY_ICECREAM,
    info:'First redux action'
  }
}



// const initialState={
//   numOfCakes:10,
//   numOfIcecreams:20

// }


const initialIceCreamState={
     numOfIcecreams:20
  
  }
const initialCakeState={
  numOfCakes:10
   }

const initialBallState={
    numOfBall:30
}   
// const reducer=(state=initialState,action)=>{
//     switch(action.type){
//   case BUY_CAKE:
//      return {
//        ...state,
//          numOfCakes:state.numOfCakes-1
//        }

//    case BUY_ICECREAM: 
//     return {
//        ...state,
//         numOfIcecreams:state.numOfIcecreams-1
//    }    
//     default: return state;
// }

// }

const Icereducer=(state=initialIceCreamState,action)=>{
    
    console.log("icecream");
    switch(action.type){
         case BUY_ICECREAM: 
         console.log("buy icream is called ")
        return {
           ...state,
            numOfIcecreams:state.numOfIcecreams-1
       }    
        default: return {...state};
    }
    
    }
 const Cakereducer=(state=initialCakeState,action)=>{
          console.log("cake")
        switch(action.type){
          case BUY_CAKE:
            console.log("buy cake is called ")
             return {
               ...state,
                 numOfCakes:state?.numOfCakes-1
               }
       
            // default: return null;// {...state};
            default: return  {...state};
        }
        
        }
            


const Ballreducer=(state=initialBallState,action)=>{
            console.log("ball")
          switch(action.type){
            case BUY_BALL:
              console.log("buy ball is called ")
               return {
                 ...state,
                   numOfBall:state.numOfBall-1
                 }
          
              default: return  {...state};
          }
          
          }
              
  
  




  // we can combine multiple reducer in on root Object 
  // In this case when dispatch is called it executes all the reducer 
  // where switch statement matches it execute that part    
const rootReducer=combineReducers({
    ice:Icereducer,
    cake:Cakereducer,
    ball:Ballreducer
})




// const {getState ,dispatch,subscribe} =createStore(reducer)
const {getState ,dispatch,subscribe} =createStore(rootReducer,applyMiddleware(logger))

const unsubcribe=  subscribe(() => console.log("updated state :",getState()));
console.log("Initial State :",getState()); 

// dispatch(buyIceCream());
dispatch(buyCake());

unsubcribe()
// this method stop execution of subscribe 
