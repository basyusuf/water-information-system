import { Label } from "semantic-ui-react";

const columns = [
    {
        name: 'Order Id',
        selector: row => row.orderId,
    },
    {
        name: 'Subscription Id',
        selector: row => row.subscriptionId,
    },
    {
        name: 'Payment Method',
        selector: row => row.paymentMethod,
    },
    {
        name: 'Delivery Date',
        selector: row => row.deliveryDate ? new Date(row.deliveryDate).toLocaleDateString('tr', { hour: '2-digit', minute: '2-digit' }) : "",
    },
    {
        name: 'Total Amount',
        selector: row => row.totalAmount,
    },
    {
        name: 'Status',
        selector: row => {
            let color = "grey";
            if (row.status == "CANCELED") {
                color = "red"
            } else if (row.status == "NEW") {
                color = "green"
            } else if (row.status = "CONFIRMED") {
                color = "yellow"
            }
            return (<Label color={color}>{row.status}</Label>)
        },
    },
];
export default columns;
