const searchinput = document.querySelector("#search-input");
searchinput.addEventListener("keydown", function(event){
    if(event.code==="Enter"){
        search();
    }
});
function search(){
    const input = searchinput.value;
    window.location.href="https://www.google.com/search?q=" + input + "&sxsrf=ALeKk02inpmHNSwsxAYWkUUFFT54G7j-nw%3A1626090566128&ei=RizsYJ-VB8OS4-EP-oKEoAY&oq=" + input + "&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBQgAEJECMgcILhCxAxBDMgcIABCxAxBDMgQILhBDMgUILhCxAzIHCC4QsQMQQzIECC4QQzIECAAQQzICCC46BwgjELADECc6BwgAELADEEM6CggAELEDELADEEM6DQguELEDELADEMgDEEM6CgguELADEMgDEEM6BwgjEOoCECc6CAgAELEDEIMBOggILhCxAxCDAToCCAA6BQguEJECSgUIOBIBMUoECEEYAVD-6ClY1JEqYOKXKmgCcAB4BIAB-QyIAa5KkgENMy0xLjEuMi4yLjQuMZgBAKABAaoBB2d3cy13aXqwAQrIAQ7AAQE&sclient=gws-wiz&ved=0ahUKEwif0MO0u93xAhVDyTgGHXoBAWQQ4dUDCA4&uact=5"
}