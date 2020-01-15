const id = x => x;

export default function evaluate(exp, env = {}, next = id) {
  if (typeof exp === 'number') {
    return next(exp);
  }
  if (typeof exp === 'string') {
    return next(env[exp]);
  }
  if (exp.type === 'add') {
    return next(evaluate(exp.exp1, env) + evaluate(exp.exp2, env));
  }
  if (exp.type === 'fun') {
    return function(value) {
      const funEnv = { ...env, [exp.param]: value };
      return next(evaluate(exp.body, funEnv));
    };
  }
  if (exp.type === 'call') {
    const funValue = evaluate(exp.funExp, env);
    const argValue = evaluate(exp.argExp, env);
    return next(funValue(argValue));
  }
}
