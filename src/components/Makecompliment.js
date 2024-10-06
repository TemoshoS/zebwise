import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { collection, addDoc, updateDoc } from 'firebase/firestore';
import { db } from '../services/firebase.config';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SidebarComponent from './global-components/navbar'; // Import the sidebar

const storage = getStorage();

const addComplaint = async (formData, imageFile) => {
    try {
        let imageUrl = null;

        if (imageFile) {
            const imageRef = ref(storage, `complaintImages/${imageFile.name}`);
            await uploadBytes(imageRef, imageFile);
            imageUrl = await getDownloadURL(imageRef);
        }

        const complaintsCollectionRef = collection(db, 'complaints');
        const newComplaintRef = await addDoc(complaintsCollectionRef, {
            ...formData,
            imageUrl: imageUrl || null,
            createdAt: new Date(),
            status: 'In Progress',
        });

        await updateDoc(newComplaintRef, { id: newComplaintRef.id });

        console.log('Complaint added successfully.');
    } catch (error) {
        console.error('Error adding complaint:', error.message);
        throw error;
    }
};

function MakeComplaint() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [reason, setReason] = useState('');
    const [details, setDetails] = useState('');
    const [image, setImage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = {};
        if (!name) errors.name = 'Name is required.';
        if (!email) errors.email = 'Email is required.';
        if (!reason) errors.reason = 'Reason for complaint is required.';
        if (!details) errors.details = 'Details are required.';

        if (Object.keys(errors).length > 0) {
            setErrorMessages(errors);
            return;
        }

        const formData = {
            name,
            email,
            reason,
            details,
        };

        setIsSubmitting(true);

        try {
            await addComplaint(formData, image);
            setShowModal(true);
            toast.success('Your complaint has been submitted successfully!');
            setName('');
            setEmail('');
            setReason('');
            setDetails('');
            setImage(null);
            setErrorMessages({});
        } catch (error) {
            setErrorMessages({ general: 'Failed to submit complaint. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="d-flex">
            {/* Sidebar */}
            <SidebarComponent />

            {/* Main Complaint Form */}
            <div className="d-flex justify-content-center align-items-center min-vh-100 w-100" style={{ backgroundColor: '#20C997' }}>
                <div className="bg-white rounded-lg shadow-lg p-4 w-50">
                    <div className="text-center py-2 rounded-top">
                        <h2 className="h5 font-weight-bold" style={{ color: '#20C997' }}>Customer Complaint Form</h2>
                    </div>
                    <form className="mt-4" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    setErrorMessages((prev) => ({ ...prev, name: '' }));
                                }}
                            />
                            {errorMessages.name && <div className="text-danger">{errorMessages.name}</div>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setErrorMessages((prev) => ({ ...prev, email: '' }));
                                }}
                            />
                            {errorMessages.email && <div className="text-danger">{errorMessages.email}</div>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Reason for Complaint</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter reason for complaint"
                                value={reason}
                                onChange={(e) => {
                                    setReason(e.target.value);
                                    setErrorMessages((prev) => ({ ...prev, reason: '' }));
                                }}
                            />
                            {errorMessages.reason && <div className="text-danger">{errorMessages.reason}</div>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Details</label>
                            <textarea
                                className="form-control"
                                placeholder="Enter details"
                                value={details}
                                onChange={(e) => {
                                    setDetails(e.target.value);
                                    setErrorMessages((prev) => ({ ...prev, details: '' }));
                                }}
                            />
                            {errorMessages.details && <div className="text-danger">{errorMessages.details}</div>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Upload Image (Optional)</label>
                            <input
                                type="file"
                                className="form-control"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                        </div>
                        {errorMessages.general && <div className="alert alert-danger">{errorMessages.general}</div>}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn"
                                style={{ backgroundColor: '#20C997', color: 'white' }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>

                <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Success</h5>
                                <button type="button" className="close" onClick={handleCloseModal}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Your complaint has been submitted successfully!</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            </div>
        </div>
    );
}

export default MakeComplaint;
