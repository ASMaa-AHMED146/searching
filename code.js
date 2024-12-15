const data = [
    // {
    //   id: 1,
    //   name: "Invicta Men's Pro Diver",
    //   img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    //   price: 74,
    //   cat: "Dress",
    // },
    {
      id: 11,
      name: "Invicta Men's Pro Diver 2",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 2,
      name: "Timex Men's Expedition Scout ",
      img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
      price: 40,
      cat: "Sport",
    },
    {
      id: 3,
      name: "Breitling Superocean Heritage",
      img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
      price: 200,
      cat: "Luxury",
    },
    {
      id: 4,
      name: "Casio Classic Resin Strap ",
      img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
      price: 16,
      cat: "Sport",
    },
    {
      id: 5,
      name: "Garmin Venu Smartwatch ",
      img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
      price: 74,
      cat: "Casual",
    },
  ];

let products=document.querySelector('.products');
let left=document.querySelector('.left');
let search =document.querySelector('.search input');
let price=document.querySelector('.price #myrange');
let VALUE=document.querySelector('.price p span');



let show=['a'];
function start(array)
{
  products.innerHTML='';
  array.forEach((el,index)=>{
    let item=document.createElement('div');
    item.classList='item';
    item.innerHTML=`<div class="image">
                      <img src="${el.img}" alt="">
                  </div>
                  <div class="text">
                      <p class="name">${el.name}</p>
                      <p class="price">$${el.price}</p>                  
                  </div>`;
  products.appendChild(item);
  })  
}
start(data);

left.addEventListener("click",(el)=>{
  if(el.target.classList.contains('all'))
  {  
    show=data;
    start(show);
  }
  else if(el.target.classList.contains('Dress'))
  {   
    add_to_show(el.target.classList.value);
  }
  else if(el.target.classList.contains('Dress'))
  {   
    add_to_show(el.target.classList.value);
  }
  else if(el.target.classList.contains('Sport'))
  {   
    add_to_show(el.target.classList.value);
  }
  else if(el.target.classList.contains('Luxury'))
  {   
    add_to_show(el.target.classList.value);
  }
})


function add_to_show(value)
{
  show=[];
  data.forEach((el)=>{
    if(el.cat===value)
    {   
      show.push(el);
      start(show);
    }
  })
}

let search_array=[];
search.addEventListener('input',()=>{
  if(search.value!='' )
  {
    search_array=[];
    data.forEach((el)=>{
      let string=el.name.replace(/\s+/g, '');
      let regex=new RegExp(`${search.value}`,'i');
      if((el.cat.substring(0,search.value.length)===search.value)||(regex.test(string)))
       {     
        search_array.push(el);       
      }
     })
     start(search_array);
  }
  else if(search.value=='')
  {
    start(data);
   }
})

price.addEventListener('input',(el)=>{
  let Price=el.target.value;
  let res=data.filter((item)=>item.price<=Price);
  VALUE.textContent=Price;
  start(res);  
})















