import { Injectable } from '@angular/core';

export type FlatDatum = {
  id: number;
  summary: string;
  speaker: string;
  response_to: number | null;
  topic: string;
  timestamp?: string;
};

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: FlatDatum[];

  constructor() {
    this.data = [
      {
        id: 1,
        summary:
          "The government's role should be to ensure individuals can reach their full potential. This might involve assisting with education, housing, or necessities without advocating for a total command economy.",
        speaker: 'Destiny',
        response_to: null,
        timestamp: '00:01:50',
        topic: 'Role of Government',
      },
      {
        id: 2,
        summary:
          'The government should not exist just for its own size or tax purposes, but should efficiently fund necessary programs without demonizing success or wealth.',
        speaker: 'Destiny',
        response_to: 1,
        timestamp: '00:02:34',
        topic: 'Role of Government',
      },
      {
        id: 3,
        summary:
          "Government should preserve key liberties and have minimal interference in people's lives, focusing on national defense, property rights, and religious freedom.",
        speaker: 'Ben Shapiro',
        response_to: 1,
        timestamp: '00:03:07',
        topic: 'Role of Government',
      },
      {
        id: 4,
        summary:
          'Local governments are more effective due to their homogeneity and consent, while federal involvement often results in impractical and divisive policies.',
        speaker: 'Ben Shapiro',
        response_to: 3,
        timestamp: '00:03:33',
        topic: 'Local vs. Federal Government',
      },
      {
        id: 5,
        summary:
          'Human nature has good and bad aspects. Society should incentivize good behavior while acknowledging individual agency and equal value before the law.',
        speaker: 'Ben Shapiro',
        response_to: 4,
        timestamp: '00:05:17',
        topic: 'Human Nature',
      },
      {
        id: 6,
        summary:
          "It's unrealistic to expect everyone to have equal skills and abilities; the government's role is not to rectify every inequality but to provide a fair starting point.",
        speaker: 'Ben Shapiro',
        response_to: 5,
        timestamp: '00:05:36',
        topic: 'Equality and Government Role',
      },
      {
        id: 7,
        summary:
          'Economic opportunity should be balanced by free markets and the protection of family as the core social institution.',
        speaker: 'Ben Shapiro',
        response_to: 6,
        timestamp: '00:06:34',
        topic: 'Economic Opportunity',
      },
      {
        id: 8,
        summary:
          'Better funding and technology in schools can increase student potential, but it’s unrealistic to expect everyone to achieve equally due to different starting points.',
        speaker: 'Destiny',
        response_to: 6,
        timestamp: '00:06:49',
        topic: 'Education and Funding',
      },
      {
        id: 9,
        summary:
          'School funding should prioritize core issues like family stability over technological investments or minor facility improvements.',
        speaker: 'Ben Shapiro',
        response_to: 8,
        timestamp: '00:09:00',
        topic: 'Education and Family Structure',
      },
      {
        id: 10,
        summary:
          'Basic school improvements, such as providing air conditioning and meals, could lead to marginal gains in student outcomes.',
        speaker: 'Destiny',
        response_to: 9,
        timestamp: '00:10:17',
        topic: 'School Improvements',
      },
      {
        id: 11,
        summary:
          'Investing in minor school improvements may not solve deeper educational issues related to family structure and societal values.',
        speaker: 'Ben Shapiro',
        response_to: 10,
        timestamp: '00:11:28',
        topic: 'Education and Social Issues',
      },
      {
        id: 12,
        summary:
          'Proposing incremental improvements often gets sidestepped by conservative arguments focusing on deeper social issues, creating a circular debate.',
        speaker: 'Destiny',
        response_to: 11,
        timestamp: '00:12:50',
        topic: 'Debate Strategy',
      },
      {
        id: 13,
        summary:
          'The real issue is a cultural shift away from valuing marriage and stable family structures, not just economic or educational factors.',
        speaker: 'Ben Shapiro',
        response_to: 12,
        timestamp: '00:13:24',
        topic: 'Cultural Values and Family',
      },
      {
        id: 14,
        summary:
          'Economic conditions and increased education delay marriage, which contributes to the rise in out-of-wedlock births.',
        speaker: 'Destiny',
        response_to: 13,
        timestamp: '00:13:52',
        topic: 'Economic Impact on Marriage',
      },
      {
        id: 15,
        summary:
          'The moral status of marriage has shifted culturally, not because of economic circumstances, but due to changes in societal values.',
        speaker: 'Ben Shapiro',
        response_to: 14,
        timestamp: '00:14:16',
        topic: 'Cultural Values and Marriage',
      },
      {
        id: 16,
        summary:
          'Regressing social standards to previous eras, such as promoting shotgun marriages, is unlikely to happen due to societal evolution.',
        speaker: 'Destiny',
        response_to: 15,
        timestamp: '00:14:37',
        topic: 'Social Change and Marriage',
      },
      {
        id: 17,
        summary:
          'History is not linear, and social standards can and do regress, as shown by movements like the rejection of Roe v. Wade.',
        speaker: 'Ben Shapiro',
        response_to: 16,
        timestamp: '00:15:11',
        topic: 'Historical Regression',
      },
    ];
  }
}
