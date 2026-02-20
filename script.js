
// const fetchAllLevel = async (id) => {
//     try {
//         const res = await fetch(`https://openapi.programming-hero.com/api/words/${id}`);
//         const data = await res.json();
//         // displayShow(data);
//         console.log(data.data);

//     } catch (error) {
//         console.log("Error Message", error);
//     }
// }
// fetchAllLevel(1)


// const fetchAllLevel = async (id) => {
//     try {
//         const res = await fetch(`https://openapi.programming-hero.com/api/word/${id}`);
//         const data = await res.json();


//         console.log("Words:", data.data);

//     } catch (error) {
//         console.log("Error Message", error);
//     }
// }

// fetchAllLevel(5);

// All api fetching successfully;


// Globaly declar name + email;
const yourName = "Md.Asik"
const yourEmail = "mdasik855789@gmail.com"
// Form submit code start here;
let subMitBtn = document.getElementById("subMitBtn");
subMitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = getInputFieldValue("name")
    const email = getInputFieldValue("email")
    // console.log(name,email);
    // name validation code;
    if(name !==yourName){
        alert("Name not match")
        return;
    }
    // email validation code here;
    if(email !== yourEmail){
        // console.log("success");
        alert("please provide right email")
    }else{
        alert("Submit Successfully")
    }


})
// Form submit code end here;

// Reusable funk code;
const getInputFieldValue = (id) => {
    return document.getElementById(id).value
}