import { Grid, Container, Form, Button, Image, Modal } from 'semantic-ui-react';
import DataTable from 'react-data-table-component'
import { useState } from 'react';
import { getSubscriptionOrders } from '../../services/orders';
import columns from './Orders_Columns';
import Swal from 'sweetalert2'
import bottles from '../../images/bottle.png';
import './Orders.css';

function Orders() {
    let [data, setData] = useState([]);
    let [isLoading, setIsLoading] = useState(false);
    let [subscriptionId, setSubscriptionId] = useState("");
    let [modalStatus, setModalStatus] = useState(false)
    let [modalData, setModalData] = useState({});

    const searchOrders = async () => {
        if (!isLoading && subscriptionId) {
            setIsLoading(true);
            let result = await getSubscriptionOrders(subscriptionId);
            if (result.status) {
                setData(result.data);
            } else {
                if (result.code === "NOT_FOUND") {
                    Swal.fire({
                        title: 'Error!',
                        text: 'User not found!',
                        icon: 'warning',
                        confirmButtonText: 'OK'
                    });
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Server error!',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            }
            setIsLoading(false);
        }
    }
    const viewModal = (row) => {
        setModalData(row);
        setModalStatus(true);
    }

    return (<div>
        <Container style={{ marginTop: '2em' }}>
            {ProductModal(modalData, setModalStatus, modalStatus)}
            <Grid reversed='mobile vertically'>
                <Grid.Row>
                    <Grid.Column computer={4} tablet={16} mobile={16}>
                        <Form size='large'>
                            <Form.Input
                                fluid icon='id badge'
                                iconPosition='left'
                                placeholder='abc123'
                                value={subscriptionId}
                                onChange={(event) => setSubscriptionId(event.target.value)}
                                disabled={isLoading} />
                            <Button
                                color='teal'
                                fluid size='large'
                                onClick={searchOrders}
                                disabled={isLoading || !subscriptionId}>
                                Search
                            </Button>
                        </Form>
                    </Grid.Column>
                    <Grid.Column computer={12} tablet={16} mobile={16}>
                        <DataTable
                            responsive
                            fixedHeader
                            title="Order list"
                            persistTableHead
                            fixedHeaderScrollHeight="300px"
                            columns={columns}
                            data={data}
                            highlightOnHover
                            pointerOnHover
                            progressPending={isLoading}
                            pagination
                            onRowClicked={row => viewModal(row)}
                        />
                        <div style={{ textAlign: 'right', color: 'grey' }}>
                            {data && data.length > 0 && "Click row for products detail"}
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </div>);
}

let ProductModal = (row, setOpen, open) => {
    if (row) {
        return (<Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
        >
            <Modal.Header>Product list</Modal.Header>
            <Modal.Content image>
                <Image size='medium' src={bottles} wrapped />
                <Modal.Description className="modalDescription">
                    <div>
                        <table className="modalTable">
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                            </tr>
                            {row.products && row.products.map((item, index) => {
                                return (<tr key={index.toString()}>
                                    <td>{item.product}</td>
                                    <td>{item.quantity}</td>
                                </tr>)
                            })}
                        </table>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        Total: <strong>{row.totalAmount} TL</strong>
                    </div>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button
                    content="Close"
                    color="red"
                    labelPosition='right'
                    icon='close'
                    onClick={() => setOpen(false)}
                />
            </Modal.Actions>
        </Modal>)
    } else {
        return "";
    }

}

export default Orders;