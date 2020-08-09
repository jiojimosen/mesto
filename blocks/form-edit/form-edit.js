// Находим форму в DOM
let formElement = document.querySelector("form"); // Воспользуйтесь методом querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    let nameInput = document.querySelector(".form-edit__name"); // Воспользуйтесь инструментом .querySelector()
    let jobInput = document.querySelector(".form-edit__description"); // Воспользуйтесь инструментом .querySelector()
    
    // Получите значение полей из свойства value
    let selName = nameInput.value;
    let selJob = jobInput.value;

    //alert(selName, selJob);

    // Выберите элементы, куда должны быть вставлены значения полей
    let insName = document.querySelector(".profile__title");
    let insJob = document.querySelector(".profile__subtitle");
    // Вставьте новые значения с помощью textContent

    insName.textContent = selName;
    insJob.textContent = selJob;
    
    popupOpen();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);