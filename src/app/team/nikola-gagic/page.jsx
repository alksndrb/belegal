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
            <p>Nikola is the founder of the Gagić Law office.</p>
            <br />
            <p>
              He has graduated from the Faculty of Law, University of Belgrade,
              among the best students in his generation.
            </p>
            <br />
            <p>
              Nikola works in Corporate, Tax, IT, Energy & Infrastructure and
              Environment department of our office.
            </p>
            <br />
            <p>He is fluent in Serbian and English and speaks German.</p>
            <br />
            <p>
              <b>Practice Areas: </b> Corporate Law, Real Estate & Construction,
              Tax Law, IT Law, Foreign Investments, White collar crimes
            </p>
            <p></p>
          </ProfileInfo>
          <br />
        </ProfileGrid>
      </PageLayout>
    </>
  );
}
