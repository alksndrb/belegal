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
              He graduated from the Faculty of Law, University of Belgrade and
              during his studies, he participated in and won numerous oratory
              competitions.
            </p>
            <br />
            <p>
              Nikola works in the Corporate, Debt collection and Enforcement,
              Labor Law, Family Law.
            </p>
            <br />
            <p>He is fluent in Serbian and English.</p>
            <br />
            <p>
              <b>Practice Areas: </b> Corporate Law, Real Estate, Family law,
              Labour law.
            </p>
          </ProfileInfo>
          <br />
        </ProfileGrid>
      </PageLayout>
    </>
  );
}
