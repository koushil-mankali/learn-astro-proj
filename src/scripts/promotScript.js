window.addEventListener("load", () => {
  document.querySelector("#inptButton")?.addEventListener("click", () => {
    const promptValue = prompt("Enter value:");
    document.querySelector("#content").innerText = promptValue;
  });
});
