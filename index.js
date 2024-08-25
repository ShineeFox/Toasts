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

// Creating the Toast Box Popup
const showToast = ( message = "Sample Message", toastType = "info", duration = 5000) => {
    if (!Object.keys(icon).includes(toastType))
        toastType = "info";

    let box = document.createElement("div");

    box.classList.add("toast", `toast-${toastType}`);

    box.innerHTML = `   <div class="toast-content-wrapper">
                        <div class="toast-icon">
                        ${icon[toastType]}
                        </div>
                        <div class="toast-message">${message}</div>
                        <div class="toast-progress"></div>
                        </div>`;

    duration = duration || 5000;

    box.querySelector(".toast-progress").computedStyleMap.animationDuration = `${duration / 1000}s`;

    let toastAlready = document.body.querySelector(".toast");

    if (toastAlready) {
        toastAlready.remove();
    }

    document.body.appendChild(box)
};

// Setting the Correct Toasts for Event Listeners
let submit = document.querySelector(".toast-level.perfect-toast");

let information = document.querySelector(".toast-level.toast-info");

let failed = document.querySelector(".toast-level.burnt-toast");

let warning = document.querySelector(".toast-level.dark-toast");

//Adding Event Listeners
submit.addEventListener("click", (e) => {
    e.preventDefault();
    showToast("Article Submitted Successfully", "success", 5000);
});

information.addEventListener("click", (e) => {
    e.preventDefault();
    showToast("Godzilla is the King of the Monsters", "info", 5000);
});

failed.addEventListener("click", (e) => {
    e.preventDefault();
    showToast("Failed! Unexpected Error!", "danger", 5000);
});

warning.addEventListener("click", (e) => {
    e.preventDefault();
    showToast("!Warning! Server Error", "warning", 5000);
});