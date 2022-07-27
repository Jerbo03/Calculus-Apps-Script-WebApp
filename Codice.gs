// file:///C:/Users/andre/Downloads/cal01.jpeg
// file:///C:/Users/andre/Downloads/cal02.jpeg

function doGet(e) {
  try {
    return HtmlService.createTemplateFromFile(e.parameter.page).evaluate();
  } catch (e) {
    return HtmlService.createTemplateFromFile("index").evaluate();
  }
}

function include(fileName) {
  return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}