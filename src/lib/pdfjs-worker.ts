import { pdfjs } from "react-pdf";

// This file is a workaround for PDF.js worker in Next.js environment
// Using a public path that will be available at runtime

if (typeof window !== "undefined" && !pdfjs.GlobalWorkerOptions.workerSrc) {
  // Set the worker source to a local file in the public directory
  pdfjs.GlobalWorkerOptions.workerSrc = "/pdf-worker/pdf.worker.min.js";
}

export default pdfjs;
