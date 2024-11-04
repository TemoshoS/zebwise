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
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [age, setAge] = useState(0);
    const [address, setAddress] = useState('');
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
        if (!surname) errors.surname = 'Surname is required.';
        if (!email) errors.email = 'Email is required.';
        if (!date) errors.date = 'Date reported is required.';
        if (!age) errors.age = 'Age reported is required.';
        if (!address) errors.address = 'Address reported is required.';
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
            age,
            surname,
            address,
            date,
            details,
        };

        setIsSubmitting(true);

        try {
            await addComplaint(formData, image);
            setShowModal(true);
            toast.success('Your complaint has been submitted successfully!');
            setName('');
            setEmail('');
            setDate('');
            setAge(0);
            setAddress('');
            setSurname('');
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
        <>
            <SidebarComponent/>
            <div className="container">
                <div className='mb-3'>
                    <p className='fs-3 fw-bold text-muted m-0 p-0'>Report Issue</p>
                    <p className='fs-6 text-muted'>Report any problem you have encountered in your community</p>
                </div>

                {/* Main Complaint Form */}
                <div className="d-flex justify-content-center align-items-center min-vh-100 w-100">
                    <div className=" rounded-lg shadow-lg p-4 bg-light">
                        <div className="text-center py-2 rounded-top">
                            <h2 className="fs-5 text-muted font-weight-bold" >Citizen Complaint Form</h2>
                        </div>
                        <form className="mt-4" onSubmit={handleSubmit}>
                            <div className='d-flex'>
                                <div className="col-md-4  mb-3 pe-3 ">
                                    <label className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                            setErrorMessages((prev) => ({...prev, name: ''}));
                                        }}
                                    />
                                    {errorMessages.name && <div className="text-danger">{errorMessages.name}</div>}
                                </div>
                                <div className="col-md-4  mb-3 pe-3 ">
                                    <label className="form-label">SurName</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your surname"
                                        value={surname}
                                        onChange={(e) => {
                                            setSurname(e.target.value);
                                            setErrorMessages((prev) => ({...prev, surname: ''}));
                                        }}
                                    />
                                    {errorMessages.surname &&
                                        <div className="text-danger">{errorMessages.surname}</div>}
                                </div>
                                <div className="col-md-4  mb-3 pe-3">
                                    <label className="form-label">Age</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={age}
                                        onChange={(e) => {
                                            setAge(e.target.value);
                                            setErrorMessages((prev) => ({...prev, age: 0}));
                                        }}
                                    />
                                    {/* {errorMessages.age && <div className="text-danger">{errorMessages.age}</div>}*/}
                                </div>

                            </div>

                            <div className='d-flex'>
                                <div className="col-md-6  mb-3 pe-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setErrorMessages((prev) => ({...prev, email: ''}));
                                        }}
                                    />
                                    {errorMessages.email && <div className="text-danger">{errorMessages.email}</div>}
                                </div>
                                <div className="col-md-6  mb-3 pe-3">
                                    <label className="form-label">Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder="Enter your name"
                                        /*value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                            setErrorMessages((prev) => ({ ...prev, name: '' }));
                                        }}*/
                                    />
                                    {errorMessages.date && <div className="text-danger">{errorMessages.date}</div>}
                                </div>
                            </div>

                            <div className="d-flex">
                                <div className="col-md-6  pe-3">
                                    <label className="fs-6 fw-medium mb-2">
                                        Community counsellor
                                    </label>
                                    <input type="text" name="label" required className="form-control bg-white  mb-1"
                                           placeholder="e.g ME Mkhize"
                                    />
                                    {/* <p style="color:red;font-size: 12px;">{{ validationErrors.enteredLabelMsg }}</p>*/}
                                </div>

                                <div className="col-md-6  pe-3">
                                    <label className="fs-6 fw-medium mb-2">
                                        Street address
                                    </label>
                                    <input type="text" name="streetAddress" required
                                           className="form-control bg-white  mb-1"
                                           placeholder="e.g. 123 street"
                                    />

                                </div>
                            </div>

                            <div className="d-flex ">
                                <div className="col-md-3  mb-3 pe-3">
                                    <label className="fs-6 fw-medium mb-2">
                                        Postal code
                                    </label>
                                    <input type="text" name="pickUpPostalCode" className="form-control bg-white"
                                           required/>
                                    {/* (ngModelChange)="getPickUpExtraDetails(enteredPostalCode)">*/}
                                    {/*  <p style="color:red;font-size: 12px;">{{ validationErrors.enteredPostalCodeMsg }}</p>*/}
                                </div>
                                <div className="col-md-3 pe-3 mb-3 ">
                                    <label className="fs-6 fw-medium mb-2">
                                        Suburb
                                    </label>
                                    <input type="text" className="form-control bg-white" name="googleSuburb"
                                    />
                                    {/* <p style="color:red;font-size: 12px;">{{ validationErrors.enteredSuburbMsg }}</p>*/}
                                </div>
                                <div className=" col-md-3  mb-3 pe-3">
                                    <label className="fs-6 fw-medium mb-2">
                                        City
                                    </label>
                                    <input type="text" className="form-control bg-white" name="manualCity" required

                                    />
                                    {/*<p style="color:red;font-size: 12px;">{{ validationErrors.enteredCityMsg }}</p>*/}
                                </div>
                                <div className=" col-md-3  mb-3">
                                    <label className="fs-6 fw-medium mb-2">
                                        Province
                                    </label>

                                    <select className="form-control bg-white" name="province" id="type1" required
                                    >
                                        <option>Select Province</option>
                                        <option value="EASTERN_CAPE">Eastern Cape</option>
                                        <option value="FREE_STATE">Free State</option>
                                        <option value="GAUTENG">Gauteng</option>
                                        <option value="KWA_ZULU_NATAL">KwaZulu-Natal</option>
                                        <option value="LIMPOPO">Limpopo</option>
                                        <option value="MPUMALANGA">Mpumalanga</option>
                                        <option value="NORTH_WEST">North West</option>
                                        <option value="NORTHERN_CAPE">Northern Cape</option>
                                        <option value="WESTERN_CAPE">Western Cape</option>
                                    </select>
                                    {/*<p style="color:red;font-size: 12px;">{{ validationErrors.enteredProvinceMsg }}</p>*/}
                                </div>
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
                                        setErrorMessages((prev) => ({...prev, reason: ''}));
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
                                        setErrorMessages((prev) => ({...prev, details: ''}));
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
                                    style={{backgroundColor: '#20C997', color: 'white'}}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className={`modal fade ${showModal ? 'show' : ''}`}
                         style={{display: showModal ? 'block' : 'none'}} tabIndex="-1" role="dialog">
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
                                    <button type="button" className="btn btn-secondary"
                                            onClick={handleCloseModal}>Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false}
                                    closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
                </div>
            </div>
        </>

    );
}

export default MakeComplaint;
