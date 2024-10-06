// Menangani insert data
document.getElementById('accountForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const imageInput = document.getElementById('image');

  // Validasi sederhana
  if (!username || !email || !imageInput.files.length) {
    alert('Please fill in all fields');
    return;
  }

  const imageUrl = URL.createObjectURL(imageInput.files[0]);

  insertData(username, email, imageUrl);

  // Reset form
  document.getElementById('accountForm').reset();
});

let accountData = [];

function insertData(username, email, imageUrl) {
  const tableBody = document.getElementById('accountTable').getElementsByTagName('tbody')[0];

  accountData.push({ username, email, imageUrl });

  const newRow = tableBody.insertRow();

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);


  cell1.innerHTML = accountData.length;
  cell2.innerHTML = username;
  cell3.innerHTML = email;


  const imgElement = document.createElement('img');
  imgElement.src = imageUrl;
  imgElement.alt = 'Account Image';
  imgElement.style.width = '50px'; 
  imgElement.style.height = '50px';
  cell4.appendChild(imgElement);
}


document.getElementById('deleteButton').addEventListener('click', function() {
  const tableBody = document.getElementById('accountTable').getElementsByTagName('tbody')[0];
  
  if (accountData.length > 0) {
    accountData.pop(); // Hapus data terakhir dari array
    tableBody.deleteRow(accountData.length); 
  } else {
    alert('No data to delete');
  }
});


document.getElementById('searchButton').addEventListener('click', function() {
  const username = prompt('Enter username to search:');
  
  if (username) {
    const account = accountData.find(acc => acc.username === username);
    if (account) {
      alert(`Found: Username: ${account.username}, Email: ${account.email}`);
    } else {
      alert('Username not found');
    }
  } else {
    alert('Please enter a username');
  }
});
