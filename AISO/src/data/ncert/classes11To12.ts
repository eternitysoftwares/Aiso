import { NCERTClass } from '../../types/ncert';

export const classes11To12: Record<string, NCERTClass> = {
  "11": {
    subjects: {
      "Physics": {
        name: "Physics",
        books: [{
          id: "phy11_1",
          title: "Physics Part 1",
          chapters: [
            { id: "p11_1", title: "Physical World and Measurement", chapterNumber: 1 },
            { id: "p11_2", title: "Kinematics", chapterNumber: 2 },
            { id: "p11_3", title: "Laws of Motion", chapterNumber: 3 },
            { id: "p11_4", title: "Work, Energy, and Power", chapterNumber: 4 },
            { id: "p11_5", title: "Motion of System of Particles and Rigid Body", chapterNumber: 5 }
          ]
        }]
      },
      "Chemistry": {
        name: "Chemistry",
        books: [{
          id: "chem11_1",
          title: "Chemistry Part 1",
          chapters: [
            { id: "c11_1", title: "Some Basic Concepts of Chemistry", chapterNumber: 1 },
            { id: "c11_2", title: "Structure of Atom", chapterNumber: 2 },
            { id: "c11_3", title: "Classification of Elements and Periodicity", chapterNumber: 3 }
          ]
        }]
      },
      "Biology": {
        name: "Biology",
        books: [{
          id: "bio11_1",
          title: "Biology",
          chapters: [
            { id: "b11_1", title: "The Living World", chapterNumber: 1 },
            { id: "b11_2", title: "Biological Classification", chapterNumber: 2 },
            { id: "b11_3", title: "Plant Kingdom", chapterNumber: 3 },
            { id: "b11_4", title: "Animal Kingdom", chapterNumber: 4 }
          ]
        }]
      }
    }
  }
};