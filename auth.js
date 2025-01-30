let signupEmail = document.getElementById("signup_email");
let signupPass = document.getElementById("signup_password");
let signupBtn = document.getElementById("signup-btn");
let signupBtnLoader = document.getElementById("loading_btn_spinner");
let loginBtn = document.getElementById("login_btn");
let loginEmail = document.getElementById("login_email");
let loginPass = document.getElementById("login_password");
let sessionBtn = document.getElementById("session_btn");
let logoutBtn = document.getElementById("logout_btn");

let signupName = document.getElementById("signup_name");

async function signup() {
    try {
        signupBtnLoader.style.display = "block";
        const {data,error} = await supabaseClient.auth.signUp({
            email: signupEmail.value,
            password: signupPass.value
        });
        if (error) throw error;
        if (data) {
            console.log(data.user.id)
        }
    } catch (error) {
        
    }
}

