import { useEffect, useState } from "react";
import throttle from "lodash/fp/throttle";
const offsetInPX = () => {
  return isClientSide() ? -window.innerHeight / 3 : 100;
};
const WaitInMs = 100;
function useHeaderLink() {
  const [activeSection, setActiveSection] = useState<Element | null>(null);
  const [sectionText, setSectionText] = useState("");
  const [allSections, setAllSections] = useState<string[]>([]);

  const handle = throttle(WaitInMs, () => {
    let currentSectionId = activeSection;
    const elements = document.querySelectorAll("[data-section]");
    for (let i = 0; i < elements.length; i += 1) {
      const section = elements[i];
      if (!section || !(section instanceof Element)) continue;
      if (section.getBoundingClientRect().top + offsetInPX() < 0) {
        currentSectionId = section;
        continue;
      }
      break;
    }
    if (currentSectionId != activeSection) {
      setActiveSection(currentSectionId);
      setSectionText(currentSectionId?.id ?? "");
    }
  });

  useEffect(() => {
    if (!isClientSide()) {
      return;
    }
    handle();
    const elements = document.querySelectorAll("[data-type]");
    const data: string[] = [];
    elements.forEach((element: any) => data.push(element.dataset.id));
    setAllSections(data);
    return () => {};
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const scrollable = window;
    scrollable.addEventListener("scroll", handle);
    handle();
    return () => {
      scrollable.removeEventListener("scroll", handle);
    };
  }, [handle]);

  if (isClientSide() && sectionText == "") {
    const elements = document.querySelectorAll("[data-type]");
    const data: string[] = [];
    elements.forEach((element: any) => data.push(element.dataset.id));
    return { sectionText: data[0], allSections: data };
  }

  return { sectionText, allSections };
}

export default useHeaderLink;
function isClientSide() {
  return typeof window !== "undefined";
}
