import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebar,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function RegulatoryAndCompliance() {
  return (
    <PageLayout>
      <PageHeader>Regulatory and Compliance</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Our Law Office helps companies navigate complex legal frameworks,
          ensuring full compliance with relevant laws and regulations to avoid
          potential fines and other sanctions. We provide strategic legal
          assistance in creating and implementing internal policies and
          procedures that ensure ongoing compliance with applicable legal
          requirements.
          <br />
          <br />
          Our services include:
          <ul class="list-disc pl-6">
            <li>
              {" "}
              Developing and maintaining internal rules and procedures to ensure
              adherence to legal and regulatory standards.
            </li>
            <li>
              Assistance with record-keeping and documentation, ensuring that
              companies can demonstrate compliance when required by authorities.
            </li>
            <li>
              Reviewing existing policies and legal frameworks to ensure they
              align with current laws and regulations.
            </li>
          </ul>
          <br />
          Additionally, we offer expert advice on specific industry regulations,
          including:
          <ul class="list-disc pl-6">
            <li>Data protection and privacy laws.</li>
            <li>Labor law compliance and employee rights.</li>
            <li>Environmental protection regulations.</li>
            <li>
              And other specialized legal areas, depending on the needs of the
              client.
            </li>
          </ul>
          <br />
          With our comprehensive support, companies can confidently maintain
          regulatory compliance and focus on their core business activities.
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
