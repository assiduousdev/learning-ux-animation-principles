(function(doc, win) {

  const ul = doc.querySelector("ul");
  const items = ul.querySelectorAll("li");
  
  const MAX_DURATION_IN_MILLISECONDS = 600;
  for (let i = 0; i < items.length; i++) {
    const duration =  MAX_DURATION_IN_MILLISECONDS / items.length * i;
    items[i].style = `--delay: ${duration}ms`;
  }

})(document, window);