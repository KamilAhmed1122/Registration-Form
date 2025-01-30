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
        
        signupBtn.disabled = true;
        signupBtn.textContent = "Signing up..."; 

        if (signupEmail && signupPass) {
            console.log("Sending request to Supabase...");

            const { data, error } = await supabase.auth.signUp({
                email: signupEmail.value.trim(),
                password: signupPass.value.trim(),
            });

            console.log("Response received from Supabase", data, error); 

            if (error) throw error;

            if (data) {
                console.log("User created:", data.user.id);

                const { data: userData, error: userError } = await supabase
                    .from("users")
                    .insert([
                        {
                            userId: data.user.id,
                            email: signupEmail.value,
                            name: signupName.value,
                        },
                    ])
                    .select();

                console.log("User table insert result:", userData, userError);
                if (userError) throw userError;
            }

            return data;
        } else {
            console.log("Email or password field not found");
        }
    } catch (error) {
        console.error("Error in signup:", error);
    } finally {
        // Reset UI
        signupBtn.disabled = false;
        signupBtn.textContent = "Sign Up"; // Reset the button text
        signupBtnLoader.remove(); // Remove the loader
    }
}


if (signupBtn) {
    signupBtn.addEventListener("click", signup);
  }
  
