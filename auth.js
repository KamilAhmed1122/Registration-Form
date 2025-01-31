let signupEmail = document.getElementById("signup_email");
let signupPass = document.getElementById("signup_password");
let signupBtn = document.getElementById("signup_btn");
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
    const { data, error } = await supabase.auth.signUp({
      email: signupEmail.value,
      password: signupPass.value,
    });

    if (error) throw error;
    if (data) {
      console.log(data.user.id);

      // as signup success , add record also in DB
      try {
        const { data: userData, error: userError } = await supabase
          .from("users")
          .insert({
            userId: data.user.id,
            email: signupEmail.value,
            name: signupName.value,
          })
          .select();

        if (userData) {
          console.log(userData);
        }

        if (userError) throw userError;
      } catch (error) {
        console.log(error);
      }
    }
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    signupBtnLoader.style.display = "none";
  }
}

async function login() {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginEmail.value,
      password: loginPass.value,
    });

    if (error) throw error;
    if (data) {
      console.log(data);
      // alert('Sign in Succesfull')

      // window.location.href = '/dashboard.html'
    }
    return data;
  } catch (error) {
    console.log(error);

    alert(error.message);
  }
}

async function checkSession() {
  try {
    const { data, error } = await supabase.auth.getSession();
    if (data) {
      console.log(data);
    }
    if (error) throw error;
  } catch (error) {
    console.log(error);
  }
}

async function logout() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;

    window.location.href = "/login.html";
  } catch (error) {
    console.log(error);
  }
}

if (sessionBtn) {
  sessionBtn.addEventListener("click", checkSession);
}

if (loginBtn) {
  loginBtn.addEventListener("click", login);
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", logout);
}

if (signupBtn) {
  signupBtn.addEventListener("click", signup);
}
