
  //HANDLING CLICK EVENT
/*function printHello(){
    console.log("Hello!");
}

function printBye(){
    console.log("bye!");
}

export default function Button(){
    return (
        <div>
       <button onClick={printHello}>Click me!</button>
       <p onClick={printBye}>This paragraph is for an event demo.</p>

        </div>
    );
}*/

   //HANDLING NON CLICK EVENT
   function handleClick(event) {
    console.log("Hello!");
    console.log(event);
}

function handMouseOver() {
    console.log("bye!");
}

function handleDblClick(){
    console.log("you double clicked");
}

export default function Button(){
    return (
        <div>
       <button onClick={handleClick}>Click me!</button>
       <p onMouseOver={handMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum rerum distinctio ea, aspernatur excepturi possimus dolor. Eveniet saepe ab error, veritatis eaque molestias iusto aperiam possimus maxime expedita consequatur.</p>
       <button onDoubleClick={handleDblClick}>double click Me</button>
        </div>
    );
} 