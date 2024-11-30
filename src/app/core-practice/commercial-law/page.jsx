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
          <br />
          Our Law Office provides comprehensive legal services across all areas
          of commercial law, assisting clients in navigating the legal
          challenges of modern business. From corporate governance to complex
          transactions, we offer strategic advice and tailored solutions that
          help businesses succeed.
          <CorePracticeHeader2>Corporate</CorePracticeHeader2>
          Our team delivers expert legal support for companies at every stage of
          their lifecycle, including:
          <ul class="list-disc pl-6">
            <li>
              Business formation and structuring: Advising on the most suitable
              legal form for your business (LLC, JSC, partnerships, etc.) and
              ensuring compliance with all registration requirements.
            </li>
            <li>
              Corporate governance: Drafting internal policies, corporate
              bylaws, and shareholder agreements to ensure smooth governance and
              alignment with best practices.
            </li>
            <li>
              Restructuring and reorganizations: Supporting companies through
              mergers, demergers, spin-offs, and other restructuring processes,
              ensuring seamless legal transitions.
            </li>
            <li>
              Corporate compliance: Providing guidance on regulatory filings,
              annual reporting, and adherence to Serbian corporate laws. Mergers
              & Acquisitions (M&A).
            </li>
          </ul>
          <CorePracticeHeader2>Commercial Contracts</CorePracticeHeader2>
          We specialize in drafting, negotiating, and reviewing a wide range of
          commercial agreements essential to business operations, such as:
          <ul class="list-disc pl-6">
            <li>Service agreements</li>
            <li>Sales and purchase contracts</li>
            <li>Distribution and supply chain agreements</li>
            <li>Licensing and franchising contracts</li>
            <li>Partnership and joint venture agreements</li>
            <li>Non-disclosure agreements (NDAs)</li>
          </ul>
          Our goal is to craft clear, enforceable agreements that safeguard our
          clients&apos; interests and minimize potential risks.
          <CorePracticeHeader2>
            Mergers & Acquisitions (M&A)
          </CorePracticeHeader2>
          Our Law Office offers full legal support in all phases of mergers and
          acquisitions, helping clients achieve their business objectives
          efficiently and securely. We have successfully represented companies
          of all sizes in expanding their operations through:
          <ul class="list-disc pl-6">
            <li>
              Conducting due diligence processes to assess risks and
              opportunities.
            </li>
            <li>
              Structuring and negotiating M&A deals in alignment with regulatory
              requirements.
            </li>
            <li>
              Drafting transaction agreements, including sale and purchase
              agreements (SPAs) and shareholders&apos; agreements.
            </li>
            <li>
              Managing regulatory approvals and compliance during and after the
              transaction.
            </li>
          </ul>
          <CorePracticeHeader2>Banking & Finance</CorePracticeHeader2>
          We provide expert legal advice to financial institutions, private
          equity funds, investment firms, and businesses in matters related to:
          <ul class="list-disc pl-6">
            <li>Structuring transactions and raising capital.</li>
            <li>
              Drafting and negotiating loan agreements, credit facilities, and
              project financing arrangements.
            </li>
            <li>Assisting with debt restructuring.</li>
            <li>
              Ensuring compliance with banking regulations and financial
              industry standards.
            </li>
          </ul>
          Our deep understanding of the financial sector enables us to offer
          practical solutions that align with our clients&apos; commercial
          objectives.
          <CorePracticeHeader2>Competition Law</CorePracticeHeader2>
          Our expertise in competition law enables us to handle all aspects of
          compliance and legal challenges in this field. We offer strategic
          advice on cutting-edge competition matters to clients across diverse
          sectors.
          <br />
          Our Law Office is well-versed in:
          <ul class="list-disc pl-6">
            <li>
              Handling prior notifications of concentrations (mergers,
              acquisitions, and joint ventures).
            </li>
            <li>Conducting in-depth market analyses.</li>
            <li>
              Representing clients in proceedings related to competition
              compliance.
            </li>
            <li>
              We ensure that our clients&apos; operations align with Serbian and
              international competition regulations.
            </li>
          </ul>
          <CorePracticeHeader2>Antitrust</CorePracticeHeader2>
          Our team provides the necessary legal support to ensure full
          compliance with antitrust laws and safeguard our clients&apos; rights
          to fair market competition. We help businesses navigate regulatory
          frameworks and address any antitrust concerns that may arise.
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
