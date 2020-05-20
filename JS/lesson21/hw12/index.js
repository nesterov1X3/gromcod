export function getSection(num) {
     const findSomeEl = document.querySelector(`span[data-number="${num}"]`);
     const parent = findSomeEl.closest(".box");
     const result = parent.dataset.section;
     return result;
    
    
}
// getSection(2)










// `span[data-number="${num}"]`