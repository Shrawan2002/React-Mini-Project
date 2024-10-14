import "./ProductTab.css";
import Product from './Product';
export default function ProductTab(){
    return(
        <div className="ProductTab">
            <Product title = "Logistic Mx Master" idx = {0}/>
            <Product title="Apple Pencil(2nd gen)" idx = {1}/>
            <Product title="Zebronics Zeb-Transformer" idx = {2}/>
            <Product title="Petronics Toad 24" idx = {3}/>
        </div>
    )
}