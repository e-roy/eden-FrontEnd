import {
  MatchMembersToSkillOutput,
  Members,
} from "@eden/package-graphql/generated";
import { faker } from "@faker-js/faker";

import { memberBio } from "../data";
import {
  getEndorsementsTypeMockArray,
  getLinkTypeMock,
  getNodesTypeMockArray,
  getPreviusProjectsTypeMockArray,
  getProjectMemberTypeMockArray,
  getRoleTemplateTypeMock,
  getSkillsPercentageTypeMockArray,
  getSkillTypeMemberMockArray,
} from "../typeMocks";
import { randomPercentage } from "../utils";

export const getMatchingMember = (): MatchMembersToSkillOutput =>
  ({
    _id: String(faker.random.numeric(5)),
    member: getMember(),
    skillsPercentage: getSkillsPercentageTypeMockArray(
      Number(faker.random.numeric(1))
    ),
    matchPercentage: {
      totalPercentage: randomPercentage(),
      skillTotalPercentage: randomPercentage(),
      hoursPercentage: randomPercentage(),
      budgetPercentage: randomPercentage(),
    },
  } as any);

export const getMatchingMemberArray = (
  total: number
): MatchMembersToSkillOutput[] =>
  Array.from({ length: total }, () => getMatchingMember());

export const getMember = (): Members => ({
  _id: String(faker.random.numeric(5)),
  attributes: {
    Coordinator: Number(faker.random.numeric(1)),
    Director: Number(faker.random.numeric(1)),
    Helper: Number(faker.random.numeric(1)),
    Inspirer: Number(faker.random.numeric(1)),
    Motivator: Number(faker.random.numeric(1)),
    Observer: Number(faker.random.numeric(1)),
    Reformer: Number(faker.random.numeric(1)),
    Supporter: Number(faker.random.numeric(1)),
  },
  bio: faker.helpers.uniqueArray(memberBio, 1)[0].bio,
  content: {
    interest: faker.lorem.lines(),
    mostProud: faker.lorem.sentences(5),
    showCaseAbility: faker.lorem.sentences(4),
  },
  discordAvatar: faker.internet.avatar(),
  discordName: faker.internet.userName(),
  discriminator: faker.random.numeric(4),
  hoursPerWeek: faker.datatype.number({ min: 2, max: 36, precision: 1 }),
  interest: faker.lorem.paragraph(),
  links: getLinkTypeMock,
  memberRole: getRoleTemplateTypeMock(),
  previusProjects: getPreviusProjectsTypeMockArray(3),
  projects: getProjectMemberTypeMockArray(14),
  serverID: Array.from(
    { length: faker.datatype.number({ min: 2, max: 8, precision: 1 }) },
    () => faker.random.numeric(12)
  ),
  skills: getSkillTypeMemberMockArray(
    faker.datatype.number({ min: 2, max: 36, precision: 1 })
  ),
  nodes: getNodesTypeMockArray(
    faker.datatype.number({ min: 2, max: 36, precision: 1 })
  ),
  endorsements: getEndorsementsTypeMockArray(
    faker.datatype.number({ min: 2, max: 36, precision: 1 })
  ),
  timeZone: faker.address.timeZone(),
});

export const getMemberArray = (total: number): Members[] =>
  Array.from({ length: total }, () => getMember());
