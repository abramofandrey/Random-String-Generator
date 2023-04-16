function generateRandomString() {
    //извлекаеv пользовательский ввод из поля «длина» в HTML-форме и преобразует его в целое число с помощью функции parseInt().
    let length = parseInt(document.getElementById("length").value);
    let characters = "";
    //Затем функция проверяет, отмечен ли какой-либо из входов флажка с идентификаторами «цифры», «верхний регистр» или «нижний регистр». Если это так, он добавляет к строке «символы» соответствующий набор символов: цифры, прописные или строчные буквы.
    if (document.getElementById("digits").checked) {
        characters += "0123456789";
    }
    if (document.getElementById("uppercase").checked) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (document.getElementById("lowercase").checked) {
        characters += "abcdefghijklmnopqrstuvwxyz";
    }
    //Затем функция инициализирует строковую переменную «результат» как пустую строку и входит в цикл, который повторяет указанное число раз. В каждой итерации цикла он выбирает случайный символ из строки «characters», используя метод charAt() и функцию Math.random(), а затем добавляет выбранный символ в строку «result».
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    //функция устанавливает результирующую случайную строку, которая может содержать только цифры и/или буквы в зависимости от того, какие флажки были отмечены, как значение выходного текстового поля с идентификатором «результат».
    document.getElementById("result").value = result;
}