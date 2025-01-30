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
      signupBtnLoader.style.display = 'block'
      const { data, error } = await supabase.auth.signUp({
          email: signupEmail.value,
          password: signupPass.value,
        })
  
      if(error) throw error 
      if(data) {
          alert('Please Check your email for confirmation')
      }
      return data
    } catch (error) {
      console.log(error)
    } finally {
      signupBtnLoader.style.display = 'none'
    }
}


if (signupBtn) {
    signupBtn.addEventListener("click", signup);
  }
  
