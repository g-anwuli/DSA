function _eval(triplet) {
  if (
    triplet[0][0] == triplet[1][0] ||
    triplet[0][0] == triplet[2][0] ||
    triplet[1][0] == triplet[2][0]
  ) {
    return false;
  }

  return triplet[0][1] + triplet[1][1] + triplet[2][1] === 0;
}

function sortThree(a, b, c) {
  let min, mid, max;

  if (a <= b && a <= c) {
    min = a;
    if (b <= c) {
      mid = b;
      max = c;
    } else {
      mid = c;
      max = b;
    }
  } else if (b <= a && b <= c) {
    min = b;
    if (a <= c) {
      mid = a;
      max = c;
    } else {
      mid = c;
      max = a;
    }
  } else {
    min = c;
    if (a <= b) {
      mid = a;
      max = b;
    } else {
      mid = b;
      max = a;
    }
  }

  return [min, mid, max];
}

function threeSum(nums) {
  const p = [];
  const triplet = [];
  const keys = new Set();

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      const lower = i > j ? j : i;
      const higher = i > j ? i : j;
      const key = `${lower}${higher}`;

      if (keys.has(key)) {
        continue;
      }

      p.push([
        [i, nums[i]],
        [j, nums[j]],
      ]);

      keys.add(key);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = p.length - 1; j >= 0; j--) {
      const elem = p[j];
      elem[2] = [i, nums[i]];
      const [low, mid, high] = sortThree(elem[0][1], elem[1][1], elem[2][1]);
      const key = `n3-${low}-${mid}-${high}`;

      if (keys.has(key)) {
        continue;
      }

      if (_eval(elem)) {
        keys.add(key);
        console.log([low, mid, high], `${key}`, "\n\n");
        triplet.push([low, mid, high]);
      }
    }
  }

  return triplet;
}

function findMissingTriplet(arr1, arr2) {
  const serialize = (arr) => arr.map((sub) => sub.join(","));
  const set2 = new Set(serialize(arr2));

  return arr1.find((sub) => !set2.has(sub.join(",")));
}

const result = threeSum([
  34, 55, 79, 28, 46, 33, 2, 48, 31, -3, 84, 71, 52, -3, 93, 15, 21, -43, 57,
  -6, 86, 56, 94, 74, 83, -14, 28, -66, 46, -49, 62, -11, 43, 65, 77, 12, 47,
  61, 26, 1, 13, 29, 55, -82, 76, 26, 15, -29, 36, -29, 10, -70, 69, 17, 49,
]);

const answer = [
  [-82, -11, 93],
  [-82, 13, 69],
  [-82, 17, 65],
  [-82, 21, 61],
  [-82, 26, 56],
  [-82, 33, 49],
  [-82, 34, 48],
  [-82, 36, 46],
  [-70, -14, 84],
  [-70, -6, 76],
  [-70, 1, 69],
  [-70, 13, 57],
  [-70, 15, 55],
  [-70, 21, 49],
  [-70, 34, 36],
  [-66, -11, 77],
  [-66, -3, 69],
  [-66, 1, 65],
  [-66, 10, 56],
  [-66, 17, 49],
  [-49, -6, 55],
  [-49, -3, 52],
  [-49, 1, 48],
  [-49, 2, 47],
  [-49, 13, 36],
  [-49, 15, 34],
  [-49, 21, 28],
  [-43, -14, 57],
  [-43, -6, 49],
  [-43, -3, 46],
  [-43, 10, 33],
  [-43, 12, 31],
  [-43, 15, 28],
  [-43, 17, 26],
  [-29, -14, 43],
  [-29, 1, 28],
  [-29, 12, 17],
  [-14, -3, 17],
  [-14, 1, 13],
  [-14, 2, 12],
  [-11, -6, 17],
  [-11, 1, 10],
  [-3, 1, 2],
];

console.log(result);
console.log(findMissingTriplet(answer, result));
