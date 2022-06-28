/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    	const M_LEN = mat.length;
	const N_LEN = mat[0].length;
	const dp = Array(M_LEN).fill('').map(() => Array(N_LEN).fill(Infinity));

	for (let m = 0; m < M_LEN; m++) {
		for (let n = 0; n < N_LEN; n++) {
			if (mat[m][n] === 0) dp[m][n] = 0;
			else {
				if (m > 0) dp[m][n] = Math.min(dp[m][n], dp[m - 1][n] + 1);
				if (n > 0) dp[m][n] = Math.min(dp[m][n], dp[m][n - 1] + 1);
			}
		}
	}

	for (let m = M_LEN - 1; m >= 0; m--) {
		for (let n = N_LEN - 1; n >= 0; n--) {
			const current = dp[m][n];
			if (current <= 1) continue;
			if (m < M_LEN - 1) dp[m][n] = Math.min(dp[m][n], dp[m + 1][n] + 1);
			if (n < N_LEN - 1) dp[m][n] = Math.min(dp[m][n], dp[m][n + 1] + 1); 
		}
	}
	return dp;
};