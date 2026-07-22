export const initialState = {
  waitingQueue: [],
  cashiers: [
    { id: 1, type: "priority", queue: [], current: null },
    { id: 2, type: "regular", queue: [], current: null },
    { id: 3, type: "regular", queue: [], current: null },
  ],
  nextCustomerId: 1,
};

const randomServiceTime = () => Math.floor(Math.random() * 96) + 5;
const randomType = () => (Math.random() < 0.3 ? "priority" : "regular");

export default function cashierQueueReducer(state, action) {
  switch (action.type) {
    case "ADD_CUSTOMER": {
      const newCustomer = {
        id: state.nextCustomerId,
        type: randomType(),
        serviceTime: randomServiceTime(),
      };
      return {
        ...state,
        waitingQueue: [...state.waitingQueue, newCustomer],
        nextCustomerId: state.nextCustomerId + 1,
      };
    }

    case "ASSIGN_CUSTOMER": {
      if (state.waitingQueue.length === 0) return state;
      const [customer, ...restQueue] = state.waitingQueue;

      let eligibleCashiers = state.cashiers.filter(c =>
        customer.type === "priority"
          ? c.type === "priority"
          : c.type === "regular" || (c.type === "priority" && !c.current && c.queue.length === 0)
      );

      if (eligibleCashiers.length === 0) return state;

      const targetCashier = eligibleCashiers.reduce((a, b) =>
        a.queue.length <= b.queue.length ? a : b
      );

      const updatedCashiers = state.cashiers.map(c =>
        c.id === targetCashier.id
          ? {
              ...c,
              current: c.current || customer,
              queue: c.current ? [...c.queue, customer] : c.queue,
            }
          : c
      );

      return { ...state, waitingQueue: restQueue, cashiers: updatedCashiers };
    }

    case "ASSIGN_ALL": {
      let newState = { ...state };
      while (newState.waitingQueue.length > 0) {
        newState = cashierQueueReducer(newState, { type: "ASSIGN_CUSTOMER" });
      }
      return newState;
    }

    case "TICK": {
      const updatedCashiers = state.cashiers.map(c => {
        if (c.current) {
          const newTime = c.current.serviceTime - 1;
          if (newTime <= 0) {
            const [next, ...rest] = c.queue;
            return {
              ...c,
              current: next || null,
              queue: rest,
            };
          }
          return {
            ...c,
            current: { ...c.current, serviceTime: newTime },
          };
        }
        return c;
      });
      return { ...state, cashiers: updatedCashiers };
    }

    default:
      return state;
  }
}
