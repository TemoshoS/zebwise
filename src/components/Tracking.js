import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebase.config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ServiceRequestTracking() {
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
                setErrorMessage('Failed to load requests. Please try again.');
                toast.error(errorMessage, { position: toast.POSITION.TOP_CENTER });
            } finally {
                setLoading(false);
            }
        };

        fetchRequests();
    }, [errorMessage]);

    if (loading) {
        return <div className="text-center">Loading requests...</div>;
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center">Service Request Tracking</h2>

            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th scope="col">Request ID</th>
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
                            <td>{request.status}</td>
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
    );
}

export default ServiceRequestTracking;
