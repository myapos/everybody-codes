import readFile from "utils/readFile";
import swap from "utils/swap";

type InstructionType = "R" | "L";
const move = {
  "R": (steps: number, length: number) => {
    return steps % length;
  },
  "L": (steps: number, length: number) => {
    const mod = steps % length;
    return mod === 0 ? 0 : length - mod;
  },
};

const part3 = async (file: string): Promise<string> => {
  const input = (await readFile(file, "string")) as string;

  const [namesStr, instructionsStr] = input.split("\n\n");

  const names = namesStr.split(",");
  const instructions = instructionsStr.split(",");

  for (const instruction of instructions) {
    const direction = instruction[0] as InstructionType;
    const steps = parseInt(instruction.slice(1), 10);
    const nameIdx = move[direction](steps, names.length);

    swap(names, 0, nameIdx);
  }
  return names[0];
};

export default part3;
