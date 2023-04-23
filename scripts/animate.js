const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        /**if element is on scroll intersecting, replacing fade to show opacity 1 */
        if(entry.isIntersecting){
            entry.target.classList.replace('fade_to_left', 'show');
            entry.target.classList.replace('fade_to_right', 'show');
        }
        /**if element not scroll intersecting, replace show with fade to left when leaving element, opacity 0*/
        else{
            entry.target.classList.replace('show', 'fade_to_left');
            entry.target.classList.replace('show', 'fade_to_right');
        }
    });
})

/** for all elements with class fade, observe all changes */
const hiddenElements = document.querySelectorAll('.fade');
hiddenElements.forEach((e1) => observer.observe(e1));