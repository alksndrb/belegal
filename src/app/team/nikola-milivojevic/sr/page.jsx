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
        <PageHeader>{team.milivojevic.name}</PageHeader>
        <ProfileGrid>
          <ProfileImage imgSrc={team.milivojevic.image} />
          <ProfileInfo
            phone={team.milivojevic.phone}
            email={team.milivojevic.email}
          >
            <br />
            <p>
              Diplomirao je na Pravnom fakultetu Univerziteta u Beogradu, u
              grupi najboljih studenata svoje generacije. Radno iskustvo sticao
              je u advokaturi i u pravnim poslovima u nevladinom sektoru. U
              okviru kancelarije BeLegal Nikola je pruža usluge iz privrednog
              prava, usluge vezane za nepokretnosti, radno i imigraciono pravo,
              te je zadužen za oblast regulatorne reforme i usklađenosti,
              zaštite podataka o ličnosti i GDPR.
            </p>
            <br />
            <p>Tečno govori srpski i engleski jezik.</p>
            <br />
            <p>
              <b>Oblasti: </b> Privredno pravo, Nepokretnosti i izgradnja, Radno
              i imigraciono pravo, Regulatorna reforma i usklađenost
            </p>
            <p></p>
          </ProfileInfo>
        </ProfileGrid>
      </PageLayout>
    </>
  );
}
