const getFiltredArray = (acc, item, first, second) => {
  
  if(item === 'oneChange') {
    return acc.filter(ticket => ticket.flight.legs[0].segments.length === 2 ? ticket : null);
  }

  if(item === 'noChange'){    
    return acc.filter(ticket => ticket.flight.legs[0].segments.length === 1 ? ticket : null);
  }

  if(item === 'price'){
    let result = [];
  
    if(first.trim()){
      if(result.length){
        const newResult = result.filter(ticket => Number(ticket.flight.price.total.amount) >= first ? ticket: null);
        result = newResult;
      }else {
        result = acc.filter(ticket => Number(ticket.flight.price.total.amount) >= first ? ticket: null);
      }
      
    }
    
    if(second.trim()){
      
      if(result.length){
        
        const newResult = result.filter(ticket => Number(ticket.flight.price.total.amount) <= Number(second) ? ticket: null);
        result = newResult;
      }else {
        
        result = acc.filter(ticket => Number(ticket.flight.price.total.amount) <= Number(second) ? ticket: null);
      }
    }
    
    return result;    
  }
  return acc;
};

export default getFiltredArray;