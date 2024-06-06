import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebar,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function TaxLaw() {
  return (
    <PageLayout>
      <PageHeader>Tax Law</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Our tax team offers full service advice in all areas of tax including
          corporate and individual income tax, VAT, customs, government
          incentives and property taxes, etc.
          <br /> <br />
          By providing tax advice, our legal team can assist optimising a
          client’s business by helping to understand tax liabilities and
          consequences, increasing business efficiency.
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
