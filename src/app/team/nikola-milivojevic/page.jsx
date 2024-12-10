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
              He graduated from the Faculty of Law at the University of
              Belgrade, among the top students of his generation. He gained work
              experience in legal practice and in legal affairs in the
              non-governmental sector. Within the BeLegal office, Nikola deals
              with commercial law, real estate and construction, employment and
              immigration law, regulatory and compliance, data protection and
              GDPR.
            </p>
            <br />
            <p>He is fluent in Serbian and English.</p>
            <br />
            <p>
              <b>Practice Areas: </b> Commercial Law, Real Estate, Labor and
              Immigration, Regulatory and Compliance
            </p>
            <p></p>
          </ProfileInfo>
          <br />
        </ProfileGrid>
      </PageLayout>
    </>
  );
}
