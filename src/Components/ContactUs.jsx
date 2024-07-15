const ContactUs = () => {
  return (
    <>
      <div>
        <h1>Contact Us Page</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Name"
          className="p-2 m-2 border-black border-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="Message"
          className="p-2 m-2 border-black border-2 rounded-lg"
        />
        <button className="p-2 m-2 border-black border-2 rounded-lg">
          Submit
        </button>
      </div>
    </>
  );
};

export default ContactUs;
