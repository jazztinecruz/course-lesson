import Hero from "@/components/hero";
import Details from "./_components/details";
import ContactForm from "./_components/form";

export const metadata = {
  title: "NuCamp | Contact",
};

const ContactPage = () => {
  return (
    <div className="space-y-4">
      <Hero
        title="Get in Touch with Us."
        description="Reach Out for Questions or Inquiries. We're here to assist you!
            Contact our friendly team for any assistance or information you may
            need. Your adventure awaits."
      />

      <div className="grid lg:grid-cols-[2fr,1fr] items-start gap-4">
        <ContactForm />
        <Details />
      </div>
    </div>
  );
};

export default ContactPage;
