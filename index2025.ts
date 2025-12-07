import benchmark from "utils/benchmark";
import quest1Part1 from "2025/quest1/part1";
import quest1Part2 from "2025/quest1/part2";
import quest1Part3 from "2025/quest1/part3";

const inputFileQuest1Sample = "2025/quest1/inputSample.txt";
const inputFileQuest1Part1 = "2025/quest1/inputPart1.txt";
const inputFileQuest1Part2 = "2025/quest1/inputPart2.txt";
const inputFileQuest1Part3 = "2025/quest1/inputPart3.txt";

// const inputFileDay2Sample = "2025/day2/inputSample.txt";
// const inputFileDay2 = "2025/day2/input.txt";

// const inputFileDay3Sample = "2025/day3/inputSample.txt";
// const inputFileDay3 = "2025/day3/input.txt";

// const inputFileDay4Sample = "2025/day4/inputSample.txt";
// const inputFileDay4 = "2025/day4/input.txt";
// const inputFileDay4_2 = "2025/day4/input2.txt";

// const inputFileDay5Sample = "2025/day5/inputSample.txt";
// const inputFileDay5 = "2025/day5/input.txt";

// const inputFileDay6Sample = "2025/day6/inputSample.txt";
// const inputFileDay6 = "2025/day6/input.txt";

// const inputFileDay7Sample = "2025/day7/inputSample.txt";
// const inputFileDay7 = "2025/day7/input.txt";

// const inputFileDay8Sample = "2025/day8/inputSample.txt";
// const inputFileDay8 = "2025/day8/input.txt";

// const inputFileDay9Sample = "2025/day9/inputSample.txt";
// const inputFileDay9 = "2025/day9/input.txt";

// const inputFileDay10Sample = "2025/day10/inputSample.txt";
// const inputFileDay10 = "2025/day10/input.txt";

// const inputFileDay11Sample = "2025/day11/inputSample.txt";
// const inputFileDay11 = "2025/day11/input.txt";

// const inputFileDay12Sample = "2025/day12/inputSample.txt";
// const inputFileDay12 = "2025/day12/input.txt";

// await benchmark("Quest 1, Part 1: ", () => quest1Part1(inputFileQuest1Part1));
// await benchmark("Quest 1, Part 2: ", () => quest1Part2(inputFileQuest1Part2));
await benchmark("Quest 1, Part 3: ", () => quest1Part3(inputFileQuest1Part3));

// // await benchmark("Day 2, Puzzle 1: ", () => day2puzzle1(inputFileDay2));
// // await benchmark("Day 2, Puzzle 2: ", () => day2puzzle2(inputFileDay2));

// // await benchmark("Day 3, Puzzle 1: ", () => day3puzzle1(inputFileDay3));
// // await benchmark("Day 3, Puzzle 2: ", () => day3puzzle2(inputFileDay3));

// // await benchmark("Day 4, Puzzle 1: ", () => day4puzzle1(inputFileDay4));
// // await benchmark("Day 4, Puzzle 2: ", () => day4puzzle2(inputFileDay4));

// // await benchmark("Day 4, Puzzle 2 Faster: ", () =>
// //   day4puzzle2Faster(inputFileDay4)
// // );
// // await benchmark("Day 5, Puzzle 1: ", () => day5puzzle1(inputFileDay5_2));

// // await benchmark("Day 5, Puzzle 2: ", () => day5puzzle2(inputFileDay5));
// // await benchmark("Day 5, Puzzle 2 day5Puzzle2WithUnionFind: ", () =>
// //   day5Puzzle2WithUnionFind(inputFileDay5)
// // );

// // await benchmark("Day 6, Puzzle 1: ", () => day6puzzle1(inputFileDay6));
// // await benchmark("Day 6, Puzzle 2: ", () => day6puzzle2(inputFileDay6));
// // 84506282 too low
// // 1043285996 too low
// // 11327240822597 too high
// // 1445630860712 wrong
// // 11263080263712 wrong
// // 11270227961905 wrong
// // 11299263623062 // correct
// await benchmark("Day 7, Puzzle 1: ", () => day7puzzle1(inputFileDay7Sample));
