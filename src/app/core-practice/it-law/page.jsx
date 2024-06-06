import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebar,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function ItLaw() {
  return (
    <PageLayout>
      <PageHeader>IT Law</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Our Law Office offers legal support to the users of internet, related
          to the internet and technology, such as e – commerce, protection of
          data privacy, copyrights on internet, etc.
          <br />
          <br />
          Our Law Office provides legal services and consultation in the field
          of BLOCKCHAIN technology and cryptocurrencies, such as providing legal
          advice on ICO (initial coin offering) drafting legal opinions on
          compliance of cryptocurrencies and ICO with the regulations of the
          Republic of Serbia, providing legal advice on entering Serbian market
          during business and opening of exchange offices for cryptocurrencies.
          <br />
          <br />
          Furthermore, our law offices offers legal services of consultation and
          representation for technology and hi – tech companies, and for start –
          ups, through all phases of company business.
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
