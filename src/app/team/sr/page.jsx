import {
  PageHeader,
  PageLayout,
  PageText,
} from "@/components/Global/globalComponents";
import { ProfileCard, TeamGrid } from "@/components/Team/teamComponents";
import { team } from "@/data/teamData";
export default function Team() {
  return (
    <>
      <PageLayout>
        <PageHeader>Tim</PageHeader>
        <PageText>
          <p>
            Naša snaga leži u našim ljudima. Naš tim posvećenih profesionalaca
            je predan pružanju izuzetnih pravnih usluga, kombinujući duboko
            stručnost sa nepokolebljivom posvećenošću pravdi. Svaki član našeg
            tima donosi jedinstven skup veština i iskustava, omogućavajući nam
            da ponudimo sveobuhvatna pravna rešenja prilagođena raznovrsnim
            potrebama naših klijenata.
          </p>
          <p>
            Naši advokati i osoblje nisu samo uspešni u svojim oblastima, već
            dele i zajednički cilj: da postignu najbolje moguće rezultate za
            naše klijente. Bilo da vam je potrebna pomoć u vezi sa Privredno
            Pravo, Pravo Intelektualne Svojine, ili Zaštita Životne Sredine,
            možete verovati našem timu da će vam pružiti pronicljiv savet,
            stratešku zastupljenost i nepokolebljivu podršku.
          </p>
        </PageText>
        <TeamGrid>
          <ProfileCard profile={team.gagic} language="sr" />
          <ProfileCard profile={team.milivojevic} language="sr" />
          <ProfileCard profile={team.jakopcevic} language="sr" />
          <ProfileCard profile={team.masal} language="sr" />
        </TeamGrid>
      </PageLayout>
    </>
  );
}
