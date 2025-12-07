import readFile from "utils/readFile";

type InstructionType = "R" | "L";
const move = {
  "R": (curIdx: number, steps: number, length: number) => {
    if (curIdx + steps >= length - 1) {
      return length - 1;
    }

    return curIdx + steps;
  },
  "L": (curIdx: number, steps: number, length: number) => {
    if (curIdx - steps < 0) {
      return 0;
    }

    return curIdx - steps;
  },
};

const part1 = async (file: string): Promise<string> => {
  const input = (await readFile(file, "string")) as string;

  const [namesStr, instructionsStr] = input.split("\n\n");

  const names = namesStr.split(",");
  const instructions = instructionsStr.split(",");

  let nameIdx = 0;
  for (const instruction of instructions) {
    const direction = instruction[0] as InstructionType;
    const steps = parseInt(instruction.slice(1), 10);
    nameIdx = move[direction](nameIdx, steps, names.length);
  }
  return names[nameIdx];
};

export default part1;
