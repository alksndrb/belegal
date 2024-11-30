import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebar,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function MediaAndTelecommuncationsLaw() {
  return (
    <PageLayout>
      <PageHeader>Media and Telecommuncations Law</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Our law firm provides specialized legal services in the media and
          telecommunications sector, covering all aspects of regulatory
          compliance, intellectual property protection, dispute resolution, and
          legal advisory tailored to this dynamic industry.
          <br />
          <br />
          Our Services Include:
          <ul class="list-disc pl-6">
            <li>
              Regulation and Compliance: Assistance with licensing, regulatory
              advice, and representation before regulatory bodies.
            </li>
            <li>
              Intellectual Property: Drafting copyright and licensing agreements
              and resolving related disputes.
            </li>
            <li>
              Digital Platforms: Legal advice for online businesses, data
              protection, and GDPR compliance.
            </li>
            <li>
              Advertising: Legal support for marketing campaigns and consumer
              protection.
            </li>
            <li>
              Dispute Resolution: Representation in court and arbitration
              proceedings.
            </li>
          </ul>
          <br />
          Our team combines legal expertise with industry experience to provide
          comprehensive support at every stage of your business. Contact us for
          reliable legal assistance!
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
