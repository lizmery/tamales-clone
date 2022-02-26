import React from 'react'

const AddressForm = () => {
    return (
        <div className="address">
            <div className="shipping">
                <h1 className="address-heading">Shipping Address</h1>
                <form className="checkout-form">
                    <div className="row">
                        <div className="col-50">
                            <label for="first-name">First Name</label>
                            <input type="text" name="first-name" required />
                        </div>
                        <div className="col-50">
                            <label for="last-name">Last Name</label>
                            <input type="text" name="last-name" required />
                        </div>
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input type="email" name="email" required />
                    </div>
                    <div>
                        <label for="address">Address</label>
                        <input type="text" name="address" required />
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="country">Country</label>
                            <select required>
                                <option value="">Choose...</option>
                                <option>United States</option>
                            </select>
                        </div>
                        <div className="col-25">
                            <label for="state">State</label>
                            <select required>
                                <option value="">Choose...</option>
                                <option>California</option>
                            </select>
                        </div>
                        <div className="col-25">
                            <label for="zip">Zip</label>
                            <input type="text" name="zip" required />
                        </div>
                    </div>
                </form>
            </div>
            <hr />
            <div className="billing">
                <h1 className="address-heading">Billing Address</h1>
                <form className="checkout-form">
                    <div className="row">
                        <div className="col-50">
                            <label for="first-name">First Name</label>
                            <input type="text" name="first-name" required />
                        </div>
                        <div className="col-50">
                            <label for="last-name">Last Name</label>
                            <input type="text" name="last-name" required />
                        </div>
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input type="email" name="email" required />
                    </div>
                    <div>
                        <label for="address">Address</label>
                        <input type="text" name="address" required />
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="country">Country</label>
                            <select required>
                                <option value="">Choose...</option>
                                <option>United States</option>
                            </select>
                        </div>
                        <div className="col-25">
                            <label for="state">State</label>
                            <select required>
                                <option value="">Choose...</option>
                                <option>California</option>
                            </select>
                        </div>
                        <div className="col-25">
                            <label for="zip">Zip</label>
                            <input type="text" name="zip" required />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddressForm
