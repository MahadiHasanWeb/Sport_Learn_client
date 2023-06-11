import { loadStripe } from "@stripe/stripe-js";
import useSelectedClass from "../../../Hooks/useSelectedClass";
import TitleCover from "../../Home/TitleCover";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [selectedClass] = useSelectedClass();
    // const total = selectedClass.reduce((sum, item) => sum + item.price, 0);
    // const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <TitleCover heading="Please Process To Payment"></TitleCover>
            <h2 className="text-3xl"> Teka o teka tumi uira uira aso...</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm selectedClass={selectedClass} /* price={price} */></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;