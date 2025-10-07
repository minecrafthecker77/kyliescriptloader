document.addEventListener('DOMContentLoaded', function () {
  const uploadForm = document.getElementById('upload-form');
  const scriptFile = document.getElementById('script-file');
  const uploadedScriptsList = document.getElementById('uploaded-scripts-list');

  const allowedExtensions = ['.jsl', '.asl', '.ssl', '.js', '.java'];

  // Function to load and display uploaded scripts
  function loadUploadedScripts() {
    uploadedScriptsList.innerHTML = ''; // Clear existing list
    let uploadedScripts = JSON.parse(localStorage.getItem('uploadedScripts')) || [];

    if (uploadedScripts.length === 0) {
      const li = document.createElement('li');
      li.textContent = 'No scripts uploaded yet.';
      uploadedScriptsList.appendChild(li);
    } else {
      uploadedScripts.forEach((script, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <span>${script.name} (${script.type})</span>
          <p>${script.description}</p>
          <div>
            <button class="like-script-btn" data-index="${index}">Like (${script.likes || 0})</button>
            <button class="delete-script-btn" data-index="${index}">Delete</button>
          </div>
        `;
        uploadedScriptsList.appendChild(li);
      });

      // Add event listeners for like buttons
      document.querySelectorAll('.like-script-btn').forEach(button => {
        button.addEventListener('click', function() {
          const indexToLike = parseInt(this.dataset.index);
          likeScript(indexToLike);
        });
      });

      // Add event listeners for delete buttons
      document.querySelectorAll('.delete-script-btn').forEach(button => {
        button.addEventListener('click', function() {
          const indexToDelete = parseInt(this.dataset.index);
          deleteScript(indexToDelete);
        });
      });
    }
  }

  // Function to like a script
  function likeScript(index) {
    let uploadedScripts = JSON.parse(localStorage.getItem('uploadedScripts')) || [];
    if (uploadedScripts[index]) {
      uploadedScripts[index].likes = (uploadedScripts[index].likes || 0) + 1;
      localStorage.setItem('uploadedScripts', JSON.stringify(uploadedScripts));
      showNotification('Script liked!', 'info');
      loadUploadedScripts(); // Reload the list to update like count
    }
  }

  // Function to delete a script
  function deleteScript(index) {
    let uploadedScripts = JSON.parse(localStorage.getItem('uploadedScripts')) || [];
    uploadedScripts.splice(index, 1); // Remove the script at the given index
    localStorage.setItem('uploadedScripts', JSON.stringify(uploadedScripts));
    showNotification('Script deleted successfully!', 'info');
    loadUploadedScripts(); // Reload the list
  }


  uploadForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (scriptFile.files.length === 0) {
      showNotification('Please select a file to upload.', 'error');
      return;
    }

    const file = scriptFile.files[0];
    const fileName = file.name;
    const fileExtension = '.' + fileName.split('.').pop();

    if (!allowedExtensions.includes(fileExtension)) {
      showNotification(`Invalid file type. Allowed types are: ${allowedExtensions.join(', ')}`, 'error');
      return;
    }

    const description = document.getElementById('script-description').value;

    // Simulate file upload
    let uploadedScripts = JSON.parse(localStorage.getItem('uploadedScripts')) || [];
    uploadedScripts.push({
      name: fileName,
      type: fileExtension,
      description: description,
      uploadedAt: new Date().toLocaleString(),
      likes: 0, // Initialize likes
      comments: [], // Initialize comments
    });
    localStorage.setItem('uploadedScripts', JSON.stringify(uploadedScripts));

    showNotification(`File "${fileName}" uploaded successfully!`, 'success');
    uploadForm.reset(); // Clear the form
    loadUploadedScripts(); // Reload the list of uploaded scripts
  });

  // Initial load of scripts
  loadUploadedScripts();
});