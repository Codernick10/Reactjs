     //REWRITE APP

/*import "./App.css";

function App() {
return <button>Hello</button>

  }

export default App;*/

    //OUR FIRST COMPONENT
 /* import "./App.css";
  
  function Title() {
    return <h1>I am the Title</h1>
  }

  function Description() {
    return <h3>I am the description</h3>
  }

  function App() {
    return (
      <div>
        <Title />
        <Description />
        <Title />
        <Description />

      </div>
    );
  }

  export default App;
  */

  //EXPORT AND IMPORT

 /* import "./App.css";
  import Title from "./Title.jsx";

  
    function Description() {
    return <h3>I am the description</h3>
  }

  function App() {
    return (
      <div>
        <Title />
        <Description />
        <Title />
        <Description />

      </div>
    );
  }

  export default App;
  */

    //WRINTING MARKUP IN JSX

 /*   import "./App.css";
    import Title from "./Title.jsx";
    
     function App() {
      return (
        <div>
          <Title />
          <Title />
          </div>
      );
    }

    export default App;
    */

     //STRUCTURE COMPONENTS;

   /* import "./App.css";
    import Title from "./Title.jsx";
    import ProductTab from "./ProductTab.jsx";
    import Button from "./Button.jsx";
        function App() {

      return <ProductTab />;
    }
    export default App;
    */

      //Activity

 //   import "./App.css";
   // import Title from "./Title.jsx";
   // import ProductTab from "./ProductTab.jsx";
    //import Button from "./Button.jsx";
  //  import Form from "./Form.jsx";
   // import MsgBox from "./MsgBox.jsx";

  /*  function App() {
      return (
        <>
           <h2>Blockbuster Deals | Shop Now</h2>
           <ProductTab/>
          
        </>
      );
    }

    export default App;
    */
       
      //Button.jsx
 /*   import Button from "./Button.jsx";
     
    function App() {
      return (
        <>
        <Button/>
        </>
      )
    }

    export default App;
*/
    //Form
 /* import Form from "./Form.jsx";
  function App() {
      return (
        <>
        <Form/>
        </>
      )
    }

    export default App;
    */

     //LIKE BUTTON
    /* import "./App.css";
     import LikeButton from "./LikeButton.jsx";
    function App() {
      return (
        <>
         <p>Like HERE</p>
        <LikeButton/>
        
        </>
      );
    }

    export default App;
 */

    //LUDO GAME

/* import "./App.css";
 import LudoBoard  from "./LudoBoard";

 function App() {
  return (
    <>
    <LudoBoard/>
    </>
  );
 }

 
    export default App;
    */

/*
     import "./App.css";
import TodoList from "./TodoList";
 import LudoBoard  from "./TodoList";

 function App() {
  return (
    <>
    <h3>Welcome to TodoList</h3>
    <TodoList/>
    </>
  );
 }

 
    export default App;
    */

    //TICKET NUMBERS

     import "./App.css";
    //import Ticket from "./Ticket";
    //import TicketNum  from "./TicketNum";
    import Lottery from "./Lottery";

 function App() {
  return (
    <>
      <h3>Welcome to Lottery !!!</h3>
    <Lottery n={3} winningSum={15}/>
    </>
  );
 }

 
    export default App;
    

    
    