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
    if (name !== yourName) {
        alert("Name not match")
        return;
    }
    // email validation code here;
    if (email !== yourEmail) {
        alert("please provide right email")
    } else {
        alert("Submit Successfully")
    }
    // subMitBtn = ''
    document.getElementById("name").value = ''
    document.getElementById("email").value = ''
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
        const div = document.createElement("div");
        div.innerHTML = `
            <button id="lessionBtn-${lession.level_no}" 

            onclick="loadLevelWord(${lession.level_no})" 

            class="levelBtn btn btn-outline btn-primary">

            <i class="fa-solid  fa-book-open-reader"></i>

            <span> Lession - ${lession.level_no}</span> 
            
            </button>
        `
        lessionContainer.appendChild(div)
    }
}
learnVocabularies()
// Level Word code start here;
const loadLevelWord = async (id) => {
    try {
        // Active btn code start here✅✅✅;
        const allBtn = document.querySelectorAll(".levelBtn");
        allBtn.forEach(btn=>{
            btn.classList.remove("active-btn")
        })
        const thisBtn = document.getElementById(`lessionBtn-${id}`);
        if(thisBtn){
            thisBtn.classList.add("active-btn")
        }
        // Active btn code end here✅✅✅;
        const res = await fetch(`https://openapi.programming-hero.com/api/level/${id}`);
        const allWord = await res.json();
        loadLevelWordDisplay(allWord.data);
    } catch (error) {
        console.log(error);
    }
}
// loadLevelWord in display;
const loadLevelWordDisplay = (elements) => {
    const levelWordContainer = document.getElementById("levelWordContainer");
    levelWordContainer.innerHTML = '';
    // Emty Lession validation code start here;
    if (elements.length == 0) {
        levelWordContainer.innerHTML = `
            <div class="flex justify-center items-center col-span-full">
                <img src="./assets/alert-error.png" alt="" class="w-28">
            </div>
           <div class="flex items-center justify-center col-span-1 sm:col-span-2 lg:col-span-3 py-4">
                <h1 class="text-xl font-bold uppercase bangla-font text-center">
                   <span class="text-sky-400 text-3xl"> “এই পাঠে কোনো শব্দ যোগ করা হয়নি।</span> <br><br> 
                    আপনি পরবর্তী পাঠ বা পূর্ববর্তী পাঠে যেতে পারেন।” ✅
                </h1>
            </div>
         `
        return;
    }
    // Emty Lession validation code end here;
    for (let ele of elements) {
        const card = document.createElement("div");
        card.innerHTML = `
         <div class="bg-white shadow-lg rounded-xl p-8 text-center transition hover:shadow-2xl">
                <h1 class="text-2xl font-extrabold mb-2">${ele.word}</h1>
                <p class="font-semibold mb-2">Meaning / Pronounciation</p>
               <h2 class="text-2xl mb-3 bangla-font">
                    ${ele.meaning ? ele.meaning : "মর্মার্থ যোগ করা হয়নি"} / ${ele.pronunciation ? ele.pronunciation : "উচ্চারণ নেই"}
                </h2>
                <div class="flex justify-between items-center mb-2">
                <button class="bg-[#1A91FF10] rounded-sm hover:bg-[#1A91FF80] p-2" ><i class="fa-solid fa-circle-info"></i></button>
                <button class="bg-[#1A91FF10] rounded-sm  hover:bg-[#1A91FF80] p-2" ><i   class="fa-solid fa-volume-high"></i></button>
            </div>
            </div>
        `
        levelWordContainer.append(card)
    }
}
// Level Word code end here;








