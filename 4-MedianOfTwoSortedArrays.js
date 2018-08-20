function findMedianSortedArray(nums1, nums2) {
    var arr = nums1.concat(nums2).sort(function(a, b) {
        return a - b;
    });

    if (arr.length % 2 === 0) {
        return (arr[parseInt(arr.length / 2)] + arr[parseInt(arr.length / 2) - 1]) / 2;
    } else {
        return arr[parseInt(arr.length / 2)];
    }
}


console.log(findMedianSortedArray([1, 3], [2, 4]))