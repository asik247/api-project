
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
    console.log(name, email);
    // name validation code;
    if (name !== yourName) {
        alert("Name not match")
        return;
    }
    // email validation code here;
    if (email !== yourEmail) {
        // console.log("success");
        alert("please provide right email")
    } else {
        alert("Submit Successfully")
    }
    // let container = document.getElementById("container");
    // container.innerHTML = '';
    // let div = document.createElement("div");
    // div.innerHTML = `

    //    <div class="border-2 border-gray-500">
    //         <h2>${name}</h2>
    //         <p>${email}</p>
    //     </div>

    // `
    // container.appendChild(div)


})
// Form submit code end here;

// Reusable funk code;
const getInputFieldValue = (id) => {
    return document.getElementById(id).value
}

// Learn Vocabularies code start hre;
const learnVocabularies = async () => {
    try {
        const res = await fetch("https://openapi.programming-hero.com/api/levels/all");
        const lession = await res.json();
        showAllLessions(lession.data);
    } catch (error) {
        console.log("Error Message", error);
    }
}
// show display all lession;
const showAllLessions = (lessions) => {
    const lessionContainer = document.getElementById("lessionContainer");
    lessionContainer.innerHTML = '';
    for (const lession of lessions) {
        // console.log(lession);
        // eventDelegtion(lession)

        const div = document.createElement("div");
        div.innerHTML = `
            <button onclick="loadLevelWord(${lession.level_no})" class="levelBtn btn btn-outline btn-primary">
            <i class="fa-solid  fa-book-open-reader"></i>

            <span> Lession - ${lession.level_no}</span> 
            
            </button>
        `
        // div.querySelector(".levelBtn").addEventListener("click",()=>{
        //     console.log(lession.level_no);
        // })


        lessionContainer.appendChild(div)
    }
}
learnVocabularies()




// Level Word code start here;
const loadLevelWord = async (id) => {
    // console.log(id);
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/level/${id}`)
        const allWord = await res.json();
        console.log(allWord.data);

        loadLevelWordDisplay(allWord.data);
    } catch (error) {
        console.log(error);
    }
}
// loadLevelWord in display;
const loadLevelWordDisplay = (elements) => {
    // console.log(words);
    const levelWordContainer = document.getElementById("levelWordContainer");
    levelWordContainer.innerHTML = '';
    for (let ele of elements) {
        // console.log(ele);
        const card = document.createElement("div");
        card.innerHTML = `
        <p>cat</p>
        
        `
        levelWordContainer.append(card)
    }
}
// Level Word code end here;

// Learn Vocabularies code end hre;

// Event Delegation systerm code start here;
// const eventDelegtion = () => {
//     document.getElementById("lessionContainer").addEventListener("click", (e) => {
//         if (e.target.closest(".levelBtn")) {
//             console.log("level btn clicked", e.target);
//         }
//     })
// }
// eventDelegtion()
// Event Delegation systerm code end here;







