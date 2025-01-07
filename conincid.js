   function aTag(index) {
       return `<a href="#">Link ${index}</a>`;
   }

   let result = '';
   for (let i = 0; i < 5; i++) {
       result += aTag(i);
   }

   console.log(result);
   