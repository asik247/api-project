const synaminFun = (arr) => {
    // console.log(arr);
    const creatSpan = arr.map((el) => `<span class = "btn">${el}</span>`);
    return creatSpan.join(" ");
}

const shoundFunk = (arras) =>{
    // console.log(arras);
    const creatSpan2 = arras.map((ar)=> `<span class="btn">${ar}</span>`);

       
       
   
    return creatSpan2.join(" ");
}
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
        allBtn.forEach(btn => {
            btn.classList.remove("active-btn")
        })
        const thisBtn = document.getElementById(`lessionBtn-${id}`);
        if (thisBtn) {
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
        // console.log(ele.id);
        const card = document.createElement("div");
        card.innerHTML = `
         <div class="bg-white shadow-lg rounded-xl p-8 text-center transition hover:shadow-2xl">
                <h1 class="text-2xl font-extrabold mb-2">${ele.word}</h1>
                <p class="font-semibold mb-2">Meaning / Pronounciation</p>
               <h2 class="text-2xl mb-3 bangla-font">
                    ${ele.meaning ? ele.meaning : "মর্মার্থ যোগ করা হয়নি"} / ${ele.pronunciation ? ele.pronunciation : "উচ্চারণ নেই"}
                </h2>
                <div class="flex justify-between items-center mb-2">
                <button onclick="wordDetails(${ele.id})" class="modalBtn bg-[#1A91FF10] rounded-sm hover:bg-[#1A91FF80] p-2" ><i class="fa-solid fa-circle-info"></i></button>
                <button  onclick="soundDetails(${ele.id})" class="bg-[#1A91FF10] rounded-sm  hover:bg-[#1A91FF80] p-2" ><i   class="fa-solid fa-volume-high"></i></button>
            </div>
            </div>
        `
        // modal cod 2nd way;
        // const modalDetails = card.querySelector(".modalBtn");
        // modalDetails.addEventListener("click", (e) => {
        //     console.log("clicked modal:",e.target);
        // })
        levelWordContainer.append(card)
    }
}
// Level Word code end here;
// Modal code start here;
// const levelWordContainer = document.getElementById("levelWordContainer");
// levelWordContainer.addEventListener("click",(e)=>{
//     if(e.target.closest(".modalBtn")){
//         console.log("modal btn clicked",e.target);
//     }
// })
// Modal code end here✅✅✅;
const wordDetails = async (id) => {
    // console.log(id);
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/word/${id}`);
        const allWords = await res.json()
        showWord(allWords.data);
    } catch (error) {
        console.log(error);
    }

}
// show word;
const showWord = (words) => {
    //  console.log(words);
    const modalContainer = document.getElementById("modalContainer");
    modalContainer.innerHTML = `
             <div>
                   <h2>
                       <span class="font-extrabold text-2xl"> ${words.word} </span>
                        <span class="pronunciation">
                         (<i class="fa-solid fa-microphone-lines"></i>: ${words.pronunciation})
                         </span>
                    </h2>
                </div>
                <div>
                    <h3 class="font-bold text-xl">Meanign</h3>
                    <p>${words.meaning}</p>
                </div>
                <div>
                    <h3  class="font-bold text-xl">Example</h3>
                    <p>${words.sentence}</p>
                </div>
                <div>
                    <h3 class="font-bold text-xl mb-2" >synonyms</h3>
                    <div>
                    
                         ${synaminFun(words.synonyms)}
                     </div>

                </div>

                </div>
                
     
     `
    document.getElementById("myModal").showModal()
    //  for(const word of words){
    //     console.log(word);
    //  }
    // words.forEach(word=>{
    //     console.log(word);
    // })
}
// {
//     "word": "Eager",
//     "meaning": "আগ্রহী",
//     "pronunciation": "ইগার",
//     "level": 1,
//     "sentence": "The kids were eager to open their gifts.",
//     "points": 1,
//     "partsOfSpeech": "adjective",
//     "synonyms": [
//         "enthusiastic",
//         "excited",
//         "keen"
//     ],
//     "id": 5
// }

// soundDetails code modal 2nd start here;
const soundDetails = async (id) => {
    // console.log(id);
    const res = await fetch(`https://openapi.programming-hero.com/api/word/${id}`);
    const data = await res.json();
    displaySoundDetails(data.data);
}
// display soundDetails code;
const displaySoundDetails = (details) => {
    // console.log(details);
    const shoundDetailsContainer = document.getElementById("shoundDetailsContainer");
    shoundDetailsContainer.innerHTML = `
    
            <div>
                   <h2>
                       <span class="font-extrabold text-2xl"> ${details.word} </span>
                        <span class="pronunciation">
                         (<i class="fa-solid fa-microphone-lines"></i>: ${details.pronunciation})
                         </span>
                    </h2>
            </div>
                <div>
                    <h3 class="font-bold text-xl">Meanign</h3>
                    <p>${details.meaning}</p>
                </div>
                <div>
                    <h3  class="font-bold text-xl">Example</h3>
                    <p>${details.sentence}</p>
             </div>

             <div>
                    <h2 class="font-bold text-xl mb-2">Synanim</h2>
                    <div >
                       
                       ${shoundFunk(details.synonyms)}
                    </div>
                </div>

             </div>
    
    `
    document.getElementById("my_modal").showModal()
}
// soundDetails code modal 2nd end here;


console.log('hi js');





