export type Brief = {
  slug: string;
  client: string;
  kicker: string;
  lead: string;
  image: string;
  imageAlt: string;
  role?: {
    image: string;
    imageAlt: string;
    caption: string;
    copy: string;
  };
  tags: readonly [string, string, string];
  outcomes: readonly string[];
  challenge: string;
  solution: readonly string[];
  insights: readonly string[];
};

export const briefs: Record<string, Brief> = {
  fortem: {
    slug: "fortem",
    client: "Fortem Media",
    kicker: "Creative agency · Commercial seat",
    lead: "The ads were not getting seen. We built Unofficial Run Club as the room, and the commercial seat did $1.5M+ in sales.",
    image: "/work/fortem/hero.jpg",
    imageAlt: "Runners moving together on a road, the kind of room a culture brand can own.",
    tags: ["Owned audience", "Offer design", "Demand system"],
    outcomes: [
      "$1.5M+ in sales on the commercial seat.",
      "Unofficial Run Club went from about 4 followers to 64k.",
      "About 1,000 runners a week.",
      "Sport brands asked into a room that was already full.",
    ],
    challenge:
      "The studio could make the work. It was not getting enough impressions, and the click was not high enough. Buying more of the same media would have purchased the same thin attention.",
    solution: [
      "Named the constraint as attention, not talent.",
      "Built Unofficial Run Club as a weekly room, not a content calendar.",
      "Sold one mechanism: culture-led brand growth a buyer could understand in a sitting.",
      "Pointed paid, cold outreach, and the warm graph at that one proof stack.",
    ],
    insights: [
      "Excellent work can still be invisible. The leak was the category, not the craft.",
      "The room earns the fact you are seen. Specific creative earns the click.",
      "Once the category had a name, business development stopped restarting every week.",
    ],
  },
  bybit: {
    slug: "bybit",
    client: "Bybit",
    kicker: "Crypto exchange · Partner system",
    lead: "The market was not short of creators. We replaced the chase with fifty outreaches a week, one CRM, and a proposal path.",
    image: "/work/bybit/hero.jpg",
    imageAlt: "Abstract network of light, standing in for a partner system rather than a single logo.",
    tags: ["Partner system", "CRM & pipeline", "Outbound cadence"],
    outcomes: [
      "Partners split into real segments, with playbooks instead of one generic chase.",
      "A proposal and onboarding path, so interest had somewhere to go.",
      "One CRM as the place a deal lives.",
      "An operating cadence of 50 KOL outreaches a week.",
    ],
    challenge:
      "High velocity was hiding an ordinary leak. VIP conversations and creator conversations were being worked as the same sale, and a week of work vanished when someone travelled.",
    solution: [
      "Split the partners until a VIP conversation and a creator conversation stopped pretending to be the same sale.",
      "Made the offer status and a clean path for their people, not another affiliate link.",
      "Turned the proposal into a path the team could run, and put the deal in one CRM.",
      "Set the cadence at fifty outreaches a week, cold and warm, on purpose.",
    ],
    insights: [
      "A longer list of names was not the constraint. The chase was.",
      "The number is how you know the system is on. It is not a revenue headline.",
      "Exchange revenue stays with Bybit until they are happy for a number to be public.",
    ],
  },
  ethos: {
    slug: "ethos",
    client: "Ethos Performance",
    kicker: "Combat performance · Marketing Coordinator · 2021–2023",
    lead: "The floor was full, and growth was capped by the hour. A new online line did $80k+ in its first 12 months.",
    image: "/work/ethos/floor.jpg",
    imageAlt: "Two coaches on the Ethos Performance floor, working the business beside the training.",
    role: {
      image: "/work/ethos/role.jpg",
      imageAlt:
        "Ethos Performance site page naming Ben Killen as Marketing Coordinator.",
      caption: "Published on the Ethos site · Marketing Coordinator",
      copy: "Ethos published the seat as Marketing Coordinator. The page described Ben as the resident marketing strategist, the person growth ran through, with the job of taking combat performance to a wider audience.",
    },
    tags: ["Offer design", "Conversion site", "Demand system"],
    outcomes: [
      "$80k+ in online revenue in the first 12 months of the new product.",
      "A high-margin offer that does not need another floor hour to exist.",
      "The gym explained as combat performance, not a timetable.",
      "Site, content, traffic, and business development run as one story.",
    ],
    challenge:
      "Great coaching still hits a ceiling when the only thing for sale is time. The coaches were the product, which works until the timetable is full.",
    solution: [
      "Pulled the outcome out of the timetable before marketing it.",
      "Productised a high-margin online line a stranger could buy.",
      "Made the site say the outcome on the first screen.",
      "Kept the $80k on its own line, separate from floor revenue.",
    ],
    insights: [
      "Floor hours and the result were two products sharing one sentence.",
      "If the system cannot sell when you are not in the room, you have renamed the ceiling.",
      "A ranking without a source is a slogan. The $80k is a source.",
    ],
  },
  juicy: {
    slug: "juicy",
    client: "Juicy Fest",
    kicker: "Culture and live · Partner venture",
    lead: "Juicy Fest moved 100,000 tickets across eight cities. 44,000 of them sold in four hours.",
    image: "/work/juicy/hero.jpg",
    imageAlt: "A packed live room, the kind of demand that is pulled rather than bought impression by impression.",
    tags: ["Category diagnosis", "Commercial packaging", "CRM & pipeline"],
    outcomes: [
      "100,000 tickets.",
      "44,000 of them in four hours.",
      "Eight cities across Australia and New Zealand.",
      "Sponsorship and scope written down, so the night is not the whole business.",
    ],
    challenge:
      "Selling faces is a price conversation. A post ends. A roster is not a point of view, and a brand that rents a weekend owns nothing on Monday.",
    solution: [
      "Named the sale as culture, talent, and the room, not an influencer placement.",
      "Let the lineup, the community, and the night stay one offer.",
      "Wrote the scope and the sponsorship so the brand knew what it was buying.",
      "Kept the pipeline in a system that survives the weekend.",
    ],
    insights: [
      "Demand like that is pulled. It is not purchased one impression at a time.",
      "Eight cities means the spike was a method, not a one-night accident.",
      "Rah owns the network. I own the operating system around it.",
    ],
  },
  "scala-lane": {
    slug: "scala-lane",
    client: "Scala Lane",
    kicker: "Property creative · One campaign",
    lead: "When the property ad had a point of view, it clicked at 9%. The benchmark it was read against sits around 2 to 2.5%.",
    image: "/work/scala-lane/hero.jpg",
    imageAlt: "A glass tower, the kind of property ad that disappears unless the angle is specific.",
    tags: ["Performance creative", "Category diagnosis", "Sales path"],
    outcomes: [
      "9% click-through on the campaign.",
      "More than 300% above a property benchmark around 2 to 2.5%.",
      "The number carried into the commercial conversation as proof.",
      "Kept as the click receipt inside Fortem, not a separate agency.",
    ],
    challenge:
      "Property advertising is a sea of the same render. People were not ignoring property. They were ignoring ads with nothing to say.",
    solution: [
      "Refused the commodity ad.",
      "Put a point of view in the frame.",
      "Judged the work on the click, not on whether the asset looked finished.",
      "Used the 9% in the sale, then left the campaign in its place.",
    ],
    insights: [
      "Attention quality is a positioning problem wearing a media costume.",
      "A click-through rate is evidence. It is not a company.",
      "Sharp creative earns the click. The room, elsewhere, earns the fact you get seen at all.",
    ],
  },
  introvert: {
    slug: "introvert",
    client: "Introvert Agency",
    kicker: "B2B agency · 2022",
    lead: "A generalist agency doubled revenue in 12 months by owning one channel: LinkedIn, worked as a relationship, not a menu.",
    image: "/work/introvert/featured.jpg",
    imageAlt: "Introverts Evening Routine, the Introvert Agency show.",
    tags: ["Category diagnosis", "Demand system", "CRM & pipeline"],
    outcomes: [
      "2× revenue in 12 months.",
      "One channel: LinkedIn. Not a digital menu.",
      "One mechanism: research, then the relationship, then the lead.",
      "A weekly system of thought leadership, qualified leads, and a CRM.",
    ],
    challenge:
      "The work was real. The pitch was a menu, and menus get compared on price. Every prospect required a new explanation.",
    solution: [
      "Cut the menu to the one place the buyer already lived.",
      "Rewrote the agency around LinkedIn relationship-based business development.",
      "Ran research first, so the conversation arrived qualified.",
      "Kept one public number. The double. Not a second revenue line beside it.",
    ],
    insights: [
      "Saturation is what a generalist feels. A named process is how you become obvious.",
      "The double did not come from shouting louder. It came from one buyer on one channel.",
      "This is a 2022 Head of Growth seat. The year is part of the truth.",
    ],
  },
  "investors-agency": {
    slug: "investors-agency",
    client: "The Investors Agency",
    kicker: "Property advice · Six months",
    lead: "The sentence was already sharp: financial freedom through investment-grade property. The work was making that sentence survive the sale.",
    image: "/work/investors-agency/hero.jpg",
    imageAlt: "A home with a for-sale sign, the transaction a buyers agency is too easy to blur into.",
    tags: ["Category diagnosis", "Customer success", "Sales path"],
    outcomes: [
      "One promise, held after the yes: financial freedom via investment-grade property.",
      "Customer success installed as the growth system, not a handover.",
      "A six-month Head of Growth seat, November 2022 to May 2023.",
      "The firm’s deal history left with the firm.",
    ],
    challenge:
      "Buyers agencies blur. Same suburbs, same negotiation story. A headline that delivery does not keep is just copy, and a transaction does not get repeated.",
    solution: [
      "Separated the category sentence from a commodity purchase.",
      "Put a system behind the yes, so the week matched the promise.",
      "Kept that sentence in the follow-up, not only in the pitch.",
      "Refused to publish the firm’s book of deals as a personal tally.",
    ],
    insights: [
      "A sharp sentence is not a category until the client experience matches it.",
      "The leak was whether the operation could carry the promise.",
      "Use this in a property or advice room. It is not a volume slide.",
    ],
  },
  "your-corner-360": {
    slug: "your-corner-360",
    client: "Your Corner 360",
    kicker: "Advisory · In install",
    lead: "The firm could do everything, so nobody could describe it. The front door is now Mortgage Destroyer at $995.",
    image: "/work/your-corner-360/hero.jpg",
    imageAlt: "A desk with notes and a laptop, the operating week behind a priced front door.",
    tags: ["Offer design", "CRM & pipeline", "Founder operating system"],
    outcomes: [
      "One wedge: Mortgage Destroyer, instead of a generic service list.",
      "A $995 front door.",
      "About $67.6k of five-year value on the model behind it, if the client ascends.",
      "The founder’s week designed from 30-plus hours toward under eight.",
    ],
    challenge:
      "Leading with everything you can do makes the firm the one nobody can repeat. The valuable client was not “someone who needs a tax return.”",
    solution: [
      "Read the economics already in the firm and named lazy equity as the client worth owning.",
      "Priced a door people can decide on, rather than a marriage.",
      "Pointed paid, the warm list, the site, and the CRM at that same door.",
      "Treated twenty to thirty packages in 90 days as the test, not money already banked.",
    ],
    insights: [
      "The category is named. The cash target is still in front of us.",
      "If the offer only works while the founder delivers it, the trap has a new name.",
      "This is the commercial system around a firm that gives advice. It is not the advice.",
    ],
  },
  futurealty: {
    slug: "futurealty",
    client: "Futurealty",
    kicker: "Buyers agency · In install",
    lead: "The relationships were already there. They were not a pipeline. The install is a method on the site, a CRM, and an approved cadence.",
    image: "/work/futurealty/hero.jpg",
    imageAlt: "A modern house at dusk, the kind of purchase a warm relationship is supposed to become.",
    tags: ["Conversion site", "CRM & pipeline", "Outbound cadence"],
    outcomes: [
      "The constraint named: warm trust that was not in a pipeline.",
      "The site’s job changed from brochure to method.",
      "A CRM, so follow-up is a stage rather than a memory.",
      "Warm outreach on an approved cadence. The client count stays a day-90 target.",
    ],
    challenge:
      "A website refresh would have polished the symptom. The first audience was not strangers. It was people who already had the number and had never been worked as a list.",
    solution: [
      "Refused the website-only brief.",
      "Put the method on the site so the category is legible before anyone is contacted.",
      "Gave the list one owner, and messages the client has approved.",
      "Held two to five new clients a month as the day-90 test, not a result.",
    ],
    insights: [
      "The most expensive audience you will ignore is the one that already trusts you.",
      "Week four is when outreach is actually running, not when the strategy deck is finished.",
      "Publish the install. The count comes after the CRM says it is true.",
    ],
  },
  jobited: {
    slug: "jobited",
    client: "Jobited",
    kicker: "Recruiting · In install",
    lead: "A frontier hiring firm does not have a lead problem. It has a “why you” problem, then a cadence problem. The funnel is now written down.",
    image: "/work/jobited/hero.jpg",
    imageAlt: "A team around laptops, the weekly rhythm of a hiring search rather than a CV shop.",
    tags: ["Category diagnosis", "Outbound cadence", "Partner system"],
    outcomes: [
      "The lane named: frontier and on-chain hiring, not generic recruitment.",
      "A visible model: about 1,000 employer emails, roughly 20 calls, roughly 2 paid outcomes.",
      "Partnerships designed into the rooms those employers already use.",
      "A weekly rhythm. A $30k month stays labelled as the path.",
    ],
    challenge:
      "Speed and fees are how recruiters disappear into each other. Emailing everyone with a job ad produces calls that are not searches.",
    solution: [
      "Refused the generic recruiter frame.",
      "Wrote the funnel down so a broken ratio can be seen.",
      "Went to partnerships, incubators, and hackathons, where the category is already obvious.",
      "Changed the broken step before adding another channel.",
    ],
    insights: [
      "A recruiter without a lane is a fee. A recruiter who understands the work is a category.",
      "The ratios are the design. They are not revenue already landed.",
      "Update the claim when the paid outcomes are real.",
    ],
  },
  "the-collective": {
    slug: "the-collective",
    client: "The Collective",
    kicker: "Owned build · In install",
    lead: "Three side projects are not a room. The Collective is one environment for operators: events, content, warm invites, and partners under a single category.",
    image: "/work/the-collective/hero.jpg",
    imageAlt: "People gathered close, the difference between a crowd and a room with a standard.",
    tags: ["Owned audience", "Offer design", "Partner system"],
    outcomes: [
      "One environment, instead of a chat, a calendar, and a shop.",
      "The audience written down: operators, invited, not a public blast.",
      "Scope treated as the strategy, so the hours have an owner.",
      "Fifty members and $150k kept as the pathway, not a finished result.",
    ],
    challenge:
      "More content will not turn three projects into one place. A generalist community re-earns attention every week. If the founder is the product, it is another job.",
    solution: [
      "Called the fragmentation what it was.",
      "Named the environment, and who is actually invited.",
      "Held events, content, warm invites, and partners as one motion.",
      "Left the louder claim until the members are real.",
    ],
    insights: [
      "This one is mine. It is the workshop, not a client trophy.",
      "A category gets pulled. A calendar has to be pushed.",
      "If I will not run the pattern on my own room, I should not sell it.",
    ],
  },
};
