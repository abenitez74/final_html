const db =firebase.firestore();

const taskForm = document.getElementById('task-form');
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const nombre= taskForm['task-nombre'].value;
    const apellido=taskForm['task-apellido'].value;
    const email =taskForm['task-email'].value;
    const cedula =taskForm['task-cedula'].value;
    const direccion=taskForm['task-direccion'].value;

    const response =await db.collection('personas').doc().set({

        nombre: nombre,
        apellido: apellido,
        email: email,
        cedula: cedula,
        direccion: direccion
    })

    document.getElementById("task-form").reset();
    console.log(response)
})