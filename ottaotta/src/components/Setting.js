import React, { useState } from 'react';
import UserNav from './UserComps/UserNav';

const Settings = () => {
    const [isParentalControlEnabled, setParentalControlEnabled] = useState(false);
    const [password, setPassword] = useState('12345');
    const [inputPassword, setInputPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState('');

    // Toggle modal visibility and reset error/input states
    const handleToggleModal = () => {
        setShowModal(!showModal);
        setError('');
        setInputPassword('');
    };

    // Attempt to toggle parental control setting
    const handlePasswordSubmit = () => {
        if (inputPassword === password) {
            setParentalControlEnabled(!isParentalControlEnabled);
            handleToggleModal();  // Close modal on successful authentication
        } else {
            setError('Invalid password');
        }
    };

    // Handle password input change
    const handlePasswordChange = (event) => {
        setInputPassword(event.target.value);
    };

    return (
        <div>
            <UserNav />
            <div className="container-xxl">
                <h1>Settings</h1>
                <div className="card text-start">
                    <div className="card-header fs-2 bg-primary text-light">
                        Parental Controls
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Click toggle for open/close parental control</h5>
                        <p className="card-text">To toggle parental control mode, please confirm with your password.</p>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckChecked"
                                checked={isParentalControlEnabled}
                                onClick={handleToggleModal}  // Show modal on click
                                readOnly  // Prevent default toggle behavior
                            />
                            <label className="form-check-label ms-3" for="flexSwitchCheckChecked">
                                Parental control mode
                            </label>
                        </div>
                    </div>
                </div>

                {/* Bootstrap Modal for Password Entry */}
                <div className={`modal ${showModal ? 'd-block' : 'd-none'}`} tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Enter Password</h5>
                                <button type="button" className="btn-close" onClick={handleToggleModal}></button>
                            </div>
                            <div className="modal-body">
                                <input
                                    type="password"
                                    className="form-control"
                                    value={inputPassword}
                                    onChange={handlePasswordChange}
                                    placeholder="Password"
                                    autoFocus
                                />
                                {error && <div className="text-danger">{error}</div>}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleToggleModal}>Cancel</button>
                                <button type="button" className="btn btn-primary" onClick={handlePasswordSubmit}>Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
