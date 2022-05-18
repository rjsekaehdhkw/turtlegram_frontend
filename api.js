const backend_base_url = "http://127.0.0.1:5002"
const frontend_base_url = "http://127.0.0.1:5501"

async function handleSignin(){

    const signupData = {
        email : document.getElementById("floatingInput").value,
        password : document.getElementById('floatingPassword').value
    }
    
    const response = await fetch(`${backend_base_url}/signup`,{
        method:'POST',
        body:JSON.stringify(signupData)
    }
    )
    console.log(response)

    response_json = await response.json()
    console.log(response_json)

    if (response.status ==200){
        window.location.replace(`${frontend_base_url}/login.html`);
    }else{
        alert(response.status)
    }
}

async function handleLogin(){
    console.log("handle login")

    const loginData = {
        email : document.getElementById("floatingInput").value,
        password : document.getElementById('floatingPassword').value
    }


    const response = await fetch(`${backend_base_url}/login`,{
        method:'POST',
        body:JSON.stringify(loginData)
    }
    )


    console.log(response)

    response_json = await response.json()
    console.log(response_json)
    localStorage.setItem("token", response_json.token)

}



async function getName(){

    const response = await fetch(`${backend_base_url}/getuserinfo`,{
        headers:{
            'Authorization':localStorage.getItem("token")
        }
    }
    )
    response_json = await response.json()
    console.log(response_json)

    const username = document.getElementById("username")
    username.innerText = response_json.email

    // return response_json.email

}










// async function handleLogin(){



//     const response = await fetch('http://127.0.0.1:5002/login',{
//         method:'POST',
//         body:JSON.stringify(signupData)
//     }
//     )

    
//     console.log(response)

//     response_json = await response.json()
//     console.log(response_json)




// }

