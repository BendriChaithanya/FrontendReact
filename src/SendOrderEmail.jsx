import emailjs from "@emailjs/browser";

function SendOrderEmail({cartItems,totalAmount,tax,customerEmail,finalTotal})
{
    const sendEmail=()=>{
        let templateParams={
            oders:cartItems.map(item=>({
                name:item.name,
                quantity:item.quantity,
                price:item.price,
                
                
            })),
            order_id:Date.now(),
            orders:cartItems,
            FinalTotal:finalTotal,
            totalAmount:totalAmount.toFixed(2),
            tax:tax.toFixed(2),
            email:customerEmail
           
        }
        emailjs.send("service_vvzn4u7",
            "template_5xu0m38",
             templateParams,
            "tH8XnPOc6ADPLnY9m" )
            .then((response)=>{
                alert("Email Sent Successfully",response.status,response.text);
            })
    }
    return(
        <>
        <button onClick={sendEmail}>Send Oder Email</button>
        </>
    )
}
export default SendOrderEmail;