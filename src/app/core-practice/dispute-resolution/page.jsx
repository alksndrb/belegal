import {
  CorePracticeContent,
  CorePracticeHeader2,
  CorePracticeLayout,
  CorePracticeSidebar,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function DisputeResolution() {
  return (
    <PageLayout>
      <PageHeader>Dispute Resolution</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Our Law Office is committed to helping clients prevent and resolve
          disputes, offering practical and innovative legal solutions tailored
          to their strategic and commercial goals. We provide comprehensive
          legal support across the full spectrum of dispute resolution
          mechanisms, ensuring that our clients’ interests are protected and
          prioritized at every stage.
          <CorePracticeHeader2>Preventive Legal Strategies</CorePracticeHeader2>
          We assist clients in identifying and mitigating potential risks that
          could lead to disputes, providing proactive legal advice to safeguard
          their operations and relationships. By focusing on prevention, we help
          minimize disruptions to our clients' business activities.
          <CorePracticeHeader2>Litigation Services</CorePracticeHeader2>
          When disputes escalate, we provide strong representation in litigation
          proceedings before all courts and administrative bodies in Serbia. Our
          team is experienced in handling:
          <ul class="list-disc pl-6">
            <li>Civil and commercial disputes</li>
            <li>Contractual claims and breaches</li>
            <li>Employment disputes</li>
            <li>Intellectual property disputes</li>
            <li>Debt recovery and enforcement procedures</li>
          </ul>
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
