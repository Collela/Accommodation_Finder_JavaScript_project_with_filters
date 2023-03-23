// Filters
const lIcon = document.getElementById("lowCost");
const lIconDiv = document.getElementById("lowCost_div");
const fIcon = document.getElementById("family");
const fIconDiv = document.getElementById("family_div");
const rIcon = document.getElementById("romantic");
const rIconDiv = document.getElementById("romantic_div");
const pIcon = document.getElementById("pet");
const pIconDiv = document.getElementById("pet_div");
const iconFilters = document.getElementById("ftsContainer");

let low, family, romantic,pet = 0;

//Btn to search city hotel
const inputSearch = document.getElementById('search');
const btnSearch = document.getElementById('btn_search');
const outputSearch = document.getElementById('outputSearch');
let value ='';

//Filter event get
const disable = () => {
    if(event.target.id == lIcon.id && low == 1){
        turnOn['clearLowCost'];
    }
}
const isActive = (event) => {
    turnOn[event.target.id]();
    disable();
}

const turnOn = {
    'lowCost': () => {
        lIcon.style.backgroundColor = '#00F';
        lIcon.style.color = '#FFF';
        lIconDiv.style.display = 'flex';
        lIconDiv.style.flexDirection = 'row-reverse';
        low = 1;
    },
    'clearLowCost': () => {
        lIcon.style.backgroundColor = '#FFF';
        lIcon.style.color = '#00F'
        lIconDiv.style.display = 'inherit';
        lIconDiv.style.flexDirection = 'row';
        low = 0;
    },
    'family': () => {
        fIcon.style.backgroundColor = '#00F';
        fIcon.style.color = '#FFF';
        fIconDiv.style.display = 'flex';
        fIconDiv.style.flexDirection = 'row-reverse';
    },
    'romantic': () => {
        rIcon.style.backgroundColor = '#00F';
        rIcon.style.color = '#FFF';
        rIconDiv.style.display = 'flex';
        rIconDiv.style.flexDirection = 'row-reverse';
    },
    'pet': () => {
        pIcon.style.backgroundColor = '#00F';
        pIcon.style.color = '#FFF';
        pIconDiv.style.display = 'flex';
        pIconDiv.style.flexDirection = 'row-reverse';
    }
}

iconFilters.addEventListener('click', isActive);

// Btn city search

inputSearch.addEventListener('input', () => {
    value = inputSearch.value;
    
});

btnSearch.addEventListener('click', () => {
    outputSearch.textContent = `Accommodations in ${value}`;
}); 