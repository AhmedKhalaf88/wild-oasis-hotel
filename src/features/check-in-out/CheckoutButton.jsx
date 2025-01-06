import PropTypes from "prop-types";
import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckinhOut } = useCheckout();
  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckinhOut}
    >
      Check out
    </Button>
  );
}

CheckoutButton.propTypes = {
  bookingId: PropTypes.number,
};

export default CheckoutButton;