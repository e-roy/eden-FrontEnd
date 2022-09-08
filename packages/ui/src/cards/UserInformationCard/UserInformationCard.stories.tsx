import { ComponentMeta, ComponentStory } from "@storybook/react";
import { getPreviusProjects } from "storybook/mocks";

import { UserInformationCard } from "./UserInformationCard";

export default {
  title: "Cards/UserInformationCard",
  component: UserInformationCard,
  argTypes: {},
} as ComponentMeta<typeof UserInformationCard>;

const Template: ComponentStory<typeof UserInformationCard> = (args) => (
  <UserInformationCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  previousProjects: getPreviusProjects(),
  isEditable: true,
};
