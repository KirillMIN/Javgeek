function mathOperation(arg1, arg2, operation){
  if (operation === 'div' && arg2 === 0){
    return alert('You cant do this')
  }
    			switch(operation){
       				 case 'plus':
           				 return arg1 + arg2;
           				 break;
       				 case 'minus':
           				 return arg1 - arg2;
            			 break;
        			 case 'div':
                   return arg1 / arg2;
            			 break;
       				 case 'mult':
           				 return arg1 * arg2;
            			 break;
   				}
		}