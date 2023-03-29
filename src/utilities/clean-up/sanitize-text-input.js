const sanitizeComment = (stringToSanitize) => {
  let cleanString = stringToSanitize;
  cleanString = cleanString.replace(/</g, "&lt");
  cleanString = cleanString.replace(/>/g, "&gt");
  cleanString = cleanString.replace(/&/g, "&amp");
  cleanString = cleanString.replace(/"/g, "&gt");
  cleanString = cleanString.replace(/'/g, "#&39");
  cleanString = cleanString.replace(/\//g, "#&47");
  cleanString = cleanString.replace(/;/g, "#semi");
  return cleanString;
};

export { sanitizeComment };
