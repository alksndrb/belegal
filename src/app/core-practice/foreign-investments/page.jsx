import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebar,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function ForeignInvestments() {
  return (
    <PageLayout>
      <PageHeader>Foreign Investments</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Our Law Office provides comprehensive legal support to foreign
          investors navigating the regulatory landscape in Serbia. We offer
          expert advice on the relevant laws and regulations surrounding foreign
          investments, helping investors establish a strong legal foundation for
          their business operations.
          <br />
          <br />
          Our services include:
          <ul class="list-disc pl-6">
            <li>
              Choosing the appropriate legal form for your company, whether it’s
              a joint-stock company, limited liability company (LLC), or another
              structure that best suits your business needs.
            </li>
            <li>
              Legal advice on tax and fiscal obligations, ensuring compliance
              with Serbian tax laws and regulations.
            </li>
            <li>
              Assistance with obtaining the necessary permits and licenses
              required to successfully implement foreign investments.
            </li>
          </ul>
          <br />
          We focus on ensuring full legal compliance, allowing investors to
          concentrate on the growth and development of their business activities
          without concerns about regulatory issues.
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
