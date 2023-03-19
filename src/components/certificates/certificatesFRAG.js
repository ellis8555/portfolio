import { certificatesImageInjector } from "./certificates-methods/certificates-image-injector";
import { eachImage } from "../../images/allImages";

const certificatesFRAG = certificatesImageInjector(...eachImage).innerHTML;
export { certificatesFRAG };
