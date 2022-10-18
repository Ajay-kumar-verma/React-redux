# React-redux 
> https://javascript.plainenglish.io/redux-logger-your-next-debugging-tool-the-art-of-logging-e1999cbbd146

> https://www.freecodecamp.org/news/what-is-redux-store-actions-reducers-explained/

**Store**
- A Store hold the data of your application .

**Action**
- An Action that describes the changes in the state of the application . 

**Reducer**
- A reducer which actually cariies out the state transition depending on the action . 


# principles 

**first principle**
- the state of your whole application store in an object tree within a single store .
- this store is managed by redux store 
- Store { key ,value, ... } , Store in Container 

**Second principle**
- The only way to change the state is to emit an Action (dispatch) . an Object what happened .
- dispatch({action , data }) , pass to a reducer to perform an action and store in store 

**Third principles**
- To specify how the state tree is transformed by action , you write your pure reducer
- reducer is a function that get an object an perform an action or change the store  state accordingly
- Reducer - (previousState,action  ) => newState




> **Store** <br/>
 store the data , allow to access the data via getState() ,allow to update the data via dispatch


>  **Reducer** <br/>
 Specify how the app's state changes in responce to action sent to the store  


>  **subscribe** <br/>
 Register listener via subcribe(listener)  


**Flow**
- javascript app = >dispatch ,Action => reducer => store = > javascript app
  

**Middle Ware**
- It allow to add custom functionality 




