import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebar,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function Startups() {
  return (
    <PageLayout>
      <PageHeader>Startups</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Our Law Office offers comprehensive legal support to clients at every
          stage of their start-up journey—from establishment to growth and
          protection. We provide strategic advice on the optimal legal structure
          for start-ups, including whether to establish as an entrepreneur,
          limited liability company (LLC), or another suitable form.
          <br />
          <br />
          Our services include:
          <ul class="list-disc pl-6">
            <li>
              Guidance on legal compliance, ensuring that your start-up adheres
              to all relevant local and international regulations.
            </li>
            <li>
              Assistance with intellectual property protection, including filing
              patent applications and safeguarding your innovations.
            </li>
            <li>
              Advice on fundraising, equity distribution, and other
              business-critical matters.
            </li>
          </ul>
          <br />
          We are committed to helping start-ups navigate the complex legal
          landscape, protecting their intellectual property and ensuring
          long-term business success.
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
