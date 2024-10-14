import Price from "./Price";
import "./Product.css";

export default function Product({title,idx}){
    let description = [["8,000 Dip", "5 Programable button"], ["intuitive Surface", "designed for ipd pro"],
     ["intuitive Surface", "designed for ipd pro"], ["8,000 Dip", "5 Programable button"]];
     let oldPrice = ["15,000","16,000","25,000", "36,000"];
    return(
        <div className="Product">
            <h3>{title}</h3>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price/>
        </div>
    )
}