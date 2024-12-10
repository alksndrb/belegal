import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebar,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function WhiteCollarCrimes() {
  return (
    <PageLayout>
      <PageHeader>White Collar Crimes</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Our Law Office specializes in legal assistance for white-collar
          crimes, with deep expertise in financial regulations, corporate law,
          and tax law. We support individuals and businesses facing legal
          proceedings related to financial and corporate crimes, including
          fraud, tax evasion, insider trading, embezzlement, money laundering,
          and bribery.
          <br />
          <br />
          The services we offer include:
          <ul class="list-disc pl-6">
            <li>
              Providing support during pre-investigation phases, including
              responding to inquiries from regulatory bodies and law enforcement
              agencies.
            </li>
            <li>
              Internal investigations, assisting clients in identifying and
              resolving potential compliance issues within their organization.
            </li>
            <li>
              Criminal defense, delivering robust defense strategies to
              safeguard clients&apos; interests and reputation.
            </li>
          </ul>
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
