import { jcal2prettyJSON } from './jcal2prettyJSON';
import { JCALNode } from './type';

const jcal: JCALNode = [
  'vcalendar',
  [
    ['prodid', {}, 'text', '-//Example Corp.//Example Client//EN'],
    ['version', {}, 'text', '2.0'],
  ],
  [
    [
      'vtimezone',
      [
        ['last-modified', {}, 'date-time', '2004-01-10T03:28:45Z'],
        ['tzid', {}, 'text', 'US/Eastern'],
      ],
      [
        [
          'daylight',
          [
            ['dtstart', {}, 'date-time', '2000-04-04T02:00:00'],
            [
              'rrule',
              {},
              'recur',
              {
                freq: 'YEARLY',
                byday: '1SU',
                bymonth: 4,
              },
            ],
            ['tzname', {}, 'text', 'EDT'],
            ['tzoffsetfrom', {}, 'utc-offset', '-05:00'],
            ['tzoffsetto', {}, 'utc-offset', '-04:00'],
          ],
          [],
        ],
        [
          'standard',
          [
            ['dtstart', {}, 'date-time', '2000-10-26T02:00:00'],
            [
              'rrule',
              {},
              'recur',
              {
                freq: 'YEARLY',
                byday: '1SU',
                bymonth: 10,
              },
            ],
            ['tzname', {}, 'text', 'EST'],
            ['tzoffsetfrom', {}, 'utc-offset', '-04:00'],
            ['tzoffsetto', {}, 'utc-offset', '-05:00'],
          ],
          [],
        ],
      ],
    ],
    [
      'vevent',
      [
        ['dtstamp', {}, 'date-time', '2006-02-06T00:11:21Z'],
        ['dtstart', { tzid: 'US/Eastern' }, 'date-time', '2006-01-02T12:00:00'],
        ['duration', {}, 'duration', 'PT1H'],
        ['rrule', {}, 'recur', { freq: 'DAILY', count: 5 }],
        ['rdate', { tzid: 'US/Eastern' }, 'period', '2006-01-02T15:00:00/PT2H'],
        ['summary', {}, 'text', 'Event #2'],
        [
          'description',
          {},
          'text',
          'We are having a meeting all this week at 12 pm for one hour, with an additional meeting on the first day 2 hours long.\nPlease bring your own lunch for the 12 pm meetings.',
        ],
        ['uid', {}, 'text', '00959BC664CA650E933C892C@example.com'],
      ],
      [],
    ],
    [
      'vevent',
      [
        ['dtstamp', {}, 'date-time', '2006-02-06T00:11:21Z'],
        ['dtstart', { tzid: 'US/Eastern' }, 'date-time', '2006-01-02T14:00:00'],
        ['duration', {}, 'duration', 'PT1H'],
        ['recurrence-id', { tzid: 'US/Eastern' }, 'date-time', '2006-01-04T12:00:00'],
        ['summary', {}, 'text', 'Event #2'],
        ['uid', {}, 'text', '00959BC664CA650E933C892C@example.com'],
      ],
      [],
    ],
  ],
];

console.log(JSON.stringify(jcal2prettyJSON(jcal)));
