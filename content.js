function replaceButtonText() {
    let buttons = document.querySelectorAll("input[type='submit'], button");
    buttons.forEach(button => {
        if (button.value === "Отослать" || button.textContent.trim() === "Отослать") {
            button.value = "Отсосать";
            button.textContent = "Отсосать";
        }
    });
}

// Запускаем замену сразу и при изменениях на странице
replaceButtonText();
new MutationObserver(replaceButtonText).observe(document.body, { childList: true, subtree: true });
