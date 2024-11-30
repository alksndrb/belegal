import {
  CorePracticeContent,
  CorePracticeHeader2,
  CorePracticeLayout,
  CorePracticeSidebar,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function ArbitrationAndMediation() {
  return (
    <PageLayout>
      <PageHeader>Arbitration and Mediation</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          In addition to litigation, our Law Office specializes in alternative
          dispute resolution (ADR) methods, including arbitration and mediation,
          which are often more efficient, cost-effective, and confidential
          alternatives to court proceedings.
          <CorePracticeHeader2>Arbitration</CorePracticeHeader2>
          We represent clients in both domestic and international arbitration
          proceedings. Our services include:
          <ul class="list-disc pl-6">
            <li>
              Drafting arbitration clauses to ensure enforceability and
              alignment with client interests.
            </li>
            <li>
              Representing parties before recognized arbitration institutions or
              ad hoc tribunals.
            </li>
            <li>
              Ensuring the enforcement of arbitral awards in compliance with
              local and international legal frameworks.
            </li>
          </ul>
          <CorePracticeHeader2>Mediation</CorePracticeHeader2>
          Mediation offers a collaborative and non-adversarial approach to
          dispute resolution. Our legal team provides:
          <ul class="list-disc pl-6">
            <li>
              Guidance and representation during mediation sessions, ensuring
              that our clients’ interests are clearly communicated and
              effectively negotiated.
            </li>
            <li>
              Assistance in drafting settlement agreements that are legally
              sound and enforceable.
            </li>
            <li>
              Support in resolving disputes quickly, preserving relationships
              and avoiding prolonged conflict.
            </li>
          </ul>
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
