import {
  PageHeader,
  PageLayout,
  PageText,
} from "@/components/Global/globalComponents";
import { ProfileCard, TeamGrid } from "@/components/Team/teamComponents";
import { team } from "@/data/teamData";
export default function Team() {
  return (
    <>
      <PageLayout>
        <PageHeader>Team</PageHeader>
        <PageText>
          <p>
            At BeLegal, our strength lies in our people. Our team of dedicated
            professionals is committed to providing exceptional legal services,
            combining profound expertise with an unwavering dedication to
            justice. Each member of our firm brings a unique set of skills and
            experiences, allowing us to offer comprehensive legal solutions
            tailored to meet the diverse needs of our clients.
          </p>
          <p>
            Our attorneys and staff are not only accomplished in their
            respective fields but also share a common goal: to achieve the best
            possible outcomes for our clients. Whether you need assistance with
            Commercial Law, Intellectual Property, or Environmental Law, you can
            trust our team to provide insightful advice, strategic
            representation, and unwavering support.
          </p>
        </PageText>
        <TeamGrid>
          <ProfileCard profile={team.gagic} />
          <ProfileCard profile={team.gagic} />
          <ProfileCard profile={team.gagic} />
          <ProfileCard profile={team.gagic} />
        </TeamGrid>
      </PageLayout>
    </>
  );
}
