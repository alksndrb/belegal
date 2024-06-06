export default function getCurrentPractice(practices, pagePath) {
  let currentPageId = -1;
  practices.forEach((practice) => {
    if (practice.link === pagePath) {
      currentPageId = practice.id;
    }
  });
  return currentPageId;
}
