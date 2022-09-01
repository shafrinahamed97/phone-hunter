const loadPhone =async(searchText) =>
{
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText} `
    const res = await fetch(url);
    const data = await res.json();
    displayPhone (data.data);
}

const displayPhone = phones =>
{
    const phonesContainer = document.getElementById('phone-container');
    phonesContainer.textContent = ' ';

    // display 20 phones only. 
phones = phones.slice(0,10);

    phones.forEach(phone =>
        {
 const phoneDiv = document.createElement('div');
 phoneDiv.classList.add('col');
 phoneDiv.innerHTML = `
 <div class="card -2">
                    <img src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${phone.phone_name}</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                  </div>

 `;

 phonesContainer.appendChild(phoneDiv);
        })
 
}

document.getElementById('btn-search').addEventListener('click',function(){
  const searhField = document.getElementById('search-field');
  const searchText  =searhField.value;
  loadPhone(searchText);
})

loadPhone();