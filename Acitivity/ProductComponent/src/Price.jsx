export default function Price({oldPrice, newPrice}){
    let oldStyle = {
        textDecoration : "line-through"
    }

    let newStyle = {
        fontWeight : "bold"
    }
    return(
        <div>
            <span style={oldStyle}>{oldPrice}</span>
            &nbsp;  &nbsp;  &nbsp;
            <span style={newStyle}>{newPrice}</span>
        </div>
    )
}