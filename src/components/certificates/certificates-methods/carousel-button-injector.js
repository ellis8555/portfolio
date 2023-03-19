import { WYWMCertificateLength } from "../../../images/allImages";

const carouselButtonInjector = () => {
  const containerDiv = document.createElement("div");

  for (let i = 0; i <= WYWMCertificateLength; i++) {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("data-bs-target", "#carouselExampleIndicators");
    button.setAttribute("data-bs-slide-to", i);
    button.setAttribute("aria-label", `Slide ${i + 1}`);
    containerDiv.append(button);
  }
  containerDiv.firstChild.classList.add("active");
  containerDiv.firstChild.setAttribute("aria-current", true);
  return containerDiv;
};

const carouselButtons = carouselButtonInjector().innerHTML;
export { carouselButtons };
