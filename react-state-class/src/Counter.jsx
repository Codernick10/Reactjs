
    //STATE In REACT
/*export default function Counter(){
let count = 0;

function incCount(){
    count += 1;
    console.log(count);
}

  return (
    <div>
        <h3>Count ={count}</h3>
        <button onClick={incCount}>Increase Count</button>
    </div>
   );
}
   */

   //USE STATE 

import { useState } from "react";
export default function Counter(){
  let [count, setCount] = useState(0);
  
 let incCount = () => {
  setCount(count +1);

 };
  
    return (
      <div>
          <h3>Count ={count}</h3>
          <button onClick={incCount}>Increase Count</button>
      </div>
     );
  }
  

