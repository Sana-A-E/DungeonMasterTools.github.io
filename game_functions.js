function rollDice(input) {
  // Regex: [count]d[sides][operator][modifier]
  const regex = /^(\d+)?d(\d+)(?:([\+\-\*\/])(\d+))?$/;
  const match = input.replace(/\s+/g, '').match(regex);

  if (!match) {
    throw new Error("Invalid dice format.");
  }

  const count = parseInt(match[1]) || 1;
  const sides = parseInt(match[2]);
  const operator = match[3];
  const modifier = parseInt(match[4]) || 0;

  let total = 0;

  // Roll the dice
  for (let i = 0; i < count; i++) {
    total += Math.floor(Math.random() * sides) + 1;
  }

  // Apply math modifiers
  if (operator) {
    switch (operator) {
      case '+': total += modifier; break;
      case '-': total -= modifier; break;
      case '*': total *= modifier; break;
      case '/': total = Math.floor(total / modifier); break;
    }
  }

  // Ensure the final result is never lower than 1
  return Math.max(1, total);
}
