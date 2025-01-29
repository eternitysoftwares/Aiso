export interface NCERTChapter {
  id: string;
  title: string;
  chapterNumber: number;
}

export interface NCERTBook {
  id: string;
  title: string;
  chapters: NCERTChapter[];
}

export interface NCERTSubject {
  name: string;
  books: NCERTBook[];
}

export interface NCERTClass {
  subjects: Record<string, NCERTSubject>;
}