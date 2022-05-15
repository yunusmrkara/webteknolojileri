const containerDOM = document.querySelector('.container');

const API_KEY = 'e81faec80cd13bab068b2f4bc08679e9';

const günler = [
  'Pazar',
  'Pazartesi',
  'Salı',
  'Çarşamba',
  'Perşembe',
  'Cuma',
  'Cumartesi',
];

fetch(
  `https://api.openweathermap.org/data/2.5/onecall?lat=40.6940&lon=30.4358&exclude={part}&appid=${API_KEY}&lang=tr`,
)
  .then((res) => res.json())
  .then((data) => {
    const days = data.daily;
    data.daily.forEach((element, index) => {
      createElement(element, index);
      const daysCard = document.querySelectorAll('article');

      daysCard.forEach((item) => {
        if (!item.id == index) {
          item.innerHTML = `
          <span >Anlık Hava Durumu</span>
          <div class="content-card">
          <div class="single-item-pic">      
          <img src="https://openweathermap.org/img/wn/${
            element.weather[0].icon
          }@2x.png" >
          </div><div class="single-item-text"><p>${
            günler[new Date(element.dt * 1000).getDay()]
          }</p><p>${
            element.weather[0].description
          }</p><p>${Math.round(
            element.temp['max'] - 273.15,
          )}/
          ${Math.round(
            element.temp['min'] - 273.15,
          )}&#8451</p>
          </div></div>  `;
          console.log(item);
        }
      });
    });
  });
const createElement = (element, index) => {
  let articleDOM = document.createElement('article');
  containerDOM.appendChild(articleDOM);
  articleDOM.classList.add('single-user');
  articleDOM.setAttribute('id', `${index}`);
  articleDOM.innerHTML = `

      <div class="content-card">
      <div class="single-item-pic">      
      <img src="https://openweathermap.org/img/wn/${
        element.weather[0].icon
      }@2x.png" >
      </div><div class="single-item-text"><p>${
        günler[new Date(element.dt * 1000).getDay()]
      }</p><p>${
    element.weather[0].description
  }</p><p>${Math.round(element.temp['max'] - 273.15)}/
      ${Math.round(element.temp['min'] - 273.15)}&#8451</p>
      </div></div>  `;
};
