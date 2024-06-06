import {
  CorePracticeContent,
  CorePracticeHeader2,
  CorePracticeLayout,
  CorePracticeSidebar,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function CommercialLaw() {
  return (
    <PageLayout>
      <PageHeader>Commercial Law</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <CorePracticeHeader2>Corporate</CorePracticeHeader2>
          Registration of business entities and maintenance of their corporate
          policy and acts. We provide legal advice on incorporation, choice of a
          legal form, on defining interrelations of the shareholders and on
          corporate governance issues.
          <CorePracticeHeader2>M&A</CorePracticeHeader2>
          We provide our clients with all of the legal support they need to
          achieve their business objectives. We have advised companies of all
          sizes in expanding their business operations in Serbia. We offer legal
          advice and other legal assistance in all merger and acquisition
          activities.
          <CorePracticeHeader2>Banking & Finance</CorePracticeHeader2>
          We advise banks, insurers, private equity funds, hedge funds,
          investment firms and other financial institutions on all manner of
          financial agreements, from structuring transactions to raising
          capital, restructuring debt, project finance and loan and credit
          agreements.
          <CorePracticeHeader2>Competition</CorePracticeHeader2>
          We have the knowledge to manage all competition needs and we advise on
          cutting edge competition issues to a wide range of legal entities in
          various sectors. BeLegal Office is experienced in proceedings on prior
          notification of concentrations, analysis and representing clients in
          case of mergers, acquisitions and joint ventures and in advising
          clients regarding compliance with competition regulations.
          <CorePracticeHeader2>State aid</CorePracticeHeader2>
          Since transactions involving the public and government sector usually
          include some form of government support, we advise clients in
          structuring transactions to minimize exposure to state aid-related
          risks and achieve successful cooperation with the public sector.
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
