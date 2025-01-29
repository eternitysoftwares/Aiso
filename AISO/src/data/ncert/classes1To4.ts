import { NCERTClass } from '../../types/ncert';
import { getMathematicsData } from './subjects/mathematics';

export const classes1To4: Record<string, NCERTClass> = {
  "1": {
    subjects: {
      "Mathematics": getMathematicsData("1"),
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
            { id: "e1_5", title: "Work and Play", chapterNumber: 5 }
          ]
        }]
      }
    }
  },
  "2": {
    subjects: {
      "Mathematics": getMathematicsData("2"),
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
            { id: "e2_5", title: "Weather, Air and Wind", chapterNumber: 5 }
          ]
        }]
      }
    }
  }
  // Add data for classes 3-4
};