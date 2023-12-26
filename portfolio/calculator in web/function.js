const $lis = document.querySelectorAll("ul li");

$lis.forEach((node) => {
    node.addEventListener('mousedown', function (event) {
        const value = node.innerText.trim()
        const $result = document.querySelector(".result");
        const resultText = $result.innerText.trim()

        if (resultText == 0 || resultText == 'undefined' || resultText == 'Infinity') {
            $result.innerText = ""
        }


        if (value == '=') {
            let solution = eval(resultText)
            try {
                solution = eval(resultText);
                if (isNaN(solution) || !isFinite(solution)) {
                    solution = 'Error';
                }
            } catch (error) {
                solution = 'Error';
            }
            $result.innerText = solution.toString();
            return true
        } else if (value.toLowerCase() == 'c') {
            $result.innerText = "0"
            return true;
        }
        $result.append(value)
    });
});
