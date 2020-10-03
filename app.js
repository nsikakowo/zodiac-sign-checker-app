const zodiacSignData = [
    {
        name : "Scorpio",
        description: "Scorpio-born are passionate and assertive people. They are determined and decisive, and will research until they find out the truth. Scorpio is a great leader, always aware of the situation and also features prominently in resourcefulness.",
        sign: "./images/png/001-scorpio.png",
    },
    {
        name : "Aries",
        description : "As the first sign in the zodiac, the presence of Aries always marks the beginning of something energetic and turbulent. They are continuously looking for dynamic, speed and competition, always being the first in everything - from work to social gatherings.",
        sign : "./images/png/002-aries.png"
    },
    {
        name : "capricorn",
        description: "Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious by nature. These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives. ",
        sign : "./images/png/003-capricorn.png",
    },
    {
        name: "leo",
        description: "People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to.",
        sign : "./images/png/004-leo.png",
    },
    {
        name : "libra",
        description: "People born under the sign of Libra are peaceful, fair, and they hate being alone. Partnership is very important for them, as their mirror and someone giving them the ability to be the mirror themselves. These individuals are fascinated by balance and symmetry",
        sign : "./images/png/005-libra.png",
    },
    {
        name : "gemini",
        description : "Expressive and quick-witted, Gemini represents two different personalities in one and you will never be sure which one you will face. They are sociable, communicative and ready for fun, with a tendency to suddenly get serious, thoughtful and restless.",
        sign : "./images/png/006-gemini.png",
    },
    {
        name : "taurus",
        description: "Practical and well-grounded, Taurus is the sign that harvests the fruits of labor. They feel the need to always be surrounded by love and beauty, turned to the material world, hedonism, and physical pleasures.",
        sign :  "./images/png/007-taurus.png",
    },
    {
        name: "sagittarius",
        description: "Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life.",
        sign: "./images/png/008-sagittarius.png",
    },
    {
        name: "pisces",
        description: "Pisces are very friendly, so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back.",
        sign: "./images/png/009-pisces.png",
     },
     {
         name:"virgo",
         description: "Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance, and although they are often tender",
         sign: "./images/png/010-virgo.png",
     },
     {
         name: "aquarius",
         description: "Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others.",
         sign:"./images/png/011-aquarius.png"
     },
     {
         name: "cancer",
         description: "Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. They are very emotional and sensitive, and care deeply about matters of the family and their home. Cancer is sympathetic and attached to people they keep close. ",
         sign: "./images/png/012-cancer.png"
     }

];

//Define HTML Playground 
let imageBox = document.querySelector("#image");
let signBox = document.querySelector("#sign");
let descriptionBox = document.querySelector(".desc");
let detailsContainer = document.querySelector(".zodiac-details");
let formContainer = document.querySelector(".zodiac-form");
let loadFormBtn = document.querySelector("#loadform");
let zodiacBox = document.querySelector("#zodiacBox");


// This function checks a month and returns the number for that month
function checkMonth (month) {
    if(month.toLowerCase() === "january"){
        return 1;
    }else if (month.toLowerCase() == "febuary") {
        return 2;
    }else if (month.toLowerCase() == "march") {
        return 3;
    }else if (month.toLowerCase() == "april") {
        return 4;
    }else if (month.toLowerCase() == "may") {
        return 5;
    }else if (month.toLowerCase() == "june") {
        return 6;
    }else if (month.toLowerCase() == "july") {
        return 7;
    }else if (month.toLowerCase() == "august") {
        return 8;
    }else if (month.toLowerCase() == "september") {
        return 9;
    }else if (month.toLowerCase() == "october") {
        return 10;
    }else if (month.toLowerCase() == "november") {
        return 11;
    }else if (month.toLowerCase() == "december") {
        return 12;
    }else{
        return "invalid month";
    }
};

//This function converts string input to array and returns an array
function userInputToArray(userInput) {
    let newArrayInput = userInput.split(" ");
    return newArrayInput;
}

//This function accepts user birthmonth and birthday and returns a zodiac sign
function zodiac(month, day) {
    if((month == 1 && day <= 19) ||(month == 12 && day >= 22 )){
        return "capricorn";
    }else if((month == 2 && day <= 18) ||(month == 1 && day >= 20 )){
        return "aquaries";
    }else if((month == 3 && day <= 20) ||(month == 2 && day >= 19 )){
        return "pisces";
    }else if((month == 4 && day <= 19) ||(month == 3 && day >= 21 )){
        return "aries";
    }else if((month == 5 && day <= 20) ||(month == 4 && day >= 20 )){
        return "taurus";
    }else if((month == 6 && day <= 20) ||(month == 5 && day >= 21 )){
        return "gemini";
    }else if((month == 7 && day <= 22 ) ||(month == 6 && day >= 21 )){
        return "cancer";
    }else if((month == 8 && day <= 22) ||(month == 7 && day >= 23 )){
        return "leo";
    }else if((month == 9 && day <= 22) ||(month == 8 && day >= 23 )){
        return "virgo";
    }else if((month == 10 && day <= 22) ||(month == 9 && day >= 23 )){
        return "libra";
    }else if((month == 11 && day <= 21) ||(month == 10 && day >= 23 )){
        return "scorpio";
    }else if((month == 12 && day <= 21) ||(month == 11 && day >= 22 )){
        return "sagittarius";
    }
}

function getUserZodiacData(sign){
    let zodiacData =zodiacSignData.filter(data => data.name.toLowerCase() == sign
    );
    return zodiacData;
}

//This function handles the submit event
function handleSubmit() {
    event.preventDefault();
    let [month, day] = userInputToArray(zodiacBox.value);
    let userMonth = checkMonth(month);
    let userDay = Number(day);
    let userZodiacSign = zodiac(userMonth, userDay);
    
    //Render Data to HTML
    let [userZodiacSignData] = getUserZodiacData(userZodiacSign);
    imageBox.src = userZodiacSignData.sign;
    signBox.innerHTML = userZodiacSignData.name;
    descriptionBox.innerHTML =userZodiacSignData.description;
    detailsContainer.style.display = "block";
    formContainer.classList.add("animate-form-out");
    formContainer.classList.remove("animate-form-in");
    detailsContainer.classList.add("animate-details-in");
    detailsContainer.classList.remove("animate-details-out");
}

//Function to reload the form
function loadForm(){
    formContainer.classList.add("animate-form-in");
    formContainer.classList.remove("animate-form-out");
    detailsContainer.classList.add("animate-details-out");
    detailsContainer.classList.remove("animate-details-in");
    detailsContainer.style.display = "none";
    zodiacBox.value = "";
}

let zodiacForm = document.querySelector("#zodiacForm");
zodiacForm.addEventListener("submit", handleSubmit);

loadFormBtn.addEventListener("click", loadForm);

