

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.getElementsByClassName("complete-btn");
    Array.from(buttons).forEach(button => {
        button.addEventListener("click", function () {
            alert("Board Updated Successfully!");
        });
    });
});

