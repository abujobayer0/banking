document.getElementById('button-submit').addEventListener('click',function(){
const emailFild=document.getElementById('user-email');
const email = emailFild.value;

//password

const passwordFild=document.getElementById('user-password');
const password = passwordFild.value;
console.log(email);
emailFild.value='';
passwordFild.value='';
if(email == 'munnavai@gmail.com' && password == 'munnavai'){
   window.location.href='banking-page.html';
}
else if(email==''&&password==''){
    alert('please enter your username and password  correctly'); 
}
else{
    alert
    ('hey baba tmi vuwa')
}
})

///deposit system
//banking system
