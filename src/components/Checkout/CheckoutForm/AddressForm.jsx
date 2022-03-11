import {
    Grid,
    Select,
    MenuItem,
    TextField,
    InputLabel,
    FormControl,
  } from "@material-ui/core";

const AddressForm = ({
    user = {},
    handleChange,
    handleSelectChange,
}) => (
    <form className="address">
        <h5 className="checkout-subheading">Payment Info</h5>
        <Grid container spacing={4}>
            <Grid item xs={12} lg={6}>
                <TextField
                    required
                    fullWidth
                    id="first-name"
                    name="firstName"
                    label="First Name"
                    value={user.firstName}
                    onChange={handleChange}
                    className="textfield"
                />
            </Grid>
            <Grid item xs={12} lg={6}>
                <TextField
                    required
                    fullWidth
                    id="last-name"
                    name="lastName"
                    label="Last Name"
                    value={user.lastName}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} lg={6}>
                <TextField
                    required
                    fullWidth
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    value={user.email}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} lg={6}>
                <TextField
                    required
                    fullWidth
                    id="address"
                    name="address"
                    value={user.address}
                    label="Address line 1"
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} lg={6}>
                <TextField
                    required
                    fullWidth
                    id="city"
                    name="city"
                    label="City"
                    value={user.city}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} lg={6}>
                <TextField
                    required
                    fullWidth
                    id="zip-code"
                    name="zipCode"
                    value={user.zipCode}
                    onChange={handleChange}
                    label="Zip Code"
                />
            </Grid>

            <Grid item xs={12} lg={6}>
                <FormControl fullWidth>
                    <InputLabel id="shipping-country-select-label">
                        Shipping Country
                    </InputLabel>
                    <Select
                        required
                        name="shippingCountry"
                        id="shipping-country-select"
                        value={user.shippingCountry.code || ""}
                        labelId="shipping-country-select-label"
                        onChange={(e) => handleSelectChange(e, "shippingCountries")}
                    >
                        {user.shippingCountries.map((country) => (
                            <MenuItem key={country.code} value={country.code}>
                                {country.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
    
            <Grid item xs={12} lg={6}>
                <FormControl fullWidth>
                    <InputLabel id="shipping-options-select-label">
                        Shipping Options
                    </InputLabel>
                    <Select
                        required
                        name="shippingOptions"
                        value={user.shippingOption.id}
                        id="shipping-options-select"
                        labelId="shipping-options-select-label"
                        onChange={(e) => handleSelectChange(e, "shippingOptions")}
                    >
                        {user.shippingOptions.map((option) => (
                            <MenuItem key={option.id} value={option.id}>
                                {`${option.description} - (${option.price.formatted_with_symbol})`}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    </form>
)

export default AddressForm