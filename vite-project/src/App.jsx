import "./App.css"
import Title from "./Title.jsx"
import Tabs from "./Tabs.jsx"
import Msg from "./Msg.jsx"
import Button from "./Button.jsx"
import  Counter from "./Counter.jsx"
import Like from "./like.jsx"
function App() {
 
  return (
   <>
   <Msg username="Afaa" textColor="olive"/>
    <Title/>
    <Like/>
    <Counter/>
    <Tabs/>
   <Button/>
   </>
  )
}

export default App
