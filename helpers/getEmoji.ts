export type emojiTag =
  | "smart"
  | "creative"
  | "curious"
  | "charismatic"
  | "confident"
  | "decisive"
  | "thoughtful"
  | "quickWitted"
  | "rational"
  | "flexible"
  | "reasonable"
  | "motivated"
  | "conversationalist"
  | "idealistic"
  | "integrity"
  | "passionate"
  | "quiet"
  | "daydreamer"
  | "sensitive"
  | "warm"
  | "outgoing"
  | "loyal"
  | "caring"
  | "openMinded"
  | "practical"
  | "factMinded"
  | "reliable"
  | "dedicated"
  | "hardWorking"
  | "patient"
  | "social"
  | "popular"
  | "bold"
  | "energetic"
  | "charming"
  | "veryPerceptive"
  | "spontaneous"
  | "enthusiastic"
  | "artist"
  | "engineer"
  | "ceo"
  | "politician"
  | "consultant"
  | "lawyer"
  | "entrepreneur"
  | "militaryOfficer"
  | "pharmacist"
  | "accountant"
  | "photographer"
  | "softwareDeveloper"
  | "financialAdvisor"
  | "investigator"
  | "physicist"
  | "computerEngineer"
  | "psychiatrist"
  | "stockbroker"
  | "gameDesigner"
  | "filmProducer"
  | "librarian"
  | "professor"
  | "writer"
  | "socialWorker"
  | "massageTherapist"
  | "translator"
  | "counselor"
  | "preschoolTeacher"
  | "sociologist"
  | "humanResources"
  | "eventManagement"
  | "recruiting"
  | "publicRelations"
  | "teacher"
  | "salesManager"
  | "chiropractor"
  | "personalTrainer"
  | "financialAnalyst"
  | "logistician"
  | "civilEngineer"
  | "auditor"
  | "nurse"
  | "officeManager"
  | "interiorDesigner"
  | "administrativeAssistant"
  | "dentist"
  | "financialCounselor"
  | "hotelManager"
  | "pilot"
  | "attorney"
  | "elementaryTeacher"
  | "hrManager"
  | "policeOfficer"
  | "landscapeArchitect"
  | "commercialDesigner"
  | "carpenter"
  | "fashionDesigner"
  | "graphicDesigner"
  | "florist"
  | "producer"
  | "paramedic"
  | "creativeDirector"
  | "actor"
  | "salesPerson"
  | "doctor"
  | "eventPlaner"
  | "chef";

// eslint-disable-next-line no-sparse-arrays
export const emojiList = [
  `🎨`,
  `⚙️`,
  `🤵`,
  `👩‍⚖️`,
  `📊`,
  `⚖️`,
  `💼`,
  `👮`,
  `💊`,
  `📄`,
  `📷`,
  `🖥️`,
  `💰`,
  `🏴󠁣󠁯󠁭󠁡󠁧󠁿`,
  `🛫`,
  `🖥️`,
  `🧑‍⚕️`,
  `📈`,
  `🎮`,
  `🎥`,
  `📚`,
  `👩‍🏫`,
  `✍️`,
  `✍️`,
  `💆‍♂️`,
  `💬`,
  `👩`,
  `👩‍👧‍👦`,
  `👁️`,
  `👥`,
  `📢`,
  `📑`,
  `🤝`,
  `👩‍🏫`,
  `🧑‍💼`,
  `🦵`,
  `🏋️`,
  `📊`,
  `🔗`,
  `⚒️`,
  `📉`,
  `💉`,
  `🤵`,
  `🛋️`,
  `📑`,
  `🦷`,
  `💵`,
  `🏨`,
  ,
  `🧑‍✈️`,
  `⚖️`,
  `👩‍🏫`,
  `👥`,
  `👮`,
  `🌳`,
  `🎙️`,
  `⚒️`,
  `👗`,
  `🖥️`,
  `💐`,
  `🎬`,
  `🩺`,
  `💡`,
  `🎭`,
  `🛒`,
  `🧑‍⚕️`,
  `🔊`,
  `👩‍🍳`,
  `😍`,
];

export const getEmoji = (type: emojiTag | string): any => {
  switch (type) {
    case "artist":
      return `🎨`;
    case "engineer":
      return `⚙️`;
    case "ceo":
      return `🤵`;
    case "politician":
      return `👩‍⚖️`;
    case "consultant":
      return `📊`;
    case "lawyer":
      return `⚖️`;
    case "entrepreneur":
      return `💼`;
    case "militaryOfficer":
      return `👮`;
    case "pharmacist":
      return `💊`;
    case "accountant":
      return `📄`;
    case "photographer":
      return `📷`;
    case "softwareDeveloper":
      return `🖥️`;
    case "financialAdvisor":
      return `💰`;
    case "investigator":
      return `🏴󠁣󠁯󠁭󠁡󠁧󠁿`;
    case "physicist":
      return `🛫`;
    case "computerEngineer":
      return `🖥️`;
    case "psychiatrist":
      return `🧑‍⚕️`;
    case "stockbroker":
      return `📈`;
    case "gameDesigner":
      return `🎮`;
    case "filmProducer":
      return `🎥`;
    case "librarian":
      return `📚`;
    case "professor":
      return `👩‍🏫`;
    case "writer":
      return `✍️`;
    case "socialWorker":
      return `✍️`;
    case "massageTherapist":
      return `💆‍♂️`;
    case "translator":
      return `💬`;
    case "counselor":
      return `👩`;
    case "preschoolTeacher":
      return `👩‍👧‍👦`;
    case "sociologist":
      return `👁️`;
    case "humanResources":
      return `👥`;
    case "eventManagement":
      return `📢`;
    case "recruiting":
      return `📑`;
    case "publicRelations":
      return `🤝`;
    case "teacher":
      return `👩‍🏫`;
    case "salesManager":
      return `🧑‍💼`;
    case "chiropractor":
      return `🦵`;
    case "personalTrainer":
      return `🏋️`;
    case "financialAnalyst":
      return `📊`;
    case "logistician":
      return `🔗`;
    case "civilEngineer":
      return `⚒️`;
    case "auditor":
      return `📉`;
    case "nurse":
      return `💉`;
    case "officeManager":
      return `🤵`;
    case "interiorDesigner":
      return `🛋️`;
    case "administrativeAssistant":
      return `📑`;
    case "dentist":
      return `🦷`;
    case "financialCounselor":
      return `💵`;
    case "hotelManager":
      return `🏨`;
    case "pilot":
      return `🧑‍✈️`;
    case "attorney":
      return `⚖️`;
    case "elementaryTeacher":
      return `👩‍🏫`;
    case "hrManager":
      return `👥`;
    case "policeOfficer":
      return `👮`;
    case "landscapeArchitect":
      return `🌳`;
    case "commercialDesigner":
      return `🎙️`;
    case "carpenter":
      return `⚒️`;
    case "fashionDesigner":
      return `👗`;
    case "graphicDesigner":
      return `🖥️`;
    case "florist":
      return `💐`;
    case "producer":
      return `🎬`;
    case "paramedic":
      return `🩺`;
    case "creativeDirector":
      return `💡`;
    case "actor":
      return `🎭`;
    case "salesPerson":
      return `🛒`;
    case "doctor":
      return `🧑‍⚕️`;
    case "eventPlaner":
      return `🔊`;
    case "chef":
      return `👩‍🍳`;
    default:
      return `😍`;
  }
};

// case "smart":
//       return `🧠`;
// 	  case "creative":
//       return `🎨`;
// 	  case "curious":
//       return `👀`;
// 	  case "charismatic":
//       return `🗢`;
// 	  case "confident":
//       return `🕶️`;
// 	  case "decisive":
//       return `🖐️`;
// 	  case "thoughtful":
//       return `💭`;
// 	  case "quickWitted":
//       return `😋`;
// 	  case "rational":
//       return `💬`;
// 	  case "flexible":
//       return `🙌🏽`;
// 	  case "reasonable":
//       return `✍️`;
// 	  case "motivated":
//       return `💪`;
// 	  case "conversationalist":
//       return `🗣️`;
// 	  case "idealistic":
//       return `🧘‍♀️`;
// 	  case "integrity":
//       return `🧑‍⚖️`;
// 	  case "passionate":
//       return `🔥`;
// 	  case "quiet":
//       return `🙊`;
// 	  case "daydreamer":
//       return `🌛`;
// 	  case "sensitive":
//       return `🍃`;
// 	  case "warm":
//       return `🌤️`;
// 	  case "outgoing":
//       return `⛺`;
// 	  case "loyal":
//       return `💏`;
// 	  case "caring":
//       return `🤱`;
// 	  case "openMinded":
//       return `👁️`;
// 	  case "practical":
//       return `💁‍♂️`;
// 	  case "factMinded":
//       return `🌏`;
// 	  case "reliable":
//       return `🤝`;
// 	  case "dedicated":
//       return `🙆`;
// 	  case "hardWorking":
//       return `🧑‍💻`;
// 	  case "patient":
//       return `⏱️`;
// 	  case "social":
//       return `💃`;
// 	  case "popular":
//       return `🕴️`;
// 	  case "bold":
//       return `🧑‍🎤`;
// 	  case "energetic":
//       return `🚴`;
// 	  case "charming":
//       return `💏`;
// 	  case "veryPerceptive":
//       return `👂`;
// 	  case "spontaneous":
//       return `👏`;
// 	  case "enthusiastic":
//       return `🤗`;
