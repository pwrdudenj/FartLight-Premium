let listaplaces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
let gambler1;
if (Math.round(Math.random()) == 1) {
    gambler1 = "Win! You get 50 ";
} else {
    gambler1 = "Lose! You lose 50 ";
}
let randomforcapy = Math.round(Math.random() * 2)
let capybaragambler;
if (Math.round(randomforcapy) == 0) {
    capybaragambler = "Bob";
} else if(Math.round(randomforcapy) == 1) {
    capybaragambler = "Cabybara";
} else {
    capybaragambler = "Guy";
}
let dicerandom = (Math.round(Math.random()) * 5) + 1;
let listaquestions = ["What is 2 + 2?", "What cave does the Poopoo cave monster live in?", "Whoever guesses this may or may not win Q Points", "How long does it take to drive in 20 minutes?", "Spell the word: Grapeas", "CHOOSE FOOD : (A)CARROT (B)GLOCKENSPIEL (C)MOUTH", "What's going on?", "Name any movie", "Finish this sentence 'The cat jumped over the __'", "Can you go forward in time?", "How are years and measurements connected?", "Is an apple a fruit?", "What is a pacifier to a black hole?", "What month is not February?", "What is dementia?", "Spell ate.", "What is an illusion?", "What branch of movie making checks if the scripts are right?", "You walk into an apartment with 56 doors. You can see from your view that all doors are closed. How many doors are closed?", "How long was Sleeping Beauty asleep?", "Is a cucumber a fruit?", "A man got in a locked door without hands. How?", "Bark!Bark!Bark! What does this sound elude to?", "How many questions are there in all?", "How many trees do you need to make a big number?", "What does the end of infinity look like?", "I am not an egg. I eat Megs and I have a yellow center. What am I?", "I expand when annoyed and I am double sided. What am I?", "Manual win.", "Letcha go...", "When did the war of 1812 start?", "I am a giant body of water. What am i?", "Spell this: Pears", "A bomb is planted in the ground. What do you do?", "How many people are on Earth?", "What do you call a cake with cheesy jokes?", "What are the layers of the Earth?", "What do bees take from flowers?", "Your computer has a bug. What do you do?", "my has 20 chocolate bars in one hand and 40 in the other. What does Jimmy have?", "Manual loss. Also, answer me this. In a robot apocolypse, would you be hiding? (You do not need to ding in.)", "Manuel win!", "Who discovered America?", "What is a real bully?", "What do you call an wise man with a bad back?", "When will pigs fly?", "Where does the Booboo cave monster live?", "What happened?", "What is a type of instant sleep potion?", "What is a way to have no lives?", "Scream!", "How are Spit and Solitare related?", "What is the capybara's name? A: Bob B: Capybara C: Guy", "You are Dino Mite! What do you do?", "When did Christopher Columbus discover America?", "A fish goes into the ocean. What does it become?", "What is life, the universe and everything?", "Why did the chicken cross the road?", "What bone cracks on Thanksgiving?", "Who made the Mona Lisa?"];
let listaanswersya = ["Answer = 5. 2 and 2 is 22. The 22nd letter is V. V in roman numerals is 5. ", "Answer = That cave over there. Poopoo is his name. ","You "+gambler1 + " ", "It depends: You can't drive inside of time. ", "G-R-A-P-E-A-S ", "(C), because a mouth chews/choose food. ", "A song that my the creator of the website's dad hates ", "Something like 'i'll name you __' ", "The 'Finish this sentence' sentence forgot a colon. ", "Yes, if you go EXTEREMLY fast. ", "and is connecting them ", "No. ", "Light, cause it sucks it in. ", "February (I lied) ", "Me, cause I forgot what it was! ", "E-I-G-H-T ", "A scam of nature. ", "The script writers. ", "55, you opened a door to get in and can't see it in your PointOfView. ", "2 seconds: Time is faster when you're asleep. ", "Yes,yes it is. ", "The door was open. ", "Well, it would be tree bark of course. ", "100 questions. ", "3 trees TREE(3). ", "Y is the end of infinity, and it looks like a Y. ", "An egg (I lied). ", "The Hulk. ", "If you ding in, you get 200 Q PTS. ", "Jackson 5. ", "11 letters in. ", "A person who is 100 percent water. ", "T-H-I-S ", "Water it so it grows into a bomb tree. ", "There are none on the word 'Earth'. ", "A cheesecake. ", "The mantle, core, and crust. ", "Nectar. ", "Nothing. Bugs being bugs is normal. ", "Diabeties. Jimmy has diabeties. ", "If you said 'ding' you lose 50 Q PTS. ", "If you congratulate Manuel at all, you get 200 Q PTS. ", "Whoever was born there. ", "Love. ", "A wisecrack. ", "When jetpacks are invented. ", "In a lovely house. He moved. ", "Playing this dumb quiz. ", "Warm milk. ", "Playing this quiz. ", "You forgot the ice! ", "They both have 'it' in them. ", capybaragambler + " ", "Avoid fire. ", "When he got 6 words in. ", "Efficency. Sound it out and you get a fish in sea. ", "42. ", "He had a severee case of deja vu, so he crossed it to the hospital. ", "A wish bone. ", "A collaboration between Leonardo De Vinci and the guy who invented canvas's."];
let listavpointsya = [200, 100, "", 100, 50, 50, 100, 200, 200, 50, 100, 50, 100, 50, 50, 100, 50, 50, 100, 50, 50, 100, 50, 200, 100, 100, 50, 100, 200, 50, 200, 100, 100, 50, 200, 50, 100, 200, 50, 50, -50, 200, 100, 100, 50, 50, 100, 50, 100, 50, 200, 100, "200 or -200 based on wheter or not you got his name right ", 100, 200, 200, 100, 200, 50, 50, 200, 200, 100, 50, 100, 100, 100, 200, "", 200, 50, 100, 50, 500, "", 50, 50, 500, 50, 100, -50, 100, 50, 100, 200, 100, 100, 100, 200, 50, "", "", 50, 50, 100, 100, 100, 500, 200, ""];
let switcher1 = 1;
let switcher2 = 1;
let switcher3 = 1;
let switcher4 = 1;
let switcher5 = 1;
let switcher6 = 1;
let switcher7 = 1;
let switcher8 = 1;
let switcher9 = 1;
let switcher10 = 1;
let switcher11 = 1;
let switcher12 = 1;
let switcher13 = 1;
let switcher14 = 1;
let switcher15 = 1;
let switcher16 = 1;
let switcher17 = 1;
let switcher18 = 1;
let switcher19 = 1;
let switcher20 = 1;
let switcher21 = 1;
let switcher22 = 1;
let switcher23 = 1;
let switcher24 = 1;
let switcher25 = 1;
let switcher26 = 1;
let switcher27 = 1;
let switcher28 = 1;
let switcher29 = 1;
let switcher30 = 1;
let completed1 = 0;
let completed2 = 0;
let completed3 = 0;
let completed4 = 0;
let completed5 = 0;
let completed6 = 0;
let completed7 = 0;
let completed8 = 0;
let completed9 = 0;
let completed10 = 0;
let completed11 = 0;
let completed12 = 0;
let completed13 = 0;
let completed14 = 0;
let completed15 = 0;
let completed16 = 0;
let completed17 = 0;
let completed18 = 0;
let completed19 = 0;
let completed20 = 0;
let completed21 = 0;
let completed22 = 0;
let completed23 = 0;
let completed24 = 0;
let completed25 = 0;
let completed26 = 0;
let completed27 = 0;
let completed28 = 0;
let completed29 = 0;
let completed30 = 0;
listaplaces.sort(() => 0.5 - Math.random());
let doneInput = document.createElement('h1');
let cross = document.createElement('img');
cross.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross2 = document.createElement('img');
cross2.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross3 = document.createElement('img');
cross3.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross4 = document.createElement('img');
cross4.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross5 = document.createElement('img');
cross5.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross6 = document.createElement('img');
cross6.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross7 = document.createElement('img');
cross7.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross8 = document.createElement('img');
cross8.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross9 = document.createElement('img');
cross9.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross10 = document.createElement('img');
cross10.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross11 = document.createElement('img');
cross11.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross12 = document.createElement('img');
cross12.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross13 = document.createElement('img');
cross13.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross14 = document.createElement('img');
cross14.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross15 = document.createElement('img');
cross15.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross16 = document.createElement('img');
cross16.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross17 = document.createElement('img');
cross17.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross18 = document.createElement('img');
cross18.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross19 = document.createElement('img');
cross19.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross20 = document.createElement('img');
cross20.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross21 = document.createElement('img');
cross21.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross22 = document.createElement('img');
cross22.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross23 = document.createElement('img');
cross23.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross24 = document.createElement('img');
cross24.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross25 = document.createElement('img');
cross25.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross26 = document.createElement('img');
cross26.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross27 = document.createElement('img');
cross27.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross28 = document.createElement('img');
cross28.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross29 = document.createElement('img');
cross29.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
let cross30 = document.createElement('img');
cross30.src = "/images/pngtree-x-red-cross-brush-paint-stroke-vector-png-image_7506200.png"
doneInput.textContent = "DONE?";
function randomizeposes(list) {
    
}

const question1 = document.getElementById("q1");
const question2 = document.getElementById("q2");
const question3 = document.getElementById("q3");
const question4 = document.getElementById("q4");
const question5 = document.getElementById("q5");
const question6 = document.getElementById("q6");
const question7 = document.getElementById("q7");
const question8 = document.getElementById("q8");
const question9 = document.getElementById("q9");
const question10 = document.getElementById("q10");
const question11 = document.getElementById("q11");
const question12 = document.getElementById("q12");
const question13 = document.getElementById("q13");
const question14 = document.getElementById("q14");
const question15 = document.getElementById("q15");
const question16 = document.getElementById("q16");
const question17 = document.getElementById("q17");
const question18 = document.getElementById("q18");
const question19 = document.getElementById("q19");
const question20 = document.getElementById("q20");
const question21 = document.getElementById("q21");
const question22 = document.getElementById("q22");
const question23 = document.getElementById("q23");
const question24 = document.getElementById("q24");
const question25 = document.getElementById("q25");
const question26 = document.getElementById("q26");
const question27 = document.getElementById("q27");
const question28 = document.getElementById("q28");
const question29 = document.getElementById("q29");
const question30 = document.getElementById("q30");
let originalfontsize = question1.style.fontSize;
question1.addEventListener("click", () => {
    if (switcher1 === 0) {
        if (completed1 === 0) {
            switcher1 = 1;
            question1.style.transform = "scale(1)";
            question1.textContent = "?";
            question1.style.margin = ((window.innerWidth / 100) * 3);
            question1.style.marginLeft = (-window.innerWidth / 50) + 'px';
            question1.style.marginTop = (window.innerWidth / 50) + 'px';
            question1.style.fontSize = originalfontsize;
        } else {
            question1.addEventListener('click', () => {
            question1.style.transform = "scale(1)";
            question1.textContent = "";
            question1.style.margin = ((window.innerWidth / 100) * 3);
            question1.style.marginLeft = (-window.innerWidth / 50) + 'px';
            question1.style.marginTop = (window.innerWidth / 50) + 'px';
            question1.style.fontSize = originalfontsize;
            question1.appendChild(cross);
            });
        }

    }
    else {
        question1.style.transform = "scale(8)";
        question1.textContent = listaquestions[listaplaces[0] - 1];
        question1.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 80) + 'px';
        question1.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + 100) + 'px';
        question1.style.fontSize = (window.innerWidth / 200) + 'px';
        question1.appendChild(doneInput);
        doneInput.classList.add('butn');
        doneInput.addEventListener('click', () => {
            doneInput.remove();
            question1.textContent = listaanswersya[listaplaces[0] - 1] + " " + listavpointsya[listaplaces[0] - 1] + " Q Points!";
            completed1 = 1;
            switcher1 = 0;
        });
    }
});
question2.addEventListener('click', () => {
     if (switcher2 === 0) {
         if (completed2 === 0) {
             switcher2 = 1;
             question2.style.transform = 'scale(1)';
             question2.textContent = '?';
             question2.style.margin = ((window.innerWidth / 100) * 3);
             question2.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question2.style.marginTop = (window.innerWidth / 50) + 'px';
             question2.style.fontSize = originalfontsize;
         } else {
             question2.addEventListener('click', () => {
             question2.style.transform = 'scale(1)';
             question2.textContent = '';
             question2.style.margin = ((window.innerWidth / 100) * 3);
             question2.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question2.style.marginTop = (window.innerWidth / 50) + 'px';
             question2.style.fontSize = originalfontsize;
             question2.style.fontSize = originalfontsize;
             question2.appendChild(cross2);
             });
         }
     }
     else {
         question2.style.transform = 'scale(8)';
         question2.textContent = listaquestions[listaplaces[1] - 1];
         question2.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 297.5) + 'px';
         question2.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + 100) + 'px';
         question2.style.fontSize = (window.innerWidth / 200) + 'px';
         question2.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question2.textContent = listaanswersya[listaplaces[1] - 1] + '' + listavpointsya[listaplaces[1] - 1] + ' Q Points!';
             completed2 = 1;
             switcher2 = 0;
         });
     }
});
question3.addEventListener('click', () => {
     if (switcher3 === 0) {
         if (completed3 === 0) {
             switcher3 = 1;
             question3.style.transform = 'scale(1)';
             question3.textContent = '?';
             question3.style.margin = ((window.innerWidth / 100) * 3);
             question3.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question3.style.marginTop = (window.innerWidth / 50) + 'px';
             question3.style.fontSize = originalfontsize;
         } else {
             question3.addEventListener('click', () => {
             question3.style.transform = 'scale(1)';
             question3.textContent = '';
             question3.style.margin = ((window.innerWidth / 100) * 3);
             question3.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question3.style.marginTop = (window.innerWidth / 50) + 'px';
             question3.style.fontSize = originalfontsize;
             question3.style.fontSize = originalfontsize;
             question3.appendChild(cross3);
             });
         }
     }
     else {
         question3.style.transform = 'scale(8)';
         question3.textContent = listaquestions[listaplaces[2] - 1];
         question3.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 515) + 'px';
         question3.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + 100) + 'px';
         question3.style.fontSize = (window.innerWidth / 200) + 'px';
         question3.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question3.textContent = listaanswersya[listaplaces[2] - 1] + '' + listavpointsya[listaplaces[2] - 1] + ' Q Points!';
             completed3 = 1;
             switcher3 = 0;
         });
     }
 });
question4.addEventListener('click', () => {
     if (switcher4 === 0) {
         if (completed4 === 0) {
             switcher4 = 1;
             question4.style.transform = 'scale(1)';
             question4.textContent = '?';
             question4.style.margin = ((window.innerWidth / 100) * 3);
             question4.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question4.style.marginTop = (window.innerWidth / 50) + 'px';
             question4.style.fontSize = originalfontsize;
         } else {
             question4.addEventListener('click', () => {
             question4.style.transform = 'scale(1)';
             question4.textContent = '';
             question4.style.margin = ((window.innerWidth / 100) * 3);
             question4.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question4.style.marginTop = (window.innerWidth / 50) + 'px';
             question4.style.fontSize = originalfontsize;
             question4.style.fontSize = originalfontsize;
             question4.appendChild(cross4);
             });
         }
     }
     else {
         question4.style.transform = 'scale(8)';
         question4.textContent = listaquestions[listaplaces[3] - 1];
         question4.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 732.5) + 'px';
         question4.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + 100) + 'px';
         question4.style.fontSize = (window.innerWidth / 200) + 'px';
         question4.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question4.textContent = listaanswersya[listaplaces[3] - 1] + '' + listavpointsya[listaplaces[3] - 1] + ' Q Points!';
             completed4 = 1;
             switcher4 = 0;
         });
     }
 });
question5.addEventListener('click', () => {
     if (switcher5 === 0) {
         if (completed5 === 0) {
             switcher5 = 1;
             question5.style.transform = 'scale(1)';
             question5.textContent = '?';
             question5.style.margin = ((window.innerWidth / 100) * 3);
             question5.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question5.style.marginTop = (window.innerWidth / 50) + 'px';
             question5.style.fontSize = originalfontsize;
         } else {
             question5.addEventListener('click', () => {
             question5.style.transform = 'scale(1)';
             question5.textContent = '';
             question5.style.margin = ((window.innerWidth / 100) * 3);
             question5.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question5.style.marginTop = (window.innerWidth / 50) + 'px';
             question5.style.fontSize = originalfontsize;
             question5.style.fontSize = originalfontsize;
             question5.appendChild(cross5);
             });
         }
     }
     else {
         question5.style.transform = 'scale(8)';
         question5.textContent = listaquestions[listaplaces[4] - 1];
         question5.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 950) + 'px';
         question5.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + 100) + 'px';
         question5.style.fontSize = (window.innerWidth / 200) + 'px';
         question5.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question5.textContent = listaanswersya[listaplaces[4] - 1] + '' + listavpointsya[listaplaces[4] - 1] + ' Q Points!';
             completed5 = 1;
             switcher5 = 0;
         });
     }
 });
question6.addEventListener('click', () => {
     if (switcher6 === 0) {
         if (completed6 === 0) {
             switcher6 = 1;
             question6.style.transform = 'scale(1)';
             question6.textContent = '?';
             question6.style.margin = ((window.innerWidth / 100) * 3);
             question6.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question6.style.marginTop = (window.innerWidth / 50) + 'px';
             question6.style.fontSize = originalfontsize;
         } else {
             question6.addEventListener('click', () => {
             question6.style.transform = 'scale(1)';
             question6.textContent = '';
             question6.style.margin = ((window.innerWidth / 100) * 3);
             question6.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question6.style.marginTop = (window.innerWidth / 50) + 'px';
             question6.style.fontSize = originalfontsize;
             question6.style.fontSize = originalfontsize;
             question6.appendChild(cross6);
             });
         }
     }
     else {
         question6.style.transform = 'scale(8)';
         question6.textContent = listaquestions[listaplaces[5] - 1];
         question6.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 1180) + 'px';
         question6.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + 100) + 'px';
         question6.style.fontSize = (window.innerWidth / 200) + 'px';
         question6.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question6.textContent = listaanswersya[listaplaces[5] - 1] + '' + listavpointsya[listaplaces[5] - 1] + ' Q Points!';
             completed6 = 1;
             switcher6 = 0;
         });
     }
 });
question7.addEventListener('click', () => {
     if (switcher7 === 0) {
         if (completed7 === 0) {
             switcher7 = 1;
             question7.style.transform = 'scale(1)';
             question7.textContent = '?';
             question7.style.margin = ((window.innerWidth / 100) * 3);
             question7.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question7.style.marginTop = (window.innerWidth / 50) + 'px';
             question7.style.fontSize = originalfontsize;
         } else {
             question7.addEventListener('click', () => {
             question7.style.transform = 'scale(1)';
             question7.textContent = '';
             question7.style.margin = ((window.innerWidth / 100) * 3);
             question7.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question7.style.marginTop = (window.innerWidth / 50) + 'px';
             question7.style.fontSize = originalfontsize;
             question7.style.fontSize = originalfontsize;
             question7.appendChild(cross7);
             });
         }
     }
     else {
         question7.style.transform = 'scale(8)';
         question7.textContent = listaquestions[listaplaces[6] - 1];
         question7.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 80) + 'px';
         question7.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + -50) + 'px';
         question7.style.fontSize = (window.innerWidth / 200) + 'px';
         question7.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question7.textContent = listaanswersya[listaplaces[6] - 1] + '' + listavpointsya[listaplaces[6] - 1] + ' Q Points!';
             completed7 = 1;
             switcher7 = 0;
         });
     }
 });
question8.addEventListener('click', () => {
     if (switcher8 === 0) {
         if (completed8 === 0) {
             switcher8 = 1;
             question8.style.transform = 'scale(1)';
             question8.textContent = '?';
             question8.style.margin = ((window.innerWidth / 100) * 3);
             question8.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question8.style.marginTop = (window.innerWidth / 50) + 'px';
             question8.style.fontSize = originalfontsize;
         } else {
             question8.addEventListener('click', () => {
             question8.style.transform = 'scale(1)';
             question8.textContent = '';
             question8.style.margin = ((window.innerWidth / 100) * 3);
             question8.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question8.style.marginTop = (window.innerWidth / 50) + 'px';
             question8.style.fontSize = originalfontsize;
             question8.style.fontSize = originalfontsize;
             question8.appendChild(cross8);
             });
         }
     }
     else {
         question8.style.transform = 'scale(8)';
         question8.textContent = listaquestions[listaplaces[7] - 1];
         question8.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 297.5) + 'px';
         question8.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + -50) + 'px';
         question8.style.fontSize = (window.innerWidth / 200) + 'px';
         question8.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question8.textContent = listaanswersya[listaplaces[7] - 1] + '' + listavpointsya[listaplaces[7] - 1] + ' Q Points!';
             completed8 = 1;
             switcher8 = 0;
         });
     }
});
question9.addEventListener('click', () => {
     if (switcher9 === 0) {
         if (completed9 === 0) {
             switcher9 = 1;
             question9.style.transform = 'scale(1)';
             question9.textContent = '?';
             question9.style.margin = ((window.innerWidth / 100) * 3);
             question9.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question9.style.marginTop = (window.innerWidth / 50) + 'px';
             question9.style.fontSize = originalfontsize;
         } else {
             question9.addEventListener('click', () => {
             question9.style.transform = 'scale(1)';
             question9.textContent = '';
             question9.style.margin = ((window.innerWidth / 100) * 3);
             question9.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question9.style.marginTop = (window.innerWidth / 50) + 'px';
             question9.style.fontSize = originalfontsize;
             question9.style.fontSize = originalfontsize;
             question9.appendChild(cross9);
             });
         }
     }
     else {
         question9.style.transform = 'scale(8)';
         question9.textContent = listaquestions[listaplaces[8] - 1];
         question9.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 515) + 'px';
         question9.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + -50) + 'px';
         question9.style.fontSize = (window.innerWidth / 200) + 'px';
         question9.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question9.textContent = listaanswersya[listaplaces[8] - 1] + '' + listavpointsya[listaplaces[8] - 1] + ' Q Points!';
             completed9 = 1;
             switcher9 = 0;
         });
     }
});
 question10.addEventListener('click', () => {
     if (switcher10 === 0) {
         if (completed10 === 0) {
             switcher10 = 1;
             question10.style.transform = 'scale(1)';
             question10.textContent = '?';
             question10.style.margin = ((window.innerWidth / 100) * 3);
             question10.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question10.style.marginTop = (window.innerWidth / 50) + 'px';
             question10.style.fontSize = originalfontsize;
         } else {
             question10.addEventListener('click', () => {
             question10.style.transform = 'scale(1)';
             question10.textContent = '';
             question10.style.margin = ((window.innerWidth / 100) * 3);
             question10.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question10.style.marginTop = (window.innerWidth / 50) + 'px';
             question10.style.fontSize = originalfontsize;
             question10.style.fontSize = originalfontsize;
             question10.appendChild(cross10);
             });
         }
     }
     else {
         question10.style.transform = 'scale(8)';
         question10.textContent = listaquestions[listaplaces[9] - 1];
         question10.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 732.5) + 'px';
         question10.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + -50) + 'px';
         question10.style.fontSize = (window.innerWidth / 200) + 'px';
         question10.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question10.textContent = listaanswersya[listaplaces[9] - 1] + '' + listavpointsya[listaplaces[9] - 1] + ' Q Points!';
             completed10 = 1;
             switcher10 = 0;
         });
     }
 });
question11.addEventListener('click', () => {
     if (switcher11 === 0) {
         if (completed11 === 0) {
             switcher11 = 1;
             question11.style.transform = 'scale(1)';
             question11.textContent = '?';
             question11.style.margin = ((window.innerWidth / 100) * 3);
             question11.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question11.style.marginTop = (window.innerWidth / 50) + 'px';
             question11.style.fontSize = originalfontsize;
         } else {
             question11.addEventListener('click', () => {
             question11.style.transform = 'scale(1)';
             question11.textContent = '';
             question11.style.margin = ((window.innerWidth / 100) * 3);
             question11.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question11.style.marginTop = (window.innerWidth / 50) + 'px';
             question11.style.fontSize = originalfontsize;
             question11.style.fontSize = originalfontsize;
             question11.appendChild(cross11);
             });
         }
     }
     else {
         question11.style.transform = 'scale(8)';
         question11.textContent = listaquestions[listaplaces[10] - 1];
         question11.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 950) + 'px';
         question11.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + -50) + 'px';
         question11.style.fontSize = (window.innerWidth / 200) + 'px';
         question11.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question11.textContent = listaanswersya[listaplaces[10] - 1] + '' + listavpointsya[listaplaces[10] - 1] + ' Q Points!';
             completed11 = 1;
             switcher11 = 0;
         });
     }
});
question12.addEventListener('click', () => {
     if (switcher12 === 0) {
         if (completed12 === 0) {
             switcher12 = 1;
             question12.style.transform = 'scale(1)';
             question12.textContent = '?';
             question12.style.margin = ((window.innerWidth / 100) * 3);
             question12.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question12.style.marginTop = (window.innerWidth / 50) + 'px';
             question12.style.fontSize = originalfontsize;
         } else {
             question12.addEventListener('click', () => {
             question12.style.transform = 'scale(1)';
             question12.textContent = '';
             question12.style.margin = ((window.innerWidth / 100) * 3);
             question12.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question12.style.marginTop = (window.innerWidth / 50) + 'px';
             question12.style.fontSize = originalfontsize;
             question12.style.fontSize = originalfontsize;
             question12.appendChild(cross12);
             });
         }
     }
     else {
         question12.style.transform = 'scale(8)';
         question12.textContent = listaquestions[listaplaces[11] - 1];
         question12.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 1167.5) + 'px';
         question12.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + -50) + 'px';
         question12.style.fontSize = (window.innerWidth / 200) + 'px';
         question12.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question12.textContent = listaanswersya[listaplaces[11] - 1] + '' + listavpointsya[listaplaces[11] - 1] + ' Q Points!';
             completed12 = 1;
             switcher12 = 0;
         });
     }
});
 question13.addEventListener('click', () => {
     if (switcher13 === 0) {
         if (completed13 === 0) {
             switcher13 = 1;
             question13.style.transform = 'scale(1)';
             question13.textContent = '?';
             question13.style.margin = ((window.innerWidth / 100) * 3);
             question13.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question13.style.marginTop = (window.innerWidth / 50) + 'px';
             question13.style.fontSize = originalfontsize;
         } else {
             question13.addEventListener('click', () => {
             question13.style.transform = 'scale(1)';
             question13.textContent = '';
             question13.style.margin = ((window.innerWidth / 100) * 3);
             question13.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question13.style.marginTop = (window.innerWidth / 50) + 'px';
             question13.style.fontSize = originalfontsize;
             question13.style.fontSize = originalfontsize;
             question13.appendChild(cross13);
             });
         }
     }
     else {
         question13.style.transform = 'scale(8)';
         question13.textContent = listaquestions[listaplaces[12] - 1];
         question13.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 80) + 'px';
         question13.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + -200) + 'px';
         question13.style.fontSize = (window.innerWidth / 200) + 'px';
         question13.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question13.textContent = listaanswersya[listaplaces[12] - 1] + '' + listavpointsya[listaplaces[12] - 1] + ' Q Points!';
             completed13 = 1;
             switcher13 = 0;
         });
     }
 });
question14.addEventListener('click', () => {
     if (switcher14 === 0) {
         if (completed14 === 0) {
             switcher14 = 1;
             question14.style.transform = 'scale(1)';
             question14.textContent = '?';
             question14.style.margin = ((window.innerWidth / 100) * 3);
             question14.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question14.style.marginTop = (window.innerWidth / 50) + 'px';
             question14.style.fontSize = originalfontsize;
         } else {
             question14.addEventListener('click', () => {
             question14.style.transform = 'scale(1)';
             question14.textContent = '';
             question14.style.margin = ((window.innerWidth / 100) * 3);
             question14.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question14.style.marginTop = (window.innerWidth / 50) + 'px';
             question14.style.fontSize = originalfontsize;
             question14.style.fontSize = originalfontsize;
             question14.appendChild(cross14);
             });
         }
     }
     else {
         question14.style.transform = 'scale(8)';
         question14.textContent = listaquestions[listaplaces[13] - 1];
         question14.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 297.5) + 'px';
         question14.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + -200) + 'px';
         question14.style.fontSize = (window.innerWidth / 200) + 'px';
         question14.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question14.textContent = listaanswersya[listaplaces[13] - 1] + '' + listavpointsya[listaplaces[13] - 1] + ' Q Points!';
             completed14 = 1;
             switcher14 = 0;
         });
     }
});
question15.addEventListener('click', () => {
     if (switcher15 === 0) {
         if (completed15 === 0) {
             switcher15 = 1;
             question15.style.transform = 'scale(1)';
             question15.textContent = '?';
             question15.style.margin = ((window.innerWidth / 100) * 3);
             question15.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question15.style.marginTop = (window.innerWidth / 50) + 'px';
             question15.style.fontSize = originalfontsize;
         } else {
             question15.addEventListener('click', () => {
             question15.style.transform = 'scale(1)';
             question15.textContent = '';
             question15.style.margin = ((window.innerWidth / 100) * 3);
             question15.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question15.style.marginTop = (window.innerWidth / 50) + 'px';
             question15.style.fontSize = originalfontsize;
             question15.style.fontSize = originalfontsize;
             question15.appendChild(cross15);
             });
         }
     }
     else {
         question15.style.transform = 'scale(8)';
         question15.textContent = listaquestions[listaplaces[14] - 1];
         question15.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 515) + 'px';
         question15.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + -200) + 'px';
         question15.style.fontSize = (window.innerWidth / 200) + 'px';
         question15.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question15.textContent = listaanswersya[listaplaces[14] - 1] + '' + listavpointsya[listaplaces[14] - 1] + ' Q Points!';
             completed15 = 1;
             switcher15 = 0;
         });
     }
});
question16.addEventListener('click', () => {
     if (switcher16 === 0) {
         if (completed16 === 0) {
             switcher16 = 1;
             question16.style.transform = 'scale(1)';
             question16.textContent = '?';
             question16.style.margin = ((window.innerWidth / 100) * 3);
             question16.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question16.style.marginTop = (window.innerWidth / 50) + 'px';
             question16.style.fontSize = originalfontsize;
         } else {
             question16.addEventListener('click', () => {
             question16.style.transform = 'scale(1)';
             question16.textContent = '';
             question16.style.margin = ((window.innerWidth / 100) * 3);
             question16.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question16.style.marginTop = (window.innerWidth / 50) + 'px';
             question16.style.fontSize = originalfontsize;
             question16.style.fontSize = originalfontsize;
             question16.appendChild(cross16);
             });
         }
     }
     else {
         question16.style.transform = 'scale(8)';
         question16.textContent = listaquestions[listaplaces[15] - 1];
         question16.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 732.5) + 'px';
         question16.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + -200) + 'px';
         question16.style.fontSize = (window.innerWidth / 200) + 'px';
         question16.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question16.textContent = listaanswersya[listaplaces[15] - 1] + '' + listavpointsya[listaplaces[15] - 1] + ' Q Points!';
             completed16 = 1;
             switcher16 = 0;
         });
     }
});
 question17.addEventListener('click', () => {
     if (switcher17 === 0) {
         if (completed17 === 0) {
             switcher17 = 1;
             question17.style.transform = 'scale(1)';
             question17.textContent = '?';
             question17.style.margin = ((window.innerWidth / 100) * 3);
             question17.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question17.style.marginTop = (window.innerWidth / 50) + 'px';
             question17.style.fontSize = originalfontsize;
         } else {
             question17.addEventListener('click', () => {
             question17.style.transform = 'scale(1)';
             question17.textContent = '';
             question17.style.margin = ((window.innerWidth / 100) * 3);
             question17.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question17.style.marginTop = (window.innerWidth / 50) + 'px';
             question17.style.fontSize = originalfontsize;
             question17.style.fontSize = originalfontsize;
             question17.appendChild(cross17);
             });
         }
     }
     else {
         question17.style.transform = 'scale(8)';
         question17.textContent = listaquestions[listaplaces[16] - 1];
         question17.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 950) + 'px';
         question17.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + -200) + 'px';
         question17.style.fontSize = (window.innerWidth / 200) + 'px';
         question17.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question17.textContent = listaanswersya[listaplaces[16] - 1] + '' + listavpointsya[listaplaces[16] - 1] + ' Q Points!';
             completed17 = 1;
             switcher17 = 0;
         });
     }
 });
 question18.addEventListener('click', () => {
     if (switcher18 === 0) {
         if (completed18 === 0) {
             switcher18 = 1;
             question18.style.transform = 'scale(1)';
             question18.textContent = '?';
             question18.style.margin = ((window.innerWidth / 100) * 3);
             question18.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question18.style.marginTop = (window.innerWidth / 50) + 'px';
             question18.style.fontSize = originalfontsize;
         } else {
             question18.addEventListener('click', () => {
             question18.style.transform = 'scale(1)';
             question18.textContent = '';
             question18.style.margin = ((window.innerWidth / 100) * 3);
             question18.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question18.style.marginTop = (window.innerWidth / 50) + 'px';
             question18.style.fontSize = originalfontsize;
             question18.style.fontSize = originalfontsize;
             question18.appendChild(cross18);
             });
         }
     }
     else {
         question18.style.transform = 'scale(8)';
         question18.textContent = listaquestions[listaplaces[17] - 1];
         question18.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 1167.5) + 'px';
         question18.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + -200) + 'px';
         question18.style.fontSize = (window.innerWidth / 200) + 'px';
         question18.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question18.textContent = listaanswersya[listaplaces[17] - 1] + '' + listavpointsya[listaplaces[17] - 1] + ' Q Points!';
             completed18 = 1;
             switcher18 = 0;
         });
     }
 });
 question19.addEventListener('click', () => {
     if (switcher19 === 0) {
         if (completed19 === 0) {
             switcher19 = 1;
             question19.style.transform = 'scale(1)';
             question19.textContent = '?';
             question19.style.margin = ((window.innerWidth / 100) * 3);
             question19.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question19.style.marginTop = (window.innerWidth / 50) + 'px';
             question19.style.fontSize = originalfontsize;
         } else {
             question19.addEventListener('click', () => {
             question19.style.transform = 'scale(1)';
             question19.textContent = '';
             question19.style.margin = ((window.innerWidth / 100) * 3);
             question19.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question19.style.marginTop = (window.innerWidth / 50) + 'px';
             question19.style.fontSize = originalfontsize;
             question19.style.fontSize = originalfontsize;
             question19.appendChild(cross19);
             });
         }
     }
     else {
         question19.style.transform = 'scale(8)';
         question19.textContent = listaquestions[listaplaces[18] - 1];
         question19.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 80) + 'px';
         question19.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + -350) + 'px';
         question19.style.fontSize = (window.innerWidth / 200) + 'px';
         question19.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question19.textContent = listaanswersya[listaplaces[18] - 1] + '' + listavpointsya[listaplaces[18] - 1] + ' Q Points!';
             completed19 = 1;
             switcher19 = 0;
         });
     }
 });
question20.addEventListener('click', () => {
     if (switcher20 === 0) {
         if (completed20 === 0) {
             switcher20 = 1;
             question20.style.transform = 'scale(1)';
             question20.textContent = '?';
             question20.style.margin = ((window.innerWidth / 100) * 3);
             question20.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question20.style.marginTop = (window.innerWidth / 50) + 'px';
             question20.style.fontSize = originalfontsize;
         } else {
             question20.addEventListener('click', () => {
             question20.style.transform = 'scale(1)';
             question20.textContent = '';
             question20.style.margin = ((window.innerWidth / 100) * 3);
             question20.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question20.style.marginTop = (window.innerWidth / 50) + 'px';
             question20.style.fontSize = originalfontsize;
             question20.style.fontSize = originalfontsize;
             question20.appendChild(cross20);
             });
         }
     }
     else {
         question20.style.transform = 'scale(8)';
         question20.textContent = listaquestions[listaplaces[19] - 1];
         question20.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 297.5) + 'px';
         question20.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + -350) + 'px';
         question20.style.fontSize = (window.innerWidth / 200) + 'px';
         question20.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question20.textContent = listaanswersya[listaplaces[19] - 1] + '' + listavpointsya[listaplaces[19] - 1] + ' Q Points!';
             completed20 = 1;
             switcher20 = 0;
         });
     }
});
 question21.addEventListener('click', () => {
     if (switcher21 === 0) {
         if (completed21 === 0) {
             switcher21 = 1;
             question21.style.transform = 'scale(1)';
             question21.textContent = '?';
             question21.style.margin = ((window.innerWidth / 100) * 3);
             question21.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question21.style.marginTop = (window.innerWidth / 50) + 'px';
             question21.style.fontSize = originalfontsize;
         } else {
             question21.addEventListener('click', () => {
             question21.style.transform = 'scale(1)';
             question21.textContent = '';
             question21.style.margin = ((window.innerWidth / 100) * 3);
             question21.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question21.style.marginTop = (window.innerWidth / 50) + 'px';
             question21.style.fontSize = originalfontsize;
             question21.style.fontSize = originalfontsize;
             question21.appendChild(cross21);
             });
         }
     }
     else {
         question21.style.transform = 'scale(8)';
         question21.textContent = listaquestions[listaplaces[20] - 1];
         question21.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 515) + 'px';
         question21.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + -350) + 'px';
         question21.style.fontSize = (window.innerWidth / 200) + 'px';
         question21.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question21.textContent = listaanswersya[listaplaces[20] - 1] + '' + listavpointsya[listaplaces[20] - 1] + ' Q Points!';
             completed21 = 1;
             switcher21 = 0;
         });
     }
 });
question22.addEventListener('click', () => {
     if (switcher22 === 0) {
         if (completed22 === 0) {
             switcher22 = 1;
             question22.style.transform = 'scale(1)';
             question22.textContent = '?';
             question22.style.margin = ((window.innerWidth / 100) * 3);
             question22.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question22.style.marginTop = (window.innerWidth / 50) + 'px';
             question22.style.fontSize = originalfontsize;
         } else {
             question22.addEventListener('click', () => {
             question22.style.transform = 'scale(1)';
             question22.textContent = '';
             question22.style.margin = ((window.innerWidth / 100) * 3);
             question22.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question22.style.marginTop = (window.innerWidth / 50) + 'px';
             question22.style.fontSize = originalfontsize;
             question22.style.fontSize = originalfontsize;
             question22.appendChild(cross22);
             });
         }
     }
     else {
         question22.style.transform = 'scale(8)';
         question22.textContent = listaquestions[listaplaces[21] - 1];
         question22.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 732.5) + 'px';
         question22.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + -350) + 'px';
         question22.style.fontSize = (window.innerWidth / 200) + 'px';
         question22.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question22.textContent = listaanswersya[listaplaces[21] - 1] + '' + listavpointsya[listaplaces[21] - 1] + ' Q Points!';
             completed22 = 1;
             switcher22 = 0;
         });
     }
});
question23.addEventListener('click', () => {
     if (switcher23 === 0) {
         if (completed23 === 0) {
             switcher23 = 1;
             question23.style.transform = 'scale(1)';
             question23.textContent = '?';
             question23.style.margin = ((window.innerWidth / 100) * 3);
             question23.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question23.style.marginTop = (window.innerWidth / 50) + 'px';
             question23.style.fontSize = originalfontsize;
         } else {
             question23.addEventListener('click', () => {
             question23.style.transform = 'scale(1)';
             question23.textContent = '';
             question23.style.margin = ((window.innerWidth / 100) * 3);
             question23.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question23.style.marginTop = (window.innerWidth / 50) + 'px';
             question23.style.fontSize = originalfontsize;
             question23.style.fontSize = originalfontsize;
             question23.appendChild(cross23);
             });
         }
     }
     else {
         question23.style.transform = 'scale(8)';
         question23.textContent = listaquestions[listaplaces[22] - 1];
         question23.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 950) + 'px';
         question23.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + -350) + 'px';
         question23.style.fontSize = (window.innerWidth / 200) + 'px';
         question23.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question23.textContent = listaanswersya[listaplaces[22] - 1] + '' + listavpointsya[listaplaces[22] - 1] + ' Q Points!';
             completed23 = 1;
             switcher23 = 0;
         });
     }
});
question24.addEventListener('click', () => {
     if (switcher24 === 0) {
         if (completed24 === 0) {
             switcher24 = 1;
             question24.style.transform = 'scale(1)';
             question24.textContent = '?';
             question24.style.margin = ((window.innerWidth / 100) * 3);
             question24.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question24.style.marginTop = (window.innerWidth / 50) + 'px';
             question24.style.fontSize = originalfontsize;
         } else {
             question24.addEventListener('click', () => {
             question24.style.transform = 'scale(1)';
             question24.textContent = '';
             question24.style.margin = ((window.innerWidth / 100) * 3);
             question24.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question24.style.marginTop = (window.innerWidth / 50) + 'px';
             question24.style.fontSize = originalfontsize;
             question24.style.fontSize = originalfontsize;
             question24.appendChild(cross24);
             });
         }
     }
     else {
         question24.style.transform = 'scale(8)';
         question24.textContent = listaquestions[listaplaces[23] - 1];
         question24.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 1167.5) + 'px';
         question24.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + -350) + 'px';
         question24.style.fontSize = (window.innerWidth / 200) + 'px';
         question24.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question24.textContent = listaanswersya[listaplaces[23] - 1] + '' + listavpointsya[listaplaces[23] - 1] + ' Q Points!';
             completed24 = 1;
             switcher24 = 0;
         });
     }
});
question25.addEventListener('click', () => {
     if (switcher25 === 0) {
         if (completed25 === 0) {
             switcher25 = 1;
             question25.style.transform = 'scale(1)';
             question25.textContent = '?';
             question25.style.margin = ((window.innerWidth / 100) * 3);
             question25.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question25.style.marginTop = (window.innerWidth / 50) + 'px';
             question25.style.fontSize = originalfontsize;
         } else {
             question25.addEventListener('click', () => {
             question25.style.transform = 'scale(1)';
             question25.textContent = '';
             question25.style.margin = ((window.innerWidth / 100) * 3);
             question25.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question25.style.marginTop = (window.innerWidth / 50) + 'px';
             question25.style.fontSize = originalfontsize;
             question25.style.fontSize = originalfontsize;
             question25.appendChild(cross25);
             });
         }
     }
     else {
         question25.style.transform = 'scale(8)';
         question25.textContent = listaquestions[listaplaces[24] - 1];
         question25.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 80) + 'px';
         question25.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + -500) + 'px';
         question25.style.fontSize = (window.innerWidth / 200) + 'px';
         question25.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question25.textContent = listaanswersya[listaplaces[24] - 1] + '' + listavpointsya[listaplaces[24] - 1] + ' Q Points!';
             completed25 = 1;
             switcher25 = 0;
         });
     }
});
question26.addEventListener('click', () => {
     if (switcher26 === 0) {
         if (completed26 === 0) {
             switcher26 = 1;
             question26.style.transform = 'scale(1)';
             question26.textContent = '?';
             question26.style.margin = ((window.innerWidth / 100) * 3);
             question26.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question26.style.marginTop = (window.innerWidth / 50) + 'px';
             question26.style.fontSize = originalfontsize;
         } else {
             question26.addEventListener('click', () => {
             question26.style.transform = 'scale(1)';
             question26.textContent = '';
             question26.style.margin = ((window.innerWidth / 100) * 3);
             question26.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question26.style.marginTop = (window.innerWidth / 50) + 'px';
             question26.style.fontSize = originalfontsize;
             question26.style.fontSize = originalfontsize;
             question26.appendChild(cross26);
             });
         }
     }
     else {
         question26.style.transform = 'scale(8)';
         question26.textContent = listaquestions[listaplaces[25] - 1];
         question26.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 297.5) + 'px';
         question26.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + -500) + 'px';
         question26.style.fontSize = (window.innerWidth / 200) + 'px';
         question26.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question26.textContent = listaanswersya[listaplaces[25] - 1] + '' + listavpointsya[listaplaces[25] - 1] + ' Q Points!';
             completed26 = 1;
             switcher26 = 0;
         });
     }
});
question27.addEventListener('click', () => {
     if (switcher27 === 0) {
         if (completed27 === 0) {
             switcher27 = 1;
             question27.style.transform = 'scale(1)';
             question27.textContent = '?';
             question27.style.margin = ((window.innerWidth / 100) * 3);
             question27.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question27.style.marginTop = (window.innerWidth / 50) + 'px';
             question27.style.fontSize = originalfontsize;
         } else {
             question27.addEventListener('click', () => {
             question27.style.transform = 'scale(1)';
             question27.textContent = '';
             question27.style.margin = ((window.innerWidth / 100) * 3);
             question27.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question27.style.marginTop = (window.innerWidth / 50) + 'px';
             question27.style.fontSize = originalfontsize;
             question27.style.fontSize = originalfontsize;
             question27.appendChild(cross27);
             });
         }
     }
     else {
         question27.style.transform = 'scale(8)';
         question27.textContent = listaquestions[listaplaces[26] - 1];
         question27.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 515) + 'px';
         question27.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + -500) + 'px';
         question27.style.fontSize = (window.innerWidth / 200) + 'px';
         question27.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question27.textContent = listaanswersya[listaplaces[26] - 1] + '' + listavpointsya[listaplaces[26] - 1] + ' Q Points!';
             completed27 = 1;
             switcher27 = 0;
         });
     }
});
question28.addEventListener('click', () => {
     if (switcher28 === 0) {
         if (completed28 === 0) {
             switcher28 = 1;
             question28.style.transform = 'scale(1)';
             question28.textContent = '?';
             question28.style.margin = ((window.innerWidth / 100) * 3);
             question28.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question28.style.marginTop = (window.innerWidth / 50) + 'px';
             question28.style.fontSize = originalfontsize;
         } else {
             question28.addEventListener('click', () => {
             question28.style.transform = 'scale(1)';
             question28.textContent = '';
             question28.style.margin = ((window.innerWidth / 100) * 3);
             question28.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question28.style.marginTop = (window.innerWidth / 50) + 'px';
             question28.style.fontSize = originalfontsize;
             question28.style.fontSize = originalfontsize;
             question28.appendChild(cross28);
             });
         }
     }
     else {
         question28.style.transform = 'scale(8)';
         question28.textContent = listaquestions[listaplaces[27] - 1];
         question28.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 732.5) + 'px';
         question28.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + -500) + 'px';
         question28.style.fontSize = (window.innerWidth / 200) + 'px';
         question28.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question28.textContent = listaanswersya[listaplaces[27] - 1] + '' + listavpointsya[listaplaces[27] - 1] + ' Q Points!';
             completed28 = 1;
             switcher28 = 0;
         });
     }
});
question29.addEventListener('click', () => {
     if (switcher29 === 0) {
         if (completed29 === 0) {
             switcher29 = 1;
             question29.style.transform = 'scale(1)';
             question29.textContent = '?';
             question29.style.margin = ((window.innerWidth / 100) * 3);
             question29.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question29.style.marginTop = (window.innerWidth / 50) + 'px';
             question29.style.fontSize = originalfontsize;
         } else {
             question29.addEventListener('click', () => {
             question29.style.transform = 'scale(1)';
             question29.textContent = '';
             question29.style.margin = ((window.innerWidth / 100) * 3);
             question29.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question29.style.marginTop = (window.innerWidth / 50) + 'px';
             question29.style.fontSize = originalfontsize;
             question29.style.fontSize = originalfontsize;
             question29.appendChild(cross29);
             });
         }
     }
     else {
         question29.style.transform = 'scale(8)';
         question29.textContent = listaquestions[listaplaces[28] - 1];
         question29.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 950) + 'px';
         question29.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + -500) + 'px';
         question29.style.fontSize = (window.innerWidth / 200) + 'px';
         question29.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question29.textContent = listaanswersya[listaplaces[28] - 1] + '' + listavpointsya[listaplaces[28] - 1] + ' Q Points!';
             completed29 = 1;
             switcher29 = 0;
         });
     }
});
question30.addEventListener('click', () => {
     if (switcher30 === 0) {
         if (completed30 === 0) {
             switcher30 = 1;
             question30.style.transform = 'scale(1)';
             question30.textContent = '?';
             question30.style.margin = ((window.innerWidth / 100) * 3);
             question30.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question30.style.marginTop = (window.innerWidth / 50) + 'px';
             question30.style.fontSize = originalfontsize;
         } else {
             question30.addEventListener('click', () => {
             question30.style.transform = 'scale(1)';
             question30.textContent = '';
             question30.style.margin = ((window.innerWidth / 100) * 3);
             question30.style.marginLeft = (-window.innerWidth / 50) + 'px';
             question30.style.marginTop = (window.innerWidth / 50) + 'px';
             question30.style.fontSize = originalfontsize;
             question30.style.fontSize = originalfontsize;
             question30.appendChild(cross30);
             });
         }
     }
     else {
         question30.style.transform = 'scale(8)';
         question30.textContent = listaquestions[listaplaces[29] - 1];
         question30.style.marginLeft = (((window.innerWidth / 2) - (question1.clientWidth / 2)) - 1167.5) + 'px';
         question30.style.marginTop = (((window.innerHeight / 2) + (question1.clientHeight / 2)) + -500) + 'px';
         question30.style.fontSize = (window.innerWidth / 200) + 'px';
         question30.appendChild(doneInput);
         doneInput.classList.add('butn');
         doneInput.addEventListener('click', () => {
             doneInput.remove();
             question30.textContent = listaanswersya[listaplaces[29] - 1] + '' + listavpointsya[listaplaces[29] - 1] + ' Q Points!';
             completed30 = 1;
             switcher30 = 0;
         });
     }
});