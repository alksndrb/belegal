import {
  CorePracticeContent,
  CorePracticeHeader2,
  CorePracticeLayout,
  CorePracticeSidebar,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function EnvironmentalLaw() {
  return (
    <PageLayout>
      <PageHeader>Environmental Law</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Environmental protection is a dynamic and evolving area of law that
          requires specialized knowledge and dedicated legal expertise. Our Law
          Office offers comprehensive legal services focused on environmental
          law, providing clients with guidance on navigating the complexities of
          Serbian environmental regulations and ensuring compliance with both
          national and international standards.
          <br />
          <br />
          Our services include:
          <ul class="list-disc pl-6">
            <li>
              Legal counseling and guidance in accordance with the applicable
              environmental laws of the Republic of Serbia.
            </li>
            <li>
              Assistance in obtaining the necessary environmental permits and
              licenses, such as those related to water management, forest
              protection, waste management, and land use.
            </li>
            <li>
              Advising on environmentally sustainable practices and helping
              businesses implement policies that align with sustainable
              development goals.
            </li>
          </ul>
          <br />
          We place strong emphasis on the legal management and implementation of
          environmental projects, ensuring full compliance with regulations in
          the following areas:
          <br />
          <br />
          <ul class="list-disc pl-6">
            <li>
              Water management: Including the use and protection of water
              resources.
            </li>
            <li>
              Forest management: Addressing conservation and sustainable use of
              forest resources.
            </li>
            <li>
              Waste management: Guiding businesses in waste disposal and
              recycling practices in compliance with regulations.
            </li>
            <li>
              Sustainable development: Helping businesses adopt practices that
              reduce their environmental impact while supporting long-term
              economic and social goals.
            </li>
          </ul>
          <br />
          Additionally, we provide expert advice on specific environmental
          issues, including:
          <br />
          <br />
          <ul>
            <li>
              Air pollution, including compliance with emission standards and
              regulations.
            </li>
            <li>
              Wastewater treatment, ensuring that companies meet legal
              obligations in water quality management.
            </li>
            <li>
              Environmental impact assessments (EIAs) and strategic
              environmental impact assessments (SEA), ensuring that projects are
              evaluated for potential environmental risks before they are
              undertaken.
            </li>
          </ul>
          <CorePracticeHeader2>Energy Law:</CorePracticeHeader2>
          The energy sector is one of the most promising and rapidly developing
          areas of the economy. Our multidisciplinary team offers specialized
          legal advisory services in key energy areas, including the production,
          transportation, and distribution of electricity, gas, and oil. We
          provide legal support across various stages of energy projects, from
          development to implementation, and ensure compliance with all
          environmental regulations.
          <br />
          <br />
          We are particularly experienced in the field of renewable energy
          sources, which represent the most promising and sustainable part of
          energy development. Our services in renewable energy include:
          <ul class="list-disc pl-6">
            <li>
              Legal analyses related to energy projects, ensuring compliance
              with regulatory frameworks.
            </li>
            <li>
              Obtaining all necessary permits and licenses for the development
              and operation of renewable energy projects, such as solar, wind,
              hydro, and biomass.
            </li>
            <li>
              Monitoring the construction process, ensuring that all
              environmental requirements are met and that the project adheres to
              sustainability and environmental protection regulations throughout
              its lifecycle.
            </li>
          </ul>
          <br />
          Our expertise in environmental law and the energy sector ensures that
          businesses not only meet their regulatory obligations but also
          contribute positively to environmental preservation and sustainable
          energy development.
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
