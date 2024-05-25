export default function getCurrentPage(links, pagePath) {
  let currentPageId = -1;
  links.en.forEach((link) => {
    if (link.src === pagePath) {
      currentPageId = link.id;
    }
  });
  return currentPageId;
}
