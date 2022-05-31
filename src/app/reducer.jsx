import { createSlice } from '@reduxjs/toolkit';
import ticketsObject from './flights.json';

const tickets = ticketsObject.result.flights;
tickets.forEach((ticket, i) => {ticket.id = i + 1;});

const initialState = {
  tickets,  
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
      state.tickets = state.tickets.slice().sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount);            
    },
    downAction(state){      
      state.tickets = state.tickets.slice().sort((a, b) => b.flight.price.total.amount - a.flight.price.total.amount);              
    },
    timeAction(state){     
      state.tickets = state.tickets.slice().sort((a, b) => a.flight.legs[0].duration - b.flight.legs[0].duration);          
    },    
    changeStatus(state, action) {
      const [name, value] = action.payload;
      state[name] = value;
    }
  }
});

export default ticketsSlice.reducer;
export const {upAction, downAction, timeAction, changeFiltred, changeStatus} = ticketsSlice.actions;
