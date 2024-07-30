function PersonalDetails() {

    function create(e) {
        e.preventDefault();



    }




    return(
        <section className="p-details">
            <form>
                <label htmlFor="firstName">First Name:</label>
                <input id="firstName" type="text" />
                <label htmlFor="lastName">Last Name:</label>
                <input id="lastName" type="text" />
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" />
                <label htmlFor="phoneNumber">Phone:</label>
                <input id="phoneNumber" type="phone" />
                <button onClick={create}>Submit</button>
            </form>
        </section>
    )
}



export default PersonalDetails;
