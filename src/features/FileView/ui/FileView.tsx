"use client";

import { useEffect, useRef, useState } from "react";
import { getDocument, GlobalWorkerOptions, version } from "pdfjs-dist";
import type { PDFDocumentProxy } from "pdfjs-dist/types/src/display/api";

GlobalWorkerOptions.workerSrc =
  `//cdnjs.cloudflar` + `e.com/ajax/libs/pdf.js/${version}/pdf.worker.min.js`;

export const FileView = ({ url }: { url: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pdf, setPdf] = useState<PDFDocumentProxy | null>(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getDocument(url).promise.then((pdfDoc: PDFDocumentProxy) => {
      setPdf(pdfDoc);
      setTotal(pdfDoc.numPages);
    });
  }, [url]);

  useEffect(() => {
    if (!pdf) return;

    pdf.getPage(page).then((pageObj) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const context = canvas.getContext("2d");

      const viewport = pageObj.getViewport({ scale: 1.5 });

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      pageObj.render({
        canvasContext: context!,
        viewport,
      });
    });
  }, [pdf, page]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        background: "#f5f5f5",
        borderRadius: 20,
        border: "2px dashed #ccc",
      }}
    >
      {/* Левая стрелка */}
      <button
        onClick={() => page > 1 && setPage(page - 1)}
        style={{
          position: "absolute",
          left: 10,
          fontSize: 40,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        ‹
      </button>

      {/* PDF canvas */}
      <canvas ref={canvasRef} />

      {/* Правая стрелка */}
      <button
        onClick={() => page < total && setPage(page + 1)}
        style={{
          position: "absolute",
          right: 10,
          fontSize: 40,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        ›
      </button>

      {/* Индикатор страниц */}
      <div
        style={{
          position: "absolute",
          bottom: 20,
          display: "flex",
          gap: 6,
        }}
      >
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: i + 1 === page ? "#666" : "#ccc",
            }}
          />
        ))}
      </div>
    </div>
  );
};
