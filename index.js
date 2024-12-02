document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');

    const bannerView = document.getElementById('bannerview');
    const aboutView = document.getElementById('aboutview');
    const projectView = document.getElementById('projectview');

    buttons.forEach((item, index) => {
        item.addEventListener('click', () => {
            console.log(index);
            if (index === 0) {
                scroll(bannerView);
            } else if (index === 1) {
                scroll(aboutView);
            } else if (index === 2) {
                scroll(projectView);
            }
        })
    });

    const scroll = (item) => {
        item.scrollIntoView({
            behavior: "smooth"
        });
    }
});