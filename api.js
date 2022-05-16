async function handleSigning(){

    const signupData = {
        email : document.getElementById("floatingInput").value,
        password : document.getElementById("floatingPassword").value
    }
    console.log(email + password)

    const response = await fetch('http://127.0.0.1:5002/signup',{
        method: 'POST',
        body:JSON.stringify(signupData)
    }
    )
}
