export const Contact = () => {
  const handleFormSubmit = (formData) => {
    console.log(formData);
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };
  return (
    <section className="section-contact">
      <h2 className='container-title'>Contact Us</h2>

      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input type="text"
            className="form-control"
            required autoComplete="off"
            placeholder='Enter your name'
            name="username" />
          <input type="email"
            className="form-control"
            required autoComplete="off"
            placeholder='Enter your email'
            name="email" />
          <textarea className="form-control"
            name="message"
            required autoComplete="off"
            placeholder='Enter your message'
            rows="10"></textarea>

          <button type='submit' value="send">Send</button>
        </form>
      </div>

    </section>
  )
};