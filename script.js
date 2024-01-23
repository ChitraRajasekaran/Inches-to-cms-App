const inchInput = document.getElementById('inch-input');
const cmInput = document.getElementById('cm-input');
// const convertButton = document.getElementById('convert-button');


// convertButton.addEventListener('click', () => {
//     const inches = inchInput.value;
//     const cms = inches * 2.54;
//     cmInput.value = isNaN(cms) ? 0 : cms;
// })

inchInput.addEventListener('input', () => {
    const inches = inchInput.value;
    const cms = inches * 2.54;
    cmInput.value = isNaN(cms) ? 0 : cms;
})

cmInput.addEventListener('input', () => {
    const cms = cmInput.value;
    const inches = cms / 2.54;
    inchInput.value = isNaN(inches) ? 0 : inches;
})