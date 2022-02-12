export default function Info() {
    return (
        <>
            <p 
             id="sneaker-company" 
             className="m-lg-0 m-md-0 mb-sm-2 mb-2 mt-sm-3 mt-3"
             >SNEAKER COMPANY
             </p>

            <h1 
             id="fall-limited" 
             className="font-weight-bolder"
             >Fall Limited Edition <br /> Sneakers
            </h1>

            <p 
             id="description"
             >These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer soleT they'll withstand everything the weather can offer.
            </p>

            <div className="d-flex">
                <p id="current-price">$125.00</p>
                <p id="discount-percentage" className="rounded ml-3  font-weight-bolder">50%</p>
            </div>
            
            <h5 id="before-price">250.00</h5>
        </>
    )
}