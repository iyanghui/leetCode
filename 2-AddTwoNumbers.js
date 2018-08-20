var addTwoNumbers = function(l1, l2) {
    l1 = new LinkList(l1);
    l2 = new LinkList(l2);
    var arrtemp = [],
        isOver = 0;
        len = 0;
    if (l1.length >= l2.length) {
        len = l1.length;
    } else {
        len = l2.length;
    }
    for (var i = 0; i < len; i++) {
        var sum = l1.current + l2.current + isOver;
        if (sum >= 10) {
            isOver = 1;
            sum = 0;
        } else {
            isOver = 0;
        }

        arrtemp.push(sum);
        l1.next();
        l2.next();
    }
    if (isOver === 1) {
        arrtemp.push(1);
    }

    return arrtemp.join(">");
};

var LinkList = function(arr) {
    this.linkList = arr;
    this.length = this.linkList.length;
    this.index = 0;
    this.current = this.linkList[this.index];

};

LinkList.prototype.next = function() {
    ++this.index;
    if (this.index < this.length) {
        this.current = this.linkList[this.index];
    } else {
        this.current = 0;
    }
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));