window.addEventListener('load', main);

//Global variabel
let selectedMoms = 1.25;

function main() {
    addEventListeners();
}

function addEventListeners() {
    const button25 = document.getElementById('moms-25')
    const button12 = document.getElementById('moms-12')
    const button6 = document.getElementById('moms-6')

    button25?.addEventListener('click', applyMoms25);
    button12?.addEventListener('click', applyMoms12);
    button6?.addEventListener('click', applyMoms6);

    const incMomsInput = document.getElementById('inc-moms');
    incMomsInput?.addEventListener('input', updateBasedOnIncMoms);
    
    const exMomsInput = document.getElementById('ex-moms');
    exMomsInput?.addEventListener('input', updateBasedOnExMoms);
}

function updateBasedOnIncMoms() {
    const incMomsInput = document.getElementById('inc-moms') as HTMLInputElement;
    const exMomsInput = document.getElementById('ex-moms') as HTMLInputElement;
    const sumMomsInput = document.getElementById('sum-moms') as HTMLInputElement;
    

    const incMoms = Number(incMomsInput.value);
    const exMoms = incMoms / selectedMoms;
    const momsSum = incMoms - exMoms;


    exMomsInput.value = String(exMoms);
    sumMomsInput.value = String(momsSum)
}
function updateBasedOnExMoms() {
    const incMomsInput = document.getElementById('inc-moms') as HTMLInputElement;
    const exMomsInput = document.getElementById('ex-moms') as HTMLInputElement;
    const sumMomsInput = document.getElementById('sum-moms') as HTMLInputElement;
    

    const exMoms = Number(exMomsInput.value);
    const incMoms = exMoms / selectedMoms;
    const momsSum = incMoms - exMoms;


    incMomsInput.value = String(incMoms);
    sumMomsInput.value = String(momsSum)
}

function applyMoms25(event: MouseEvent) {
    selectedMoms = 1.25;
    updateButtonsUI(event);
    updateBasedOnIncMoms();

}
function applyMoms12(event: MouseEvent) {
    selectedMoms = 1.12;
    updateButtonsUI(event);
    updateBasedOnIncMoms();

}
function applyMoms6(event: MouseEvent) {
    selectedMoms = 1.06;
    updateButtonsUI(event);
    updateBasedOnIncMoms();
}

function updateButtonsUI(event: MouseEvent) {
    const activebutton = document.querySelector('.active');
    activebutton?.classList.remove('active');

    const button = event.target as HTMLButtonElement;
    button.classList.add('active');
}