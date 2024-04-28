export default function getCurrentPage(links, pagePath) {
  let currentPageId = 0;
  links.en.forEach((link) => {
    if (link.src === pagePath) {
      currentPageId = link.id;
    }
  });
  return currentPageId;
}
