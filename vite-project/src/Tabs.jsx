
import Tab from "./Tab.jsx"

function Tabs(){
  const option=["Medium","High","low"]
   return( <>
    <Tab parts="frontend" desc=" react,html,css,js,bootstrap" level={option} price={980}/>
     <Tab parts="backend" desc="node,express,ejs" level={option} price={1050}/>
      <Tab parts="database" desc="mondoDB,mySQL" level={option} price={400}/>
    </>)
}

export default Tabs