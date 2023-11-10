console.log('script.js');
console.clear();

const listBtns = document.querySelectorAll(".inner-list");

listBtns.forEach(list => {
    list.addEventListener("click", () => {
        listBtns.forEach(btn => {
            btn.classList.remove("active");
            btn.parentElement.classList.remove("active");
        });

        // Toggle the "active" class on the clicked list
        if (!list.classList.contains("active")) {
            list.classList.add("active");
        } else {
            list.classList.remove("active");
        }

        if (list.classList.contains("group-list")) {
            list.parentElement.classList.toggle("active");
        }
    });
});


const toggle_menu = document.querySelector(".toggle-menu");

toggle_menu.addEventListener("click", () => {
    toggle_menu.classList.toggle("active");
    document.querySelector(".sidemenu").classList.toggle("active");
    document.querySelector(".fiexed").classList.toggle("active");
});

const innerList = document.querySelectorAll(".option-inner-list");

innerList.forEach(list => {
    list.addEventListener("click", () => {
        innerList.forEach(inner => {
            inner.classList.remove("active");
        });
        list.classList.add("active");
    })
});
