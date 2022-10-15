const form = document.querySelector('#add-cafe-form');

// saving data
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    db.collection('cafes').add({
        name: form.name.value,
        name: form.secondName.value,
        name: form.email.value,
        name: form.phone.value,
        name: form.message.value
    })
})