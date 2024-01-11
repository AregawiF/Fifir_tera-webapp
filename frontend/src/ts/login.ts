document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.getElementById('login-form') as HTMLFormElement;
    
    const login_btn= document.getElementById('login-btn') as HTMLButtonElement;

    form.addEventListener('submit', async(event)=>{
        event.preventDefault();

        const formData = new FormData(form);
        formData.forEach((value, key)=>{
            console.log(`${key}: ${value}`)
        })
        console.log(formData.get('password'));
        try {
            const response = await fetch('http://localhost:3000', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Form submitted successfully');
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    })
})