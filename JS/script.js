

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.getElementsByClassName("complete-btn");
    Array.from(buttons).forEach(button => {
        button.addEventListener("click", function () {
            alert("Board Updated Successfully!");
            button.disabled = true;
            button.style.color = "#a9a9a9"; 
        });
    });
});
