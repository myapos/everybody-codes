import readFile from "utils/readFile";

const quest1 = async (file: string): Promise<number> => {
  const input = (await readFile(file)) as string[];
  for (const instruction of input) {
    //TODO
  }
  return 0;
};

export default quest1;
