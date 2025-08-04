export default function Price({oldPrice, newPrice}) 
{
let oldStyles = {
    textDecorationLine: "line-through",
};
let newStyles = {

    fontWeight: "bold",
};
let styles = {
    backgroundColor : "#e6b30dff",
    height: "30px",
    weidth:"200px",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
};

    return (
        <div style={styles}>
           <span style={oldStyles}>{oldPrice}</span>

           &nbsp;
             &nbsp;

           <span style={newStyles}>{newPrice}</span>
        </div>
    );
}