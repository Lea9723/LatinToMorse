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
const content2 = input2.value


button.addEventListener("click", function(){
    const content = input1.value
    const result = encode(content);

    if(content === ""){
        input2.value = ""

    }else{
        input2.value = result;
    }

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