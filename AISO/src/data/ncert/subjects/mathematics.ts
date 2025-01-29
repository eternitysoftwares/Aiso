import { NCERTSubject } from '../../../types/ncert';

export const getMathematicsData = (classNumber: string): NCERTSubject => ({
  name: "Mathematics",
  books: [{
    id: `math${classNumber}_1`,
    title: classNumber <= "5" ? "Math Magic" : "Mathematics",
    chapters: getChaptersForClass(classNumber)
  }]
});

function getChaptersForClass(classNumber: string) {
  const chapters: { id: string; title: string; chapterNumber: number; }[] = [];
  
  switch(classNumber) {
    case "1":
      return [
        { id: "m1_1", title: "Shapes and Space", chapterNumber: 1 },
        { id: "m1_2", title: "Numbers", chapterNumber: 2 },
        { id: "m1_3", title: "Family and Friends", chapterNumber: 3 },
        { id: "m1_4", title: "Counting", chapterNumber: 4 },
        { id: "m1_5", title: "Fun with Numbers", chapterNumber: 5 }
      ];
    case "2":
      return [
        { id: "m2_1", title: "What is Long? What is Round?", chapterNumber: 1 },
        { id: "m2_2", title: "Counting in Groups", chapterNumber: 2 },
        { id: "m2_3", title: "Addition", chapterNumber: 3 },
        { id: "m2_4", title: "Subtraction", chapterNumber: 4 },
        { id: "m2_5", title: "Numbers all Around Us", chapterNumber: 5 },
        { id: "m2_6", title: "Patterns", chapterNumber: 6 },
        { id: "m2_7", title: "Shapes and Sizes", chapterNumber: 7 },
        { id: "m2_8", title: "How Many Times?", chapterNumber: 8 }
      ];
    // Add cases for other classes
    default:
      return chapters;
  }
}