// // Câu 01: Đăng kí User ID > 
// // Yêu cầu 01: Required
// // Yêu cầu 02: Độ dài thuộc [5, 12] 
//     // Cách 01: Ko dùng biểu thức chính qui
//     // Cách 02: Có dùng biểu thức chính qui

// // Lưu ý: Kiểu phần tử Submit có hành động mặc định gửi dữ liệu đi

// let userID = document.getElementById('txtUserID');
// let statusOfUserID = document.getElementById('statusOfUserID')
// // let userID = document.querySelector('#txtUserID')

// userID.addEventListener('focus',function(){
//     // userID.style.backgroundColor = 'yellow'
//     this.style.border = '1px solid red'
// })

// userID.addEventListener('focusout', leaveUserId)

// function leaveUserId(){
//     // Cách 01: Ko dùng gì BTCQ
//     // if(userID.value.length >=5 && userID.value.length <=12){
//     //     statusOfUserID.textContent = 'UserID hợp lệ'
//     //     statusOfUserID.style.color = 'blue'
//     // }else{
//     //     statusOfUserID.textContent = 'UserID không hợp lệ. Độ dài từ 5 - 12'
//     //     statusOfUserID.style.color = 'red'
//     // }

//     // Cách 02: dùng BTCQ: [1, +duongvocung]
//     var userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
//     if(userIDRegex.test(userID.value)){
//         statusOfUserID.textContent = 'UserID hợp lệ'
//         statusOfUserID.style.color = 'blue'
//     }else{
//         statusOfUserID.textContent = 'UserID không hợp lệ. Độ dài từ 5 - 12'
//         statusOfUserID.style.color = 'red'
//     }
// }

// // userID.onchange = function(){
// //     alert('Bạn vừa thay đổi UserID và thoát khỏi UserID')
// // }

// Cách làm 02: Chỉ xử lý khi nhấp Submit

// function checkUserId(){
//         // Cách 02: dùng BTCQ: [1, +duongvocung]
//     let userID = document.getElementById('txtUserID');
//     let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
//     if(userIDRegex.test(userID.value)){
//         return true
//     }
//     return false
// }

// function checkPassword(){
//     let password = document.getElementById('txtPassword');
//     let passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
//     if(passwordRegex.test(password.value)){
//         return true
//     }
//     return false
// }

// function checkName() {
//     let name = document.getElementById('txtNameId')
//     let nameRegex = /^[a-zA-Z]+$/;
//     if(nameRegex.test(name.value)){
//         return true
//     }
//     return false
// }

// function checkZipCode() {
//     let ZipCode = document.getElementById('txtZipId')
//     let zipRegex = /^[0-9]+$/;
//     if(zipRegex.test(ZipCode.value)){
//         return true
//     }
//     return false
// }

// function checkCountry() {
//     let country = document.getElementById('countryId')
//     if(country.value == 1) {
//         return false
//     }
//     return true
// }

// function checkEmail() {
//     let Email = document.getElementById('txtEmailId')
//     let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//     if(emailRegex.test(Email.value)){
//         return true
//     }
//     return false
// }

// function checkSex() {
//     let sex = document.getElementsByClassName('sexId')
//     for(let i = 0; i < sex.length; i++) {
//         if(sex[i].checked){
//             return true
//         }
//     }
//     return false
// }

// function checkLang() {
//     let lang = document.getElementsByClassName('langId')
//     for(let i = 0; i < lang.length; i++) {
//         if(lang[i].checked){
//             return true
//         }
//     }
//     return false
// }

// let register = document.getElementById('btnRegister')

// register.addEventListener('click', function(e){
//     e.preventDefault()
//     checkSex()
//     let statusOfUserID = document.getElementById('statusOfUserID')
//     let statusOfPassword = document.getElementById('statusOfPassword')
//     let statusOfName = document.getElementById('statusOfName')
//     let statusOfCountry = document.getElementById('statusOfCountry')
//     let statusOfZip = document.getElementById('statusOfZip')
//     let statusOfEmail = document.getElementById('statusOfEmail')
//     let statusOfSex = document.getElementById('statusOfSex')
//     let statusOfLang = document.getElementById('statusOfLang')
//     if(checkUserId() == true){
//         statusOfUserID.textContent = 'UserID hợp lệ'
//         statusOfUserID.style.color = 'blue'
//     }else{
//         statusOfUserID.textContent = 'UserID không hợp lệ. Độ dài từ 5 - 12'
//         statusOfUserID.style.color = 'red'
//     }

//     if(checkPassword() == true){
//         statusOfPassword.textContent = 'Password hợp lệ'
//         statusOfPassword.style.color = 'blue'
//     }else{
//         statusOfPassword.textContent = 'Password không hợp lệ. Độ dài từ 7 - 12'
//         statusOfPassword.style.color = 'red'
//     }
    
//     if(checkCountry() == false){
//         statusOfCountry.textContent = 'Hãy chọn 1 quốc gia'
//         statusOfCountry.style.color = 'red'
//     }else {
//         statusOfCountry.textContent = ''
//     }

//     if(checkName() == true){
//         statusOfName.textContent = 'Name hợp lệ'
//         statusOfName.style.color = 'blue'
//     }else{
//         statusOfName.textContent = 'Name không hợp lệ. Name chỉ chứa chữ cái'
//         statusOfName.style.color = 'red'
//     }

//     if(checkZipCode() == true){
//         statusOfZip.textContent = 'ZipCode hợp lệ'
//         statusOfZip.style.color = 'blue'
//     }else{
//         statusOfZip.textContent = 'ZipCode không hợp lệ. ZipCode chỉ chứa số'
//         statusOfZip.style.color = 'red'
//     }

//     if(checkEmail() == true){
//         statusOfEmail.textContent = 'Email hợp lệ'
//         statusOfEmail.style.color = 'blue'
//     }else{
//         statusOfEmail.textContent = 'Email không hợp lệ.'
//         statusOfEmail.style.color = 'red'
//     }

//     if(checkSex() == true) {
//         statusOfSex.textContent = ''
//     }else {
//         statusOfSex.textContent = 'Vui lòng chọn giới tính'
//         statusOfSex.style.color = 'red'
//     }

//     if(checkLang() == true) {
//         statusOfLang.textContent = ''
//     }else {
//         statusOfLang.textContent = 'Vui lòng chọn Ngôn ngữ'
//         statusOfLang.style.color = 'red'
//     }
// })

// Cách 03: Sử dụng thư viện jQuery
// Cú pháp jQuery: $(SELECTOR).ACTION()
$(document).ready(function(){

    function checkUserId(){
        // Cách 02: dùng BTCQ: [1, +duongvocung]
        let userID = $('#txtUserID').val();
        let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
        if(userIDRegex.test(userID)){
            return true
        }
        return false
    }

    function checkPassword(){
        let Password = $('#txtPassword').val();
        let PasswordRegex = /^[a-zA-Z0-9]{7,12}$/;
        if(PasswordRegex.test(Password)){
            return true
        }
        return false
    }

    function checkName(){
        let name = $('#txtNameId').val();
        let nameRegex = /^[a-zA-Z]+$/;
        if(nameRegex.test(name)){
            return true
        }
        return false
    }

    function checkCountry(){
        let country = $('#countryId').val();
        if(country===1){
            return false
        }
        return true
    }

    function checkZipCode(){
        let ZipCode = $('#txtZipId').val();
        let zipRegex = /^[0-9]+$/;
        if(zipRegex.test(ZipCode)){
            return true
        }
        return false
    }

    function checkEmail(){
        let Email= $('#txtEmailId').val();
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if(emailRegex.test(Email)){
            return true
        }
        return false
    }

    function checkSex(){
        let sex= $('.sexId:checked').val();
        if(sex===undefined){
            return false
        }
        return true
    }

    function checkLang(){
        let lang= $('.langId:checked').val();
        if(lang===undefined){
            return false
        }
        return true
    }
    $("#btnRegister").click(function(e){
        e.preventDefault();
        if(checkUserId()){
            $("#statusOfUserID").text('UserID hợp lệ')
            $("#statusOfUserID").css('color','blue')
        }else{
            $("#statusOfUserID").text('UserID không hợp lệ')
            $("#statusOfUserID").css('color','red')
        }
        if(checkPassword()){
            $("#statusOfPassword").text('Password hợp lệ')
            $("#statusOfPassword").css('color','blue')
        }else{
            $("#statusOfPassword").text('Password không hợp lệ')
            $("#statusOfPassword").css('color','red')
        }
        if(checkName()){
            $("#statusOfName").text('Name hợp lệ')
            $("#statusOfName").css('color','blue')
        }else{
            $("#statusOfName").text('Name không hợp lệ')
            $("#statusOfName").css('color','red')
        }
        if(checkCountry()){
            $("#statusOfCountry").text('')
        }else{
            $("#statusOfCountry").text('Hãy chọn một quốc gia.')
            $("#statusOfCountry").css('color','red')
        }
        if(checkZipCode()){
            $("#statusOfZip").text('ZipCode hợp lệ')
            $("#statusOfZip").css('color','blue')
        }else{
            $("#statusOfZip").text('ZipCode không hợp lệ')
            $("#statusOfZip").css('color','red')
        }
        if(checkEmail()){
            $("#statusOfEmail").text('Email hợp lệ')
            $("#statusOfEmail").css('color','blue')
        }else{
            $("#statusOfEmail").text('Email không hợp lệ')
            $("#statusOfEmail").css('color','red')
        }
        if(checkSex()){
            $("#statusOfSex").text('')
            $("#statusOfSex").css('color','blue')
        }else{
            $("#statusOfSex").text('Vui lòng chọn giới tính.')
            $("#statusOfSex").css('color','red')
        }
        if(checkLang()){
            $("#statusOfLang").text('')
            $("#statusOfLang").css('color','blue')
        }else{
            $("#statusOfLang").text('Vui lòng chọn ngôn ngữ.')
            $("#statusOfLang").css('color','red')
        }
    })
})