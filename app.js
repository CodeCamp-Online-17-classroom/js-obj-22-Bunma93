// write code here
function Accumulator(startingValue) {
    this.currentValue = startingValue,
    this.read = function() {
        let input = prompt("กรอกตัวเลข (หรือพิมพ์ 'stop' เพื่อหยุด)");
        if (input == 'stop') {
            return false
        } else {
        let num = Number(input);
        this.currentValue += num;
            return true
        }
    },
    this.show = function(){
        alert(this.currentValue);
    }
}

let accumulator = new Accumulator(0);

while (true) {
    let continuereading = accumulator.read();
    if (!continuereading) break;
    accumulator.show();
}