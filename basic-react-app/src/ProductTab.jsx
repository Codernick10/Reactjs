// import Product from "./Product.jsx";

// function ProductTab() {
//     return (
//         <>
//           <Product/>
//           <Product/>
//           <Product/>
//         </>
//     );
// }

// export default ProductTab;

        //UNIT2 REACT PROPS
        /* import Product from "./Product.jsx";

        function ProductTab() {
            let options = ["hi-tech", "durable", "fast"];
            return (
                <>
                  <Product title="phone"  price={30000} features={options}/>
                  <Product title="laptop" price={40000}/>
                  <Product title="pen" price={1}/>
                </>
            );
        }
        
        export default ProductTab;
        */

        //RENDERING ARRAYS
        /*import Product from "./Product.jsx";

        function ProductTab() {
            let options = ["hi-tech", "durable", "fast"];
            return (
                <>
                  <Product title="phone"  price={30000} />
                  <Product title="laptop" price={40000}/>
                  <Product title="pen" price={1}/>
                </>
            );
        }
        */

        //ACTIVITY
      
        import Product  from "./Product";

      function ProductTab() {
        let styles = {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }
        return (
          <div style={styles}>
            <Product title="Logitech MX Master" idx={0} />
             <Product title="Apple Pencil (2nd Gen)" idx={1} />
              <Product title="Zebronic Zeb-tranformer" idx={2} />
               <Product title="petronics Toad 23" idx={3} />
          </div>
        );
      }

      export default ProductTab;