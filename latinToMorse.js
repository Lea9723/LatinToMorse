const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..',
    ' ':' ',
    "'":"'"
};

const translateLatinCharacter = (lettre)=> {    
	lettre = lettre.toUpperCase()
    return latinToMorse[lettre]
};

const encode = (text) => {
	const charsArray = text.split("")
	let map1 = charsArray.map((x) => translateLatinCharacter(x))
	const result = map1.join("")

	return result
};


console.log(encode("Ada Lovelace"))



const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const button = document.querySelector('#translate') 
const select1 = document.querySelector('#selectOption1')





button.addEventListener("click", function(){
    const fn = select1.value === "morse" ? encode : decode;
    input2.value = fn(input1.value);
});


input1.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        button.classList.add('active');

        setTimeout(()=>{
            button.classList.remove('active');
        }, 100);

        button.click();
    }
});

input1.addEventListener('input', function(){
    input2.value='';
})



const morseToLatin = {
    '-': "T",
     '--': "M",
    '---': "O", 
    '--.': "G", 
    '--.-': "Q", 
    '--..': "Z", 
    '-.': "N", 
    '-.-': "K", 
    '-.--': "Y", 
    '-.-.': "C", 
    '-..': "D", 
    '-..-': "X", 
    '-...': "B", 
    '.': "E", 
    '.-': "A", 
    '.--': "W", 
    '.---': "J", 
    '.--.': "P",
     '.-.': "R", 
     '.-..': "L", 
     '..': "I", 
     '..-': "U", 
     '..-.': "F", 
     '...': "S", 
     '...-': "V", 
     '....': "H",
     ' ' : " "
    };


    const translateMorseCharacter = (char)=> {    
        return morseToLatin[char]
    };
    
  
    const decode = (chars) => {
        const charsArray = chars.split(" ")
        let map1 = charsArray.map((x) => translateMorseCharacter(x))
        const result = map1.join("")
    
        return result
    };
    
    