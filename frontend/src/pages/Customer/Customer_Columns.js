const columns = [
    {
        name: 'Subscription Id',
        selector: row => row.subscriptionId,
    },
    {
        name: 'Full Name',
        selector: row => row.fullName,
    },
    {
        name: 'Address',
        selector: row => row.address,
    },
    {
        name: 'Location Name',
        selector: row => row.locationName,
    },
    {
        name: 'Sub City Name',
        selector: row => row.subCityName,
    },
    {
        name: 'City Name',
        selector: row => row.cityName,
    },
    {
        name: 'Brand',
        selector: row => row.brand,
    },
    {
        name: 'Phone Number',
        selector: row => row.phoneNumber,
    },
    {
        name: 'Distributor Number',
        selector: row => row.distributorNumber,
    },
];
export default columns;