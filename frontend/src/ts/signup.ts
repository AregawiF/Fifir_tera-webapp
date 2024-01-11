document.addEventListener('DOMContentLoaded', ()=>{
    const form=document.getElementById('signup-form') as HTMLFormElement
    const btn=document.getElementById('signup') as HTMLButtonElement

    form.addEventListener('submit', async (event)=>{
        event.preventDefault()

        const formData=new FormData(form);
        console.log(formData);

        formData.forEach((value, key)=>{
            console.log(`${key}: ${value}`)
        })
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