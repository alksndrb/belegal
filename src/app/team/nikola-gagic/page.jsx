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
              <b>Practice Areas: </b> Corporate Law, Tax Law, IT Law, Energy and
              Infrastructure, Environmental Law
            </p>
            <p></p>
          </ProfileInfo>
        </ProfileGrid>
      </PageLayout>
    </>
  );
}
