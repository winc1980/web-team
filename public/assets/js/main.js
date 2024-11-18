const targets = document.getElementsByClassName('fade');
for (let i = targets.length; i--; ) {
  let observer = new IntersectionObserver((entries, observer) => {
    let j = entries.findIndex((e) => {
      return e.isIntersecting;
    }); // isIntersectingの要素のインデックスを返す
    entries[j].target.classList.add('active');
    observer.unobserve(entries[j].target);
  });
  observer.observe(targets[i]);
}
console.log('main.js');
