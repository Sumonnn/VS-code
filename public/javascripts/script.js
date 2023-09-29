function createFileAndFolder() {
    const fileicon = document.querySelector('#fileicon');
    const foldericon = document.querySelector('#foldericon');
    const file = document.querySelector('.create-file');
    const folder = document.querySelector('.create-folder');

    let flag = 0;
    fileicon.addEventListener('click', () => {
        if (flag === 0) {
            file.style.display = 'block';
            flag = 1;
        }
        else {
            file.style.display = 'none';
            flag = 0;
        }
    })
    foldericon.addEventListener('click', () => {
        if (flag === 0) {
            folder.style.display = 'block';
            flag = 1;
        }
        else {
            folder.style.display = 'none';
            flag = 0;
        }
    })
}
createFileAndFolder();