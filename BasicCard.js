var BasicCard = function(front, back) {
    this.front = front;
    this.back = back;
    console.log('\nQuestion: ' + this.front);
    console.log('Answer: ' + this.back);
    console.log('\n-----------------------\n')
};

module.exports = BasicCard;