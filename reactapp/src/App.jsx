import Profile from './Profile.jsx'
import List from './List.jsx'
import Counter from './Counter.jsx'
import ColorPicker from './ColorPicker.jsx'
import MyComponent from './MyComponent.jsx'
import ToDoList from './ToDo.jsx'

import Fetch from './Fetch.jsx'

function App() {
  const fruits = [{id:1,name:"apple", calories: 95},
    {id:2,name:"orange", calories: "45"},
    {id:3,name:"banana", calories: 105},
    {id:4,name:"coconut", calories: 159},
    {id:5,name:"pineapple", calories: 37},
    {id:6,name:"kiwi", calories: 61},
                
]
const vegetables = [{id:1,name:"potatoes", calories: 110},
                    {id:2,name:"celery", calories: 15},
                    {id:3,name:"carrots", calories: 25},
                    {id:4,name:"corn", calories: 63},
                    {id:5,name:"brocolli", calories: 50},
                    {id:6,name:"cabbage", calories: 45},
                                
                  ]

  return(
    <>
    
  
    {/* <Usergreeting username="Rahul" isLogged={true}/>
    <Usergreeting username="Shruti" isLogged={false}/> */}
    {/* <List items={fruits} category ="Fruits"/>
    <List items={vegetables} category ="Vegetables"/> */}
    {/* <Profile/> */}
    {/* <Counter/> */}
    {/* <ColorPicker/>
    <MyComponent/> */}
    {/* <Fetch/> */}
    <ToDoList/>
    </>
  );
} 
export default App; 
  