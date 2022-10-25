import {
  AppUserLayout,
  Card,
  FiltersCard,
  GridItemNine,
  GridItemThree,
  GridLayout,
  SEO,
  StaticCard,
  UserProfileCard,
} from "@eden/package-ui";

import BOUNTY_MOCK from "../../../utils/mock/bountyMock";
import type { NextPageWithLayout } from "../../_app";

const BountyPage: NextPageWithLayout = () => {
  const handleSetSkills = (val: any) => {
    console.log(val);
  };
  const handleSetHoursPerWeek = (val: any) => {
    console.log(val);
  };
  const handleSetBudget = (val: any) => {
    console.log(val);
  };
  const handleDeleteSkill = (val: any) => {
    console.log(val);
  };

  console.log(BOUNTY_MOCK);

  return (
    <>
      <SEO />
      <GridLayout>
        <GridItemThree className="h-85 scrollbar-hide overflow-scroll">
          <UserProfileCard />
          <FiltersCard
            defaultValue={{}}
            skills={[]}
            handleSetSkills={handleSetSkills}
            handleDeleteSkill={handleDeleteSkill}
            handleSetHoursPerWeek={handleSetHoursPerWeek}
            handleSetBudget={handleSetBudget}
          />
        </GridItemThree>

        <GridItemNine className="">
          <Card className="scrollbar-hide h-85 overflow-scroll bg-white p-4">
            <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {BOUNTY_MOCK.Result.map((item, index) => (
                <StaticCard
                  key={index}
                  item={item}
                  resultCardFlag={BOUNTY_MOCK?.ResultCardShowFlag}
                  resultPopUpFlag={BOUNTY_MOCK?.ResultPopUpShowFlag}
                />
              ))}
            </div>
          </Card>
        </GridItemNine>
      </GridLayout>
    </>
  );
};

BountyPage.getLayout = (page) => <AppUserLayout>{page}</AppUserLayout>;

export default BountyPage;
