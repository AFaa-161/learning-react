import "./App.css"
import Title from "./Title.jsx"
import Tabs from "./Tabs.jsx"
import Msg from "./Msg.jsx"
import Button from "./Button.jsx"
import  Counter from "./Counter.jsx"
import Like from "./like.jsx"
import Ludo from "./Ludo.jsx"
import Lottery from "./Lottery.jsx"
import Ticket from "./Ticket.jsx"
function App() {
 
  return(
    <Lottery n={3} winningSum={15}/>
  )
}
export default App
