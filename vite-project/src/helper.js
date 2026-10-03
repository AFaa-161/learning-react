export function genTicket(n){
    let ticket=new Array(n)
    for(let i=0;i<n;i++){
        ticket[i]=Math.floor(Math.random()*10)
    }
    return ticket;
}
export function sum(arr){
   return  arr.reduce((sum,val)=>sum+val,0);
}