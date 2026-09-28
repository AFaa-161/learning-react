function handleClick(event){
  console.log("btn was clicked");
}
export default function Button(){
 return (
  <div>
   <button onClick={handleClick}>Click me </button>
  </div>
);
}
