function showRegister() {
    document.getElementById('login_box').style.display = 'none';
    document.getElementById('register_box').style.display = 'block';
}

function showLogin() {
    document.getElementById('login_box').style.display = 'block';
    document.getElementById('register_box').style.display = 'none';
}

function registerUser() {
	
    const username = document.querySelector('#register_box input[type="text"]').value;
    const password = document.querySelectorAll('#register_box input[type="password"]')[0].value;
    const confirmPassword = document.querySelectorAll('#register_box input[type="password"]')[1].value;
	
    if (username && password && confirmPassword) {
        if (password === confirmPassword) {
            alert("注册成功！");
            showLogin(); 
        } else {
            alert("两次输入的密码不一致！");
        }
    } else {
        alert("请填写所有字段！");
    }
}

function loginUser() {
    const username = document.querySelector('#login_box input[type="text"]').value;
    const password = document.querySelector('#login_box input[type="password"]').value;

    if (username === "NEUQ" && password === "root") {
        alert("登录成功！");
        window.location.href = "index.html"; 
    } else {
        alert("登录失败，请检查用户名和密码！");
    }
}
