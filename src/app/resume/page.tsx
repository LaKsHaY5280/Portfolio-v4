"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMyInfo } from "@/hooks/_myInfo/useMyInfo";
import { FaDownload, FaEye, FaFilePdf } from "react-icons/fa";
import { Document, Page } from "react-pdf";
import "@/lib/pdfjs-worker"; // Import the PDF.js worker configuration
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

const ResumePage = () => {
  const { name } = useMyInfo();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pdfWidth, setPdfWidth] = useState<number>(600);
  const [pdfContainerHeight, setPdfContainerHeight] = useState<string>("842px");

  // Use the correct path to the PDF file
  const resumePath = "/resume/Lakshay_Goyal_Resume.pdf";

  // Handle responsive PDF width and height
  useEffect(() => {
    const handleResize = () => {
      // Set PDF width based on screen size
      if (window.innerWidth < 640) {
        setPdfWidth(Math.min(window.innerWidth - 48, 450));
        setPdfContainerHeight("600px");
      } else if (window.innerWidth < 768) {
        setPdfWidth(520);
        setPdfContainerHeight("700px");
      } else {
        setPdfWidth(600);
        setPdfContainerHeight("842px"); // A4 height at scale
      }
    };

    // Initial calculation
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle loading timeout
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (loading) {
        setError(true);
      }
    }, 5000); // Give 5 seconds to load, then show error

    return () => clearTimeout(timeoutId);
  }, [loading]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
    setError(false);
  }

  function onDocumentLoadError() {
    setLoading(false);
    setError(true);
  }

  // Functions to navigate through pages
  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => {
      const newPageNumber = prevPageNumber + offset;
      return Math.min(Math.max(1, newPageNumber), numPages || 1);
    });
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <main className="bg-earth-light min-h-screen py-16 relative overflow-hidden">
      {/* Background pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(31, 41, 55, 0.15) 2px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-gemola text-earth-dark mt-5 mb-4">
            Resume
          </h1>
          <p className="text-earth-brown/80 font-al max-w-2xl mx-auto">
            View or download my professional resume. Feel free to reach out if
            you have any questions!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start justify-around w-full">
          {/* PDF Preview */}
          <motion.div
            className="w-fit bg-white rounded-xl shadow-xl overflow-hidden relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {loading && !error && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-12 h-12 border-4 border-earth-sand/30 border-t-earth-sand rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <p className="mt-4 text-earth-brown/80 font-al">
                    Loading resume...
                  </p>
                </div>
              </div>
            )}

            {error && (
              <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                <div className="text-center max-w-md px-6">
                  <svg
                    className="w-16 h-16 mx-auto text-earth-sand/70 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <h3 className="text-xl font-gemola text-earth-dark mb-2">
                    Unable to preview resume
                  </h3>
                  <p className="text-earth-brown/70 font-al mb-6">
                    The resume preview couldn't be loaded. Please use the
                    download button to view the resume directly.
                  </p>
                  <motion.a
                    href={resumePath}
                    download="Lakshay_Goyal_Resume.pdf"
                    className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-earth-dark text-earth-light rounded-lg font-al transition-transform hover:shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaDownload className="text-earth-sand" />
                    <span>Download Resume</span>
                  </motion.a>
                </div>
              </div>
            )}

            {!error && (
              <div className="h-full flex flex-col">
                <div className="flex-1 overflow-auto flex justify-center">
                  <Document
                    file={resumePath}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}
                    loading={null}
                    className="h-full flex items-center"
                  >
                    <Page
                      pageNumber={pageNumber}
                      width={pdfWidth}
                      renderTextLayer={true}
                      renderAnnotationLayer={true}
                      className="shadow-md mx-auto"
                    />
                  </Document>
                </div>

                {numPages && numPages > 1 && (
                  <div className="p-4 flex items-center justify-between bg-earth-sand/5 border-t border-earth-sand/20">
                    <button
                      onClick={previousPage}
                      disabled={pageNumber <= 1}
                      className={`rounded-lg px-4 py-2 font-al text-sm flex items-center gap-2 transition-colors ${
                        pageNumber <= 1
                          ? "text-earth-brown/40 cursor-not-allowed"
                          : "text-earth-dark hover:bg-earth-sand/20"
                      }`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          d="M15 18l-6-6 6-6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Previous
                    </button>

                    <p className="text-earth-brown/80 font-al text-sm">
                      Page {pageNumber} of {numPages}
                    </p>

                    <button
                      onClick={nextPage}
                      disabled={pageNumber >= (numPages || 1)}
                      className={`rounded-lg px-4 py-2 font-al text-sm flex items-center gap-2 transition-colors ${
                        pageNumber >= (numPages || 1)
                          ? "text-earth-brown/40 cursor-not-allowed"
                          : "text-earth-dark hover:bg-earth-sand/20"
                      }`}
                    >
                      Next
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          d="M9 6l6 6-6 6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>

          {/* Action Panel */}
          <motion.div
            className="w-full lg:w-1/4 bg-white rounded-xl shadow-lg p-6 sticky top-20"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-gemola text-earth-dark mb-2">
                  {name}
                </h2>
                <div className="w-16 h-1 bg-earth-sand/30 mx-auto mb-4"></div>
                <p className="text-earth-brown/70 font-al text-sm">
                  This is my professional resume highlighting my skills,
                  experience, and education.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm uppercase tracking-wider text-earth-brown/60 font-al">
                  Options
                </h3>

                <motion.a
                  href={resumePath}
                  download="Lakshay_Goyal_Resume.pdf"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-earth-dark text-earth-light rounded-lg font-al transition-transform hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaDownload className="text-earth-sand" />
                  <span>Download PDF</span>
                </motion.a>

                <motion.a
                  href={resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-earth-sand/10 text-earth-dark rounded-lg font-al border border-earth-sand/20 transition-transform hover:bg-earth-sand/20 hover:shadow-md"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaEye className="text-earth-sand" />
                  <span>Open in New Tab</span>
                </motion.a>
              </div>

              <div className="pt-6 border-t border-earth-dark/10">
                <h3 className="text-sm uppercase tracking-wider text-earth-brown/60 font-al mb-4">
                  Formats
                </h3>
                <div className="space-y-3">
                  <motion.a
                    href={resumePath}
                    download="Lakshay_Goyal_Resume.pdf"
                    className="flex items-center gap-2 text-earth-brown/70 hover:text-earth-dark transition-colors font-al text-sm"
                    whileHover={{ x: 2 }}
                  >
                    <FaFilePdf className="text-earth-sand" />
                    <span>PDF Format</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-12 relative z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.a
            href="/?section=contact"
            className="inline-flex items-center gap-2 text-earth-dark font-al hover:text-earth-sand transition-colors pointer-events-auto"
            whileHover={{ x: 4 }}
          >
            <span>Get in touch</span>
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </main>
  );
};

export default ResumePage;
