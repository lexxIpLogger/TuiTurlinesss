var username, password, contact, pass, out, msg, reg_cont;

pass = document.getElementById('reg-form__button');

msg = '';

username = document.getElementById('reg-form__username');

password = document.getElementById('reg-form__password');

contact = document.getElementById('reg-form__contact');

out = document.getElementById('output-log-window')

reg_cont = document.getElementById('reg-container')

function outPut(){
   username = document.getElementById('reg-form__username').value;

   password = document.getElementById('reg-form__password').value;

   contact = document.getElementById('reg-form__contact').value;
   
   out = document.getElementById('output-log-window');
    
   msg += username + '|' + password + '|' + contact + ';';
   msg += ' ';
    
   out.style.display = 'block';
       
   reg_cont.style.marginBottom = '50px';
    
   out.textContent = msg;
}

function hideFoot(){
    out.style.display = 'none';
    reg_cont.style.marginBottom = '0px'
}


username.addEventListener('click', hideFoot)
password.addEventListener('click', hideFoot)
contact.addEventListener('click', hideFoot)
pass.addEventListener('click', outPut)
