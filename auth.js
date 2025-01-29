let signupEmail = document.getElementById('signup-email')
let signupPass = document.getElementById('signup-password')
let signupBtn = document.getElementById('signup-btn')
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let signupBtnLoader = document.getElementById('loading_btn_spinner')
let loginBtn = document.getElementById('login_btn')
let loginEmail = document.getElementById('login-email')
let loginPass = document.getElementById('login-password')
let sessionBtn = document.getElementById('session-btn')
let logoutBtn = document.getElementById('logout-btn')

async function signup(){
    try {
        signupBtnLoader.style.display = 'block'
        const {data, error} = await supabase.auth.signup({
            email: signupEmail.ariaValueMax,
            password: signupPass.value
        })
        if(error) throw error
        if(data) {
            alert('please check your email for verification')
        }
        return data
    } catch (error) {
        console.log(error)
    }
}

async function login(){
    try {
        const {data, error} = await supabase.auth.signInWithPassword({
            email: loginEmail.value,
            password: loginPass.value
        })

        if(error) throw error
        if(data){
            console.log(data)
        }
    } catch (error) {
        
    }
}