import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Confirmation = ({ cart, orderInfo, orderError }) => {
    if (orderError) {
        return (
            <div className="confirmation">
                <h5>Error: {orderError}</h5>
                <Button component={Link} variant='outlined' type='button' to='/'>Back to home</Button>
            </div>
        )
    }

    return (
        <div className="confirmation">
            <h5>Thank you for your purchase, {orderInfo.customer.firstname} !</h5>
            <Button component={Link} variant='contained' type='button' to='/menu'>View menu</Button>
        </div>
    )
}

export default Confirmation
