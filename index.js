const fs = require("fs");
const { promisify } = require("util");
const step1 = () => {
 fs.readFile("./step1.txt", "utf8", (err, data) => {
 console.log(data);
 });
};
const step2 = () => console.log("step2");
const step3 = () => {
 fs.readFile("./step3.txt", "utf8", (err, data) => {
 console.log(data);
 });
};
const step4 = () => console.log("step4");
const step5 = () => {
 fs.readFile("./step5.txt", "utf8", (err, data) => {
 console.log(data);
 });
};

//Task2
const step1Promised= ()=>{
    const readFile = promisify(fs.readFile);
    return readFile("./step1.txt", "utf8").
       then(data=>{console.log(data)});
};
//Task3
const step3Promised=() =>{
    const readFile =promisify(fs.readFile);
    return readFile("./step3.txt", "utf8").
    then(data=>{console.log(data);});
};

const step1andstep2 =()=>{
    
     //readFile("./step1.txt", "utf8")
       // .then(console.log())
    //return readFile("./step1.txt", "utf8").then(data=>{console.log(data);})
      //  .then(step2());//console.log("step2"));
    step1Promised().then(step2());
};
//Task 3
const step1ToStep4=async()=>{
    await step1Promised();
     step2();
    await step3Promised();
     step4();
}

const step5Promised=() =>{
    const readFile =promisify(fs.readFile);
    return readFile("./step5.txt", "utf8").
    then(data=>{
        console.log(data);})
        .catch(err=>{
            console.log("Error occured:", err);
        });
    };
const promiseExample = () => {
 const readFile = promisify(fs.readFile);
 return readFile("./step1.txt", "utf8");
}
/*Task1
    step1();
    step2();*/
/*Task2;
    step1andstep2();*/
/*Task3*/
step1ToStep4();
//Task 4
//step5();
//Task5
step5Promised();