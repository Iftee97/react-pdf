import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { PDF } from "./components/PDF";

export default function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <PDFViewer width={500} height={700}>
          <PDF />
        </PDFViewer>
        <PDFDownloadLink document={<PDF />} fileName="demo.pdf">
          {({ blob, url, loading, error }) => {
            console.log({ blob, url, loading, error });
            return loading ? "Loading..." : "Download pdf";
          }}
        </PDFDownloadLink>
      </div>
    </>
  );
}

// https://blog.openreplay.com/how-to-generate-pdfs-in-a-react-app
