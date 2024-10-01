function algorritmo(
  discos: number,
  var1: number,
  var3: number,
  var2: number,
  vars: number[][],
): void {
  if (discos === 1) {
    const disco = vars[var1 - 1].pop();
    if (disco !== undefined) {
      vars[var3 - 1].push(disco);
    }
    printeo(vars);
  } else {
    algorritmo(discos - 1, var1, var2, var3, vars);

    algorritmo(1, var1, var3, var2, vars);

    algorritmo(discos - 1, var2, var3, var1, vars);
  }
}

function printeo(vars: number[][]): void {
  console.log("Varillas:");
  console.log("varilla 1: ", vars[0]);
  console.log("varilla 2: ", vars[1]);
  console.log("varilla 3: ", vars[2]);
  console.log("__________________________");
}
function main(): void {
  const discos = 5;
  let extra = discos;
  const var1: number[] = [];
  const var2: number[] = [];
  const var3: number[] = [];

  const torres: number[][] = [var1, var2, var3];

  for (let i = 0; i < discos; i++) {
    var1.push(extra);
    extra--;
  }

  console.log(var1);

  algorritmo(discos, 1, 3, 2, torres);
}

main();
