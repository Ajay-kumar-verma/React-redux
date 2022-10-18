const { BUY_CAKE } = require("./Caketypes")

const initialCakeState={
    numOfcakes:10
}

const Cakereducer=(state=initialCakeState,action)=>{

         switch(action.type){
            case BUY_CAKE :return {
                ...state,numOfcakes:state.numOfcakes-1
            }

           default : return {...state} 
         }
 
}


export default Cakereducer;