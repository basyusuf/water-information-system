import { useHistory } from 'react-router';
import {
    Container,
    Menu,
} from 'semantic-ui-react'
function TopBar(props) {
    let history = useHistory();
    return (<div style={{ minHeight: '100vh' }}>
        <Menu >
            <Container>
                <Menu.Item header as='a' onClick={() => history.push("/")}>
                    Water Delivery System
                </Menu.Item>
                <Menu.Item as='a' onClick={() => history.push("/customer")}>Customer</Menu.Item>
                <Menu.Item as='a' onClick={() => history.push("/orders")}>Order</Menu.Item>
            </Container>
        </Menu>
        {props.children}
    </div>)
}

export default TopBar;