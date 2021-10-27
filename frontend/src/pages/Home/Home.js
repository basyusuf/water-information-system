import { useHistory } from "react-router";
import { Button } from "semantic-ui-react";
import './Home.css';
import waterImg from '../../images/water.png';

function Home() {
    let history = useHistory();
    return (
        <div id="homeDiv">
            <div>
                <img id="mainImg" src={waterImg} alt="water" />
            </div>
            <div>
                <Button color='teal' size='large' onClick={() => history.push("/customer")}>Check Customer</Button>
                <Button color='teal' size='large' onClick={() => history.push("/orders")}>Check Order</Button>
            </div>
        </div>
    )
}

export default Home;