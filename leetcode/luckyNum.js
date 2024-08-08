// Leetcode 1380

/*
Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  let lucky = [];
  for (let i = 0; i < matrix.length; i++) {
    let small = [matrix[i][0], 0];
    for (let j = 0; j < matrix[i].length; j++) {
      if (small[0] > matrix[i][j]) {
        small = [matrix[i][j], j];
      }
    }
    let colNums = [];
    for (let k = 0; k < matrix.length; k++) {
      colNums.push(matrix[k][small[1]]);
    }
    let max = Math.max(...colNums);
    if (small[0] == max) {
      lucky.push(max);
    }
  }
  return lucky;
};

console.log(luckyNumbers([[3, 7, 8], [9, 11, 13], [15, 16, 17]]));
console.log(luckyNumbers([[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]]));
console.log(luckyNumbers([[7, 8], [1, 2]]));
console.log(luckyNumbers([[1]]));
console.log(luckyNumbers([[1], [2], [3], [4]]));
console.log(luckyNumbers([[42643, 28733, 64598, 95052, 30409, 81514, 15013, 12958, 93974, 5640, 33765, 36236, 72050, 31362, 13897, 64737, 83129, 11700, 20618, 46571, 85362, 25581, 7010, 59961, 76545, 96566, 18620, 62230, 48072, 72155, 59384, 41844, 45316, 12934, 83512, 65064, 32571, 27680, 96215, 23876, 39216, 87435, 91336, 70735, 74009, 53604, 28494, 4632, 8565, 70258], [24361, 15294, 67840, 22986, 39261, 23286, 11453, 82844, 50416, 78819, 95118, 18472, 1308, 35209, 7943, 74118, 21565, 6979, 74389, 28355, 48994, 67933, 20730, 42488, 28067, 41519, 13984, 593, 21147, 31762, 31624, 60120, 27229, 54460, 16237, 23929, 32418, 30341, 95332, 38284, 46286, 83269, 37112, 92725, 84352, 76382, 90258, 43835, 34519, 70225], [64924, 76964, 45216, 10817, 26910, 25839, 69838, 71727, 43883, 13102, 72548, 36431, 76055, 16138, 84394, 21466, 47025, 62581, 93213, 68014, 27615, 5192, 23809, 10396, 20888, 29600, 37139, 49667, 20058, 77453, 89292, 3340, 17155, 71274, 4080, 55492, 79512, 83505, 91116, 93588, 51407, 66482, 30686, 31715, 87959, 17447, 72725, 73077, 17298, 68155], [35006, 48949, 64020, 51262, 85538, 32040, 71783, 20338, 2696, 66466, 87804, 25145, 68725, 68316, 39671, 4235, 99179, 76314, 96315, 28986, 64035, 90576, 96883, 43283, 49612, 93517, 12421, 86523, 46732, 80899, 62573, 14524, 11091, 38645, 29595, 9571, 78490, 5150, 82004, 21116, 93672, 77398, 16856, 32886, 74255, 49061, 74274, 7522, 94830, 11821], [27956, 17010, 39931, 15562, 9136, 89964, 94248, 72123, 73411, 67683, 62826, 7345, 66623, 40616, 92084, 5461, 84169, 3605, 75427, 8838, 70353, 18527, 22263, 76972, 11050, 33785, 60698, 19467, 93441, 47449, 61098, 60002, 3792, 6441, 1456, 81225, 34415, 31379, 24260, 70595, 93086, 90210, 99823, 85779, 76290, 46413, 12849, 84116, 20087, 40640], [40997, 87295, 58337, 1585, 98958, 77183, 2445, 36802, 30704, 15510, 2306, 87443, 37105, 54059, 91948, 70799, 20962, 30885, 83860, 81989, 76484, 53588, 30733, 59135, 1594, 36611, 80060, 71554, 93651, 46971, 20405, 81480, 999, 18894, 41930, 74580, 44576, 51593, 49473, 26984, 75479, 24342, 75296, 24050, 62107, 74806, 6297, 70035, 76313, 41664], [97564, 29045, 43079, 2124, 72200, 66676, 96892, 97543, 41996, 18102, 47668, 27020, 42060, 49766, 22524, 4851, 26265, 8399, 67265, 6906, 54549, 64595, 3810, 18584, 59479, 73022, 63369, 7477, 55601, 44796, 20936, 33226, 79140, 22729, 87052, 11583, 7994, 74883, 15539, 81696, 51414, 92543, 20183, 66113, 59939, 15074, 40424, 34273, 36234, 51027], [12020, 16278, 54000, 28228, 25362, 22928, 64070, 33135, 86888, 73189, 745, 99935, 25377, 17420, 21114, 84744, 79274, 95746, 4799, 3124, 39305, 65811, 77550, 38136, 16023, 81959, 75985, 95347, 68962, 35614, 74727, 46066, 99813, 68195, 46230, 44260, 77489, 66980, 15043, 2886, 64724, 42097, 48100, 35180, 26095, 80079, 96366, 12016, 14579, 73294], [72455, 40855, 7274, 51003, 13625, 71015, 17719, 80329, 87019, 1909, 17032, 64862, 43559, 43133, 26207, 74961, 16631, 48039, 46335, 61670, 74599, 22388, 29764, 99489, 99645, 47279, 57030, 93799, 44243, 61019, 45382, 82480, 96115, 12732, 68412, 22336, 51499, 6845, 50357, 73906, 7328, 6899, 77185, 82949, 17495, 45629, 69375, 99867, 32223, 5405], [37803, 11814, 68933, 72714, 81114, 2519, 78882, 5307, 28957, 43764, 47853, 48628, 85272, 58003, 68001, 89907, 22527, 33896, 92510, 71960, 59045, 98018, 76921, 76119, 88747, 76338, 83192, 2094, 52984, 19520, 41957, 68333, 53785, 91350, 73860, 36464, 31777, 18970, 62429, 72499, 16470, 65983, 23828, 97977, 77357, 11729, 34089, 52766, 61996, 33029], [2483, 72456, 96036, 67530, 8307, 43662, 99104, 56678, 76720, 51088, 84998, 73613, 2595, 4414, 50612, 3407, 18280, 45555, 88757, 15756, 5252, 11975, 46265, 76150, 40466, 61697, 95162, 25401, 61047, 88505, 78719, 27015, 23432, 29375, 81963, 51665, 16745, 41695, 71186, 15310, 74943, 2881, 725, 84494, 94291, 7201, 82150, 42968, 8169, 11114], [3917, 66924, 93362, 83521, 19982, 35981, 87115, 84923, 93513, 66732, 3263, 19911, 44728, 20156, 47225, 10334, 6368, 96919, 19611, 57968, 58819, 18034, 12815, 67643, 73105, 15403, 64279, 90063, 87701, 39445, 27030, 82681, 29706, 35264, 31100, 51921, 13729, 22391, 75771, 93185, 87105, 89500, 79501, 5864, 81289, 64773, 62017, 21527, 62493, 99695], [47465, 66359, 91887, 22791, 6190, 18103, 9017, 89390, 63268, 66167, 50383, 77561, 46421, 85928, 9409, 88701, 63088, 8823, 66264, 31257, 81218, 53559, 80090, 82552, 98139, 31355, 98611, 20648, 46488, 54600, 91252, 16638, 55155, 4195, 34892, 94567, 81941, 98050, 88900, 75746, 14510, 45996, 70610, 13192, 9022, 65498, 17029, 73812, 93571, 18114], [1675, 92921, 4385, 27985, 2713, 74317, 30619, 5200, 17255, 50158, 39908, 94477, 51502, 43800, 35122, 33743, 74948, 22593, 27237, 49879, 37489, 20284, 51794, 70448, 13660, 45129, 43683, 37982, 71129, 79293, 42627, 50424, 51692, 48796, 19089, 44422, 74214, 6227, 13687, 98229, 53795, 54580, 16341, 88363, 56785, 43294, 21553, 70534, 55253, 1064], [68900, 79527, 47491, 30531, 14722, 23863, 40553, 47773, 80819, 35667, 89613, 14805, 99882, 79398, 31625, 63908, 61492, 9232, 54207, 60811, 89671, 52439, 1139, 11816, 56698, 49594, 60511, 63414, 34434, 25237, 96822, 45850, 60515, 37277, 12868, 75587, 26394, 32895, 86278, 83009, 99023, 95710, 7773, 53516, 68250, 12565, 43617, 22934, 45233, 45466], [17972, 74134, 39472, 94461, 18907, 14629, 85857, 32084, 31733, 20495, 52339, 74037, 21665, 70393, 75815, 23784, 93112, 5078, 48602, 73080, 95135, 59853, 27505, 78590, 4534, 90434, 59482, 42426, 13979, 10299, 17283, 22688, 85432, 25320, 31216, 76306, 42938, 69464, 30843, 33367, 86691, 64041, 69513, 46988, 72629, 96558, 66647, 55675, 63557, 50871], [2170, 64903, 2001, 72679, 2723, 77802, 75496, 61898, 47628, 51098, 45387, 36079, 32045, 12926, 20584, 18736, 38814, 35772, 96032, 87504, 75707, 47443, 94514, 31885, 81580, 22605, 50220, 49194, 15699, 41876, 62518, 2286, 59188, 45493, 92299, 1373, 22964, 22923, 87725, 97071, 1227, 13826, 16166, 78540, 63602, 53182, 69082, 18394, 69597, 85837], [82419, 5292, 96794, 85267, 14040, 76859, 79187, 11133, 77480, 67096, 2169, 87610, 6051, 37841, 87599, 94336, 83932, 59240, 27717, 4968, 24984, 15023, 61506, 70019, 65515, 20712, 73520, 51068, 83902, 82614, 34409, 52441, 32116, 88945, 21248, 46008, 29504, 12166, 4691, 36304, 67314, 22448, 26284, 49708, 80244, 14433, 19160, 60023, 73569, 85968]]));