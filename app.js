async function USERDETAILS() {
    console.log("getUserr ...");
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        console.log(user);
  
        try {
          const { data, error } = await supabase
            .from("users")
            .select("name, email , id")
            .eq("userId", user.id);
          if (data) {
            console.log(data);
  
            let currentUser = {
              name: data[0].name ,
              userId: user.id ,
              id: data[0].id ,
              email: data[0].email
            }
            localStorage.setItem('currentUser' , JSON.stringify(currentUser))
          }
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  window.onload = USERDETAILS;
  
