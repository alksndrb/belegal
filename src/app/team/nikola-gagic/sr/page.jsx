import { PageHeader, PageLayout } from "@/components/Global/globalComponents";
import {
  ProfileGrid,
  ProfileImage,
  ProfileInfo,
} from "@/components/Team/teamComponents";
import { team } from "@/data/teamData";

export default function ProfilePage() {
  return (
    <>
      <PageLayout>
        <PageHeader>{team.gagic.name}</PageHeader>
        <ProfileGrid>
          <ProfileImage imgSrc={team.gagic.image} />
          <ProfileInfo phone={team.gagic.phone} email={team.gagic.email}>
            <br />
            <p>Nikola je osnivač advokatske kancelarije Gagić.</p>
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
              <b>Oblasti: </b> Privredno pravo, Nekretnine i izgradnja, Poresko
              pravo, IT i AI pravo, Strana ulaganja, Privredni kriminal
            </p>
            <p></p>
          </ProfileInfo>
        </ProfileGrid>
      </PageLayout>
    </>
  );
}
