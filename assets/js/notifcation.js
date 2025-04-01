let notification = document.querySelector('.notifications');

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const form = this;
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData
    }).then(response => {
        if (response.ok) {
            form.reset();
            showSuccessToast();
        } else {
            showErrorToast();
        }
    }).catch(error => {
        showErrorToast();
        console.error('Error:', error);
    });
});

function showSuccessToast() {
    let type = '';
    let icon = 'fa-solid fa-circle-check';
    let title = 'Success';
    let text = 'Data sent successfully!';
    createtoast(type, icon, title, text);
}

function showErrorToast() {
    let type = '';
    let icon = 'fa-solid fa-exclamation-triangle';
    let title = 'error';
    let text = 'An error occurred while sending.!!';
    createtoast(type, icon, title, text);
}

function createtoast(type, icon, title, text) {
    let newToast = document.createElement('div');
    newToast.innerHTML = `
        <div class="toast flex  items-center gap-4 p-2 mb-4 w-[400px] bg-gradient-to-r from-green-500 to-gray-800 rounded-lg relative">
            <i class="${icon} text-3xl text-white"></i>
            <div class="content">
                <div class="title text-xl font-bold text-white">${title}</div>
                <span class="text-white/60">${text}</span>
            </div>
                <i class="fa-solid fa-xmark text-white/90 cursor-pointer absolute right-8 text-3xl" onclick="(this.parentElement).remove()"></i>
            <div class="absolute bottom-0 left-0 bg-green-500 h-[3px] w-full animate-timeOut"></div>
        </div>`;
    
    notification.appendChild(newToast);
    newToast.timeout = setTimeout(() => newToast.remove(), 5000);
}