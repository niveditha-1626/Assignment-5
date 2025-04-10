const toggle = document.getElementById("toggle-comments");
const comments = document.getElementById("comment-section");

toggle.addEventListener("click", () => {
  const isHidden = comments.hasAttribute("hidden");
  if (isHidden) {
    comments.removeAttribute("hidden");
    toggle.setAttribute("aria-pressed", "true");
  } else {
    comments.setAttribute("hidden", "");
    toggle.setAttribute("aria-pressed", "false");
  }
});

toggle.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    toggle.click();
  }
});
