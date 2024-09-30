document.querySelector('button').addEventListener('click', function() {
    const noteTitle = prompt('Введите заголовок заметки:');
    const noteContent = prompt('Введите текст заметки:');
    
    if (noteTitle && noteContent) {
        const note = document.createElement('div');
        note.innerHTML = `<h3>${noteTitle}</h3><p>${noteContent}</p>`;
        document.body.appendChild(note);
    } else {
        alert('Заголовок и текст заметки не могут быть пустыми.');
    }
});
