
import Tab from "./Tab.jsx"

function Tabs(){
  const option=["Medium","High","low"]
  const styles={display:"flex",flexWrap:"wrap",gap:"20px",marginTop:"6px",marginLeft:"15px",justifyContent:"center",alignItems:"center"}
   return( <>
    <div style={styles}>
    <Tab parts="frontend" desc=" react,html,css,js,bootstrap" level={option} price={980}/>
     <Tab parts="backend" desc="node,express,ejs" level={option} price={1050}/>
      <Tab parts="database" desc="mondoDB,mySQL" level={option} price={400}/>
      </div>
    </>)
}

export default Tabs
