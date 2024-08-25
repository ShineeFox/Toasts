// script.js

let icon = {
    success:
    '<span class="material-symbols-outlined">task_alt</span>',
    danger:
    '<span class="material-symbols-outlined">error</span>',
    warning:
    '<span class="material-symbols-outlined">warning</span>',
    info:
    '<span class="material-symbols-outlined">info</span>',
};

const showToast = (
    message = "Sample Message",
    toastType = "info",
    duration = 5000) => {
    if (
        !Object.keys(icon).includes(toastType))
        toastType = "info";

    let box = document.createElement("div");
    box.classList.add(
        "toast", `toast-${toastType}`);
    box.innerHTML = ` <div class="toast-content-wrapper">
                      <div class="toast-icon">
                      ${icon[toastType]}
                      </div>
                      <div class="toast-message">${message}</div>
                      <div class="toast-progress"></div>
                      </div>`;
    duration = duration || 5000;
    box.querySelector(".toast-progress").style.animationDuration =
            `${duration / 1000}s`;

    let toastAlready = 
        document.body.querySelector(".toast");
    if (toastAlready) {
        toastAlready.remove();
    }

    document.body.appendChild(box)};

let submit = 
    document.querySelector(".custom-toast.success-toast");
let information = 
    document.querySelector(".custom-toast.info-toast");
let failed = 
    document.querySelector(".custom-toast.danger-toast");
let warn = 
    document.querySelector(".custom-toast.warning-toast");

submit.addEventListener("click",(e) => {
        e.preventDefault();
        showToast("Bread Toasted to Perfection","success",5000);
    });

information.addEventListener("click",(e) => {
        e.preventDefault();
        showToast("Godzilla is the King of the Monsters","info",5000);
    });

failed.addEventListener("click",(e) => {
        e.preventDefault();
        showToast("The Toast Was Burnt!","danger",5000);
    });

warn.addEventListener("click", (e) => {
    e.preventDefault();
    showToast("!Warning! Toast is Burning","warning",5000);
});