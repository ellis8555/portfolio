import { certificatesImageInjector } from "./certificates-methods/certificates-image-injector";
import { eachWYWMCertificateImage } from "../../images/allImages";

const certificatesFRAG = certificatesImageInjector(
  ...eachWYWMCertificateImage
).innerHTML;
export { certificatesFRAG };
