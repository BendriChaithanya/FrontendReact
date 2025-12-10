import { useState } from "react";
import { useDispatch } from "react-redux";
import { applyCoupon } from "./store";

function Coupon() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const handleApplyDiscount = () => {
        if(input.trim() === "") 
            return;
        dispatch(applyCoupon(input));
    };

    return (
        <>
            <label>Enter Discount coupon:</label>
            <input 
                type="text"
                placeholder="Enter coupon code"
                value={input}
                onChange={(e) => setInput(e.target.value)}/>
            
            <button onClick={handleApplyDiscount}>
                Apply Discount
            </button>
        </>
    );
}
export default Coupon;
