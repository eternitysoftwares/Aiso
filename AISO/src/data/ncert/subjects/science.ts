import { NCERTSubject } from '../../../types/ncert';

export const getScienceData = (classNumber: string): NCERTSubject => ({
  name: "Science",
  books: [{
    id: `sci${classNumber}_1`,
    title: "Science",
    chapters: getChaptersForClass(classNumber)
  }]
});

function getChaptersForClass(classNumber: string) {
  const chapters: { id: string; title: string; chapterNumber: number; }[] = [];
  
  switch(classNumber) {
    case "6":
      return [
        { id: "s6_1", title: "Food: Where Does It Come From?", chapterNumber: 1 },
        { id: "s6_2", title: "Components of Food", chapterNumber: 2 },
        { id: "s6_3", title: "Fibre to Fabric", chapterNumber: 3 },
        { id: "s6_4", title: "Sorting Materials into Groups", chapterNumber: 4 },
        { id: "s6_5", title: "Separation of Substances", chapterNumber: 5 },
        { id: "s6_6", title: "Changes Around Us", chapterNumber: 6 },
        { id: "s6_7", title: "Getting to Know Plants", chapterNumber: 7 },
        { id: "s6_8", title: "Body Movements", chapterNumber: 8 },
        { id: "s6_9", title: "The Living World", chapterNumber: 9 },
        { id: "s6_10", title: "Motion and Measurement of Distances", chapterNumber: 10 }
      ];
    // Add cases for other classes
    default:
      return chapters;
  }
}