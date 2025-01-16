const textInput = document.querySelector('#text');
const fontSelect = document.querySelector('#selectFont');
const imageSelect = document.querySelector('#pointerSelect');
const textArea = document.querySelector('#textArea')
const textView = document.querySelector('#textView');
const imagePreview = document.querySelector('#imagePreview');

textInput.addEventListener('input', () => {
    textView.textContent = textInput.value || "Hong Kil Dong";
});

// 폰트 선택 후 일치하는 폰트로 변경(폰트 연결은 _font.css에 연결)
fontSelect.addEventListener('change', () => {
    textView.style.fontFamily = fontSelect.value;
});

// 이미지 선택 후 변동사항(이미지는 img폴더에 저장)
imageSelect.addEventListener('change', () => {
    const selectedValue = imageSelect.value;

    switch (selectedValue) {
        case 'R1':
            imagePreview.src = './assets/img/R1.png';
            textArea.style.top = '50%';
            textArea.style.left = '70%';
            textArea.style.width = '25.8%';
            textArea.style.height = 'auto';
            textView.style.color = '#fde16b';
            break;
        case 'R2':
            imagePreview.src = './assets/img/R2.png';
            textArea.style.top = '50%';
            textArea.style.left = '4.5%';
            textArea.style.width = '29.2%';
            textArea.style.height = 'auto';
            textView.style.color = '#fde16b';
            break;
        case 'R7':
            imagePreview.src = './assets/img/R7.png';
            textArea.style.top = '50%';
            textArea.style.left = '9.2%';
            textArea.style.width = '31.5%';
            textArea.style.height = 'auto';
            textView.style.color = '#fde16b';
            break;
        case 'G4':
            imagePreview.src = './assets/img/G4.png';
            textArea.style.top = '50%';
            textArea.style.left = '59.7%';
            textArea.style.width = '31.7%';
            textArea.style.height = 'auto';
            textView.style.color = '#fde16b';
            break;
        case 'G6':
            imagePreview.src = './assets/img/G6.png';
            textArea.style.top = '50%';
            textArea.style.left = '56.7%';
            textArea.style.width = '32.8%';
            textArea.style.height = 'auto';
            textView.style.color = '#fde16b';
            break;
        case 'H1':
            imagePreview.src = './assets/img/H1.png';
            textArea.style.top = '50%';
            textArea.style.left = '42.7%';
            textArea.style.width = '38.4%';
            textArea.style.height = 'auto';
            textView.style.color = '#112b24';
            break;
        case 'H2':
            imagePreview.src = './assets/img/H2.png';
            textArea.style.top = '50%';
            textArea.style.left = '48.2%';
            textArea.style.width = '43.2%';
            textArea.style.height = '13.6%';
            textView.style.color = '#112b24';
            break;
        case 'H3':
            imagePreview.src = './assets/img/H3.png';
            textArea.style.top = '84.4%';
            textArea.style.left = '45.6%';
            textArea.style.width = '8.7%';
            textArea.style.height = '12.4%';
            textView.style.color = '#444444';
            break;
        case 'H4':
            imagePreview.src = './assets/img/H4.png';
            textArea.style.top = '50%';
            textArea.style.left = '50.8%';
            textArea.style.width = '34.2%';
            textArea.style.height = 'auto';
            textView.style.color = '#444444';
            break;
        case '130':
            imagePreview.src = './assets/img/130.png';
            textArea.style.top = '50%';
            textArea.style.left = '47.2%';
            textArea.style.width = '33%';
            textArea.style.height = 'auto';
            textView.style.color = '#7e7e7b';
            break;
        case '200':
            imagePreview.src = './assets/img/200.png';
            textArea.style.top = '50%';
            textArea.style.left = '44.3%';
            textArea.style.width = '33.6%';
            textArea.style.height = 'auto';
            textView.style.color = '#7e7e7b';
            break;
        case '300':
            imagePreview.src = './assets/img/300.png';
            textArea.style.top = '61.5%';
            textArea.style.left = '44.1%';
            textArea.style.width = '12%';
            textArea.style.height = '33%';
            textView.style.color = '#7e7e7b';
            break;
        case '400':
            imagePreview.src = './assets/img/400.png';
            textArea.style.top = '61%';
            textArea.style.left = '44.5%';
            textArea.style.width = '10.6%';
            textArea.style.height = '21.8%';
            textView.style.color = '#7e7e7b';
            break;
        case '800':
            imagePreview.src = './assets/img/800.png';
            textArea.style.top = '61%';
            textArea.style.left = '44.1%';
            textArea.style.width = '12%';
            textArea.style.height = '21.8%';
            textView.style.color = '#7e7e7b';
            break;
        default:
            console.warn('Unknown selection:', selectedValue);
    }
});