import {
  ProfileCard,
  TeamGrid,
  TeamPageLayout,
} from "@/components/Team/teamComponents";
import { team } from "@/data/teamData";
export default function Team() {
  return (
    <>
      <TeamPageLayout>
        <div className="flex justify-center text-3xl pb-4 font-semibold">
          Team
        </div>
        <div className="text-base">
          <p>
            At [Law Firm Name], our strength lies in our people. Our team of
            dedicated professionals is committed to providing exceptional legal
            services, combining profound expertise with an unwavering dedication
            to justice. Each member of our firm brings a unique set of skills
            and experiences, allowing us to offer comprehensive legal solutions
            tailored to meet the diverse needs of our clients.
          </p>
          <p>
            Our attorneys and staff are not only accomplished in their
            respective fields but also share a common goal: to achieve the best
            possible outcomes for our clients. Whether you need assistance with
            [Area of Practice 1], [Area of Practice 2], or [Area of Practice 3],
            you can trust our team to provide insightful advice, strategic
            representation, and unwavering support.
          </p>
        </div>
        <TeamGrid>
          <ProfileCard profile={team.gagic} />
          <ProfileCard profile={team.gagic} />
          <ProfileCard profile={team.gagic} />
          <ProfileCard profile={team.gagic} />
        </TeamGrid>
      </TeamPageLayout>
    </>
  );
}
