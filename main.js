const registrerBox = document.querySelector('.registrer_box');
const iconArea =  document.querySelector('.icon_area');
const namee = document.querySelector('.name')
const email = document.querySelector('.email')

const func1 = () => {
        registrerBox.style.display = 'grid';
        iconArea.style.display = 'none';
}    


const func2 = () => {
        if((namee.value !== '' && email.value !== '') 
          && (email.value !== '' && namee.value !== '' )) {
             alert("Application sent successfully.")
        } else {
           alert("Please fill in at least the name and email fields.")
        }
}