function storeInput() {
    // Initialize an empty array
    const inputArray = [];
  
    // Get the input elements
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
  
    // Get the values of the input elements
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
  
    // Add the values to the array
    inputArray.push(value1, value2, value3);
  
    // Print the array to the console
    console.log(inputArray);
  }



  const input1=document.getElementById('input1');
   const input2=document.getElementById('input2');
   const input3=document.getElementById('input3');
   const input4=document.getElementById('input4');
   const input5=document.getElementById('input5');

   const value1 =input1.value;
   const value2= input2.value;
   const value3= input3.value;
   const value4= input4.value;
   const value5= input5.value;

   shoppingList.push(value1,value2,value3,value4,value5);
   return shoppingList;