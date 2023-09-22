import Hero from "@/components/hero";
import Details from "./_components/details";
import ContactForm from "./_components/form";

const ContactPage = () => {
  return (
    <div className="space-y-4">
      <Hero>
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold mb-4 flex flex-col">
            <span>Contact Us</span>
            <span>We&apos;re here to help!</span>
          </h1>
          <p className="font-semibold">
            If you have any questions or need assistance, please don&apos;t
            hesitate to reach out to us. Our team is dedicated to providing you
            with the support you need on your coding bootcamp journey.
          </p>
        </div>
      </Hero>

      <div className="grid lg:grid-cols-[2fr,1fr] items-start gap-4">
        <ContactForm />
        <Details />
      </div>
    </div>
  );
};

export default ContactPage;
