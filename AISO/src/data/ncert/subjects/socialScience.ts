import { NCERTSubject } from '../../../types/ncert';

export const getSocialScienceData = (classNumber: string): NCERTSubject => ({
  name: "Social Science",
  books: [
    {
      id: `hist${classNumber}_1`,
      title: `History: Our Pasts - ${getHistoryPart(classNumber)}`,
      chapters: getHistoryChapters(classNumber)
    },
    {
      id: `geo${classNumber}_1`,
      title: getGeographyTitle(classNumber),
      chapters: getGeographyChapters(classNumber)
    },
    {
      id: `civ${classNumber}_1`,
      title: `Civics: ${getCivicsTitle(classNumber)}`,
      chapters: getCivicsChapters(classNumber)
    }
  ]
});

function getHistoryPart(classNumber: string): string {
  switch(classNumber) {
    case "6": return "I";
    case "7": return "II";
    case "8": return "III";
    default: return "";
  }
}

function getHistoryChapters(classNumber: string) {
  if (classNumber === "6") {
    return [
      { id: "h6_1", title: "What, Where, How and When?", chapterNumber: 1 },
      { id: "h6_2", title: "From Hunting - Gathering to Growing Food", chapterNumber: 2 },
      { id: "h6_3", title: "In the Earliest Cities", chapterNumber: 3 }
      // Add more chapters
    ];
  }
  return [];
}

// Add similar functions for Geography and Civics