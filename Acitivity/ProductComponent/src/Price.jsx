export default function Price({oldPrice, newPrice}){
    let oldStyle = {
        textDecoration : "line-through"
    }
    return(
        <div>
            <span style={oldStyle}>{oldPrice}</span>
            &nbsp;  &nbsp;  &nbsp;
            <span>{newPrice}</span>
        </div>
    )
}