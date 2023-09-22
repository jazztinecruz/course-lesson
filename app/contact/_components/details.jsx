const Details = () => {
  return (
    <div className="p-8 border shadow">
      <div className="flex flex-col items-start gap-4 justify-evenly">
        <div>
          <h5 className="font-semibold text-pink">Our Address</h5>
          <address>
            1 Nucamp Way Seattle
            <br /> WA 98001
            <br /> U.S.A.
          </address>
        </div>

        <div>
          <h5 className="font-semibold text-pink">Contact Us</h5>
          <a role="button" className="btn btn-link" href="tel:+12065551234">
            <i className="fa fa-phone" /> 1-206-555-1234
          </a>
        </div>

        <div>
          <h5 className="font-semibold text-pink">Email Address</h5>
          <a
            role="button"
            className="btn btn-link"
            href="mailto:fakeemail@fakeemail.co">
            <i className="fa fa-envelope-o" /> campsites@nucamp.co
          </a>
        </div>
      </div>
    </div>
  );
};

export default Details;
