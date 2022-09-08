import { ComponentMeta, ComponentStory } from "@storybook/react";
import { getMember } from "storybook/mocks";

import { UserCardOnboardParty } from "./UserCardOnboardParty";

export default {
  title: "Cards/UserCardOnboardParty",
  component: UserCardOnboardParty,
  argTypes: {},
} as ComponentMeta<typeof UserCardOnboardParty>;

const Template: ComponentStory<typeof UserCardOnboardParty> = (args) => (
  <UserCardOnboardParty {...args} />
);

export const Default = Template.bind({});
Default.args = {
  member: getMember(),
};
