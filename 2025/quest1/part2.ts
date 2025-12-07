import readFile from "utils/readFile";

type InstructionType = "R" | "L";
const move = {
  "R": (curIdx: number, steps: number, length: number) => {
    if (curIdx + steps > length - 1) {
      return (curIdx + steps) % length;
    }

    return curIdx + steps;
  },
  "L": (curIdx: number, steps: number, length: number) => {
    if (curIdx - steps < 0) {
      return length - ((steps - curIdx) % length);
    }

    return curIdx - steps;
  },
};

const part2 = async (file: string): Promise<string> => {
  const input = (await readFile(file, "string")) as string;

  console.log("input", input);
  const [namesStr, instructionsStr] = input.split("\n\n");

  const names = namesStr.split(",");
  const instructions = instructionsStr.split(",");

  let nameIdx = 0;
  for (const instruction of instructions) {
    const direction = instruction[0] as InstructionType;
    const steps = parseInt(instruction.slice(1), 10);
    nameIdx = move[direction](nameIdx, steps, names.length);
    console.log("name", names[nameIdx]);
  }
  return names[nameIdx];
};

export default part2;
