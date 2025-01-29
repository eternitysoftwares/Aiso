import { useState, useEffect } from 'react';
import { NCERTBook, NCERTChapter, fetchNCERTBooks, fetchNCERTChapters } from '../api/ncertApi';

export const useNCERTData = (classNumber: string, subject: string) => {
  const [books, setBooks] = useState<NCERTBook[]>([]);
  const [chapters, setChapters] = useState<NCERTChapter[]>([]);
  const [selectedBook, setSelectedBook] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch books when class and subject change
  useEffect(() => {
    const getBooks = async () => {
      if (!classNumber || !subject) return;
      
      setLoading(true);
      setError(null);
      try {
        const data = await fetchNCERTBooks(parseInt(classNumber), subject);
        setBooks(data);
      } catch (err) {
        setError('Failed to fetch books');
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };

    getBooks();
  }, [classNumber, subject]);

  // Fetch chapters when book selection changes
  useEffect(() => {
    const getChapters = async () => {
      if (!selectedBook) return;
      
      setLoading(true);
      setError(null);
      try {
        const data = await fetchNCERTChapters(selectedBook);
        setChapters(data);
      } catch (err) {
        setError('Failed to fetch chapters');
        setChapters([]);
      } finally {
        setLoading(false);
      }
    };

    getChapters();
  }, [selectedBook]);

  return {
    books,
    chapters,
    loading,
    error,
    setSelectedBook
  };
};