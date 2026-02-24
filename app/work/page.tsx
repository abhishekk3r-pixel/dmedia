"use client";
import DesignChroniclesSection from "../components/work/DesignChroniclesSection";
import WorkInfo from "../components/work/WorkInfo";
import Footer from "../components/Footer";
import { useMedia } from "../context";

export default function Page() {

  const {isLgUp} = useMedia();

  return (
  <>
    <main>
      <DesignChroniclesSection />
     <WorkInfo />
    </main>
    <Footer isLgUp={isLgUp} />
    </>
  );
}
