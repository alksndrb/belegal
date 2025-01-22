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
            <p>David is the founder of the law firm Be Legal.</p>
            <br />
            <p>
              He graduated from the Faculty of Law at the University of Belgrade
              in 2018.
            </p>
            <br />
            <p>
              Within our law firm, David specializes in corporate law and
              intellectual property law. He advises clients in the fields of
              media, technology, communications, and sports law. Additionally,
              he represents clients in commercial disputes as well as domestic
              and international arbitration proceedings.
            </p>
            <br />
            <p>He is fluent in Serbian and English.</p>
            <br />
            <p>
              <b>Areas of Expertise: </b> Corporate Law, Intellectual Property
              Law, Media, Technology, and Communications, Sports Law, Dispute
              Resolution, and Arbitration Law
            </p>
            <p></p>
          </ProfileInfo>
        </ProfileGrid>
      </PageLayout>
    </>
  );
}
