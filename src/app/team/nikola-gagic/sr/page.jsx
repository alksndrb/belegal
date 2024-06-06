import { PageHeader, PageLayout } from "@/components/Global/globalComponents";
import {
  ProfileGrid,
  ProfileImage,
  ProfileInfo,
} from "@/components/Team/teamComponents";

export default function ProfilePage() {
  return (
    <>
      <PageLayout>
        <PageHeader>Nikola Gagić</PageHeader>
        <ProfileGrid>
          <ProfileImage />
          <ProfileInfo>
            <br />
            <p>
              Diplomirao je na Pravnom fakultetu Univerziteta u Beogradu, među
              najboljim studentima u svojoj generaciji.
            </p>
            <br />
            <p>
              Nikola se, u okviru naše kancelarije, bavi privrednim pravom,
              poreskim pravom, IT pravom, pravom energetike i infrastrukture,
              kao i pravom zaštite životne sredine.
            </p>
            <br />
            <p>
              Tečno govori srpski i engleski jezik, a služi se nemačkim jezikom.
            </p>
            <br />
            <p>
              <b>Oblasti: </b> Privredno pravo, Poresko pravo, IT pravo,
              Energetika i Infrastruktura, Zaštita životne sredine
            </p>
            <p></p>
          </ProfileInfo>
        </ProfileGrid>
      </PageLayout>
    </>
  );
}
