export{}
var arrow = (names: string[] )=> {
    let out = [];
    for(let color of names ){
        var row : any= {

        };
        row.name = color;
        row.length = color.length;
        out.push(row);
    }
    return out;
};

let names =  ["Himanshu", "Jay", "Ram"];
console.log(arrow(names));