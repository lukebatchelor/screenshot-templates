let titleElem, dateElem, titleField, dateField, nameField, avatarElem, avatarField, nameElem;

function init() {
  titleElem = document.getElementById('title');
  dateElem = document.getElementById('date');
  readElem = document.getElementById('read');
  avatarElem = document.getElementById('avatar');
  nameElem = document.getElementById('name');
  contentElem = document.getElementById('content');



  titleField = document.getElementById('title-field')
  dateField = document.getElementById('date-field')
  readField = document.getElementById('read-field');
  avatarField = document.getElementById('avatar-field');
  nameField = document.getElementById('name-field');
  contentField = document.getElementById('content-field');

  titleField.value = 'Title Goes Here';
  dateField.value = 'Dec 11, 2020';
  readField.value = '1 min read';
  avatarField.value = 'https://hello.atlassian.net/wiki/aa-avatar/557057:b69111e2-1634-4ddd-905c-46884ed33b1a';
  nameField.value = 'Scott Farquhar';
  contentField.value = 'You could really say anything here.\n\nAnything at all.';


  titleField.addEventListener('keyup', () => {
    titleElem.innerText = titleField.value;
  });
  nameField.addEventListener('keyup', () => {
    nameElem.innerText = nameField.value;
  });
  dateField.addEventListener('keyup', () => {
    dateElem.innerText = dateField.value;
  });
  readField.addEventListener('keyup', () => {
    readElem.innerText = readField.value;
  });
  avatarField.addEventListener('change', () => {
    avatarElem.src = avatarField.value;
  });
  contentField.addEventListener('keyup', () => {
    const paragraphs = contentField.value.split('\n\n').map(str => {
      const p = document.createElement('p');
      p.innerText = str;
      return p;
    })
    contentElem.innerHTML = '';
    paragraphs.forEach(p => contentElem.appendChild(p));
  });

}

document.addEventListener('DOMContentLoaded', init);
