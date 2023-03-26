'use strict';
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


//Btn to search city hotel
const inputSearch = document.getElementById('search');
const btnSearch = document.getElementById('btn_search');
const outputSearch = document.getElementById('outputSearch');
let value ='';

const imgs = [
    
    {'id':'1','name':'Auberge la Cannebiere','value':'50','url':'./imgs/marcus_loke.jpg'},
    {'id':'2','name':'Auberge la Cannebiere','value':'50','url':'./imgs/marcus_loke.jpg'},
    {'id':'3','name':'Auberge la Cannebiere','value':'50','url':'./imgs/marcus_loke.jpg'},
    {'id':'4','name':'Auberge la Cannebiere','value':'50','url':'./imgs/marcus_loke.jpg'},
    {'id':'5','name':'Auberge la Cannebiere','value':'50','url':'./imgs/marcus_loke.jpg'},
    {'id':'6','name':'Auberge la Cannebiere','value':'50','url':'./imgs/marcus_loke.jpg'}
    
];

const imageBox = document.querySelector('#box_container');

const loadImages = (imgs, container) => {
    imgs.forEach(element => {
        container.innerHTML += `
            <div class="image_box">
                <img src="${element.url}" class="img_city" />
            
                <div class="hotel_info" id="hotel_info" >
                    <p id="hotel_name">${element.name}</p>
                    <p id="hotel_value">Night starting at ${element.value}</p>
                    <i class="fa fa-star colored"></i>
                    <i class="fa fa-star colored"></i>
                    <i class="fa fa-star colored"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div> 
            </div>
        `
    });
}

const imgContainer = document.querySelector('#popular_container');
const limit = 3; // Use only to get 3 imagens

const popularImages = (imgs, popularContainer) => {
    imgs.forEach((element, index )=> {

        if(index < limit){
            popularContainer.innerHTML += `
            <div class="img_container" id="img_container">
                <img src="${element.url}" alt="" class="img_city" />

                <div class="popular_hotel">
                    <p class="hotel_name">${element.name}</p>
                    <p class="hotel_value"> Night starting at ${element.value}</p>
                    <div class="icon_star">
                        <i class="fa fa-star colored"></i>
                        <i class="fa fa-star colored"></i>
                        <i class="fa fa-star colored"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                </div>
            </div>
        `
        }
        
    });
}


loadImages(imgs, imageBox);
popularImages(imgs, imgContainer);


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