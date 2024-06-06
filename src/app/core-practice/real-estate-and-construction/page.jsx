import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebar,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function RealEstateAndConstruction() {
  return (
    <PageLayout>
      <PageHeader>Real Estate and Construction</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Our law office performs legal analyzes of property-legal documents
          related to construction investments and transactions related to the
          purchase and sale of real estate.
          <br />
          <br />
          Also, our team proactively participates in the negotiations and
          preparation of pre-sale contracts and contracts for all types of real
          estate. In this regard, we provide the entire spectrum of services
          during the entire process of construction of facilities. We
          participate in obtaining all kinds of permits in connection with the
          construction of facilities and the realization of projects.
          <br />
          <br />
          On the other hand, our specialized team provides legal services
          related to public-private partnerships and concessions throughout the
          entire process: representing clients before administrative
          authorities, drafting contracts and participating in negotiations on
          the realization of public-private partnerships.
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
