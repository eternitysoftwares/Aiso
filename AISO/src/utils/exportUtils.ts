import { Question } from '../types';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import pptxgen from 'pptxgenjs';
import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';

export const generatePDF = async (questions: Question[]) => {
  // Create a temporary div to render questions
  const element = document.createElement('div');
  element.style.padding = '40px';
  element.style.width = '800px';
  element.style.background = 'white';
  
  element.innerHTML = `
    <h1 style="font-size: 24px; margin-bottom: 20px;">Generated Questions</h1>
    ${questions.map((q, i) => `
      <div style="margin-bottom: 20px; padding: 15px; border: 1px solid #eee; border-radius: 8px;">
        <p style="font-size: 16px; margin-bottom: 8px;">
          <strong>${i + 1}.</strong> ${q.text}
        </p>
        <p style="font-size: 14px; color: #666;">
          Difficulty: ${q.difficulty} | Type: ${q.type}
        </p>
      </div>
    `).join('')}
  `;

  document.body.appendChild(element);

  try {
    // Convert the element to PNG
    const dataUrl = await toPng(element);
    
    // Create PDF
    const pdf = new jsPDF('p', 'px', 'a4');
    const imgProps = pdf.getImageProperties(dataUrl);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    
    pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('questions.pdf');
  } finally {
    document.body.removeChild(element);
  }
};

// Rest of the export functions remain the same
export const generateDOCX = async (questions: Question[]) => {
  const doc = new Document({
    sections: [{
      properties: {},
      children: questions.map((q, i) => new Paragraph({
        children: [
          new TextRun(`${i + 1}. ${q.text}\n`),
          new TextRun(`Difficulty: ${q.difficulty} | Type: ${q.type}\n\n`)
        ]
      }))
    }]
  });

  const blob = await Packer.toBlob(doc);
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'questions.docx';
  link.click();
};

export const generatePPTX = async (questions: Question[]) => {
  const pres = new pptxgen();

  questions.forEach((question, index) => {
    const slide = pres.addSlide();
    slide.addText(`Question ${index + 1}`, { x: 0.5, y: 0.5, fontSize: 24 });
    slide.addText(question.text, { x: 0.5, y: 1.5, fontSize: 18 });
    slide.addText(`Difficulty: ${question.difficulty} | Type: ${question.type}`, 
      { x: 0.5, y: 2.5, fontSize: 14 });
  });

  pres.writeFile('questions.pptx');
};

export const generateTXT = (questions: Question[]) => {
  const text = questions.map((q, i) => (
    `${i + 1}. ${q.text}\nDifficulty: ${q.difficulty} | Type: ${q.type}\n\n`
  )).join('');

  const blob = new Blob([text], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'questions.txt';
  link.click();
};