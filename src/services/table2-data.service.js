import React from 'react';
import { Table } from 'react-bootstrap';



const complaintsData = [
    {
        no: 1,
        date: '2024-10-01',
        time: '10:00 AM',
        name: 'John Doe',
        region: 'Gauteng',
        status: 'Pending',
        issueNo: '001',
        outcome: 'Under Review'
    },
    {
        no: 2,
        date: '2024-10-02',
        time: '11:30 AM',
        name: 'Jane Smith',
        region: 'Western Cape',
        status: 'Resolved',
        issueNo: '002',
        outcome: 'Issue Resolved'
    },
    {
        no: 3,
        date: '2024-10-03',
        time: '09:15 AM',
        name: 'Sam Brown',
        region: 'KwaZulu-Natal',
        status: 'In Progress',
        issueNo: '003',
        outcome: 'Technician Dispatched'
    },
    {
        no: 4,
        date: '2024-10-04',
        time: '01:45 PM',
        name: 'Alice Johnson',
        region: 'Eastern Cape',
        status: 'Pending',
        issueNo: '004',
        outcome: 'Waiting for Parts'
    },
    {
        no: 5,
        date: '2024-10-05',
        time: '03:00 PM',
        name: 'Michael Lee',
        region: 'Free State',
        status: 'Resolved',
        issueNo: '005',
        outcome: 'Issue Resolved'
    }
];


function DataTable2() {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th className="text-secondary bg-white py-3">No</th>
                <th className="text-secondary bg-white py-3">Date</th>
                <th className="text-secondary bg-white py-3">Time</th>
                <th className="text-secondary bg-white py-3">complainant</th>
                <th className="text-secondary bg-white py-3">Region</th>
                <th className="text-secondary bg-white py-3">Status</th>
                <th className="text-secondary bg-white py-3">Issue No</th>
                <th className="text-secondary bg-white py-3">Outcome</th>
            </tr>
            </thead>
            <tbody>
            {complaintsData.map((item, index) => (
                <tr key={index}>
                    <td>{item.no}</td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>{item.name}</td>
                    <td>{item.region}</td>
                    <td>{item.status}</td>
                    <td>{item.issueNo}</td>
                    <td>{item.outcome}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default DataTable2;
