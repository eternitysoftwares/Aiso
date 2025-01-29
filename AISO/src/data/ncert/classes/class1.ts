import { NCERTClass } from '../../../types/ncert';

export const class1Data: NCERTClass = {
  subjects: {
    "Mathematics": {
      name: "Mathematics",
      books: [{
        id: "math1_1",
        title: "Math Magic",
        chapters: [
          { id: "m1_1", title: "Shapes and Space", chapterNumber: 1 },
          { id: "m1_2", title: "Numbers", chapterNumber: 2 },
          { id: "m1_3", title: "Family and Friends", chapterNumber: 3 },
          { id: "m1_4", title: "Counting", chapterNumber: 4 },
          { id: "m1_5", title: "Fun with Numbers", chapterNumber: 5 }
        ]
      }]
    },
    "Environmental Studies": {
      name: "Environmental Studies",
      books: [{
        id: "evs1_1",
        title: "Looking Around",
        chapters: [
          { id: "e1_1", title: "The Family", chapterNumber: 1 },
          { id: "e1_2", title: "Food", chapterNumber: 2 },
          { id: "e1_3", title: "Shelter", chapterNumber: 3 },
          { id: "e1_4", title: "Water", chapterNumber: 4 },
          { id: "e1_5", title: "Work and Play", chapterNumber: 5 },
          { id: "e1_6", title: "Travel", chapterNumber: 6 },
          { id: "e1_7", title: "Our Friends", chapterNumber: 7 },
          { id: "e1_8", title: "Ourselves", chapterNumber: 8 }
        ]
      }]
    }
  }
};