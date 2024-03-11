// components/TenderForm.js

import React, { useState } from 'react';

const TenderForm = ({ onSubmit }) => {
    const [tenderDetails, setTenderDetails] = useState({
        title: '',
        description: '',
        deadline: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTenderDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(tenderDetails);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={tenderDetails.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={tenderDetails.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="deadline">Deadline</label>
                <input
                    type="date"
                    className="form-control"
                    id="deadline"
                    name="deadline"
                    value={tenderDetails.deadline}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Add Tender
            </button>
        </form>
    );
};

export default TenderForm;
