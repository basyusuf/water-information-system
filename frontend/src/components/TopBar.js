import { useHistory } from 'react-router';
import {
    Container,
    Menu,
} from 'semantic-ui-react'
function TopBar(props) {
    let history = useHistory();
    return (<div>
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header as='a' onClick={() => history.push("/")}>
                    Water Delivery System
                </Menu.Item>
                <Menu.Item as='a' onClick={() => history.push("/customer")}>Customer</Menu.Item>
                <Menu.Item as='a' onClick={() => history.push("/orders")}>Order</Menu.Item>
            </Container>
        </Menu>

        <Container style={{ marginTop: '3em' }}>
            {props.children}
        </Container>
    </div>)
}

export default TopBar;