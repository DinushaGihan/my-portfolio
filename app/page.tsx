import Image from "next/image";

export default function Home() {
  return (
    // min-h-screen: covers the full height of the browser
    // p-8: adds padding so content doesn't touch the edges
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-slate-50">
      {/* text-5xl: very large text | font-bold: thick weight | mb-12: margin bottom */}
      <h1 className="text-5xl font-bold mb-12 text-slate-900">Dinusha Gihan</h1>

      {/* flex-row: items sit side-by-side | items-center: vertical alignment */}
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl bg-white p-8 rounded-2xl shadow-sm">
        {/* Rounded photo placeholder */}
        <div className="w-48 h-48 bg-blue-100 rounded-full flex items-center justify-center shrink-0 border-4 border-white shadow-md">
          <span className="text-blue-500 font-semibold text-lg">Photo</span>
        </div>

        {/* Bio Paragraph */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-slate-800">
            Software Engineer & QA Specialist
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            I specialize in building reliable software with a focus on{" "}
            <strong>Networking</strong> and <strong>Quality Assurance</strong>.
            Currently transitioning my IT expertise into modern web development.
          </p>
        </div>
      </div>
    </main>
  );
}
