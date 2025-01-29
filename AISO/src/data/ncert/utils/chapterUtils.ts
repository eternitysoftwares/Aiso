import { NCERTChapter } from '../../../types/ncert';

export function generateChapterId(subject: string, classNumber: string, chapterNumber: number): string {
  const prefix = subject.charAt(0).toLowerCase();
  return `${prefix}${classNumber}_${chapterNumber}`;
}

export function createChapter(
  id: string,
  title: string,
  chapterNumber: number
): NCERTChapter {
  return { id, title, chapterNumber };
}