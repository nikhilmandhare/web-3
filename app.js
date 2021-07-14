const arrows = document.querySelectorAll(".arrow");
const movielists= document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => { 
    const itemnum = movielists[i].querySelectorAll("img").length;
    let clickcounter=0;
  arrow.addEventListener("click", ()=> {
      clickcounter++;
      if(itemnum - (4 + clickcounter )>=0){

      
      movielists[i].style.transform= `translateX( ${
      movielists[i].computedStyleMap().get("transform")[0].x.value
      -300}px)`;
      }else
      {
          movielists[i].style.transform = "translateX(0)";
          clickcounter = 0;
      }
      });

  });



  //TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});