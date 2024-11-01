import { Injectable } from '@angular/core';

export type FlatDatum = {
  id: number;
  summary: string;
  speaker: string;
  response_to: number | null;
  topic: string;
};

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: FlatDatum[];

  constructor() {
    this.data = [
      {
        id: 0,
        summary:
          'Justifies nominating Amy Coney Barrett, stating that elections have consequences and the administration has the right to make the nomination.',
        speaker: 'Trump',
        response_to: null,
        topic: 'Supreme Court Nomination',
      },
      {
        id: 1,
        summary:
          'Praises Barrett, calling her a top academic and emphasizing bipartisan support for her qualifications.',
        speaker: 'Trump',
        response_to: 0,
        topic: 'Supreme Court Nomination',
      },
      {
        id: 2,
        summary:
          'States that the Democrats would not hesitate to make a nomination if they were in power and suggests they would have acted more quickly.',
        speaker: 'Trump',
        response_to: 0,
        topic: 'Supreme Court Nomination',
      },
      {
        id: 3,
        summary:
          'Argues that the American people should have a say in the nomination through their vote, and that the nomination should wait until after the election since people are already voting.',
        speaker: 'Biden',
        response_to: 0,
        topic: 'Supreme Court Nomination',
      },
      {
        id: 4,
        summary:
          "Expresses concern that Barrett's appointment could lead to the dismantling of the Affordable Care Act, stripping millions of healthcare coverage, especially regarding pre-existing conditions.",
        speaker: 'Biden',
        response_to: 1,
        topic: 'Healthcare',
      },
      {
        id: 5,
        summary:
          "Challenges Biden's numbers on pre-existing conditions, stating there aren't 100 million people affected and asserts the right to continue the nomination.",
        speaker: 'Trump',
        response_to: 4,
        topic: 'Healthcare',
      },
      {
        id: 6,
        summary:
          "Criticizes Biden's healthcare proposals, claiming that Biden's plan will eliminate private healthcare for 180 million people.",
        speaker: 'Trump',
        response_to: 5,
        topic: 'Healthcare',
      },
      {
        id: 7,
        summary:
          "Denies Trump's claim, stating that the plan would expand Obamacare while allowing people to keep their private insurance.",
        speaker: 'Biden',
        response_to: 6,
        topic: 'Healthcare',
      },
      {
        id: 8,
        summary:
          "Argues that Biden's party wants socialist medicine, while Biden asserts he controls the Democratic Party.",
        speaker: 'Trump',
        response_to: 7,
        topic: 'Healthcare',
      },
      {
        id: 9,
        summary:
          'Emphasizes approval of the Democratic Party platform, which supports Obamacare and pre-existing condition protections.',
        speaker: 'Biden',
        response_to: 8,
        topic: 'Healthcare',
      },
      {
        id: 10,
        summary:
          'Points to the impact of COVID-19, noting the deaths and millions infected, questioning what repealing the Affordable Care Act would mean for those affected.',
        speaker: 'Biden',
        response_to: 8,
        topic: 'Healthcare',
      },
      {
        id: 11,
        summary:
          "Counters by blaming Biden for 308,000 military deaths and argues that under Biden's leadership, the COVID-19 death toll would have been higher.",
        speaker: 'Trump',
        response_to: 10,
        topic: 'COVID-19 Response',
      },
    ];
  }
}
