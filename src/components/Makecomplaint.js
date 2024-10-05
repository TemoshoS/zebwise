import React, { useState } from 'react';

function MakeComplaint() {
    const [complaint, setComplaint] = useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        // Check if a file is selected and if it's an image
        if (file && file.type.startsWith('image/')) {
            setImage(file);
            setError(''); // Clear any previous error messages
        } else {
            setError('Please select a valid image file.');
            setImage(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate the complaint
        if (!complaint) {
            setError('Complaint cannot be empty.');
            return;
        }

        // Here you can handle the complaint submission and image upload logic
        console.log('Complaint submitted:', complaint);
        if (image) {
            console.log('Image uploaded:', image.name);
        }

        // Clear the form
        setComplaint('');
        setImage(null);
        setError('');
        setSuccessMessage('Your complaint has been submitted successfully!');
    };

    return (
        <div className="complaint-form">
            <h1>Make a Complaint</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="complaint" className="form-label">Your Complaint</label>
                    <textarea
                        id="complaint"
                        className="form-control"
                        rows="4"
                        value={complaint}
                        onChange={(e) => setComplaint(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Upload Image (optional)</label>
                    <input
                        type="file"
                        id="image"
                        className="form-control"
                        accept="image/*" // Accept only image files
                        onChange={handleImageChange}
                    />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                {successMessage && <div className="alert alert-success">{successMessage}</div>}
                <button type="submit" className="btn btn-primary">Submit Complaint</button>
            </form>
        </div>
    );
}

export default MakeComplaint;
