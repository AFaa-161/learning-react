
import "./Tab.css"

function Tab({parts,desc,level,price}){
    const styles={color:price>400 ? "red":null}
    return (
    <div className="Tab">
        <h3>{parts}</h3>
        <p>{desc}</p><br />
        <h4>{level.map(option=>{return <li>{option}</li>})}</h4>
        <p>Rs.{price}</p>
        {price>400 ? <p style={styles}>Discount available of 10%</p>:null}
    </div>)
}
export default Tab 