import React from 'react';
import { Table } from 'react-bootstrap';

const tableData = [
    { no: 1, date: '2024-10-01', time: '09:00 - 11:00', area: 'Cape Town', suburb: 'Sea Point', status: 'Resolved', issueNo: 'ISS001', outcome: 'Power restored' },
    { no: 2, date: '2024-10-02', time: '14:00 - 16:00', area: 'Johannesburg', suburb: 'Sandton', status: 'In Progress', issueNo: 'ISS002', outcome: 'Technician dispatched' },
    { no: 3, date: '2024-10-03', time: '18:00 - 20:00', area: 'Durban', suburb: 'Umhlanga', status: 'Unresolved', issueNo: 'ISS003', outcome: 'Pending resolution' },
    { no: 4, date: '2024-10-04', time: '06:00 - 08:00', area: 'Pretoria', suburb: 'Arcadia', status: 'Resolved', issueNo: 'ISS004', outcome: 'Power restored' },
    { no: 5, date: '2024-10-05', time: '12:00 - 14:00', area: 'Port Elizabeth', suburb: 'Summerstrand', status: 'Unresolved', issueNo: 'ISS005', outcome: 'Awaiting parts' }
];

function DataTable() {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th className="text-secondary bg-white py-3">No</th>
                <th className="text-secondary bg-white py-3">Date</th>
                <th className="text-secondary bg-white py-3">Time</th>
                <th className="text-secondary bg-white py-3">Area</th>
                <th className="text-secondary bg-white py-3">Suburb</th>
                <th className="text-secondary bg-white py-3">Status</th>
                <th className="text-secondary bg-white py-3">Issue No</th>
                <th className="text-secondary bg-white py-3">Outcome</th>
            </tr>
            </thead>
            <tbody>
            {tableData.map((item, index) => (
                <tr key={index}>
                    <td>{item.no}</td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>{item.area}</td>
                    <td>{item.suburb}</td>
                    <td>{item.status}</td>
                    <td>{item.issueNo}</td>
                    <td>{item.outcome}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default DataTable;
