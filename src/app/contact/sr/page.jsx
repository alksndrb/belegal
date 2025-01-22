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
        <PageHeader>Kontakt</PageHeader>
        <PageText>
          Posvećeni smo pružanju najvišeg nivoa usluge i podrške. Bez obzira
          imate li pitanja, trebate pravni savet ili želite zakazati
          konsultaciju, naš tim je tu da pomogne.
        </PageText>
        <ContactContent>
          <ContactContentTile>
            <ContactHeader2>Adresa</ContactHeader2>
            <ContactAdress>
              Jurija Gagarina 14 E, stan broj 47, sedmi sprat, Belville, Beograd
              - Novi Beograd
            </ContactAdress>
          </ContactContentTile>
          <ContactContentTile>
            <ContactHeader2>Kontakt Informacije</ContactHeader2>
            <ContactEmail>office@gagiclaw.com</ContactEmail>
            <ContactPhone>+381 64 30 000 21</ContactPhone>
          </ContactContentTile>
          <ContactContentTile>
            <ContactHeader2>Pratite Nas</ContactHeader2>
            <ContactSocials />
          </ContactContentTile>
        </ContactContent>
        <MapComponent></MapComponent>
      </PageLayout>
    </>
  );
}
