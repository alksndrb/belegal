import {
  CorePracticeContent,
  CorePracticeHeader2,
  CorePracticeLayout,
  CorePracticeSidebar,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function DebtCollectionAndEnforcement() {
  return (
    <PageLayout>
      <PageHeader>Debt Collection and Enforcement</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Our Law Office offers comprehensive legal services to address debt
          collection challenges, utilizing both out-of-court settlements and
          formal court enforcement procedures. We are dedicated to protecting
          the interests of our clients and ensuring swift and effective
          resolution of debt-related issues.
          <CorePracticeHeader2>
            Out-of-Court Debt Collection
          </CorePracticeHeader2>
          We prioritize resolving debt disputes amicably whenever possible,
          employing negotiation and mediation to recover debts without the need
          for prolonged litigation. Our approach aims to save time and resources
          for our clients while maintaining professional relationships with
          debtors.
          <CorePracticeHeader2>
            Court Enforcement Procedures
          </CorePracticeHeader2>
          For cases requiring formal legal action, we provide robust
          representation for both domestic and international clients in
          enforcement procedures across all courts in Serbia. Our services
          include:
          <ul class="list-disc pl-6">
            <li>
              {" "}
              Filing proposals for enforcement procedures on behalf of clients,
              ensuring compliance with all legal requirements.
            </li>
            <li>
              Monitoring and managing the enforcement process, collaborating
              closely with the courts and public enforcers to achieve the most
              favorable outcome.
            </li>
            <li>
              Representing clients in all stages of the enforcement procedure,
              addressing disputes and ensuring the execution of judgments or
              other enforceable titles.
            </li>
          </ul>
          <CorePracticeHeader2>
            Tailored Solutions for International Clients
          </CorePracticeHeader2>
          For international clients dealing with cross-border debt collection,
          we offer specialized support, ensuring compliance with Serbian law.
          <br />
          <br />
          With our expertise, clients can trust that their debt collection
          matters will be handled efficiently, professionally, and in full
          accordance with the law. We aim to deliver timely and effective
          solutions that safeguard our clients' financial interests.
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
