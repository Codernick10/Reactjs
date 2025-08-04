    //Structure component
/*function Product() {
    return (
        <div>
            <h3>Product Title</h3>
            <h5>Product description</h5>
        </div>
    );
}

export default Product;
*/
   
     //STYLE COMPONENT
/*import "./Product.css";     
function Product({title, price}) {
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5>{price}</h5>
        </div>
    );
}

export default Product;
*/

     //Passing array to props
  /*   import "./Product.css";     
     function Product({title, price, features}) {
        console.log(features);
         return (
             <div className="Product">
                 <h3>{title}</h3>
                 <h5>price : {price}</h5>
             </div>
         );
     }
     
     export default Product;
     */

      //RENDERING ARRAYS
    /*  import "./Product.css";     
      function Product({title, price, features}) {
          return (
              <div className="Product">
                  <h3>{title}</h3>
                  <h5>price : {price}</h5>
                  <p>{features}</p>
              </div>
          );
      }
      
      export default Product;*/

        //CONDITIONALS STATEMENT REACT

      /*  import "./Product.css";     
      function Product({title, price, features}) {
          return (
              <div className="Product">
                  <h3>{title}</h3>
                  <h5>price : {price}</h5>
                  {price > 30000 ? <p>"Discount of 5%"</p> : null}
              </div>
          );
      }
      
      export default Product;
      */

         //DYNAMIC COMPONENT STYLING
      
         import "./Product.css";  
         import Price from "./Price";  

         function Product({title, idx}) {
           let oldPrices = ["12,495", "11,900", "1,599", "599"];
           let newPrices = ["8,999", "9,199", "899", "278"];
           let description = [
            ["8,000 DPI", "5 Programmable buttons"],["intuitive surface", "designed for ipad Pro"], ["designed for iPad Pro", "intuitive surface"], ["wireless", "optical orientation"],
           ];
         
         return (
            <div className="Product">
                <h4>{title}</h4>
                 <p>{description[idx][0]}</p>
                 <p>{description[idx][1]}</p>
                 <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
            </div>
         );
                
         }
         
         export default Product;




