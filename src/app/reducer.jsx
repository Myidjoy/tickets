import { createSlice } from '@reduxjs/toolkit';
import ticketsObject from './flights.json';
// const {log} = console
const tickets = ticketsObject.result.flights;
tickets.forEach((ticket, i) => {ticket.id = i + 1;});
// console.log(tickets[0].flight.legs[0])
const initialState = {
  tickets,
  filtredTickets: [],
  oneChange: false,
  noChange: false,
  price: false,
  company: false
};


const ticketsSlice = createSlice({
  name: 'tickets/slice',
  initialState,
  reducers: {
    upAction(state){ 
      if(state.filtredTickets.length){
        state.filtredTickets =  state.filtredTickets.slice().sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount);
      } else {
        state.tickets = state.tickets.slice().sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount);
      }      
    },
    downAction(state){  
      if(state.filtredTickets.length){
        state.filtredTickets = state.filtredTickets.slice().sort((a, b) => b.flight.price.total.amount - a.flight.price.total.amount);
      } else {
        state.tickets = state.tickets.slice().sort((a, b) => b.flight.price.total.amount - a.flight.price.total.amount);
      }        
    },
    timeAction(state){
      if(state.filtredTickets.length){
        state.filtredTickets = state.filtredTickets.slice().sort((a, b) => a.flight.legs[0].duration - b.flight.legs[0].duration);
      } else {
        state.tickets = state.tickets.slice().sort((a, b) => a.flight.legs[0].duration - b.flight.legs[0].duration);
      }       
    },
    changeFiltred(state, action){            
      state.filtredTickets = action.payload;
    },
    changeStatus(state, action) {
      const [name, value] = action.payload;
      state[name] = value;
    }
  }
});

export default ticketsSlice.reducer;
export const {upAction, downAction, timeAction, changeFiltred, changeStatus} = ticketsSlice.actions;
