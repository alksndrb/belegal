import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebar,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function EmploymentAndImmigration() {
  return (
    <PageLayout>
      <PageHeader>Employment and Immigration</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Our Law Office provides comprehensive legal services in the area of
          employment law, assisting both employers and employees in navigating
          the complexities of labor regulations. We offer expert advice and
          support to ensure full compliance with employment laws, focusing on
          the protection of workers&apos; rights and the optimization of
          employer-employee relationships.
          <br />
          <br />
          We assist companies with a broad range of employment law matters,
          including:
          <ul class="list-disc pl-6">
            <li>
              Drafting and reviewing employment contracts to ensure they meet
              legal standards and protect both employer and employee interests.
            </li>
            <li>
              Advising on labor rights and obligations, such as working hours,
              compensation, benefits, termination, and dispute resolution.
            </li>
            <li>
              Guidance on workplace policies and procedures, ensuring that
              companies meet their obligations in areas such as workplace
              safety, anti-discrimination, etc.
            </li>
            <li>
              Employee termination procedures, ensuring compliance with local
              labor laws and protecting businesses from potential legal
              disputes.
            </li>
            <li>
              Collective labor law matters, including negotiations with unions,
              and advising on collective bargaining agreements.
            </li>
          </ul>
          <br />
          In addition to employment law, our firm also provides specialized
          legal assistance in immigration law, helping companies and foreign
          workers navigate the complexities of work permits, residence permits,
          and visas. This service includes:
          <ul class="list-disc pl-6">
            <li>
              Assistance in obtaining work visas and residence permits for
              foreign workers, ensuring compliance with the Foreigners Act and
              other relevant immigration regulations.
            </li>
            <li>
              Guidance on the legal employment of foreign nationals, including
              securing the proper permits and ensuring all requirements are met
              for foreign employees to legally work in Serbia.
            </li>
            <li>
              Helping businesses collect the necessary documentation for both
              the employer and the foreign employee, ensuring a smooth process
              in obtaining permits.
            </li>
          </ul>
          <br />
          Our team offers a holistic approach to both employment law and
          immigration law, ensuring that companies and employees—domestic and
          foreign—are fully compliant with Serbian regulations. With our expert
          assistance, clients can focus on growth and operations without
          concerns over legal complexities.
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
