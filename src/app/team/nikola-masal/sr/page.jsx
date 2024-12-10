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
        <PageHeader>{team.masal.name}</PageHeader>
        <ProfileGrid>
          <ProfileImage imgSrc={team.masal.image} />
          <ProfileInfo phone={team.masal.phone} email={team.masal.email}>
            <br />
            <p>
              Diplomirao je na Pravnom fakultetu Univerziteta u Beogradu, a
              tokom studija je učestvovao i pobeđivao na brojnim takmičenjima u
              besedništvu.
            </p>
            <br />
            <p>
              Nikola se, u okviru naše kancelarije bavi privrednim pravom,
              naplatom potraživanja i izvršenjem, radnim pravom, porodičnim
              pravom.
            </p>
            <br />
            <p>Tečno govori srpski i engleski jezik.</p>
            <br />
            <br />
            <p>
              <b>Oblasti: </b> Privredno pravo, Nekretnine, Porodično pravo,
              Radno pravo.
            </p>
            <p></p>
          </ProfileInfo>
        </ProfileGrid>
      </PageLayout>
    </>
  );
}
