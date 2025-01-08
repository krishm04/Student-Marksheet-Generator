const inputmarks = document.querySelectorAll(".quantity");
const totalmarks = document.querySelector(".show-marks h3");

let totaldisplay = 0;
function updatMarks(){
    totaldisplay = 0;
    inputmarks.forEach(input => {
        const marks = parseInt(input.value) || 0;
        totaldisplay += marks;
    });
    totalmarks.innerHTML = `Total Marks : ${totaldisplay}/500`
};

inputmarks.forEach(input=>{
    input.addEventListener("input",updatMarks);
});

//  Grade calculation 
function gradeCalculation(pr)
{
    if(pr >= 90){
        return "A";
        }   else if (pr >= 70){
        return "B";
        }   else if (pr >= 50){
        return "c";
        }   else if (pr >= 33){
        return "B";
        }   else if (pr < 33){
        return "Fail";
        }
    }


// for showing  details
let btn = document.querySelector(".btn1");
let add = document.querySelector(".show");
btn.addEventListener("click",()=>{
    const studentName = document.querySelector(".input1 input").value;
    let p1 = document.createElement("p");
    p1.textContent = `Name : ${studentName}`;
    add.appendChild(p1);

    const college = document.querySelector(".input2 input").value;
    let p2 = document.createElement("p");
    p2.textContent = ` College Name : ${college}`;
    add.appendChild(p2);

    const rollNo = document.querySelector(".input3 input").value;
    let p3 = document.createElement("p");
    p3.textContent = `Student Enrollment No : ${rollNo}`;
    add.appendChild(p3); 

    let p4 = document.createElement("p");
    p4.textContent = totalmarks.textContent;
    add.appendChild(p4);

    let p5 = document.createElement("p");
    let pr = ((totaldisplay / 500) * 100).toFixed(2);
    p5.textContent = `Percentage : ${pr}`;
    add.appendChild(p5);
    
    const Grade = gradeCalculation(pr);
    let p6 = document.createElement("p");
    p6.textContent = `Grade ${Grade}`;
    add.appendChild(p6); 
});

// for reset the whole page
const resetBtn = document.querySelector(".btn2");

resetBtn.addEventListener("click", (event)=>
{
    event.preventDefault();
    document.querySelectorAll("input").forEach((input) =>{
        input.value = "";
    })
    totalmarks.innerHTML = `0/500`;
    add.innerHTML = "";
});


