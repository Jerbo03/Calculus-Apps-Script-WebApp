// file:///C:/Users/andre/Downloads/cal01.jpeg
// file:///C:/Users/andre/Downloads/cal02.jpeg

function doGet(e) {
  try {
    return HtmlService.createTemplateFromFile(e.parameter.page).evaluate();
  } catch (e) {
    return HtmlService.createTemplateFromFile("index")
      .evaluate()
      .setFaviconUrl('https://cdn.discordapp.com/attachments/965618055642247230/1004554877172719636/unknown.png')
      .setTitle('Fast Calculus');
  }
}

function include(fileName) {
  return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}