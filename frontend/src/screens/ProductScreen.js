import { useParams } from "react-router-dom";

function ProductScreen() {
    const params = useParams(); // using useParams Hook
    // Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>.
    const { slug } = params;

    return (
        <div>
            <h1> {slug} </h1>
        </div>
    )
}

export default ProductScreen;