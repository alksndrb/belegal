import {
  CorePracticeContent,
  CorePracticeHeader2,
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
          Our Law Office offers comprehensive tax advisory services, providing
          expert guidance in all areas of taxation to meet the needs of
          corporate clients, individuals, and investors. Our goal is to help
          clients navigate complex tax regulations, optimize their tax
          liabilities, and enhance overall business efficiency.
          <br /> <br />
          Our Expertise Covers:
          <ul class="list-disc pl-6">
            <li>
              Corporate income tax: Advising companies on tax planning
              strategies, compliance with corporate tax regulations, and
              optimizing tax positions.
            </li>
            <li>
              Individual income tax: Providing tailored tax solutions to
              individuals, including expatriates, high-net-worth individuals,
              and self-employed professionals.
            </li>
            <li>
              Value Added Tax (VAT): Assisting with VAT compliance, planning,
              and handling issues related to cross-border transactions and
              supply chains.
            </li>
            <li>
              Customs duties: Advising on import/export procedures, duty
              exemptions, and compliance with customs regulations.
            </li>
            <li>
              Government incentives: Helping businesses access and benefit from
              government tax incentives and relief programs, including those
              related to investments, employment, and research and development.
            </li>
            <li>
              Property taxes: Providing guidance on real estate-related taxes,
              including property transfers, ownership, and leasing.
            </li>
          </ul>
          <CorePracticeHeader2>
            Business Optimization Through Tax Advisory
          </CorePracticeHeader2>
          By offering strategic tax advice, our legal team supports clients in:
          <ul class="list-disc pl-6">
            <li>
              Understanding tax liabilities and consequences to ensure
              compliance while avoiding unnecessary penalties or audits.
            </li>
            <li>
              Structuring business operations and transactions in a
              tax-efficient manner.
            </li>
            <li>
              Increasing overall business efficiency by identifying
              opportunities for tax savings and implementing effective tax
              planning strategies.
            </li>
          </ul>
          <CorePracticeHeader2>Cross-Border Taxation</CorePracticeHeader2>
          For international clients and businesses operating across borders, we
          provide specialized advice on double taxation treaties, transfer
          pricing, and the tax implications of international transactions,
          ensuring compliance with Serbian and international tax laws.
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
