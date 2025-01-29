import { NCERTClass } from '../../types/ncert';

export const classes5To8: Record<string, NCERTClass> = {
  "5": {
    subjects: {
      "Mathematics": {
        name: "Mathematics",
        books: [{
          id: "math5_1",
          title: "Math Magic",
          chapters: [
            { id: "m5_1", title: "The Fish Tale", chapterNumber: 1 },
            { id: "m5_2", title: "Shapes and Angles", chapterNumber: 2 },
            { id: "m5_3", title: "How Many Squares?", chapterNumber: 3 },
            { id: "m5_4", title: "Parts and Wholes", chapterNumber: 4 },
            { id: "m5_5", title: "Does It Look the Same?", chapterNumber: 5 }
          ]
        }]
      },
      "Science": {
        name: "Science",
        books: [{
          id: "sci5_1",
          title: "Science",
          chapters: [
            { id: "s5_1", title: "Super Senses", chapterNumber: 1 },
            { id: "s5_2", title: "A Snake Charmer's Story", chapterNumber: 2 },
            { id: "s5_3", title: "From Tasting to Digesting", chapterNumber: 3 }
          ]
        }]
      }
    }
  },
  "6": {
    subjects: {
      "Mathematics": {
        name: "Mathematics",
        books: [{
          id: "math6_1",
          title: "Mathematics",
          chapters: [
            { id: "m6_1", title: "Knowing Our Numbers", chapterNumber: 1 },
            { id: "m6_2", title: "Whole Numbers", chapterNumber: 2 },
            { id: "m6_3", title: "Playing with Numbers", chapterNumber: 3 },
            { id: "m6_4", title: "Basic Geometrical Ideas", chapterNumber: 4 },
            { id: "m6_5", title: "Understanding Elementary Shapes", chapterNumber: 5 }
          ]
        }]
      },
      "Science": {
        name: "Science",
        books: [{
          id: "sci6_1",
          title: "Science",
          chapters: [
            { id: "s6_1", title: "Food: Where Does It Come From?", chapterNumber: 1 },
            { id: "s6_2", title: "Components of Food", chapterNumber: 2 },
            { id: "s6_3", title: "Fibre to Fabric", chapterNumber: 3 }
          ]
        }]
      }
    }
  }
};