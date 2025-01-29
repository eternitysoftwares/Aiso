import { NCERTClass } from '../../../types/ncert';

export const class2Data: NCERTClass = {
  subjects: {
    "Mathematics": {
      name: "Mathematics",
      books: [{
        id: "math2_1",
        title: "Math Magic",
        chapters: [
          { id: "m2_1", title: "What is Long? What is Round?", chapterNumber: 1 },
          { id: "m2_2", title: "Counting in Groups", chapterNumber: 2 },
          { id: "m2_3", title: "Addition", chapterNumber: 3 },
          { id: "m2_4", title: "Subtraction", chapterNumber: 4 },
          { id: "m2_5", title: "Numbers all Around Us", chapterNumber: 5 },
          { id: "m2_6", title: "Patterns", chapterNumber: 6 },
          { id: "m2_7", title: "Shapes and Sizes", chapterNumber: 7 },
          { id: "m2_8", title: "How Many Times?", chapterNumber: 8 }
        ]
      }]
    },
    "Environmental Studies": {
      name: "Environmental Studies",
      books: [{
        id: "evs2_1",
        title: "Looking Around",
        chapters: [
          { id: "e2_1", title: "Looking Around", chapterNumber: 1 },
          { id: "e2_2", title: "Plants", chapterNumber: 2 },
          { id: "e2_3", title: "Animals", chapterNumber: 3 },
          { id: "e2_4", title: "Water", chapterNumber: 4 },
          { id: "e2_5", title: "Weather, Air and Wind", chapterNumber: 5 },
          { id: "e2_6", title: "Our Earth", chapterNumber: 6 },
          { id: "e2_7", title: "Houses", chapterNumber: 7 },
          { id: "e2_8", title: "Travel", chapterNumber: 8 },
          { id: "e2_9", title: "Work and Play", chapterNumber: 9 }
        ]
      }]
    }
  }
};