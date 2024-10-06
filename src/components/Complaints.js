import React, { useEffect, useState } from 'react';
import SidebarComponent from "./global-components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../services/firebase.config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Complaints() {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const requestsCollectionRef = collection(db, 'complaints');
                const querySnapshot = await getDocs(requestsCollectionRef);
                const requestsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setRequests(requestsData);
            } catch (error) {
                console.error('Error fetching requests:', error.message);
                setErrorMessage('Failed to load complaints. Please try again.');
                toast.error(errorMessage, { position: toast.POSITION.TOP_CENTER });
            } finally {
                setLoading(false);
            }
        };

        fetchRequests();
    }, [errorMessage]);

    // Function to handle status change
    const handleStatusChange = async (id, newStatus) => {
        try {
            const complaintDocRef = doc(db, 'complaints', id); // Reference to the document in Firestore
            await updateDoc(complaintDocRef, { status: newStatus }); // Update the document's status
            setRequests(prevRequests =>
                prevRequests.map(request => 
                    request.id === id ? { ...request, status: newStatus } : request
                )
            );
            toast.success('Status updated successfully!', { position: toast.POSITION.TOP_CENTER });
        } catch (error) {
            console.error('Error updating status:', error.message);
            toast.error('Failed to update status. Please try again.', { position: toast.POSITION.TOP_CENTER });
        }
    };

    if (loading) {
        return <div className="text-center">Loading complaints...</div>;
    }

    return (
        <>
            <SidebarComponent style={{marginRight: 500}}/>
            <div className="container mt-5">
                <h1 className="text-center">User Complaints</h1>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                <table className="table table-striped mt-3">
                    <thead>
                        <tr>
                            <th scope="col">Complaint ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Reason</th>
                            <th scope="col">Details</th>
                            <th scope="col">Status</th>
                            <th scope="col">Date Submitted</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map(request => (
                            <tr key={request.id}>
                                <td>{request.id}</td>
                                <td>{request.name}</td>
                                <td>{request.email}</td>
                                <td>{request.reason}</td>
                                <td>{request.details}</td>
                                <td>
                                    <select
                                        value={request.status}
                                        onChange={(e) => handleStatusChange(request.id, e.target.value)}
                                        className="form-select"
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Resolved">Resolved</option>
                                    </select>
                                </td>
                                <td>
                                    {request.createdAt ? 
                                        new Date(request.createdAt.seconds * 1000).toLocaleDateString() : 
                                        'N/A'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
