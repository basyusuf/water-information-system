import { Grid, Container, Form, Button } from 'semantic-ui-react';
import DataTable from 'react-data-table-component'
import { useState } from 'react';
import { getCustomerInfo } from '../../services/customer';
import columns from './Customer_Columns';
import Swal from 'sweetalert2'

function Customer() {
    let [data, setData] = useState([]);
    let [isLoading, setIsLoading] = useState(false);
    let [phone, setPhone] = useState("");
    const searchUser = async () => {
        if (!isLoading && phone) {
            setIsLoading(true);
            let result = await getCustomerInfo(phone);
            if (result.status) {
                setData(result.data);
            } else {
                if (result.code === "NOT_FOUND") {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Customer not found!',
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
    return (<div>
        <Container style={{ marginTop: '2em' }}>
            <Grid reversed='mobile vertically'>
                <Grid.Row>
                    <Grid.Column computer={4} tablet={16} mobile={16}>
                        <Form size='large'>
                            <Form.Input
                                fluid icon='phone'
                                iconPosition='left'
                                placeholder='5XXXXXXXXX'
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                                disabled={isLoading} />
                            <Button
                                color='teal'
                                fluid size='large'
                                onClick={searchUser}
                                disabled={isLoading || !phone}>
                                Search
                            </Button>
                        </Form>
                    </Grid.Column>
                    <Grid.Column computer={12} tablet={16} mobile={16}>
                        <DataTable
                            responsive
                            fixedHeader
                            title="Customer list"
                            persistTableHead
                            fixedHeaderScrollHeight="300px"
                            columns={columns}
                            data={data}
                            pagination
                            highlightOnHover
                            progressPending={isLoading}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </div>);
}

export default Customer;