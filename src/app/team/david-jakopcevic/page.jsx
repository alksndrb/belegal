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
            <p>
              <b>Practice Areas: </b>
            </p>
          </ProfileInfo>
        </ProfileGrid>
      </PageLayout>
    </>
  );
}
