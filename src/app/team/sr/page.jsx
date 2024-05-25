import {
  ProfileCard,
  TeamGrid,
  TeamPageLayout,
} from "@/components/Team/teamComponents";
import { team } from "@/data/teamData";
export default function Team() {
  return (
    <>
      <TeamPageLayout>
        <div className="flex justify-center text-3xl pb-4 font-semibold">
          Team
        </div>
        <div className="text-base">
          <p>
            U [Naziv Advokatske Kancelarije], naša snaga leži u našim ljudima.
            Naš tim posvećenih profesionalaca je predan pružanju izuzetnih
            pravnih usluga, kombinujući duboko stručnost sa nepokolebljivom
            posvećenošću pravdi. Svaki član našeg tima donosi jedinstven skup
            veština i iskustava, omogućavajući nam da ponudimo sveobuhvatna
            pravna rešenja prilagođena raznovrsnim potrebama naših klijenata.
          </p>
          <p>
            Naši advokati i osoblje nisu samo uspešni u svojim oblastima, već
            dele i zajednički cilj: da postignu najbolje moguće rezultate za
            naše klijente. Bilo da vam je potrebna pomoć u vezi sa [Oblast
            Prakse 1], [Oblast Prakse 2], ili [Oblast Prakse 3], možete verovati
            našem timu da će vam pružiti pronicljiv savet, stratešku
            zastupljenost i nepokolebljivu podršku.
          </p>
        </div>
        <TeamGrid>
          <ProfileCard profile={team.gagic} />
          <ProfileCard profile={team.gagic} />
          <ProfileCard profile={team.gagic} />
          <ProfileCard profile={team.gagic} />
        </TeamGrid>
      </TeamPageLayout>
    </>
  );
}
