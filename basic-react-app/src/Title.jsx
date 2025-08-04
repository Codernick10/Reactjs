/*function Title() {
    return <h1>I am the Title</h1>;
  }

  export default Title;
  */

  //WRITING MARKUP IN JSX
 /* function Title() {
    return (
      <div>
        <h1>I am the Title!</h1>
        <h3>I am the Description</h3>
      </div>
    );
  }

  export default Title;
  */

    //JSX WITH CURLY BRACES
    function Title() {
      let name = "Nitesh";
      return (
        <div>
          <p>2*2 = {2* 2}</p>
          <p>Hi, {name.toUpperCase()}</p>
        </div>
      );
    }

    export default Title;