function _eval(triplet: number[][]) {
  if (
    triplet[0][0] == triplet[1][0] ||
    triplet[0][0] == triplet[2][0] ||
    triplet[1][0] == triplet[2][0]
  ) {
    return false;
  }

  if (triplet[0][1] + triplet[1][1] + triplet[2][1] !== 0) {
    return false;
  }
  return true;
}

function threeSum(nums: number[]): number[][] {
  const p: number[][][] = [];
  const triplet: number[][] = [];
  const keys = new Set();

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      const lower = i > j ? j : i;
      const higher = i > j ? i : j;
      const key = `${lower}${higher}`;

      if (!keys.has(key)) {
        p.push([
          [lower, nums[lower]],
          [higher, nums[higher]],
        ]);
        keys.add(`${lower}${higher}`);
      }
    }
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < p.length; j++) {
      const elem = p[j];
      elem[2] = [i, nums[i]];
      const key = p[j][0][1] * p[j][1][1] * p[j][2][1];

      if (keys.has(key)) {
        continue;
      }

      if (_eval(elem)) {
        keys.add(key);
        triplet.push([p[j][0][1], p[j][1][1], p[j][2][1]]);
      }
    }
  }

  return triplet;
}
