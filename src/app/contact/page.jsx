import {
  ContactAdress,
  ContactContent,
  ContactContentTile,
  ContactEmail,
  ContactHeader2,
  ContactPhone,
  ContactSocials,
  MapComponent,
} from "@/components/Contact/contactComponents";
import {
  PageHeader,
  PageLayout,
  PageText,
} from "@/components/Global/globalComponents";

export default function Contact() {
  return (
    <>
      <PageLayout>
        <PageHeader>Contact</PageHeader>
        <PageText>
          At BeLegal, we are committed to providing you with the highest level
          of service and support. Whether you have questions, need legal advice,
          or want to schedule a consultation, our team is here to help.
        </PageText>
        <ContactContent>
          <ContactContentTile>
            <ContactHeader2>Office Location</ContactHeader2>
            <ContactAdress>
              Jurija Gagarina 14 E, door 47, floor 7, Belville, Belgrade - New
              Belgrade
            </ContactAdress>
          </ContactContentTile>
          <ContactContentTile>
            <ContactHeader2>Contact Information</ContactHeader2>
            <ContactEmail>office@belegal.rs</ContactEmail>
            <ContactPhone>+381 64 30 000 21</ContactPhone>
          </ContactContentTile>
          <ContactContentTile>
            <ContactHeader2>Follow Us</ContactHeader2>
            <ContactSocials />
          </ContactContentTile>
        </ContactContent>
        <MapComponent></MapComponent>
      </PageLayout>
    </>
  );
}
