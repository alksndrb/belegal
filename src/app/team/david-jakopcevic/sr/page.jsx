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
        <PageHeader>{team.jakopcevic.name}</PageHeader>
        <ProfileGrid>
          <ProfileImage imgSrc={team.jakopcevic.image} />
          <ProfileInfo
            phone={team.jakopcevic.phone}
            email={team.jakopcevic.email}
          >
            <br />
            <p>David je osnivač advokatske kancelarije Be Legal.</p>
            <br />
            <p>
              Diplomirao je na Pravnom fakultetu Univerziteta u Beogradu 2018.
              godine.
            </p>
            <br />
            <p>
              David se u okviru naše advokatske kancelarije bavi privrednim
              pravom, pravom intelektualne svojine, savetuje klijente u oblasti
              medija, tehnologija i komunikacija i sportskog prava. David takođe
              zastupa klijente u privrednim sporovima i domaćim i međunarodnim
              arbitražnim postupcima.
            </p>
            <br />
            <p>Tečno govori engleski jezik i služi se nemačkim jezikom.</p>
            <br />
            <p>
              <b>Oblasti: </b> Privredno pravo, Pravo intelektualne svojine,
              Mediji, tehnologije i komunikacije, Sportsko pravo, Rešavanje
              sporova i Arbitražno pravo
            </p>
            <p></p>
          </ProfileInfo>
        </ProfileGrid>
      </PageLayout>
    </>
  );
}
