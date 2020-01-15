export const fun = (param, body) => ({ type: 'fun', param, body });

export const call = (funExp, argExp) => ({ type: 'call', funExp, argExp });

export const add = (exp1, exp2) => ({ type: 'add', exp1, exp2 });
