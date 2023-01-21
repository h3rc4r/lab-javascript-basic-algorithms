
// Esto es el punto 1
let hacker1 = "pepito";
console.log("The driver's name is" + hacker1);
let hacker2 ="juanito";
console.log("The navigator's name is"+hacker2);
// Esto es el punto 2
if(hacker1.length>hacker2){

}
else{
    if(hacker1<hacker2){
        console.log(
            `The driver has the longest name. It has ${hacker1.length} characters.`
          );
    }
    else{
        console.log(
            `The navigator has the longest name. It has ${hacker2.length} characters.`
          );
    }
    console.log(
        `Wow, you both have equally long names, ${hacker1.length} characters!`
      );
}

// Esto es el punto 3
console.log(hacker1.split("").join("").toUpperCase())

console.log( hacker2.split('').reverse().join('') )

if ( hacker1.localeCompare(hacker2) <0){
    console.log(`The ${hacker1} name goes first.`)
  }
  else if ( hacker1.localeCompare(hacker2) > 0) {
    console.log(`Yo, the ${hacker2} goes first definitely.`) 
  }
  else {
    console.log(`What?! You both have the same name?`)
  }

// Esto es el bonus 1
longText= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nulla nunc, euismod id molestie sed, porta id ipsum. Phasellus in odio eu nisl dictum ultrices. Donec quis tellus vel magna bibendum pellentesque. Nam tincidunt, sapien id mattis mollis, dui mi posuere nibh, vel pulvinar tellus purus vel dolor. Integer sed est sed neque cursus ornare. Nullam euismod imperdiet velit. Sed ultricies aliquam lectus tristique cursus. Mauris molestie suscipit dolor, elementum gravida sapien maximus non. Suspendisse cursus elit dignissim ligula consequat, in pretium arcu vestibulum. Curabitur sed pharetra est. Etiam interdum arcu non venenatis tincidunt. Nullam lobortis lacinia eros, et aliquam nisl hendrerit a. Fusce at arcu nec libero rhoncus commodo. Duis quis faucibus nibh, sit amet volutpat lectus. Sed rhoncus odio et lacus mollis, eget sodales sem finibus.Vivamus sodales consequat ipsum sit amet scelerisque. Duis interdum vel elit sed auctor. Mauris hendrerit eleifend eros, quis auctor magna dignissim auctor. Aliquam facilisis leo at velit pulvinar porttitor. Phasellus mollis blandit elit blandit tempus. Morbi consequat ipsum ligula, commodo sagittis risus ultrices sit amet. Phasellus congue ipsum eu aliquam laoreet. Donec sodales neque id felis fringilla, quis consectetur lectus varius. Cras lacinia aliquam nunc, at commodo dolor. Proin vitae congue erat. Nunc venenatis dignissim ligula, placerat cursus urna sollicitudin convallis. Etiam imperdiet euismod dignissim. Nulla pellentesque dui id ipsum volutpat, sit amet euismod neque luctus. Maecenas et gravida dui.Sed a tristique magna. Suspendisse ac velit vitae quam gravida facilisis. Vestibulum sit amet consequat lectus. Etiam pharetra ornare sapien, sit amet rutrum nisi aliquam nec. Morbi orci leo, tincidunt non malesuada quis, tristique ac ligula. In hac habitasse platea dictumst. Cras vestibulum in lectus et efficitur. Maecenas id ipsum arcu. Sed congue porttitor diam, id dignissim nisi aliquet euismod. Donec dignissim sem purus, in tempor dolor luctus in. Maecenas scelerisque, purus sit amet laoreet suscipit, turpis ligula euismod erat, at laoreet lacus dolor pretium dui. Nam ornare vel justo nec aliquet.'

console.log(longText.split(' ').length+1)
console.log(longText.split(' et ').length)
// falta colocar si la ultima palabra es et
// Esto es el bonus 2


phraseToCheck="A man, a plan, a canal, Panama!"
