const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const toast = document.getElementById('toast');

addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.className = 'task-item';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'task-content';
    
    const checkbox = document.createElement('div');
    checkbox.className = 'checkbox';
    
    const span = document.createElement('span');
    span.className = 'task-text';
    span.innerText = taskText;

    contentDiv.appendChild(checkbox);
    contentDiv.appendChild(span);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerText = '■ Deletar';

    li.appendChild(contentDiv);
    li.appendChild(deleteBtn);

    // Marcar tarefa como concluída
    contentDiv.addEventListener('click', () => {
        li.classList.toggle('completed');
        
        if (li.classList.contains('completed')) {
            // Move o item para o final da lista
            taskList.appendChild(li); 
            showToast('Tarefa concluída!', 'success');
        } else {
            // Se desmarcar, move o item de volta pare o topo (opcional)
            taskList.insertBefore(li, taskList.firstChild);
        }
    });

    // Lógica para deletar a tarefa
    deleteBtn.addEventListener('click', (e) => {
        li.remove();
        showToast('Tarefa removida.', 'error');
    });

    // Insere a nova tarefa (** sempre no topo da lista)
    taskList.insertBefore(li, taskList.firstChild);
    
    // Limpa o input
    taskInput.value = '';
    taskInput.focus();
    showToast('Tarefa adicionada com sucesso!', 'info');
}

// Função para exibir o pop-up
let toastTimeout;
function showToast(message, type) {
    toast.innerText = message;
    
    // Faz o pop-up sumir
    toastTimeout = setTimeout(() => {
        toast.className = toast.className.replace('show', '').trim();
    }, 3000);
}