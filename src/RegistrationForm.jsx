import React, { useState } from 'react';
import './App.css'; // Add this line for custom styling

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    course: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let errors = {};
    const mobileRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name) errors.name = 'Name is required';
    if (!formData.address) errors.address = 'Address is required';
    if (!formData.mobile || !mobileRegex.test(formData.mobile)) errors.mobile = 'Enter a valid 10-digit mobile number';
    if (!formData.email || !emailRegex.test(formData.email)) errors.email = 'Enter a valid email address';
    if (!formData.gender) errors.gender = 'Gender is required';
    if (!formData.dob) errors.dob = 'Date of birth is required';
    if (!formData.course) errors.course = 'Course selection is required';

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Data stored successfully!\n\n${JSON.stringify(formData, null, 2)}`);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      address: '',
      mobile: '',
      email: '',
      gender: '',
      dob: '',
      course: '',
    });
    setErrors({});
  };

  return (
    <div className="form-container">
      <h2 className="form-header">Higher Secondary Admission Form</h2>
      <form onSubmit={handleRegister} className="form-content">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-input ${errors.name ? 'input-error' : ''}`}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={`form-input ${errors.address ? 'input-error' : ''}`}
          />
          {errors.address && <span className="error-message">{errors.address}</span>}
        </div>
        <div className="form-group">
          <label>Mobile:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className={`form-input ${errors.mobile ? 'input-error' : ''}`}
          />
          {errors.mobile && <span className="error-message">{errors.mobile}</span>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-input ${errors.email ? 'input-error' : ''}`}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <div className="form-radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
              />
              Female
            </label>
          </div>
          {errors.gender && <span className="error-message">{errors.gender}</span>}
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className={`form-input ${errors.dob ? 'input-error' : ''}`}
          />
          {errors.dob && <span className="error-message">{errors.dob}</span>}
        </div>
        <div className="form-group">
          <label>Course:</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className={`form-input ${errors.course ? 'input-error' : ''}`}
          >
            <option value="">--Select--</option>
            <option value="Biology">Biology</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Commerce">Commerce</option>
            <option value="Humanities">Humanities</option>
          </select>
          {errors.course && <span className="error-message">{errors.course}</span>}
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">Register</button>
          <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
