import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebar,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function DataProtectionAndGDPR() {
  return (
    <PageLayout>
      <PageHeader>Data Protection and GDPR</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Our Law Office offers a comprehensive range of legal services to help
          legal entities and other organizations achieve compliance with data
          protection legislation, including the General Data Protection
          Regulation Law (GDPR) and other local and international data
          protection laws.
          <br />
          <br />
          We provide expert legal assistance in the following areas:
          <ul class="list-disc pl-6">
            <li>
              Compliance assessments: We conduct thorough assessments to
              evaluate an organization&apos;s current compliance with data
              protection laws and identify any gaps or areas for improvement.
            </li>
            <li>
              {" "}
              Policy drafting: We assist in creating tailored data protection
              policies, data processing agreements, and other necessary legal
              documents to ensure compliance. These may include:
            </li>
          </ul>
          <br />
          In addition to local regulations, we also provide legal support to
          ensure compliance with international data protection laws, advising on
          cross-border data transfers, international data protection frameworks,
          and the legal implications of doing business in jurisdictions with
          stricter data protection laws.
          <br />
          <br />
          Our goal is to help clients protect personal data, mitigate risks, and
          avoid potential fines or reputational damage while ensuring their data
          protection practices align with both local and global standards. We
          work closely with businesses to create sustainable and effective data
          protection strategies, ensuring long-term compliance and a strong data
          protection culture within the organization.
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
