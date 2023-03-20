// Filters
const lIcon = document.getElementById("lowCost");
const lIconDiv = document.getElementById("lowCost_div");
const fIcon = document.getElementById("family");
const fIconDiv = document.getElementById("family_div");
const rIcon = document.getElementById("romantic");
const rIconDiv = document.getElementById("romantic_div");
const pIcon = document.getElementById("pet");
const pIconDiv = document.getElementById("pe_div");

const iconFilters = document.getElementsByClassName("icon_filter");

let low, family, romantic, pet, isActive = false;
let iconId = "";
//Btn to search city hotel
const inputSearch = document.getElementById('search');
const btnSearch = document.getElementById('btn_search');
const outputSearch = document.getElementById('outputSearch');
let value ='';

//Filter event get
function activeFilter() {
    for(let i = 0; i < iconFilters.length; i++){
        iconFilters[i].addEventListener("click", () => {
            iconId = iconFilters[i].id;

            const isLow = iconId === lIcon.id || iconId === lIconDiv && low === false;

            const { style: iconStyle } = lIcon;
            const { style: divStyle } = lIconDiv;

                iconStyle.backgroundColor = isLow ? '#00F' : '#FFF';
                iconStyle.color = isLow ? '#FFF' : '#00F';
                
                divStyle.display = isLow ? 'flex' : 'inherit';
                divStyle.flexDirection = isLow ? 'row-reverse' : 'row';

                low = true;
        });
    }
}
// Btn city search

inputSearch.addEventListener('input', () => {
    value = inputSearch.value;
    
});

btnSearch.addEventListener('click', () => {
    outputSearch.textContent = `Accommodations in ${value}`;
}); 